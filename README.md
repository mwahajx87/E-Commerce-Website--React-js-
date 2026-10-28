# SHOP.CO Storefront

Live storefront: https://e-commerce-website-react-js-phi.vercel.app/.
Admin panel: https://admin-panel-e-commerce-dashboad.vercel.app/.

The storefront reads products and creates orders through the shared Express
backend. Run `npm run dev` from the workspace root or this folder to start the
backend and the client Vite server on port 5173. The admin frontend is built
when development starts and served by that same Vite server at
`http://localhost:5173/admin`; admin source changes require restarting dev.
Relative `/api` requests are proxied to the backend on port 5000.

The deployed Vercel site currently hosts the frontend only. Deploy the API and
configure `VITE_API_BASE_URL` to its `/api` base URL before expecting product,
account, checkout, or admin API features to work on the live site.

The storefront includes product search, category/style/price filters and
sorting, a persistent cart, guest cash-on-delivery checkout, customer
registration/sign-in and order history, customer reviews, and persisted
newsletter subscriptions. Orders appear in customer history only when placed
while signed in. Online payments are not configured. Delivery coverage,
contact details, and store-specific legal policies must be provided before a
public launch.

For production, build both frontends with `npm run build` at the workspace
root, then run `npm start`. The backend serves the storefront at `/` and the
admin panel at `/admin` from the same origin. Product browsing and order
placement are public API operations; administrator CRUD is protected under
`/api/admin`.

## React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
