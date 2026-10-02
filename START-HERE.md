# Run PestiQ locally

1. Install Node.js 22.13 or newer.
2. Extract this ZIP and open the PestiQ folder in VS Code.
3. Open a terminal in that folder and run:

```bash
npm install
npm run dev
```

Open the local URL printed in your terminal.

Main source files (navigation fix included):
- components/HomePage.jsx: homepage
- app/globals.css: regular CSS and design tokens
- components/Site.jsx: reusable components and interactions
- data/business.js: editable demo content
- app/[...slug]/page.jsx: page and service route foundations

The UI uses React + JavaScript/JSX and regular CSS. It runs on the Sites Vinext/Vite starter, which includes TypeScript infrastructure and unused starter dependencies. Tailwind is not used by the PestiQ interface.

The form is demo-only and sends or stores nothing.

Navigation verification: npm run test:navigation
