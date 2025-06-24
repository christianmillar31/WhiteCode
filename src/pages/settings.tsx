import React, { useEffect } from 'react';
import { useRouter } from 'next/router';
import { useSession } from 'next-auth/react';
import Sidebar from '@/components/ui/Sidebar';
import { Box, Flex, Heading, Text, Input, Button, Spinner } from '@chakra-ui/react';

export default function SettingsPage() {
  const { data: session, status } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (status === 'unauthenticated') {
      router.replace('/login');
    }
  }, [status, router]);

  if (status === 'loading') {
    return (
      <Flex minH="100vh" align="center" justify="center">
        <Spinner size="xl" />
      </Flex>
    );
  }

  if (!session) return null;

  return (
    <Flex minH="100vh" bg="gray.50">
      <Sidebar />
      <Box flex={1} p={10}>
        <Heading size="lg" mb={8}>Settings</Heading>
        <div className="bg-white rounded-lg shadow p-8 max-w-2xl">
          <div className="flex items-center mb-8 gap-6">
            <div className="rounded-full bg-blue-100 w-20 h-20 flex items-center justify-center text-3xl font-bold text-blue-600">JD</div>
            <div>
              <Text fontWeight="bold">John Doe</Text>
              <Text color="gray.500">john@example.com</Text>
            </div>
          </div>
          <form>
            <div className="flex flex-col gap-6">
              <div>
                <label className="block text-sm font-medium mb-1">Store</label>
                <Input placeholder="Boo Doe" />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Email notifications</label>
                <Input placeholder="philgo isnessword" />
              </div>
              <div className="flex items-center gap-2">
                <label className="text-sm font-medium mb-0">Decide to do to remember</label>
                <input type="checkbox" defaultChecked className="accent-blue-600 w-5 h-5" />
              </div>
              <div className="flex items-center gap-2">
                <label className="text-sm font-medium mb-0">Enable notifications</label>
                <input type="checkbox" defaultChecked className="accent-blue-600 w-5 h-5" />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Change Password</label>
                <Input placeholder="Old password" type="password" className="mb-2" />
                <Input placeholder="New password" type="password" />
              </div>
              <div className="flex justify-end">
                <Button colorScheme="blue" type="submit">Update Password</Button>
              </div>
            </div>
          </form>
        </div>
      </Box>
    </Flex>
  );
} 