# White Code Web

Turn plain-English feature requests into production-ready React web applications.

## 🚀 Overview

White Code Web is a powerful project generator that transforms natural language descriptions into fully functional Next.js applications with TypeScript, authentication, testing, and deployment ready.

## ✨ Features

- **Next.js + TypeScript**: Modern React framework with strict typing
- **Authentication**: NextAuth.js with multiple providers
- **State Management**: Redux Toolkit + RTK Query
- **Testing Suite**: Jest, React Testing Library, and Playwright
- **Tailwind CSS & Chakra UI**: Utility-first and accessible UI
- **API Integration**: REST (RTK Query) and GraphQL ready
- **Deployment Ready**: Optimized for Vercel and Netlify
- **Accessibility**: ARIA attributes, semantic HTML, keyboard navigation
- **SEO Optimized**: Meta tags, Open Graph, Twitter cards
- **Internationalization**: Multi-language support (en, es)
- **Performance**: Image optimization, code splitting, bundle analysis
- **Storybook**: Component library and documentation
- **CI/CD**: GitHub Actions for lint, type-check, test, E2E, and build

## 🛠️ Quickstart

```bash
# Clone the repository
git clone https://github.com/your-username/white-code-web.git
cd white-code-web

# Install dependencies
npm install

# Start development server
npm run dev
```

## 📖 Scripts

| Script                | Description                                 |
|-----------------------|---------------------------------------------|
| `dev`                 | Start Next.js in development mode           |
| `build`               | Build for production                        |
| `start`               | Start production server                     |
| `lint`                | Run ESLint on all code                      |
| `lint:fix`            | Fix lint errors automatically               |
| `format`              | Format code with Prettier                   |
| `format:check`        | Check code formatting                       |
| `type-check`          | Run TypeScript type checks                  |
| `test`                | Run all Jest unit/integration tests         |
| `e2e`                 | Run Playwright E2E tests (headless)         |
| `e2e:headed`          | Run Playwright E2E tests (with UI)          |
| `storybook`           | Start Storybook for UI components           |
| `build-storybook`     | Build static Storybook                      |

## 🧪 Testing

```bash
# Run unit/integration tests
npm test

# Run E2E tests (Playwright)
npm run e2e

# Run Storybook
npm run storybook
```

## 🏗️ Project Structure

```
src/
├── components/          # Reusable UI components
│   └── ui/             # Base components (Button, Input, Card)
├── pages/              # Next.js pages and routing
├── styles/             # Global styles and Tailwind config
├── lib/                # Utility functions, Redux store, API slices
├── types/              # TypeScript type definitions
├── utils/              # Common utilities
├── hooks/              # Custom React hooks
├── context/            # React Context providers
├── services/           # API services and RTK Query slices
└── app/                # App router (Next.js 13+)
```

## 🚦 CI/CD

- **GitHub Actions**: Lint, type-check, test, E2E, and build on every push/PR.
- **Vercel/Netlify**: Ready for instant deployment.

## 📚 Storybook

```bash
# Start Storybook
npm run storybook

# Build Storybook
npm run build-storybook
```

## 🌍 Internationalization (i18n)
- English (`en`) and Spanish (`es`) supported out of the box.
- Easily add more locales in `next.config.js` and translation files.

## 📝 Handoff & Extending

- **Run locally:** `npm run dev`
- **Test:** `npm test` (unit), `npm run e2e` (E2E)
- **Build:** `npm run build`
- **Deploy:** Push to GitHub and connect to Vercel/Netlify
- **Add features:**
  - New API: Add to `src/pages/api/` and/or RTK Query slice in `src/services/`
  - New UI: Add to `src/components/ui/` and document in Storybook
  - New Redux state: Add slice to `src/lib/store.ts`
- **Docs:**
  - Storybook for UI
  - Code comments and types for logic

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/amazing-feature`
3. Commit your changes: `git commit -m 'Add amazing feature'`
4. Push to the branch: `git push origin feature/amazing-feature`
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [Next.js](https://nextjs.org/) - React framework
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS
- [TypeScript](https://www.typescriptlang.org/) - Type safety
- [Chakra UI](https://chakra-ui.com/) - Accessible UI primitives
- [NextAuth.js](https://next-auth.js.org/) - Authentication
- [Redux Toolkit](https://redux-toolkit.js.org/) - State management
- [Jest](https://jestjs.io/) - Testing framework
- [Playwright](https://playwright.dev/) - E2E testing
- [Storybook](https://storybook.js.org/) - UI documentation

## 📞 Support

- 📧 Email: support@white-code-web.com
- 💬 Discord: [Join our community](https://discord.gg/white-code-web)
- 📖 Documentation: [docs.white-code-web.com](https://docs.white-code-web.com)
- 🐛 Issues: [GitHub Issues](https://github.com/your-username/white-code-web/issues)

---

Made with ❤️ by the White Code Web team 