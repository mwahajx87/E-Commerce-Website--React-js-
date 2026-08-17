import hero from "../assets/Rectangle 2.png";

const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-[#f2f0f1] px-[20px] py-[18px]">
      <div className="mx-auto grid max-w-[1280px] grid-cols-[1fr_1fr] items-end gap-[10px]">
        <div className="z-10 pb-[30px] pt-[20px]">
          <h1 className="m-0 max-w-[460px] text-[64px] font-black leading-[0.82] tracking-[-2.6px] text-black">
            FIND CLOTHES
            <br />
            THAT MATCHES
            <br />
            YOUR STYLE
          </h1>

          <p className="mt-[20px] max-w-[470px] text-[14px] leading-[1.5] text-[#666]">
            Browse through our diverse range of meticulously crafted garments, designed to bring out your individuality and cater to your sense of style.
          </p>

          <button className="mt-[26px] h-[48px] w-[172px] rounded-full border-none bg-black text-[14px] font-semibold text-white">
            Shop Now
          </button>

          <div className="mt-[42px] flex items-start gap-[28px]">
            <div className="min-w-[150px] border-r border-[#d7d7d7] pr-[24px]">
              <h3 className="m-0 text-[32px] font-bold leading-none text-black">200+</h3>
              <p className="mt-[6px] whitespace-nowrap text-[12px] text-[#666]">International Brands</p>
            </div>

            <div className="min-w-[170px] border-r border-[#d7d7d7] pr-[24px]">
              <h3 className="m-0 text-[32px] font-bold leading-none text-black">2,000+</h3>
              <p className="mt-[6px] whitespace-nowrap text-[12px] text-[#666]">High-Quality Products</p>
            </div>

            <div className="min-w-[150px]">
              <h3 className="m-0 text-[32px] font-bold leading-none text-black">30,000+</h3>
              <p className="mt-[6px] whitespace-nowrap text-[12px] text-[#666]">Happy Customers</p>
            </div>
          </div>
        </div>

        <div className="relative flex h-[470px] items-end justify-center overflow-hidden">
          <span className="absolute right-[35px] top-[20px] text-[52px] text-black">✦</span>
          <span className="absolute left-[30px] bottom-[165px] text-[40px] text-black">✦</span>
          <img src={hero} alt="Fashion Models" className="relative z-10 h-full w-full max-w-[640px] object-contain object-bottom" />
        </div>
      </div>
    </section>
  );
};

export default Hero;