import React, { useEffect } from 'react';
import { useSession, signIn } from 'next-auth/react';
import { useRouter } from 'next/router';
import { Box, Flex, Heading, Text, Input, Spinner } from '@chakra-ui/react';
import Button from '@/components/ui/Button';
import { FcGoogle } from 'react-icons/fc';

export default function LoginPage() {
  const { data: session, status } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (status === 'authenticated') {
      router.replace('/dashboard');
    }
  }, [status, router]);

  if (status === 'loading') {
    return (
      <Flex minH="100vh" align="center" justify="center">
        <Spinner size="xl" />
      </Flex>
    );
  }

  if (session) return null;

  return (
    <Flex minH="100vh" bg="gray.50" align="center" justify="center">
      <Box bg="white" p={10} rounded="xl" boxShadow="lg" w={{ base: 'full', sm: '400px' }}>
        <div className="flex flex-col items-center gap-6">
          <Heading size="lg">Log in to your account</Heading>
        </div>
        <form>
          <div className="flex flex-col gap-4 mt-8">
            <div>
              <label className="block text-sm font-medium mb-1">Email</label>
              <Input type="email" placeholder="Enter your email" autoComplete="email" />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Password</label>
              <Input type="password" placeholder="••••••••" autoComplete="current-password" />
            </div>
            <Button variant="primary" size="lg" type="submit" className="w-full">
              Log In
            </Button>
            <div className="flex items-center gap-2 text-gray-400 text-xs my-2">
              <span className="flex-1 border-t border-gray-200"></span>
              <span>or</span>
              <span className="flex-1 border-t border-gray-200"></span>
            </div>
            <Button icon={<FcGoogle />} variant="outline" type="button" onClick={() => signIn('google')} iconSpacing={3} className="w-full">
              Sign in with Google
            </Button>
          </div>
        </form>
        <Box mt={8} textAlign="center">
          <img src="/login-illustration.svg" alt="Login Illustration" className="mx-auto w-40 h-40" />
        </Box>
      </Box>
    </Flex>
  );
} 