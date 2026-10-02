# PestiQ homepage prototype

React components are written in JavaScript/JSX. Styling is regular CSS with global design tokens in app/globals.css. The starter includes unused Tailwind dependencies, but this site does not import or use Tailwind.

## Editing
- data/business.js: services, demo contact details, proposed cities, sample reviews, offer and navigation.
- app/page.jsx: homepage composition.
- components/Site.jsx: header, footer, cards, reveals, process tabs, review controls and demo inspection form.
- app/[...slug]/page.jsx: lightweight future-page foundations and six service detail routes.
- components/Seo.jsx: verified-only structured-data support.

## Before public launch
Replace all demo content with approved business information. Connect the inspection form to a secure booking service; the prototype currently sends and stores nothing. Verify phone and email. Supply approved privacy/consent copy and treatment claims. Set SITE_ORIGIN to the production origin or update data/seo.js, enable indexing in layout.jsx and update robots.js. sitemap.js already generates routes using the configured origin. No fabricated reviews, statistics or guarantees are included in structured data.

## Commands
Use the package manager selected in .sites-runtime/execution-profile.json. npm run build builds the site. The managed preview is started with sites-preview start from this directory.

Secondary pages deliberately remain small until the homepage design is approved. Image source credits are maintained in public/images/CREDITS.md.

## Service-detail review architecture

Termite Control alone uses the rich service-detail layout. Other service pages retain the original small foundations until this design is approved.

- data/service-details.js: per-service hero, signs, problem overview, process, property types, prevention, FAQs, related services, contact text and metadata.
- components/services/ServiceDetail.jsx: reusable section layout, native accessible FAQ accordions, breadcrumb JSON-LD and internal navigation.
- components/services/ServiceInquiry.jsx: service-specific demo inspection form; no data is transmitted or stored.
- components/services/service-detail.css: scoped CSS using existing global design tokens. Homepage source, global CSS and shared components remain unchanged.

General educational references are linked on the page. No ratings, business credentials, effectiveness statistics or guarantee schema are introduced. Production-specific methods and copy need local review.

## Client navigation

React Router owns in-app navigation through BrowserRouter, Routes, Link and NavLink. The existing server routes render the same route tree with StaticRouter on direct requests, preserving server content and route metadata. The homepage composition now lives in components/HomePage.jsx; its CSS and visual structure are unchanged.

- components/routing/RouterApplication.jsx: route tree, route focus, scroll reset/restoration, history integration and client metadata updates.
- components/routing/SiteLink.jsx: internal History API links; external/phone/email links stay native.
- components/routing/SecondaryPage.jsx: existing secondary-page foundations.
- components/routing/navigation.css: active nav state and accessible route announcements only.

Run `npm run test:navigation` for simulated-DOM navigation integration checks, including SSR and nested-URL hydration. Real-browser visual and touch testing remains a separate check.

Current placeholder foundations: About, Residential, Commercial, Offers and five non-termite service detail pages. Services has the functional directory; Contact has the working demo form.
