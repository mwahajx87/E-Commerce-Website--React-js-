import hero from "../assets/Rectangle 2.png";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-[#f2f0f1] px-[20px] py-[18px] max-[639px]:px-[16px] max-[639px]:pb-0 max-[639px]:pt-[18px]">
      <div className="mx-auto grid max-w-[1280px] grid-cols-[1fr_1fr] items-end gap-[10px] max-[639px]:flex max-[639px]:flex-col max-[639px]:gap-0">
        <div className="z-10 pb-[30px] pt-[20px] max-[639px]:p-0">
          <h1 className="m-0 max-w-[460px] text-[64px] font-black leading-[0.82] tracking-[-2.6px] text-black max-[639px]:max-w-none max-[639px]:text-[30px] max-[639px]:leading-[0.93] max-[639px]:tracking-[-1px]">
            FIND CLOTHES
            <br />
            THAT MATCHES
            <br />
            YOUR STYLE
          </h1>

          <p className="mt-[20px] max-w-[470px] text-[14px] leading-[1.5] text-[#666] max-[639px]:mt-[12px] max-[639px]:max-w-none max-[639px]:text-[11px] max-[639px]:leading-[1.45]">
            Browse through our diverse range of meticulously crafted garments, designed to bring out your individuality and cater to your sense of style.
          </p>

          <Link to="/category" className="mt-[26px] flex h-[48px] w-[172px] items-center justify-center rounded-full border-none bg-black text-[14px] font-semibold text-white no-underline max-[639px]:mt-[14px] max-[639px]:h-[42px] max-[639px]:w-full max-[639px]:text-[12px]">
            Shop Now
          </Link>

          <div className="mt-[42px] flex items-start gap-[28px] max-[639px]:mt-[16px] max-[639px]:gap-0">
            <div className="min-w-[150px] border-r border-[#d7d7d7] pr-[24px] max-[639px]:min-w-0 max-[639px]:flex-1 max-[639px]:border-r max-[639px]:pr-[8px] max-[639px]:text-center">
              <h3 className="m-0 text-[32px] font-bold leading-none text-black max-[639px]:text-[18px]">200+</h3>
              <p className="mt-[6px] whitespace-nowrap text-[12px] text-[#666] max-[639px]:mt-[4px] max-[639px]:whitespace-normal max-[639px]:text-[8px]">International Brands</p>
            </div>

            <div className="min-w-[170px] border-r border-[#d7d7d7] pr-[24px] max-[639px]:min-w-0 max-[639px]:flex-1 max-[639px]:border-r max-[639px]:pr-[8px] max-[639px]:pl-[8px] max-[639px]:text-center">
              <h3 className="m-0 text-[32px] font-bold leading-none text-black max-[639px]:text-[18px]">2,000+</h3>
              <p className="mt-[6px] whitespace-nowrap text-[12px] text-[#666] max-[639px]:mt-[4px] max-[639px]:whitespace-normal max-[639px]:text-[8px]">High-Quality Products</p>
            </div>

            <div className="min-w-[150px] max-[639px]:min-w-0 max-[639px]:flex-1 max-[639px]:pl-[8px] max-[639px]:text-center">
              <h3 className="m-0 text-[32px] font-bold leading-none text-black max-[639px]:text-[18px]">30,000+</h3>
              <p className="mt-[6px] whitespace-nowrap text-[12px] text-[#666] max-[639px]:mt-[4px] max-[639px]:whitespace-normal max-[639px]:text-[8px]">Happy Customers</p>
            </div>
          </div>
        </div>

        <div className="relative flex h-[470px] items-end justify-center overflow-hidden max-[639px]:-mx-[16px] max-[639px]:h-[390px] max-[380px]:h-[350px]">
          <span className="absolute right-[35px] top-[20px] text-[52px] text-black max-[639px]:right-[12px] max-[639px]:top-[10px] max-[639px]:text-[20px]">✦</span>
          <span className="absolute left-[30px] bottom-[165px] text-[40px] text-black max-[639px]:left-[12px] max-[639px]:bottom-[80px] max-[639px]:text-[16px]">✦</span>
          <img src={hero} alt="Fashion Models" className="relative z-10 h-full w-full max-w-[640px] object-contain object-bottom" />
        </div>
      </div>
    </section>
  );
};

export default Hero;