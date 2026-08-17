import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";
import { useCart } from "../Context/Cart.jsx";

const Navbar = () => {
  const { cartCount } = useCart();

  // Shared utility classes for repeated icon styles
  const iconStyle =
    "text-[20px] text-black cursor-pointer transition duration-200 ease-in-out hover:text-[#555] max-[768px]:text-[18px] max-[600px]:text-[18px] max-[480px]:text-[17px] max-[375px]:text-[16px] max-[320px]:text-[15px] max-[250px]:text-[14px]";

  const navListItemStyle =
    "text-[16px] font-medium text-black cursor-pointer whitespace-nowrap transition duration-200 ease-in-out hover:text-[#555] max-[1200px]:text-[15px] max-[1024px]:text-[14px] [&_a]:text-inherit [&_a]:decoration-transparent";

  return (
    <nav className="w-full min-h-[80px] flex items-center gap-[35px] px-[60px] box-border bg-white max-[1200px]:px-[40px] max-[1200px]:gap-[25px] max-[1024px]:px-[30px] max-[1024px]:gap-[20px] max-[768px]:min-h-[70px] max-[768px]:px-[20px] max-[768px]:py-[15px] max-[768px]:flex-wrap max-[768px]:gap-[15px] max-[600px]:px-[18px] max-[600px]:py-[12px] max-[600px]:gap-[12px] max-[480px]:px-[15px] max-[480px]:py-[12px] max-[375px]:px-[12px] max-[375px]:py-[10px] max-[375px]:gap-[10px] max-[320px]:px-[10px] max-[320px]:py-[8px] max-[320px]:gap-[8px] max-[250px]:min-w-[250px] max-[250px]:overflow-x-auto max-[250px]:p-[8px] max-[250px]:gap-[6px]">
      <Link to="/" className="flex items-center shrink-0">
        <img
          src={logo}
          alt="SHOP.CO Logo"
          className="w-[140px] h-auto block object-contain max-[1200px]:w-[130px] max-[1024px]:w-[120px] max-[768px]:w-[120px] max-[600px]:w-[115px] max-[480px]:w-[105px] max-[375px]:w-[95px] max-[320px]:w-[85px] max-[250px]:w-[70px]"
        />
      </Link>

      <ul className="flex items-center gap-[30px] list-none m-0 p-0 shrink-0 max-[1200px]:gap-[20px] max-[1024px]:gap-[16px] max-[768px]:hidden">
        <li className={navListItemStyle}>
          <Link to="/category">Shop</Link>
        </li>
        <li className={navListItemStyle}>On Sale</li>
        <li className={navListItemStyle}>New Arrival</li>
        <li className={navListItemStyle}>Brands</li>
      </ul>

      <div className="relative flex-1 max-w-[540px] min-w-[200px] max-[1200px]:max-w-[320px] max-[1024px]:max-w-[260px] max-[768px]:w-full max-[768px]:max-w-none max-[768px]:order-3 max-[250px]:min-w-[150px]">
        <i className="fa-solid fa-magnifying-glass absolute left-[18px] top-1/2 -translate-y-1/2 text-[17px] text-[#555] pointer-events-none max-[480px]:left-[15px] max-[480px]:text-[15px] max-[375px]:left-[12px] max-[375px]:text-[14px] max-[320px]:left-[10px] max-[320px]:text-[13px] max-[250px]:left-[8px] max-[250px]:text-[12px]"></i>
        <input
          type="text"
          placeholder="Search for products..."
          className="w-full h-[45px] border-none outline-none rounded-[25px] bg-[#f0f0f0] pl-[50px] pr-[20px] box-border text-[14px] text-black placeholder:text-[#777] max-[768px]:h-[42px] max-[600px]:h-[41px] max-[600px]:text-[13px] max-[480px]:h-[40px] max-[480px]:text-[13px] max-[480px]:pl-[45px] max-[375px]:h-[38px] max-[375px]:text-[12px] max-[375px]:pl-[40px] max-[320px]:h-[36px] max-[320px]:text-[11px] max-[320px]:pl-[36px] max-[250px]:h-[34px] max-[250px]:text-[11px] max-[250px]:pl-[32px]"
        />
      </div>

      {/* Icons */}
      <div className="flex items-center gap-[20px] shrink-0 max-[768px]:ml-auto max-[600px]:gap-[16px] max-[480px]:gap-[15px] max-[375px]:gap-[12px] max-[320px]:gap-[10px] max-[250px]:gap-[8px]">
        <Link to="/cart" className="relative">
          <i className={`fa-solid fa-cart-shopping ${iconStyle}`}></i>
          {cartCount > 0 && (
            <span className="absolute -top-[8px] -right-[8px] bg-black text-white text-[10px] font-bold w-[16px] h-[16px] rounded-full flex items-center justify-center max-[375px]:w-[14px] max-[375px]:h-[14px] max-[375px]:text-[9px]">
              {cartCount}
            </span>
          )}
        </Link>

        <i className={`fa-regular fa-circle-user ${iconStyle}`}></i>
      </div>
    </nav>
  );
};

export default Navbar;
