import visa from "../assets/visa.png";
import paypal from "../assets/paypal.png";
import gpay from "../assets/gpay.png";
import applepay from "../assets/applepay.png";
import mastercard from "../assets/mastercard.png";

const Footer = () => {
  return (
    <footer className="w-full bg-[#f2f2f2] px-[20px] pb-[24px] pt-[32px]">
      <div className="mx-auto grid max-w-[1280px] grid-cols-[1.5fr_1fr_1fr_1fr_1fr] gap-[36px] border-t border-[#d9d9d9] pt-[22px]">
        <div>
          <h2 className="mb-[18px] text-[42px] font-black tracking-[-1px] text-black">
            SHOP.CO
          </h2>
          <p className="max-w-[290px] text-[15px] leading-[1.6] text-[#666]">
            We have clothes that suits your style and which you're proud to
            wear. From women to men.
          </p>

          <div className="mt-[22px] flex items-center gap-[12px]">
            <a
              href="#"
              aria-label="Twitter"
              className="flex h-[34px] w-[34px] items-center justify-center rounded-full bg-black text-[13px] font-bold text-white"
            >
              X
            </a>
            <a
              href="#"
              aria-label="Facebook"
              className="flex h-[34px] w-[34px] items-center justify-center rounded-full bg-black text-[13px] font-bold text-white"
            >
              f
            </a>
            <a
              href="#"
              aria-label="Instagram"
              className="flex h-[34px] w-[34px] items-center justify-center rounded-full bg-black text-[13px] font-bold text-white"
            >
              IG
            </a>
            <a
              href="#"
              aria-label="GitHub"
              className="flex h-[34px] w-[34px] items-center justify-center rounded-full bg-black text-[13px] font-bold text-white"
            >
              GH
            </a>
          </div>
        </div>

        <div className="flex flex-col gap-[12px]">
          <h3 className="mb-[8px] text-[14px] font-bold tracking-[1.5px] text-black">
            COMPANY
          </h3>
          <a href="#" className="text-[15px] text-[#666] no-underline">
            About
          </a>
          <a href="#" className="text-[15px] text-[#666] no-underline">
            Features
          </a>
          <a href="#" className="text-[15px] text-[#666] no-underline">
            Works
          </a>
          <a href="#" className="text-[15px] text-[#666] no-underline">
            Career
          </a>
        </div>

        <div className="flex flex-col gap-[12px]">
          <h3 className="mb-[8px] text-[14px] font-bold tracking-[1.5px] text-black">
            HELP
          </h3>
          <a href="#" className="text-[15px] text-[#666] no-underline">
            Customer Support
          </a>
          <a href="#" className="text-[15px] text-[#666] no-underline">
            Delivery Details
          </a>
          <a href="#" className="text-[15px] text-[#666] no-underline">
            Terms & Conditions
          </a>
          <a href="#" className="text-[15px] text-[#666] no-underline">
            Privacy Policy
          </a>
        </div>

        <div className="flex flex-col gap-[12px]">
          <h3 className="mb-[8px] text-[14px] font-bold tracking-[1.5px] text-black">
            FAQ
          </h3>
          <a href="#" className="text-[15px] text-[#666] no-underline">
            Account
          </a>
          <a href="#" className="text-[15px] text-[#666] no-underline">
            Manage Deliveries
          </a>
          <a href="#" className="text-[15px] text-[#666] no-underline">
            Orders
          </a>
          <a href="#" className="text-[15px] text-[#666] no-underline">
            Payments
          </a>
        </div>

        <div className="flex flex-col gap-[12px]">
          <h3 className="mb-[8px] text-[14px] font-bold tracking-[1.5px] text-black">
            RESOURCES
          </h3>
          <a href="#" className="text-[15px] text-[#666] no-underline">
            Free eBooks
          </a>
          <a href="#" className="text-[15px] text-[#666] no-underline">
            Development Tutorial
          </a>
          <a href="#" className="text-[15px] text-[#666] no-underline">
            How-to Blog
          </a>
          <a href="#" className="text-[15px] text-[#666] no-underline">
            YouTube Playlist
          </a>
        </div>
      </div>

      <div className="mx-auto mt-[26px] flex max-w-[1280px] items-center justify-between gap-[20px] border-t border-[#d9d9d9] pt-[18px]">
        <p className="m-0 text-[12px] text-[#666]">
          Shop.co © 2000-2023, All Rights Reserved
        </p>

        <div className="flex items-center gap-[8px]">
          <div className="flex h-[28px] w-[48px] items-center justify-center rounded-[4px] border border-[#d9d9d9] bg-white px-[4px]">
            <img
              src={visa}
              alt="Visa"
              className="h-full w-full object-contain"
            />
          </div>
          <div className="flex h-[28px] w-[48px] items-center justify-center rounded-[4px] border border-[#d9d9d9] bg-white px-[4px]">
            <img
              src={paypal}
              alt="PayPal"
              className="h-full w-full object-contain"
            />
          </div>
          <div className="flex h-[28px] w-[48px] items-center justify-center rounded-[4px] border border-[#d9d9d9] bg-white px-[4px]">
            <img
              src={gpay}
              alt="Google Pay"
              className="h-full w-full object-contain"
            />
          </div>
          <div className="flex h-[28px] w-[48px] items-center justify-center rounded-[4px] border border-[#d9d9d9] bg-white px-[4px]">
            <img
              src={applepay}
              alt="Apple Pay"
              className="h-full w-full object-contain"
            />
          </div>
          <div className="flex h-[28px] w-[48px] items-center justify-center rounded-[4px] border border-[#d9d9d9] bg-white px-[4px]">
            <img
              src={mastercard}
              alt="Mastercard"
              className="h-full w-full object-contain"
            />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
