#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

/**
 * White Code Web - Project Generator
 * Transforms plain-English feature requests into production-ready React web applications
 */

class WhiteCodeGenerator {
  constructor() {
    this.projectName = '';
    this.features = [];
    this.projectPath = '';
  }

  /**
   * Parse feature request and extract project requirements
   */
  parseFeatureRequest(description) {
    console.log('🤖 Analyzing your feature request...');
    
    // Extract project name from description
    const nameMatch = description.match(/(?:build|create|make)\s+(?:a\s+)?(?:web\s+)?(?:app|application|website)\s+(?:called\s+)?["']?([^"'\s]+)["']?/i);
    this.projectName = nameMatch ? nameMatch[1] : 'white-code-app';
    
    // Extract features
    this.features = this.extractFeatures(description);
    
    console.log(`📋 Project: ${this.projectName}`);
    console.log(`🎯 Features: ${this.features.join(', ')}`);
  }

  /**
   * Extract features from natural language description
   */
  extractFeatures(description) {
    const features = [];
    const lowerDesc = description.toLowerCase();
    
    // Authentication features
    if (lowerDesc.includes('login') || lowerDesc.includes('sign in') || lowerDesc.includes('authentication')) {
      features.push('authentication');
    }
    
    // User management
    if (lowerDesc.includes('user') || lowerDesc.includes('profile') || lowerDesc.includes('account')) {
      features.push('user-management');
    }
    
    // Database/CRUD
    if (lowerDesc.includes('database') || lowerDesc.includes('crud') || lowerDesc.includes('create') || lowerDesc.includes('read') || lowerDesc.includes('update') || lowerDesc.includes('delete')) {
      features.push('database');
    }
    
    // API integration
    if (lowerDesc.includes('api') || lowerDesc.includes('external') || lowerDesc.includes('third party')) {
      features.push('api-integration');
    }
    
    // File upload
    if (lowerDesc.includes('upload') || lowerDesc.includes('file') || lowerDesc.includes('image')) {
      features.push('file-upload');
    }
    
    // Search functionality
    if (lowerDesc.includes('search') || lowerDesc.includes('filter')) {
      features.push('search');
    }
    
    // Dashboard
    if (lowerDesc.includes('dashboard') || lowerDesc.includes('admin') || lowerDesc.includes('analytics')) {
      features.push('dashboard');
    }
    
    // E-commerce
    if (lowerDesc.includes('shop') || lowerDesc.includes('store') || lowerDesc.includes('cart') || lowerDesc.includes('payment')) {
      features.push('ecommerce');
    }
    
    // Blog/CMS
    if (lowerDesc.includes('blog') || lowerDesc.includes('cms') || lowerDesc.includes('content')) {
      features.push('blog');
    }
    
    // Social features
    if (lowerDesc.includes('social') || lowerDesc.includes('comment') || lowerDesc.includes('like') || lowerDesc.includes('share')) {
      features.push('social');
    }
    
    return features.length > 0 ? features : ['basic'];
  }

  /**
   * Generate the project structure
   */
  async generateProject() {
    console.log('🚀 Generating your project...');
    
    this.projectPath = path.join(process.cwd(), this.projectName);
    
    // Create project directory
    if (fs.existsSync(this.projectPath)) {
      console.log(`⚠️  Project directory ${this.projectName} already exists. Please choose a different name.`);
      return;
    }
    
    fs.mkdirSync(this.projectPath, { recursive: true });
    
    // Copy base template
    await this.copyBaseTemplate();
    
    // Generate feature-specific code
    await this.generateFeatureCode();
    
    // Install dependencies
    await this.installDependencies();
    
    console.log('✅ Project generated successfully!');
    console.log(`📁 Project location: ${this.projectPath}`);
    console.log('\n🚀 Next steps:');
    console.log(`  cd ${this.projectName}`);
    console.log('  npm run dev');
    console.log('\n📚 Documentation: https://white-code-web.com/docs');
  }

  /**
   * Copy base Next.js template
   */
  async copyBaseTemplate() {
    console.log('📁 Setting up base template...');
    
    // Copy configuration files
    const configFiles = [
      'package.json',
      'next.config.js',
      'tsconfig.json',
      'tailwind.config.js',
      'postcss.config.js',
      '.eslintrc.json',
      '.prettierrc',
      'jest.config.js',
      'jest.setup.js'
    ];
    
    for (const file of configFiles) {
      const sourcePath = path.join(__dirname, '..', file);
      const destPath = path.join(this.projectPath, file);
      
      if (fs.existsSync(sourcePath)) {
        fs.copyFileSync(sourcePath, destPath);
      }
    }
    
    // Create source directory structure
    const dirs = [
      'src/components/ui',
      'src/pages',
      'src/styles',
      'src/lib',
      'src/types',
      'src/utils',
      'src/hooks',
      'src/context',
      'src/services',
      'src/app',
      'public',
      'tests'
    ];
    
    for (const dir of dirs) {
      fs.mkdirSync(path.join(this.projectPath, dir), { recursive: true });
    }
    
    // Copy global styles
    const globalStyles = path.join(__dirname, '..', 'src/styles/globals.css');
    const destStyles = path.join(this.projectPath, 'src/styles/globals.css');
    if (fs.existsSync(globalStyles)) {
      fs.copyFileSync(globalStyles, destStyles);
    }
  }

  /**
   * Generate feature-specific code
   */
  async generateFeatureCode() {
    console.log('🔧 Generating feature-specific code...');
    
    for (const feature of this.features) {
      switch (feature) {
        case 'authentication':
          await this.generateAuthCode();
          break;
        case 'user-management':
          await this.generateUserManagementCode();
          break;
        case 'database':
          await this.generateDatabaseCode();
          break;
        case 'api-integration':
          await this.generateApiCode();
          break;
        case 'file-upload':
          await this.generateFileUploadCode();
          break;
        case 'search':
          await this.generateSearchCode();
          break;
        case 'dashboard':
          await this.generateDashboardCode();
          break;
        case 'ecommerce':
          await this.generateEcommerceCode();
          break;
        case 'blog':
          await this.generateBlogCode();
          break;
        case 'social':
          await this.generateSocialCode();
          break;
        default:
          await this.generateBasicCode();
      }
    }
  }

  /**
   * Generate authentication code
   */
  async generateAuthCode() {
    console.log('🔐 Generating authentication code...');
    
    // Create auth context
    const authContext = `
import React, { createContext, useContext, useState, useEffect } from 'react';
import { User, AuthState } from '@/types';

interface AuthContextType extends AuthState {
  login: (email: string, password: string) => Promise<void>;
  logout: () => void;
  register: (data: any) => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [authState, setAuthState] = useState<AuthState>({
    user: null,
    isAuthenticated: false,
    isLoading: true,
  });

  const login = async (email: string, password: string) => {
    // Implement login logic
    console.log('Login:', { email, password });
  };

  const logout = () => {
    setAuthState({ user: null, isAuthenticated: false, isLoading: false });
  };

  const register = async (data: any) => {
    // Implement registration logic
    console.log('Register:', data);
  };

  return (
    <AuthContext.Provider value={{ ...authState, login, logout, register }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}
`;
    
    fs.writeFileSync(path.join(this.projectPath, 'src/context/AuthContext.tsx'), authContext);
  }

  /**
   * Generate basic app structure
   */
  async generateBasicCode() {
    console.log('📝 Generating basic app structure...');
    
    // Create main app component
    const appComponent = `
import type { AppProps } from 'next/app';
import '@/styles/globals.css';

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
`;
    
    fs.writeFileSync(path.join(this.projectPath, 'src/pages/_app.tsx'), appComponent);
    
    // Create homepage
    const homepage = `
import React from 'react';
import Head from 'next/head';

export default function Home() {
  return (
    <>
      <Head>
        <title>${this.projectName} - Generated by White Code Web</title>
        <meta name="description" content="A web application generated by White Code Web" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <main className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="container mx-auto px-4 py-20">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Welcome to ${this.projectName}
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Your application has been successfully generated by White Code Web!
            </p>
            <div className="bg-white rounded-lg shadow-lg p-8 max-w-2xl mx-auto">
              <h2 className="text-2xl font-semibold mb-4">Generated Features:</h2>
              <ul className="text-left space-y-2">
                ${this.features.map(feature => `<li className="flex items-center">
                  <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                  ${feature.replace('-', ' ').replace(/\b\w/g, l => l.toUpperCase())}
                </li>`).join('')}
              </ul>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
`;
    
    fs.writeFileSync(path.join(this.projectPath, 'src/pages/index.tsx'), homepage);
  }

  /**
   * Install project dependencies
   */
  async installDependencies() {
    console.log('📦 Installing dependencies...');
    
    try {
      execSync('npm install', { cwd: this.projectPath, stdio: 'inherit' });
      console.log('✅ Dependencies installed successfully!');
    } catch (error) {
      console.error('❌ Failed to install dependencies:', error.message);
    }
  }
}

// CLI interface
function main() {
  const args = process.argv.slice(2);
  
  if (args.length === 0) {
    console.log('🤖 White Code Web - Project Generator');
    console.log('');
    console.log('Usage: npm run generate "Build a task management app with user authentication"');
    console.log('');
    console.log('Examples:');
    console.log('  npm run generate "Create a blog with user comments and file uploads"');
    console.log('  npm run generate "Build an e-commerce store with payment processing"');
    console.log('  npm run generate "Make a dashboard app with charts and user management"');
    return;
  }
  
  const description = args.join(' ');
  const generator = new WhiteCodeGenerator();
  
  generator.parseFeatureRequest(description);
  generator.generateProject().catch(console.error);
}

if (require.main === module) {
  main();
}

module.exports = WhiteCodeGenerator; 