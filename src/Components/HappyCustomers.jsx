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
    <section className="w-full bg-white px-[20px] pb-[60px] pt-[16px] overflow-hidden">
      <style>{`
        @keyframes customerSlide {
          0% { transform: translateX(0); }
          100% { transform: translateX(calc(-50% - 10px)); }
        }
        .customer-reviews-wrapper {
          overflow: hidden;
        }
        .customer-reviews-wrapper:hover .customer-reviews-track {
          animation-play-state: paused;
        }
        .customer-reviews-track {
          display: flex;
          gap: 18px;
          animation: customerSlide 30s linear infinite;
          width: max-content;
        }
        .customer-card {
          flex-shrink: 0;
          width: clamp(260px, 32vw, 360px);
          min-height: 190px;
          border-radius: 18px;
          border: 1px solid #e5e5e5;
          background-color: white;
          padding: 18px;
          transition: all 0.3s ease;
        }
        .customer-card:hover {
          box-shadow: 0 8px 24px rgba(0, 0, 0, 0.12);
          border-color: #d0d0d0;
        }
      `}</style>

      <div className="mx-auto max-w-[1280px]">
        <div className="mb-[24px] flex items-center justify-between gap-[16px]">
          <h2 className="m-0 text-left text-[42px] font-black leading-[1.1] tracking-[-1.1px] text-black">
            OUR HAPPY CUSTOMERS
          </h2>
          <div className="flex items-center gap-[10px] text-[18px] text-black">
            <button className="flex h-[34px] w-[34px] items-center justify-center rounded-full border border-[#d8d8d8] bg-white text-[16px] transition-colors hover:bg-[#f5f5f5]">
              ←
            </button>
            <button className="flex h-[34px] w-[34px] items-center justify-center rounded-full border border-[#d8d8d8] bg-white text-[16px] transition-colors hover:bg-[#f5f5f5]">
              →
            </button>
          </div>
        </div>

        <div className="customer-reviews-wrapper">
          <div className="customer-reviews-track">
            {/* Duplicate customers for seamless loop */}
            {[...customers, ...customers].map((customer, index) => (
              <div
                className="customer-card"
                key={`${customer.id}-${index}`}
              >
                <div className="mb-[12px] text-[18px] tracking-[2px] text-[#ffc633]">
                  ★★★★★
                </div>

                <div className="mb-[12px] flex items-center gap-[8px]">
                  <span className="text-[17px] font-bold text-black">
                    {customer.name}
                  </span>
                  <span className="flex h-[18px] w-[18px] items-center justify-center rounded-full bg-[#01ab6c] text-[10px] font-bold text-white">
                    ✓
                  </span>
                </div>

                <p className="m-0 text-[14px] leading-[1.6] text-[#666]">
                  "{customer.review}"
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HappyCustomers;
