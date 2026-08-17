import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import { useCart } from "../Context/Cart.jsx";

const Navbar = () => {
  const { cartCount } = useCart();

  return (
    <nav className="w-full bg-white px-[20px] py-[14px]">
      <div className="mx-auto flex max-w-[1280px] items-center gap-[18px]">
        <Link to="/" className="flex shrink-0 items-center">
          <img
            src={logo}
            alt="SHOP.CO Logo"
            className="block h-auto w-[130px]"
          />
        </Link>

        <div className="ml-[6px] flex items-center gap-[20px] text-[13px] font-medium text-black">
          <Link to="/category" className="text-black no-underline">
            Shop
          </Link>
          <span className="text-[#666]">On Sale</span>
          <span className="text-[#666]">New Arrivals</span>
          <span className="text-[#666]">Brands</span>
        </div>

        <div className="relative ml-auto w-[430px]">
          <i className="fa-solid fa-magnifying-glass pointer-events-none absolute left-[18px] top-1/2 -translate-y-1/2 text-[14px] text-[#666]" />
          <input
            type="text"
            placeholder="Search for products..."
            className="h-[42px] w-full rounded-full border-none bg-[#f0f0f0] pl-[42px] pr-[18px] text-[14px] text-black outline-none placeholder:text-[#666]"
          />
        </div>

        <div className="flex items-center gap-[16px]">
          <Link
            to="/cart"
            className="relative flex h-[32px] w-[32px] items-center justify-center text-black no-underline"
          >
            <i className="fa-solid fa-cart-shopping text-[18px]" />
            {cartCount > 0 && (
              <span className="absolute -right-1 -top-1 flex h-[16px] w-[16px] items-center justify-center rounded-full bg-black text-[9px] font-bold text-white">
                {cartCount}
              </span>
            )}
          </Link>
          <button
            className="flex h-[32px] w-[32px] items-center justify-center rounded-full border-none bg-transparent p-0 text-[18px] text-black"
            aria-label="Profile"
          >
            <i className="fa-regular fa-circle-user" />
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
