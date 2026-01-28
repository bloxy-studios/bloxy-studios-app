const { contextBridge, ipcRenderer } = require("electron");

contextBridge.exposeInMainWorld("electronAPI", {
  versions: {
    node: () => process.versions.node,
    chrome: () => process.versions.chrome,
    electron: () => process.versions.electron,
  },
  // Add IPC methods here as needed
  // Example: send: (channel, data) => ipcRenderer.send(channel, data)
});
