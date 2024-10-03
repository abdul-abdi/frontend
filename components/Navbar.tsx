'use client';

import Link from 'next/link';
import { Button } from "@/components/ui/button";
import { useAuth } from '@/hooks/useAuth';

export function Navbar() {
  const { user, handleLogout, error } = useAuth();

  return (
    <nav className="bg-blue-900 bg-opacity-50 text-blue-100 p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-xl font-bold text-blue-300">AI Ocean of Learning</Link>
        <div className="space-x-4">
          {user ? (
            <>
              <Button asChild variant="ghost" className="text-blue-200 hover:text-blue-100 hover:bg-blue-800">
                <Link href="/dashboard">Dashboard</Link>
              </Button>
              <Button onClick={handleLogout} variant="ghost" className="text-blue-200 hover:text-blue-100 hover:bg-blue-800">Logout</Button>
            </>
          ) : (
            <Button asChild variant="ghost" className="text-blue-200 hover:text-blue-100 hover:bg-blue-800">
              <Link href="/auth">Login / Register</Link>
            </Button>
          )}
        </div>
      </div>
      {error && <div className="text-red-500 text-center mt-2">{error}</div>}
    </nav>
  );
}