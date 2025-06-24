import type { AppProps } from 'next/app';
import { SessionProvider } from 'next-auth/react';
import '@/styles/globals.css';
import Navbar from '@/components/ui/Navbar';
import { Provider as ReduxProvider } from 'react-redux';
import { store } from '@/lib/store';
import { ChakraProvider } from '@chakra-ui/react';
import { system } from '@/theme';
import Head from 'next/head';

export default function App({ Component, pageProps: { session, ...pageProps } }: AppProps) {
  return (
    <>
      <Head>
        <title>White Code Web</title>
        <meta name="description" content="Turn plain-English feature requests into production-ready React web apps." />
        <meta property="og:title" content="White Code Web" />
        <meta property="og:description" content="Turn plain-English feature requests into production-ready React web apps." />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="/og-image.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="White Code Web" />
        <meta name="twitter:description" content="Turn plain-English feature requests into production-ready React web apps." />
        <meta name="twitter:image" content="/og-image.png" />
        <link rel="preconnect" href="https://fonts.googleapis.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
        <link rel="dns-prefetch" href="https://fonts.gstatic.com" />
        <link rel="preconnect" href="https://vercel.live" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://vercel.live" />
      </Head>
      <SessionProvider session={session}>
        <ReduxProvider store={store}>
          <ChakraProvider value={system}>
            <Navbar />
            <Component {...pageProps} />
          </ChakraProvider>
        </ReduxProvider>
      </SessionProvider>
    </>
  );
} 