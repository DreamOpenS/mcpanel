import Head from 'next/head';

export default function Dashboard() {
  return (
    <>
      <Head>
        <title>Dashboard – HUMK Nexus</title>
      </Head>
      <main className="min-h-screen bg-humk-surface text-white px-6 py-10">
        <div className="mx-auto max-w-7xl">
          <div className="rounded-3xl border border-slate-800 bg-slate-950 p-8 shadow-2xl">
            <div className="flex items-center justify-between gap-6">
              <div>
                <p className="text-sm uppercase tracking-[0.3em] text-humk-accent">Fleet Overview</p>
                <h1 className="mt-4 text-4xl font-semibold">Your Minecraft servers</h1>
              </div>
              <button className="rounded-2xl bg-humk-primary px-5 py-3 text-sm font-semibold transition hover:bg-indigo-500">
                New server
              </button>
            </div>

            <div className="mt-10 grid gap-6 lg:grid-cols-3">
              <div className="rounded-3xl border border-slate-800 bg-slate-900 p-6">
                <p className="text-sm text-slate-400">Active servers</p>
                <p className="mt-4 text-4xl font-semibold">0</p>
              </div>
              <div className="rounded-3xl border border-slate-800 bg-slate-900 p-6">
                <p className="text-sm text-slate-400">Nodes online</p>
                <p className="mt-4 text-4xl font-semibold">0</p>
              </div>
              <div className="rounded-3xl border border-slate-800 bg-slate-900 p-6">
                <p className="text-sm text-slate-400">Players online</p>
                <p className="mt-4 text-4xl font-semibold">0</p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
