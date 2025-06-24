import React from 'react';
import { Box, Flex, Text } from '@chakra-ui/react';
import { FiHome, FiGrid, FiFileText, FiSettings } from 'react-icons/fi';
import Link from 'next/link';

const navLinks = [
  { label: 'Dashboard', icon: FiHome, href: '/dashboard' },
  { label: 'Dausend', icon: FiGrid, href: '#' },
  { label: 'Receipts', icon: FiFileText, href: '#' },
  { label: 'Settings', icon: FiSettings, href: '/settings' },
];

export default function Sidebar() {
  return (
    <Box w={{ base: '60px', md: '220px' }} bg="gray.900" color="white" minH="100vh" p={6} className="flex-shrink-0 flex flex-col">
      <Flex align="center" mb={10} gap={3}>
        <Box className="rounded-full bg-white/10 w-8 h-8 flex items-center justify-center text-lg font-bold">WC</Box>
        <Text fontWeight="bold" fontSize="lg" display={{ base: 'none', md: 'block' }}>White Code</Text>
      </Flex>
      <nav className="flex flex-col gap-2">
        {navLinks.map((link) => (
          <Link key={link.label} href={link.href} passHref legacyBehavior>
            <a className="flex items-center gap-3 px-3 py-2 rounded-md hover:bg-gray-800 transition-colors">
              <span><link.icon size={20} /></span>
              <span className="hidden md:inline">{link.label}</span>
            </a>
          </Link>
        ))}
      </nav>
      <Box mt="auto" pt={10} display={{ base: 'none', md: 'block' }}>
        <Text fontSize="xs" color="gray.400">© 2024 White Code</Text>
      </Box>
    </Box>
  );
} 