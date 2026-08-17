import React from "react";

import visa from "../../assets/visa.png";
import paypal from "../../assets/paypal.png";
import gpay from "../../assets/gpay.png";
import applepay from "../../assets/applepay.png";
import mastercard from "../../assets/mastercard.png";

const Footer = () => {
  return (
    <footer
      className="
        w-full min-w-[250px]
        bg-[#f0f0f0]
        px-[6%] pt-[55px] pb-[25px]
        box-border

        max-[1200px]:px-[5%] max-[1200px]:pt-[50px]

        max-[768px]:px-[4%] max-[768px]:pt-[45px]

        max-[600px]:px-[20px] max-[600px]:pt-[40px] max-[600px]:pb-[20px]

        max-[480px]:px-[16px] max-[480px]:pt-[32px] max-[480px]:pb-[16px]

        max-[375px]:px-[14px] max-[375px]:pt-[28px] max-[375px]:pb-[14px]

        max-[320px]:px-[12px] max-[320px]:pt-[24px] max-[320px]:pb-[12px]

        max-[250px]:px-[10px] max-[250px]:pt-[20px] max-[250px]:pb-[10px]
      "
    >
      {/* Main Footer */}
      <div
        className="
          w-full max-w-[1240px]
          mx-auto
          grid
          grid-cols-[2fr_1fr_1fr_1fr_1fr]
          gap-[50px]
          pb-[50px]
          border-b
          border-[#d5d5d5]

          max-[1024px]:grid-cols-[2fr_1fr_1fr]
          max-[1024px]:gap-[40px]

          max-[600px]:grid-cols-2
          max-[600px]:gap-[35px_25px]
          max-[600px]:pb-[35px]

          max-[375px]:grid-cols-1
          max-[375px]:gap-[22px]
        "
      >
        {/* Brand */}
        <div
          className="
            max-[1024px]:col-span-3

            max-[600px]:col-span-2

            max-[375px]:col-span-1
          "
        >
          <h2
            className="
              m-0 mb-[20px]
              text-black
              text-[32px]
              font-black
              tracking-[-1px]
              font-[Arial,Helvetica,sans-serif]

              max-[600px]:text-[28px]

              max-[480px]:text-[24px]

              max-[375px]:text-[22px]

              max-[320px]:text-[20px]

              max-[250px]:text-[18px]
            "
          >
            SHOP.CO
          </h2>

          <p
            className="
              max-w-[250px]
              m-0
              text-[#666]
              text-[14px]
              leading-[1.6]
              font-[Arial,Helvetica,sans-serif]

              max-[1024px]:max-w-[400px]

              max-[600px]:max-w-full
              max-[600px]:text-[13px]

              max-[375px]:text-[12px]

              max-[320px]:text-[11.5px]

              max-[250px]:text-[11px]
            "
          >
            We have clothes that suits your style and which you're proud to
            wear. From women to men.
          </p>

          {/* Social Icons */}
          <div
            className="
              flex
              items-center
              gap-[12px]
              mt-[25px]
            "
          >
            <a
              href="#"
              aria-label="Twitter"
              className="
                w-[30px]
                h-[30px]
                flex
                items-center
                justify-center
                border
                border-black
                rounded-full
                bg-black
                text-white
                no-underline
                text-[12px]
                font-bold
                font-[Arial,Helvetica,sans-serif]
                transition-all
                duration-200
                ease-in-out
                hover:bg-white
                hover:text-black
              "
            >
              X
            </a>

            <a
              href="#"
              aria-label="Facebook"
              className="
                w-[30px] h-[30px]
                flex items-center justify-center
                border border-black rounded-full
                bg-black text-white
                no-underline text-[12px] font-bold
                font-[Arial,Helvetica,sans-serif]
                transition-all duration-200 ease-in-out
                hover:bg-white hover:text-black
                max-[480px]:w-[26px] max-[480px]:h-[26px]
                max-[480px]:text-[11px]
                max-[320px]:w-[24px] max-[320px]:h-[24px]
                max-[320px]:text-[10px]
              "
            >
              f
            </a>

            <a
              href="#"
              aria-label="Instagram"
              className="
                w-[30px] h-[30px]
                flex items-center justify-center
                border border-black rounded-full
                bg-black text-white
                no-underline text-[12px] font-bold
                font-[Arial,Helvetica,sans-serif]
                transition-all duration-200 ease-in-out
                hover:bg-white hover:text-black
                max-[480px]:w-[26px] max-[480px]:h-[26px]
                max-[480px]:text-[11px]
                max-[320px]:w-[24px] max-[320px]:h-[24px]
                max-[320px]:text-[10px]
              "
            >
              IG
            </a>

            <a
              href="#"
              aria-label="GitHub"
              className="
                w-[30px] h-[30px]
                flex items-center justify-center
                border border-black rounded-full
                bg-black text-white
                no-underline text-[12px] font-bold
                font-[Arial,Helvetica,sans-serif]
                transition-all duration-200 ease-in-out
                hover:bg-white hover:text-black
                max-[480px]:w-[26px] max-[480px]:h-[26px]
                max-[480px]:text-[11px]
                max-[320px]:w-[24px] max-[320px]:h-[24px]
                max-[320px]:text-[10px]
              "
            >
              GH
            </a>
          </div>
        </div>

        {/* Company */}
        <div className="flex flex-col gap-[15px] max-[600px]:gap-[12px]">
          <h3
            className="
              m-0 mb-[8px]
              text-black
              text-[14px]
              font-bold
              tracking-[1.5px]
              font-[Arial,Helvetica,sans-serif]

              max-[600px]:text-[13px]
              max-[480px]:text-[12px]
              max-[320px]:text-[11px]
              max-[250px]:text-[10px]
            "
          >
            COMPANY
          </h3>

          <a href="#" className="footer-link">About</a>
          <a href="#" className="footer-link">Features</a>
          <a href="#" className="footer-link">Works</a>
          <a href="#" className="footer-link">Career</a>
        </div>

        {/* Help */}
        <div className="flex flex-col gap-[15px] max-[600px]:gap-[12px]">
          <h3
            className="
              m-0 mb-[8px]
              text-black text-[14px] font-bold tracking-[1.5px]
              font-[Arial,Helvetica,sans-serif]
              max-[600px]:text-[13px]
              max-[480px]:text-[12px]
              max-[320px]:text-[11px]
              max-[250px]:text-[10px]
            "
          >
            HELP
          </h3>

          <a href="#" className="footer-link">Customer Support</a>
          <a href="#" className="footer-link">Delivery Details</a>
          <a href="#" className="footer-link">Terms &amp; Conditions</a>
          <a href="#" className="footer-link">Privacy Policy</a>
        </div>

        {/* FAQ */}
        <div className="flex flex-col gap-[15px] max-[600px]:gap-[12px]">
          <h3
            className="
              m-0 mb-[8px]
              text-black text-[14px] font-bold tracking-[1.5px]
              font-[Arial,Helvetica,sans-serif]
              max-[600px]:text-[13px]
              max-[480px]:text-[12px]
              max-[320px]:text-[11px]
              max-[250px]:text-[10px]
            "
          >
            FAQ
          </h3>

          <a href="#" className="footer-link">Account</a>
          <a href="#" className="footer-link">Manage Deliveries</a>
          <a href="#" className="footer-link">Orders</a>
          <a href="#" className="footer-link">Payments</a>
        </div>

        {/* Resources */}
        <div className="flex flex-col gap-[15px] max-[600px]:gap-[12px]">
          <h3
            className="
              m-0 mb-[8px]
              text-black text-[14px] font-bold tracking-[1.5px]
              font-[Arial,Helvetica,sans-serif]
              max-[600px]:text-[13px]
              max-[480px]:text-[12px]
              max-[320px]:text-[11px]
              max-[250px]:text-[10px]
            "
          >
            RESOURCES
          </h3>

          <a href="#" className="footer-link">Free eBooks</a>
          <a href="#" className="footer-link">Development Tutorial</a>
          <a href="#" className="footer-link">How-to Blog</a>
          <a href="#" className="footer-link">YouTube Playlist</a>
        </div>
      </div>

      {/* Footer Bottom */}
      <div
        className="
          w-full max-w-[1240px]
          mx-auto
          mt-[20px]
          flex
          items-center
          justify-between
          gap-[20px]

          max-[768px]:flex-col
          max-[768px]:items-center
          max-[768px]:text-center

          max-[600px]:mt-[18px]
          max-[600px]:gap-[18px]
        "
      >
        <p
          className="
            m-0
            text-[#666]
            text-[13px]
            font-[Arial,Helvetica,sans-serif]

            max-[600px]:text-[12px]

            max-[250px]:text-[10px]
          "
        >
          Shop.co © 2000-2026, All Rights Reserved
        </p>

        {/* Payment Methods */}
        <div
          className="
            flex
            items-center
            justify-end
            gap-[8px]

            max-[768px]:justify-center

            max-[600px]:w-full
            max-[600px]:flex-wrap
            max-[600px]:gap-[7px]
          "
        >
          {[
            [visa, "Visa"],
            [paypal, "PayPal"],
            [gpay, "Google Pay"],
            [applepay, "Apple Pay"],
            [mastercard, "Mastercard"],
          ].map(([image, alt]) => (
            <div
              key={alt}
              className="
                w-[50px]
                h-[32px]
                flex
                items-center
                justify-center
                bg-white
                border
                border-[#ddd]
                rounded-[5px]
                box-border
                overflow-hidden

                max-[600px]:w-[48px]
                max-[600px]:h-[30px]

                max-[375px]:w-[42px]
                max-[375px]:h-[27px]

                max-[320px]:w-[38px]
                max-[320px]:h-[25px]

                max-[250px]:w-[34px]
                max-[250px]:h-[22px]
              "
            >
              <img
                src={image}
                alt={alt}
                className="
                  w-full
                  h-full
                  p-[4px]
                  box-border
                  object-contain
                  block
                "
              />
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;