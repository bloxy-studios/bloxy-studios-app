export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-br from-zinc-900 to-zinc-950 p-8">
      <main className="flex flex-col items-center gap-8 text-center">
        <img
          src="/logo.png"
          alt="Bloxy Studios"
          className="h-24 w-24 rounded-2xl"
        />

        <div className="flex flex-col gap-3">
          <h1 className="text-4xl font-bold tracking-tight text-white">
            Bloxy Studios
          </h1>
          <p className="max-w-md text-lg text-zinc-400">
            Welcome to Bloxy Studios. Your creative desktop experience starts
            here.
          </p>
        </div>

        <div className="mt-4 flex flex-col gap-3 sm:flex-row">
          <button
            type="button"
            className="rounded-full bg-indigo-600 px-6 py-3 font-medium text-white transition-colors hover:bg-indigo-500"
          >
            Get Started
          </button>
          <button
            type="button"
            className="rounded-full border border-zinc-700 px-6 py-3 font-medium text-zinc-300 transition-colors hover:border-zinc-600 hover:bg-zinc-800"
          >
            Learn More
          </button>
        </div>

        <p className="mt-8 text-sm text-zinc-500">Version 0.1.0</p>
      </main>
    </div>
  );
}
