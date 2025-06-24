import React from 'react';
import { Box } from '@chakra-ui/react';
import Link from 'next/link';
import { useSession, signOut } from 'next-auth/react';

export default function Navbar() {
  const { data: session, status } = useSession();
  const isAuthenticated = !!session;

  return (
    <Box as="nav" className="border-b bg-white/80 backdrop-blur-sm">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="h-8 w-8 rounded-lg bg-blue-600 flex items-center justify-center">
            <span className="text-white font-bold text-sm">WC</span>
          </div>
          <span className="text-xl font-bold">White Code</span>
        </div>
        <div className="flex items-center gap-4">
          <Link href="/" className="text-gray-700 hover:text-blue-600">Home</Link>
          {isAuthenticated && (
            <>
              <Link href="/dashboard" className="text-gray-700 hover:text-blue-600">Dashboard</Link>
              <Link href="/settings" className="text-gray-700 hover:text-blue-600">Settings</Link>
              <button onClick={() => signOut()} className="text-gray-700 hover:text-blue-600">Logout</button>
            </>
          )}
          {!isAuthenticated && status !== 'loading' && (
            <Link href="/login" className="text-gray-700 hover:text-blue-600">Login</Link>
          )}
        </div>
      </div>
    </Box>
  );
} 