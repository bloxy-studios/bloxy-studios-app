const { app, BrowserWindow, Menu, protocol, net } = require("electron");
const path = require("node:path");
const fs = require("node:fs");

const isDev = process.env.NODE_ENV === "development";
const appName = "Bloxy Studios";

// MIME type mapping for common file extensions
const mimeTypes = {
  ".html": "text/html",
  ".css": "text/css",
  ".js": "application/javascript",
  ".mjs": "application/javascript",
  ".json": "application/json",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".gif": "image/gif",
  ".svg": "image/svg+xml",
  ".ico": "image/x-icon",
  ".woff": "font/woff",
  ".woff2": "font/woff2",
  ".ttf": "font/ttf",
  ".eot": "application/vnd.ms-fontobject",
  ".map": "application/json",
};

app.setName(appName);

// Register custom protocol for serving static files
protocol.registerSchemesAsPrivileged([
  {
    scheme: "app",
    privileges: {
      standard: true,
      secure: true,
      supportFetchAPI: true,
    },
  },
]);

function createMenu() {
  const template = [
    {
      label: appName,
      submenu: [
        { role: "about" },
        { type: "separator" },
        { role: "services" },
        { type: "separator" },
        { role: "hide" },
        { role: "hideOthers" },
        { role: "unhide" },
        { type: "separator" },
        { role: "quit" },
      ],
    },
    {
      label: "File",
      submenu: [{ role: "close" }],
    },
    {
      label: "Edit",
      submenu: [
        { role: "undo" },
        { role: "redo" },
        { type: "separator" },
        { role: "cut" },
        { role: "copy" },
        { role: "paste" },
        { role: "selectAll" },
      ],
    },
    {
      label: "View",
      submenu: [
        { role: "reload" },
        { role: "forceReload" },
        { role: "toggleDevTools" },
        { type: "separator" },
        { role: "resetZoom" },
        { role: "zoomIn" },
        { role: "zoomOut" },
        { type: "separator" },
        { role: "togglefullscreen" },
      ],
    },
    {
      label: "Window",
      submenu: [{ role: "minimize" }, { role: "zoom" }],
    },
  ];

  const menu = Menu.buildFromTemplate(template);
  Menu.setApplicationMenu(menu);
}

function createWindow() {
  const mainWindow = new BrowserWindow({
    title: appName,
    width: 1200,
    height: 800,
    minWidth: 900,
    minHeight: 600,
    titleBarStyle: "hiddenInset",
    trafficLightPosition: { x: 20, y: 20 },
    backgroundColor: "#09090b",
    show: false, // Don't show until ready
    webPreferences: {
      preload: path.join(__dirname, "preload.js"),
      contextIsolation: true,
      nodeIntegration: false,
      sandbox: true,
    },
  });

  // Show window only when content is ready to avoid white flash
  mainWindow.once("ready-to-show", () => {
    mainWindow.show();
  });

  if (isDev) {
    mainWindow.loadURL("http://localhost:3000");
    mainWindow.webContents.openDevTools();
  } else {
    // Use custom protocol in production
    mainWindow.loadURL("app://./index.html");
  }
}

app.whenReady().then(() => {
  // Register custom protocol handler for production
  if (!isDev) {
    protocol.handle("app", (request) => {
      const url = new URL(request.url);
      let filePath = url.pathname;

      // Handle root path
      if (filePath === "/" || filePath === "") {
        filePath = "/index.html";
      }

      // Resolve the file path relative to the out directory
      const outDir = path.join(__dirname, "../out");
      const fullPath = path.join(outDir, filePath);

      // Security: ensure the path is within the out directory
      const normalizedPath = path.normalize(fullPath);
      if (!normalizedPath.startsWith(outDir)) {
        return new Response("Not found", { status: 404 });
      }

      // Get MIME type based on file extension
      const ext = path.extname(normalizedPath).toLowerCase();
      const mimeType = mimeTypes[ext] || "application/octet-stream";

      // Read file and return with proper Content-Type
      try {
        const fileContent = fs.readFileSync(normalizedPath);
        return new Response(fileContent, {
          status: 200,
          headers: {
            "Content-Type": mimeType,
          },
        });
      } catch (err) {
        return new Response("Not found", { status: 404 });
      }
    });
  }

  createMenu();
  createWindow();

  app.on("activate", () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow();
    }
  });
});

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
  }
});
