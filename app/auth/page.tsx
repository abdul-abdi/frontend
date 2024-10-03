'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { auth } from "@/lib/firebase";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, AuthError } from "firebase/auth";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from 'react-hot-toast';

export default function AuthPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLogin, setIsLogin] = useState(true);
  const [error, setError] = useState('');
  const router = useRouter();

  const handleAuth = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    try {
      if (isLogin) {
        await signInWithEmailAndPassword(auth, email, password);
        toast.success('Successfully logged in!');
      } else {
        await createUserWithEmailAndPassword(auth, email, password);
        toast.success('Account created successfully!');
      }
      router.push('/dashboard');
    } catch (error) {
      const authError = error as AuthError;
      setError(authError.message);
      toast.error(authError.message);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-dark-bg to-blue-900 text-white p-8 flex items-center justify-center">
      <div className="bg-blue-800 bg-opacity-50 p-8 rounded-lg shadow-lg max-w-md w-full">
        <h1 className="text-4xl font-bold mb-6 text-center text-blue-300">
          {isLogin ? 'Welcome Back' : 'Join Our Community'}
        </h1>
        <form onSubmit={handleAuth} className="space-y-4">
          <Input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="bg-blue-700 bg-opacity-50 border-blue-500 text-white placeholder-blue-300"
          />
          <Input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="bg-blue-700 bg-opacity-50 border-blue-500 text-white placeholder-blue-300"
          />
          <Button type="submit" className="w-full bg-blue-500 hover:bg-blue-600 transition-colors duration-300">
            {isLogin ? 'Login' : 'Register'}
          </Button>
          {error && <p className="text-red-500 text-sm">{error}</p>}
        </form>
        <p className="text-center mt-4">
          {isLogin ? "Don't have an account? " : "Already have an account? "}
          <button
            type="button"
            onClick={() => setIsLogin(!isLogin)}
            className="text-blue-300 hover:underline focus:outline-none"
          >
            {isLogin ? 'Register' : 'Login'}
          </button>
        </p>
      </div>
    </div>
  );
}