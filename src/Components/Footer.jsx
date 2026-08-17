import React from "react";

import visa from "../assets/visa.png";
import paypal from "../assets/paypal.png";
import gpay from "../assets/gpay.png";
import applepay from "../assets/applepay.png";
import mastercard from "../assets/mastercard.png";

const Footer = () => {
  return (
    <footer className="w-full bg-[#f0f0f0] px-[6%] pt-[55px] pb-[25px] box-border max-[768px]:px-[4%] max-[768px]:pt-[45px] max-[600px]:px-[20px] max-[600px]:pt-[40px] max-[600px]:pb-[20px]">
      {/* Main Footer */}
      <div className="w-full max-w-[1240px] mx-auto grid grid-cols-[2fr_1fr_1fr_1fr_1fr] gap-[50px] pb-[50px] border-b border-[#d5d5d5] max-[1024px]:grid-cols-[2fr_1fr_1fr] max-[1024px]:gap-[40px] max-[600px]:grid-cols-2 max-[600px]:gap-[35px_25px] max-[600px]:pb-[35px] max-[375px]:grid-cols-1 max-[375px]:gap-[22px]">
        {/* Brand */}
        <div className="max-[1024px]:col-span-3 max-[600px]:col-span-2 max-[375px]:col-span-1">
          <h2 className="m-0 mb-[20px] text-black text-[32px] font-black tracking-[-1px] font-sans max-[600px]:text-[28px] max-[480px]:text-[24px]">
            SHOP.CO
          </h2>

          <p className="max-w-[250px] m-0 text-[#666] text-[14px] leading-[1.6] font-sans max-[1024px]:max-w-[400px] max-[600px]:max-w-full max-[600px]:text-[13px]">
            We have clothes that suits your style and which you're proud to wear. From women to men.
          </p>

          {/* Social Icons */}
          <div className="flex items-center gap-[12px] mt-[25px]">
            {["X", "f", "IG", "GH"].map((icon, i) => (
              <a key={i} href="#" aria-label={icon} className="w-[30px] h-[30px] flex items-center justify-center border border-black rounded-full bg-black text-white no-underline text-[12px] font-bold font-sans transition-all duration-200 ease-in-out hover:bg-white hover:text-black">
                {icon}
              </a>
            ))}
          </div>
        </div>

        {/* Company */}
        <div className="flex flex-col gap-[15px]">
          <h3 className="m-0 mb-[8px] text-black text-[14px] font-bold tracking-[1.5px] font-sans">COMPANY</h3>
          <a href="#" className="footer-link">About</a>
          <a href="#" className="footer-link">Features</a>
          <a href="#" className="footer-link">Works</a>
          <a href="#" className="footer-link">Career</a>
        </div>

        {/* Help */}
        <div className="flex flex-col gap-[15px]">
          <h3 className="m-0 mb-[8px] text-black text-[14px] font-bold tracking-[1.5px] font-sans">HELP</h3>
          <a href="#" className="footer-link">Customer Support</a>
          <a href="#" className="footer-link">Delivery Details</a>
          <a href="#" className="footer-link">Terms & Conditions</a>
          <a href="#" className="footer-link">Privacy Policy</a>
        </div>

        {/* FAQ */}
        <div className="flex flex-col gap-[15px]">
          <h3 className="m-0 mb-[8px] text-black text-[14px] font-bold tracking-[1.5px] font-sans">FAQ</h3>
          <a href="#" className="footer-link">Account</a>
          <a href="#" className="footer-link">Manage Deliveries</a>
          <a href="#" className="footer-link">Orders</a>
          <a href="#" className="footer-link">Payments</a>
        </div>

        {/* Resources */}
        <div className="flex flex-col gap-[15px]">
          <h3 className="m-0 mb-[8px] text-black text-[14px] font-bold tracking-[1.5px] font-sans">RESOURCES</h3>
          <a href="#" className="footer-link">Free eBooks</a>
          <a href="#" className="footer-link">Development Tutorial</a>
          <a href="#" className="footer-link">How-to Blog</a>
          <a href="#" className="footer-link">YouTube Playlist</a>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="w-full max-w-[1240px] mx-auto mt-[20px] flex items-center justify-between gap-[20px] max-[768px]:flex-col max-[768px]:items-center max-[768px]:text-center">
        <p className="m-0 text-[#666] text-[13px] font-sans">Shop.co © 2000-2026, All Rights Reserved</p>

        {/* Payment Methods */}
        <div className="flex items-center justify-end gap-[8px] max-[768px]:justify-center max-[600px]:w-full max-[600px]:flex-wrap max-[600px]:gap-[7px]">
          {[
            [visa, "Visa"],
            [paypal, "PayPal"],
            [gpay, "Google Pay"],
            [applepay, "Apple Pay"],
            [mastercard, "Mastercard"],
          ].map(([image, alt]) => (
            <div key={alt} className="w-[50px] h-[32px] flex items-center justify-center bg-white border border-[#ddd] rounded-[5px] box-border overflow-hidden">
              <img src={image} alt={alt} className="w-full h-full p-[4px] box-border object-contain block" />
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;