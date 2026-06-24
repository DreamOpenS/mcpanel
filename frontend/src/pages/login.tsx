import type React from 'react';
import Head from 'next/head';
import { useState } from 'react';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setMessage('Signing in...');

    const body = new URLSearchParams();
    body.append('username', email);
    body.append('password', password);

    const response = await fetch('/api/v1/auth/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body,
    });

    if (response.ok) {
      const data = await response.json();
      localStorage.setItem('humk_token', data.access_token);
      setMessage('Login successful');
    } else {
      const error = await response.json();
      setMessage(error.detail || 'Login failed');
    }
  };

  return (
    <>
      <Head>
        <title>Login – HUMK Nexus</title>
      </Head>
      <main className="min-h-screen bg-humk-surface text-white flex items-center justify-center px-6">
        <div className="w-full max-w-md rounded-3xl border border-slate-800 bg-slate-950 p-10 shadow-2xl">
          <h1 className="text-3xl font-semibold">HUMK Nexus</h1>
          <p className="mt-2 text-slate-400">Sign in to manage your Minecraft fleet.</p>

          <form onSubmit={handleSubmit} className="mt-8 space-y-6">
            <div>
              <label className="block text-sm font-medium text-slate-300">Email</label>
              <input
                type="email"
                required
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                className="mt-2 w-full rounded-2xl border border-slate-700 bg-slate-900 px-4 py-3 text-white outline-none focus:border-humk-primary"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-300">Password</label>
              <input
                type="password"
                required
                value={password}
                onChange={(event) => setPassword(event.target.value)}
                className="mt-2 w-full rounded-2xl border border-slate-700 bg-slate-900 px-4 py-3 text-white outline-none focus:border-humk-primary"
              />
            </div>

            <button
              type="submit"
              className="w-full rounded-2xl bg-humk-primary px-4 py-3 text-base font-semibold text-white transition hover:bg-indigo-500"
            >
              Sign in
            </button>
          </form>

          {message && <p className="mt-4 text-sm text-slate-300">{message}</p>}
        </div>
      </main>
    </>
  );
}
