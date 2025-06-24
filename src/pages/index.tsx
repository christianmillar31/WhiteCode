import React from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';
import Image from 'next/image';
import Button from '@/components/ui/Button';
import Card from '@/components/ui/Card';
import Input from '@/components/ui/Input';

const translations = {
  en: {
    title: 'Welcome to White Code Web',
    description: 'Turn plain-English feature requests into production-ready React web apps.',
    switch: 'Español',
  },
  es: {
    title: 'Bienvenido a White Code Web',
    description: 'Convierte solicitudes en inglés sencillo en aplicaciones web React listas para producción.',
    switch: 'English',
  },
};

export default function HomePage() {
  const { locale, push, asPath, locales } = useRouter();
  const t = translations[locale as 'en' | 'es'] || translations.en;

  const switchLocale = () => {
    const nextLocale = locale === 'en' ? 'es' : 'en';
    push(asPath, asPath, { locale: nextLocale });
  };

  return (
    <>
      <Head>
        <title>{t.title}</title>
        <meta name="description" content={t.description} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <main className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800">
        {/* Header */}
        <header className="border-b bg-white/80 backdrop-blur-sm dark:bg-gray-900/80">
          <div className="container mx-auto px-4 py-4">
            <nav className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <div className="h-8 w-8 rounded-lg bg-primary-600 flex items-center justify-center">
                  <span className="text-white font-bold text-sm">WC</span>
                </div>
                <span className="text-xl font-bold">White Code Web</span>
              </div>
              <div className="flex items-center space-x-4">
                <Button variant="ghost">Documentation</Button>
                <Button variant="ghost">Examples</Button>
                <Button>Get Started</Button>
              </div>
            </nav>
          </div>
        </header>

        {/* Hero Section */}
        <section className="container mx-auto px-4 py-20">
          <div className="text-center max-w-4xl mx-auto">
            <Image src="/logo.png" alt="White Code Web logo" width={120} height={120} priority className="mb-6" />
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
              {t.title}
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
              {t.description}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="text-lg px-8 py-4">
                Start Building
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8 py-4">
                View Examples
              </Button>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="container mx-auto px-4 py-20">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Everything You Need to Build Modern Web Apps
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              From authentication to deployment, White Code Web provides all the tools and patterns you need.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card
              title="Next.js + TypeScript"
              description="Modern React framework with full TypeScript support and strict typing."
            >
              <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
                <li>• File-based routing</li>
                <li>• Server-side rendering</li>
                <li>• API routes</li>
                <li>• Image optimization</li>
              </ul>
            </Card>
            
            <Card
              title="Authentication Ready"
              description="NextAuth.js integration with multiple providers and secure sessions."
            >
              <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
                <li>• Email/password</li>
                <li>• Google, GitHub OAuth</li>
                <li>• JWT tokens</li>
                <li>• Role-based access</li>
              </ul>
            </Card>
            
            <Card
              title="Testing Suite"
              description="Comprehensive testing setup with Jest, React Testing Library, and Playwright."
            >
              <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
                <li>• Unit tests</li>
                <li>• Integration tests</li>
                <li>• E2E testing</li>
                <li>• Coverage reports</li>
              </ul>
            </Card>
            
            <Card
              title="Tailwind CSS"
              description="Utility-first CSS framework with custom design system and dark mode."
            >
              <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
                <li>• Responsive design</li>
                <li>• Dark mode support</li>
                <li>• Custom components</li>
                <li>• Design tokens</li>
              </ul>
            </Card>
            
            <Card
              title="API Integration"
              description="REST and GraphQL patterns with axios, fetch, and Apollo Client."
            >
              <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
                <li>• REST API patterns</li>
                <li>• GraphQL support</li>
                <li>• Error handling</li>
                <li>• Type-safe requests</li>
              </ul>
            </Card>
            
            <Card
              title="Deployment Ready"
              description="Optimized for Vercel and Netlify with CI/CD pipelines and performance monitoring."
            >
              <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
                <li>• Vercel deployment</li>
                <li>• Netlify support</li>
                <li>• GitHub Actions</li>
                <li>• Performance optimization</li>
              </ul>
            </Card>
          </div>
        </section>

        {/* CTA Section */}
        <section className="container mx-auto px-4 py-20">
          <Card className="text-center max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Ready to Build Something Amazing?
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
              Describe your app idea in plain English and let White Code Web handle the rest.
            </p>
            <div className="space-y-4">
              <Input
                name="feature-request"
                placeholder="Describe your app features here..."
                type="textarea"
                className="min-h-[100px]"
              />
              <Button size="lg" className="w-full">
                Generate My App
              </Button>
            </div>
          </Card>
        </section>

        {/* Footer */}
        <footer className="border-t bg-white dark:bg-gray-900">
          <div className="container mx-auto px-4 py-8">
            <div className="text-center text-gray-600 dark:text-gray-300">
              <p>&copy; 2024 White Code Web. Built with Next.js and TypeScript.</p>
            </div>
          </div>
        </footer>
      </main>
    </>
  );
} 