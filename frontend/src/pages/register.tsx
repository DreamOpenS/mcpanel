import type React from 'react';
import Head from 'next/head';
import { useState } from 'react';

export default function Register() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setMessage('Creating account...');

    const response = await fetch('/api/v1/auth/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password }),
    });

    if (response.ok) {
      setMessage('Registration successful. Please log in.');
      setEmail('');
      setPassword('');
    } else {
      const error = await response.json();
      setMessage(error.detail || 'Registration failed');
    }
  };

  return (
    <>
      <Head>
        <title>Register – HUMK Nexus</title>
      </Head>
      <main className="min-h-screen bg-humk-surface text-white flex items-center justify-center px-6">
        <div className="w-full max-w-md rounded-3xl border border-slate-800 bg-slate-950 p-10 shadow-2xl">
          <h1 className="text-3xl font-semibold">Create your account</h1>
          <p className="mt-2 text-slate-400">Register to manage servers and nodes.</p>

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
                minLength={8}
                value={password}
                onChange={(event) => setPassword(event.target.value)}
                className="mt-2 w-full rounded-2xl border border-slate-700 bg-slate-900 px-4 py-3 text-white outline-none focus:border-humk-primary"
              />
            </div>

            <button
              type="submit"
              className="w-full rounded-2xl bg-humk-primary px-4 py-3 text-base font-semibold text-white transition hover:bg-indigo-500"
            >
              Register
            </button>
          </form>

          {message && <p className="mt-4 text-sm text-slate-300">{message}</p>}
        </div>
      </main>
    </>
  );
}
