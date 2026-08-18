import visa from "../assets/visa.png";
import paypal from "../assets/paypal.png";
import gpay from "../assets/gpay.png";
import applepay from "../assets/applepay.png";
import mastercard from "../assets/mastercard.png";

const groups = [
  ["COMPANY", ["About", "Features", "Works", "Career"]],
  ["HELP", ["Customer Support", "Delivery Details", "Terms & Conditions", "Privacy Policy"]],
  ["FAQ", ["Account", "Manage Deliveries", "Orders", "Payments"]],
  ["RESOURCES", ["Free eBooks", "Development Tutorial", "How-to Blog", "YouTube Playlist"]],
];

const payments = [[visa, "Visa"], [mastercard, "Mastercard"], [paypal, "PayPal"], [applepay, "Apple Pay"], [gpay, "Google Pay"]];

const Footer = () => (
  <footer className="w-full bg-[#f2f2f2] px-[20px] pb-[24px] pt-[32px] max-[639px]:px-[16px] max-[639px]:pb-[20px] max-[639px]:pt-[28px]">
    <div className="mx-auto grid max-w-[1280px] grid-cols-[1.5fr_1fr_1fr_1fr_1fr] gap-[36px] border-t border-[#d9d9d9] pt-[22px] max-[639px]:grid-cols-2 max-[639px]:gap-x-[20px] max-[639px]:gap-y-[24px] max-[639px]:border-t-0 max-[639px]:pt-0">
      <div className="max-[639px]:col-span-2">
        <h2 className="mb-[18px] text-[42px] font-black tracking-[-1px] text-black max-[639px]:mb-[12px] max-[639px]:text-[28px]">SHOP.CO</h2>
        <p className="max-w-[290px] text-[15px] leading-[1.6] text-[#666] max-[639px]:max-w-none max-[639px]:text-[12px]">We have clothes that suits your style and which you&apos;re proud to wear. From women to men.</p>
        <div className="mt-[22px] flex items-center gap-[12px] max-[639px]:mt-[14px] max-[639px]:gap-[8px]">
          {["twitter", "facebook-f", "instagram", "linkedin-in"].map((icon, index) => (
            <a key={icon} href="#" aria-label={icon} className={`flex h-[34px] w-[34px] items-center justify-center rounded-full border border-[#d1d1d1] text-[13px] transition-colors hover:bg-[#f5f5f5] max-[639px]:h-[24px] max-[639px]:w-[24px] max-[639px]:text-[10px] ${index === 1 ? "bg-black text-white" : "bg-white text-black"}`}>
              <i className={`fa-brands fa-${icon}`} />
            </a>
          ))}
        </div>
      </div>
      {groups.map(([title, links]) => (
        <div key={title} className="flex flex-col gap-[12px] max-[639px]:gap-[8px]">
          <h3 className="mb-[8px] text-[14px] font-bold tracking-[1.5px] text-black max-[639px]:mb-[6px] max-[639px]:text-[12px]">{title}</h3>
          {links.map((link) => <a key={link} href="#" className="text-[15px] text-[#666] no-underline max-[639px]:text-[11px]">{link}</a>)}
        </div>
      ))}
    </div>

    <div className="mx-auto mt-[26px] flex max-w-[1280px] items-center justify-between gap-[20px] border-t border-[#d9d9d9] pt-[18px] max-[639px]:mt-[20px] max-[639px]:flex-col max-[639px]:gap-[12px] max-[639px]:text-center">
      <div className="flex items-center gap-[8px] max-[639px]:flex-wrap max-[639px]:justify-center">
        {payments.map(([image, alt]) => <div key={alt} className="flex h-[28px] w-[48px] items-center justify-center rounded-[4px] border border-[#d9d9d9] bg-white px-[4px] max-[639px]:h-[24px] max-[639px]:w-[40px]"><img src={image} alt={alt} className="h-full w-full object-contain" /></div>)}
      </div>

      <p className="m-0 text-[12px] text-[#666] max-[639px]:text-[10px]">Shop.co © 2000-2023, All Rights Reserved</p>
    </div>
  </footer>
);

export default Footer;
