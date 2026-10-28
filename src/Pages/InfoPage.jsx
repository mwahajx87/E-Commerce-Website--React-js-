import { Link, useParams } from "react-router-dom";

const pages = {
  about: {
    title: "About SHOP.CO",
    paragraphs: [
      "SHOP.CO is a storefront for browsing products across fashion, home, electronics, and grocery categories.",
      "Product availability and order details are provided by the store catalog and checkout service.",
    ],
  },
  delivery: {
    title: "Delivery details",
    paragraphs: [
      "Delivery is currently available by cash-on-delivery checkout. A delivery fee is shown in your order summary when your subtotal is below Rs. 5,000.",
      "Delivery timing and coverage are not yet configured in this demo store. The store operator should confirm these details before launch.",
    ],
  },
  orders: {
    title: "Orders",
    paragraphs: [
      "Orders are placed from the cart and start with Pending status. Sign in before checkout to see those orders in your account.",
      "Guest orders can be placed without creating an account and are not linked to customer order history.",
    ],
    link: { to: "/account", label: "Go to my account" },
  },
  payments: {
    title: "Payments",
    paragraphs: [
      "This storefront currently supports cash on delivery only. Online card and bank payments are not enabled.",
    ],
  },
  account: {
    title: "Customer account",
    paragraphs: [
      "Create an account to see orders placed while signed in. Guest checkout remains available.",
      "Account passwords are stored as password hashes by the store API.",
    ],
    link: { to: "/account", label: "Sign in or create an account" },
  },
  privacy: {
    title: "Privacy information",
    paragraphs: [
      "Checkout details are stored with your order. Registered accounts store your name, email address, and a password hash.",
      "This demo does not include a configurable privacy contact or data-export workflow. The store operator should provide a complete privacy policy before public launch.",
    ],
  },
};

const InfoPage = () => {
  const { slug } = useParams();
  const page = pages[slug] || {
    title: "Store information",
    paragraphs: ["This information page is not available."],
  };

  return (
    <main className="mx-auto min-h-[45vh] w-full max-w-[900px] px-5 py-12 sm:py-16">
      <div className="mb-6 flex items-center gap-2 text-sm text-[#777]">
        <Link to="/" className="text-inherit no-underline">Home</Link>
        <span>/</span>
        <span className="text-black">{page.title}</span>
      </div>
      <h1 className="mb-6 text-3xl font-black text-black sm:text-4xl">
        {page.title}
      </h1>
      <div className="space-y-4 text-base leading-7 text-[#555]">
        {page.paragraphs.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      </div>
      {page.link && (
        <Link
          to={page.link.to}
          className="mt-8 inline-block rounded-full bg-black px-6 py-3 text-sm font-semibold text-white no-underline"
        >
          {page.link.label}
        </Link>
      )}
    </main>
  );
};

export default InfoPage;
