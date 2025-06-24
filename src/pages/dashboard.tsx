import React, { useEffect } from 'react';
import { useRouter } from 'next/router';
import { useSession } from 'next-auth/react';
import Sidebar from '@/components/ui/Sidebar';
import { Box, Flex, Heading, Text, Spinner } from '@chakra-ui/react';
import { useGetUserQuery } from '@/services/userApi';

const stats = [
  { label: 'Ling house', value: 5 },
  { label: 'Progame fares', value: 12 },
  { label: 'Dothingses', value: 8 },
  { label: 'Won Gain.', value: 25 },
];

export default function DashboardPage() {
  const { data: session, status } = useSession();
  const router = useRouter();
  const { data: user, isLoading, isError } = useGetUserQuery();

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
        <Heading size="lg" mb={8}>Dashboard</Heading>
        {isLoading && <Text>Loading user...</Text>}
        {isError && <Text color="red.500">Failed to load user data.</Text>}
        {user && (
          <Box mb={6} p={4} bg="white" rounded="md" boxShadow="sm">
            <Text fontWeight="bold">Welcome, {user.name} ({user.email})</Text>
          </Box>
        )}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          {stats.map((stat) => (
            <div key={stat.label} className="bg-white rounded-lg shadow p-6 flex flex-col items-center">
              <span className="text-gray-500 text-sm mb-1">{stat.label}</span>
              <span className="text-2xl font-bold">{stat.value}</span>
            </div>
          ))}
        </div>
        <Box bg="white" rounded="lg" p={6} boxShadow="md" mb={8}>
          <Text fontWeight="bold" mb={2}>Tooke Statistics</Text>
          <Box h="180px" bg="gray.100" rounded="md" display="flex" alignItems="center" justifyContent="center">
            <Text color="gray.400">[Chart]</Text>
          </Box>
        </Box>
        <Box bg="white" rounded="lg" p={6} boxShadow="md">
          <Text fontWeight="bold" mb={4}>Activity</Text>
          <ul className="space-y-4">
            <li><Text as="span"><b>Xoo - Jirk Seath</b> <span className="text-gray-500">commented a project</span> <span className="text-gray-400">5h</span></Text></li>
            <li><Text as="span"><b>Jane Gade</b> <span className="text-gray-500">managed a name awesome</span> <span className="text-gray-400">16m</span></Text></li>
            <li><Text as="span"><b>Steve Gottin</b> <span className="text-gray-500">managed a game awesome</span> <span className="text-gray-400">16m</span></Text></li>
          </ul>
        </Box>
      </Box>
    </Flex>
  );
} 