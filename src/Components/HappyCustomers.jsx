import React from "react";

const customers = [
  {
    id: 1,
    name: "Sarah M.",
    review:
      "I'm blown away by the quality and style of the clothes I received from SHOP.CO. From casual wear to elegant dresses, every piece I've bought has exceeded my expectations.",
  },
  {
    id: 2,
    name: "Alex K.",
    review:
      "Finding clothes that align with my personal style used to be a challenge until I discovered SHOP.CO. The range of options they offer is truly remarkable.",
  },
  {
    id: 3,
    name: "James L.",
    review:
      "As someone who's always on the lookout for unique fashion pieces, I'm thrilled to have discovered SHOP.CO. The selection is both trendy and diverse.",
  },
  {
    id: 4,
    name: "Emma R.",
    review:
      "The quality is amazing and everything fits perfectly. SHOP.CO has quickly become my favorite place to shop for stylish clothes.",
  },
  {
    id: 5,
    name: "Daniel T.",
    review:
      "Great quality, fast delivery and an excellent variety of styles. I'll definitely be shopping here again.",
  },
];

const HappyCustomers = () => {
  return (
    <section className="w-full py-[70px] pb-[90px] bg-white box-border overflow-hidden max-[768px]:py-[55px] max-[768px]:pb-[65px] max-[600px]:py-[50px] max-[600px]:pb-[60px] max-[480px]:py-[40px] max-[480px]:pb-[50px]">
      {/* Heading */}
      <h2 className="w-[88%] max-w-[1240px] mx-auto mb-[45px] text-left font-sans text-[40px] leading-[1.1] font-black text-black tracking-[-1px] max-[768px]:text-[32px] max-[600px]:text-[28px] max-[600px]:mb-[30px] max-[480px]:text-[24px] max-[480px]:mb-[24px]">
        OUR HAPPY CUSTOMERS
      </h2>

      {/* Slider Wrapper */}
      <div className="w-full overflow-hidden group">
        {/* Track */}
        <div className="flex w-max gap-[20px] animate-[customerSlide_30s_linear_infinite] group-hover:[animation-play-state:paused] max-[600px]:gap-[15px] max-[600px]:[animation-duration:25s]">
          {[...customers, ...customers].map((customer, index) => (
            <div
              key={`${customer.id}-${index}`}
              className="w-[380px] min-h-[220px] p-[28px] box-border shrink-0 bg-white border border-[#e5e5e5] rounded-[20px] max-[768px]:w-[320px] max-[768px]:p-[24px] max-[600px]:w-[300px] max-[600px]:p-[22px] max-[480px]:w-[260px] max-[480px]:min-h-[210px] max-[480px]:p-[18px] max-[480px]:rounded-[15px]"
            >
              {/* Stars */}
              <div className="mb-[15px] text-[#ffc633] text-[21px] leading-none tracking-[2px] max-[600px]:text-[19px] max-[600px]:mb-[13px] max-[480px]:text-[17px]">
                ★★★★★
              </div>

              {/* Customer Name */}
              <div className="flex items-center gap-[7px] mb-[12px]">
                <span className="text-black text-[20px] font-bold leading-[1.2] max-[600px]:text-[18px] max-[480px]:text-[16px]">
                  {customer.name}
                </span>

                {/* Verified */}
                <span className="w-[19px] h-[19px] flex items-center justify-center shrink-0 rounded-full bg-[#01ab6c] text-white text-[12px] font-bold leading-none max-[600px]:w-[18px] max-[600px]:h-[18px] max-[600px]:text-[11px]">
                  ✓
                </span>
              </div>

              {/* Review */}
              <p className="m-0 text-[#666] text-[15px] leading-[1.6] font-normal max-[600px]:text-[14px] max-[480px]:text-[13px]">
                "{customer.review}"
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Tailwind custom animation */}
      <style>
        {`
          @keyframes customerSlide {
            0% { transform: translateX(0); }
            100% { transform: translateX(calc(-50% - 10px)); }
          }
        `}
      </style>
    </section>
  );
};

export default HappyCustomers;
