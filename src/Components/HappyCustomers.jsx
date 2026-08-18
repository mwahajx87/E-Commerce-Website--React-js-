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
    <section className="w-full overflow-hidden bg-white px-[20px] pb-[60px] pt-[16px] max-[639px]:px-[16px] max-[639px]:pb-[28px] max-[639px]:pt-[18px]">
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
        <div className="mb-[24px] flex items-center justify-between gap-[16px] max-[639px]:mb-[14px]">
          <h2 className="m-0 text-left text-[42px] font-black leading-[1.1] tracking-[-1.1px] text-black max-[639px]:text-[25px] max-[639px]:leading-[0.95] max-[639px]:tracking-[-1px]">
            OUR HAPPY CUSTOMERS
          </h2>
          <div className="flex items-center gap-[10px] text-[18px] text-black max-[639px]:gap-[4px] max-[639px]:text-[14px]">
            <button className="flex h-[34px] w-[34px] items-center justify-center rounded-full border border-[#d8d8d8] bg-white text-[14px] transition-colors hover:bg-[#f5f5f5] max-[639px]:h-[28px] max-[639px]:w-[28px] max-[639px]:text-[12px]">
              <i className="fa-solid fa-arrow-left"></i>
            </button>
            <button className="flex h-[34px] w-[34px] items-center justify-center rounded-full border border-[#d8d8d8] bg-white text-[14px] transition-colors hover:bg-[#f5f5f5] max-[639px]:h-[28px] max-[639px]:w-[28px] max-[639px]:text-[12px]">
              <i className="fa-solid fa-arrow-right"></i>
            </button>
          </div>
        </div>

        <div className="customer-reviews-wrapper">
          <div className="customer-reviews-track gap-[10px] max-[639px]:gap-[8px]">
            {/* Duplicate customers for seamless loop */}
            {[...customers, ...customers].map((customer, index) => (
              <div
                className="customer-card rounded-[18px] max-[639px]:w-[calc(100vw-32px)] max-[639px]:min-h-[150px] max-[639px]:p-[14px]"
                key={`${customer.id}-${index}`}
              >
                <div className="mb-[8px] flex items-center gap-[4px] text-[15px] text-[#ffc633] max-[639px]:text-[13px]">
                  {[...Array(5)].map((_, i) => (
                    <i key={i} className="fa-solid fa-star"></i>
                  ))}
                </div>

                <div className="mb-[10px] flex items-center gap-[6px] max-[639px]:mb-[8px] max-[639px]:gap-[4px]">
                  <span className="text-[15px] font-bold text-black max-[639px]:text-[12px]">
                    {customer.name}
                  </span>
                  <span className="flex h-[16px] w-[16px] items-center justify-center rounded-full bg-[#01ab6c] text-[8px] font-bold text-white max-[639px]:h-[12px] max-[639px]:w-[12px]">
                    <i className="fa-solid fa-check"></i>
                  </span>
                </div>

                <p className="m-0 text-[14px] leading-[1.5] text-[#666] max-[639px]:text-[12px] max-[639px]:leading-[1.45]">
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
