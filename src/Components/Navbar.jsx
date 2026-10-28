import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../assets/logo.png";
import { useCart } from "../Context/useCart";

const Navbar = () => {
  const { cartCount } = useCart();
  const navigate = useNavigate();
  const [search, setSearch] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  const handleSearch = (event) => {
    event.preventDefault();
    const query = search.trim();
    navigate(query ? `/category?search=${encodeURIComponent(query)}` : "/category");
  };

  return (
    <nav className="w-full bg-white px-[20px] py-[14px] max-[639px]:border-b max-[639px]:border-[#e5e5e5] max-[639px]:px-[16px] max-[639px]:py-[12px]">
      <div className="mx-auto flex max-w-[1280px] items-center gap-[18px] max-[639px]:gap-[10px]">
        <button type="button" className="hidden h-[30px] w-[30px] shrink-0 items-center justify-center border-none bg-transparent p-0 text-[19px] max-[639px]:flex" aria-label="Open menu" aria-expanded={menuOpen} onClick={() => setMenuOpen((open) => !open)}>
          <i className="fa-solid fa-bars" />
        </button>
        <Link to="/" className="flex shrink-0 items-center">
          <img
            src={logo}
            alt="SHOP.CO Logo"
            className="block h-auto w-[130px] max-[639px]:w-[125px] max-[380px]:w-[108px]"
          />
        </Link>

        <div className="ml-[6px] flex items-center gap-[20px] text-[13px] font-medium text-black max-[639px]:hidden">
          <Link to="/category" className="text-black no-underline">
            Shop
          </Link>
          <Link to="/category?sort=newest" className="text-[#666] no-underline">
            New Arrivals
          </Link>
          <Link to="/category?category=Fashion" className="text-[#666] no-underline">
            Fashion
          </Link>
        </div>

        <form className="relative ml-auto w-[430px] max-[639px]:hidden" onSubmit={handleSearch}>
          <i className="fa-solid fa-magnifying-glass pointer-events-none absolute left-[18px] top-1/2 -translate-y-1/2 text-[14px] text-[#666]" />
          <input
            type="text"
            placeholder="Search for products..."
            value={search}
            onChange={(event) => setSearch(event.target.value)}
            className="h-[42px] w-full rounded-full border-none bg-[#f0f0f0] pl-[42px] pr-[18px] text-[14px] text-black outline-none placeholder:text-[#666]"
          />
        </form>

        <div className="flex items-center gap-[16px] max-[639px]:ml-auto max-[639px]:gap-[10px]">
          <button
            type="button"
            className="hidden h-[30px] w-[30px] items-center justify-center border-none bg-transparent p-0 text-[17px] max-[639px]:flex"
            aria-label="Search"
            aria-expanded={searchOpen}
            onClick={() => setSearchOpen((open) => !open)}
          >
            <i className="fa-solid fa-magnifying-glass" />
          </button>
          <Link
            to="/cart"
            className="relative flex h-[32px] w-[32px] items-center justify-center text-black no-underline"
          >
            <i className="fa-solid fa-cart-shopping text-[18px] max-[639px]:text-[16px]" />
            {cartCount > 0 && (
              <span className="absolute -right-1 -top-1 flex h-[16px] w-[16px] items-center justify-center rounded-full bg-black text-[9px] font-bold text-white">
                {cartCount}
              </span>
            )}
          </Link>
          <Link
            to="/account"
            className="flex h-[32px] w-[32px] items-center justify-center rounded-full text-[18px] text-black no-underline"
            aria-label="My account"
          >
            <i className="fa-regular fa-circle-user" />
          </Link>
        </div>
      </div>
      {searchOpen && (
        <form className="mx-auto mt-3 max-w-[1280px] md:hidden" onSubmit={handleSearch}>
          <input
            type="search"
            autoFocus
            value={search}
            onChange={(event) => setSearch(event.target.value)}
            placeholder="Search for products..."
            aria-label="Search products"
            className="h-[42px] w-full rounded-full bg-[#f0f0f0] px-4 text-sm outline-none focus:ring-1 focus:ring-black"
          />
        </form>
      )}
      {menuOpen && (
        <div className="mx-auto mt-[12px] hidden max-w-[1280px] flex-col gap-[12px] border-t border-[#e5e5e5] pt-[12px] text-[13px] font-medium max-[639px]:flex">
          <Link to="/category" className="text-black no-underline" onClick={() => setMenuOpen(false)}>Shop</Link>
          <Link to="/category?sort=newest" className="text-black no-underline" onClick={() => setMenuOpen(false)}>New Arrivals</Link>
          <Link to="/category?category=Fashion" className="text-black no-underline" onClick={() => setMenuOpen(false)}>Fashion</Link>
          <Link to="/category?category=Electronics" className="text-black no-underline" onClick={() => setMenuOpen(false)}>Electronics</Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
