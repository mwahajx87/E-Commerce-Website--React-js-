# SHOP.CO Storefront

This repository is the standalone customer-facing storefront for SHOP.CO. It is
not bundled with the admin panel and does not serve `/admin` from the Vite dev
server.

The storefront reads products, accounts, orders, reviews, and newsletter signups
from the separate backend API. Run `npm install` and then `npm run dev` to start
Vite on port 5173. Requests to `/api` are proxied to the backend on
`http://localhost:5000`.

For production deployment, this repo is deployed on its own (for example,
Vercel) and the backend should be configured to accept requests from that origin.
If you choose the relative `/api` proxy approach, leave `VITE_API_BASE_URL` unset.
The frontend includes product search, category/style/price filters and sorting,
a persistent cart, guest cash-on-delivery checkout, customer registration and
order history, reviews, and persisted newsletter subscriptions. Orders appear in
customer history only when placed while signed in. Online payments are not
configured.

To build the production bundle, run `npm run build`.

## React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
