import { Link } from "react-router-dom";

const groups = [
  {
    title: "SHOP",
    links: [
      ["All Products", "/category"],
      ["Fashion", "/category?category=Fashion"],
      ["Home & Living", "/category?category=Home%20%26%20Living"],
      ["Electronics", "/category?category=Electronics"],
      ["Groceries", "/category?category=Groceries"],
    ],
  },
  {
    title: "ACCOUNT",
    links: [
      ["My Account", "/account"],
      ["My Orders", "/account/orders"],
      ["Shopping Cart", "/cart"],
    ],
  },
  {
    title: "HELP",
    links: [
      ["Delivery Details", "/info/delivery"],
      ["Orders", "/info/orders"],
      ["Payments", "/info/payments"],
      ["Privacy Information", "/info/privacy"],
    ],
  },
];

const Footer = () => (
  <footer className="w-full bg-[#f2f2f2] px-[20px] pb-[24px] pt-[32px] max-[639px]:px-[16px] max-[639px]:pb-[20px] max-[639px]:pt-[28px]">
    <div className="mx-auto grid max-w-[1280px] grid-cols-[1.5fr_1fr_1fr_1fr] gap-[36px] border-t border-[#d9d9d9] pt-[22px] max-[639px]:grid-cols-2 max-[639px]:gap-x-[20px] max-[639px]:gap-y-[24px] max-[639px]:border-t-0 max-[639px]:pt-0">
      <div className="max-[639px]:col-span-2">
        <Link to="/" className="text-[42px] font-black tracking-[-1px] text-black no-underline max-[639px]:text-[28px]">
          SHOP.CO
        </Link>
        <p className="mt-4 max-w-[290px] text-[15px] leading-[1.6] text-[#666] max-[639px]:max-w-none max-[639px]:text-[12px]">
          Browse products for fashion, home, electronics, and everyday needs.
        </p>
        <Link
          to="/info/about"
          className="mt-4 inline-block text-sm font-semibold text-black underline"
        >
          About the store
        </Link>
      </div>
      {groups.map(({ title, links }) => (
        <div key={title} className="flex flex-col gap-[12px] max-[639px]:gap-[8px]">
          <h3 className="mb-[8px] text-[14px] font-bold tracking-[1.5px] text-black max-[639px]:mb-[6px] max-[639px]:text-[12px]">
            {title}
          </h3>
          {links.map(([label, to]) => (
            <Link
              key={label}
              to={to}
              className="text-[15px] text-[#666] no-underline hover:text-black max-[639px]:text-[11px]"
            >
              {label}
            </Link>
          ))}
        </div>
      ))}
    </div>

    <div className="mx-auto mt-[26px] flex max-w-[1280px] items-center justify-between gap-[20px] border-t border-[#d9d9d9] pt-[18px] max-[639px]:mt-[20px] max-[639px]:flex-col max-[639px]:gap-[12px] max-[639px]:text-center">
      <span className="rounded-full border border-[#d1d1d1] bg-white px-4 py-2 text-xs font-semibold text-black">
        Cash on delivery
      </span>
      <p className="m-0 text-[12px] text-[#666] max-[639px]:text-[10px]">
        SHOP.CO · All rights reserved
      </p>
    </div>
  </footer>
);

export default Footer;
