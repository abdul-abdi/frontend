'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { auth } from "@/lib/firebase";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, AuthError } from "firebase/auth";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export function TestFirebase() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const router = useRouter();

  const handleRegister = async () => {
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      setMessage(`User registered: ${userCredential.user.email}`);
      router.push('/dashboard');
    } catch (error) {
      const authError = error as AuthError;
      console.error("Registration error:", authError);
      setMessage(`Registration error: ${authError.code} - ${authError.message}`);
    }
  };

  const handleLogin = async () => {
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      setMessage(`User logged in: ${userCredential.user.email}`);
      router.push('/dashboard');
    } catch (error) {
      const authError = error as AuthError;
      console.error("Login error:", authError);
      setMessage(`Login error: ${authError.code} - ${authError.message}`);
    }
  };

  const handleLogout = async () => {
    try {
      await signOut(auth);
      setMessage('User logged out');
      router.push('/');
    } catch (error) {
      const authError = error as AuthError;
      console.error("Logout error:", authError);
      setMessage(`Logout error: ${authError.code} - ${authError.message}`);
    }
  };

  return (
    <div className="space-y-4">
      <Input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <Input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <div className="space-x-2">
        <Button onClick={handleRegister}>Register</Button>
        <Button onClick={handleLogin}>Login</Button>
        <Button onClick={handleLogout}>Logout</Button>
      </div>
      {message && <p className="mt-4 text-sm">{message}</p>}
    </div>
  );
}