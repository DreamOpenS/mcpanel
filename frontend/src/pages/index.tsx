import Head from 'next/head';

export default function Home() {
  return (
    <>
      <Head>
        <title>HUMK Nexus</title>
        <meta name="description" content="HUMK Nexus Minecraft control panel" />
      </Head>
      <main className="min-h-screen bg-humk-surface text-white">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <h1 className="text-5xl font-semibold text-white">HUMK Nexus</h1>
          <p className="mt-4 max-w-2xl text-lg text-slate-300">
            Enterprise-grade Minecraft fleet management control panel.
          </p>
          <div className="mt-10 grid gap-6 sm:grid-cols-2">
            <div className="rounded-3xl border border-slate-800 bg-slate-950 p-8 shadow-lg">
              <h2 className="text-2xl font-semibold text-white">Realtime control</h2>
              <p className="mt-3 text-slate-300">
                Live console, TPS, CPU and memory telemetry for every server.
              </p>
            </div>
            <div className="rounded-3xl border border-slate-800 bg-slate-950 p-8 shadow-lg">
              <h2 className="text-2xl font-semibold text-white">Multi-node fleet</h2>
              <p className="mt-3 text-slate-300">
                Unlimited node support with health checks, failover, and orchestration.
              </p>
            </div>
          </div>
          <div className="mt-12 flex flex-col gap-4 sm:flex-row">
            <a
              href="/login"
              className="inline-flex items-center justify-center rounded-2xl bg-humk-primary px-6 py-4 text-base font-semibold text-white shadow-lg transition hover:bg-indigo-500"
            >
              Login
            </a>
            <a
              href="/register"
              className="inline-flex items-center justify-center rounded-2xl border border-slate-700 bg-slate-900 px-6 py-4 text-base font-semibold text-white transition hover:border-humk-primary"
            >
              Register
            </a>
          </div>
        </div>
      </main>
    </>
  );
}
