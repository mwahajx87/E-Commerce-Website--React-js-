import { useState } from "react";

const reviews = [
  {
    name: "Samantha D.",
    rating: 5,
    text: '"I absolutely love this t-shirt! The design is unique and the fabric feels so comfortable. As a fellow designer, I appreciate the attention to detail. It\'s become my favorite go-to shirt."',
    date: "Posted on August 14, 2023",
  },
  {
    name: "Alex M.",
    rating: 5,
    text: '"The t-shirt exceeded my expectations! The colors are vibrant and the print quality is top-notch. Being a UI/UX designer myself, I\'m quite picky about aesthetics, and this t-shirt definitely gets a thumbs up from me."',
    date: "Posted on August 15, 2023",
  },
  {
    name: "Ethan R.",
    rating: 4.5,
    text: '"This t-shirt is a must-have for anyone who appreciates good design. The minimalist yet stylish pattern caught my eye, and the fit is perfect. I can see the designer\'s touch in every aspect of this shirt."',
    date: "Posted on August 16, 2023",
  },
  {
    name: "Olivia P.",
    rating: 4,
    text: '"As a UI/UX enthusiast, I value simplicity and functionality. This t-shirt not only represents those principles but also feels great to wear. It\'s evident that the designer poured their creativity into making this shirt stand out."',
    date: "Posted on August 17, 2023",
  },
  {
    name: "Liam K.",
    rating: 4,
    text: "\"This shirt is a fusion of comfort and creativity. The fabric is soft, and the design speaks volumes about the designer's skill. It's like wearing a piece of art that reflects my passion for both design and fashion.\"",
    date: "Posted on August 18, 2023",
  },
  {
    name: "Ava H.",
    rating: 4.5,
    text: "\"I'm not just wearing a t-shirt; I'm wearing a piece of design philosophy. The intricate details and thoughtful layout of the design make this shirt a conversation starter.\"",
    date: "Posted on August 19, 2023",
  },
];

const Stars = ({ rating }) => {
  return (
    <div className="flex gap-[3px] text-[16px] max-[480px]:text-[15px] max-[320px]:text-[13px]">
      {[1, 2, 3, 4, 5].map((star) => (
        <span
          key={star}
          className={
            star <= Math.floor(rating)
              ? "text-[#ffc633]"
              : "text-[#ffc633] opacity-[0.45]"
          }
        >
          ★
        </span>
      ))}
    </div>
  );
};

const Reviews = () => {
  const [activeTab, setActiveTab] = useState("reviews");
  const [showMore, setShowMore] = useState(false);

  // Load More click hone par 6 mein se pehle 4 reviews dobara jod dete hain
  const displayedReviews = showMore
    ? [...reviews, ...reviews.slice(0, 4)]
    : reviews;

  const tabBtnBaseStyle =
    "relative border-none bg-transparent py-[18px] px-[10px] text-[15px] font-sans text-[#777] cursor-pointer transition duration-200 ease-in-out hover:text-black max-[768px]:text-[13px] max-[768px]:py-[15px] max-[768px]:px-[5px] max-[600px]:text-[12px] max-[600px]:py-[14px] max-[600px]:px-[4px] max-[375px]:text-[11px] max-[375px]:py-[12px] max-[375px]:px-[3px] max-[320px]:text-[10px] max-[320px]:py-[10px] max-[320px]:px-[2px] max-[250px]:text-[8px] max-[250px]:py-[8px] max-[250px]:px-[2px]";

  const tabBtnActiveStyle =
    "text-black font-semibold after:content-[''] after:absolute after:bottom-[-1px] after:left-0 after:w-full after:h-[2px] after:bg-black";

  return (
    <section className="mx-auto mt-[35px] w-full max-w-[1440px] px-[40px] pb-[70px] box-border font-sans max-[1200px]:px-[30px] max-[1200px]:pb-[65px] max-[1024px]:px-[25px] max-[1024px]:pb-[60px] max-[768px]:mt-[28px] max-[768px]:px-[18px] max-[768px]:pb-[52px] max-[600px]:mt-[25px] max-[600px]:px-[16px] max-[600px]:pb-[50px] max-[375px]:px-[12px] max-[375px]:pb-[40px] max-[320px]:px-[10px] max-[320px]:pb-[32px] max-[250px]:min-w-[250px] max-[250px]:overflow-x-auto max-[250px]:px-[6px] max-[250px]:pb-[25px]">
      {/* Tabs */}
      <div className="mb-[24px] grid w-full grid-cols-3 border-b border-[#e5e5e5]">
        <button
          className={`${tabBtnBaseStyle} ${
            activeTab === "details" ? tabBtnActiveStyle : ""
          }`}
          onClick={() => setActiveTab("details")}
        >
          Product Details
        </button>

        <button
          className={`${tabBtnBaseStyle} ${
            activeTab === "reviews" ? tabBtnActiveStyle : ""
          }`}
          onClick={() => setActiveTab("reviews")}
        >
          Rating &amp; Reviews
        </button>

        <button
          className={`${tabBtnBaseStyle} ${
            activeTab === "faq" ? tabBtnActiveStyle : ""
          }`}
          onClick={() => setActiveTab("faq")}
        >
          FAQs
        </button>
      </div>

      {/* Product Details */}
      {activeTab === "details" && (
        <div className="mx-auto my-[35px] max-w-[850px]">
          <h2 className="mb-[18px] text-[25px] max-[320px]:text-[20px] max-[250px]:text-[15px]">
            Product Details
          </h2>

          <p className="mb-[12px] text-[14px] leading-[1.7] text-[#666] max-[320px]:text-[12px] max-[250px]:text-[10px]">
            This graphic t-shirt is designed for everyday comfort and style.
            Crafted from soft and breathable fabric, it offers a comfortable fit
            while maintaining a modern look.
          </p>

          <p className="mb-[12px] text-[14px] leading-[1.7] text-[#666] max-[320px]:text-[12px] max-[250px]:text-[10px]">
            Perfect for casual occasions and easy to pair with jeans, shorts, or
            other everyday outfits.
          </p>
        </div>
      )}

      {/* Reviews */}
      {activeTab === "reviews" && (
        <div>
          {/* Reviews Header */}
          <div className="mb-[22px] flex items-center justify-between max-[768px]:flex-col max-[768px]:items-start max-[768px]:gap-[15px]">
            <h2 className="m-0 text-[20px] font-bold text-[#111] max-[600px]:text-[19px] max-[480px]:text-[18px] max-[375px]:text-[16px] max-[320px]:text-[14px] max-[250px]:text-[12px]">
              All Reviews{" "}
              <span className="text-[14px] font-normal text-[#777] max-[375px]:text-[12px] max-[250px]:text-[9px]">
                (451)
              </span>
            </h2>

            <div className="flex items-center gap-[10px] max-[768px]:w-full max-[768px]:justify-end max-[480px]:justify-between">
              <button className="h-[44px] w-[44px] cursor-pointer rounded-full border-none bg-[#f3f3f3] font-sans text-[15px] transition duration-200 ease-in-out hover:bg-[#e8e8e8] max-[480px]:h-[40px] max-[480px]:w-[40px] max-[375px]:h-[36px] max-[375px]:w-[36px] max-[375px]:text-[13px] max-[320px]:h-[32px] max-[320px]:w-[32px] max-[320px]:text-[12px] max-[250px]:h-[26px] max-[250px]:w-[26px] max-[250px]:text-[10px]">
                <i className="fa-solid fa-sliders"></i>
              </button>

              <button className="flex h-[44px] cursor-pointer items-center gap-[12px] rounded-[25px] border-none bg-[#f3f3f3] px-[17px] font-sans text-[14px] transition duration-200 ease-in-out hover:bg-[#e8e8e8] max-[480px]:h-[40px] max-[480px]:px-[13px] max-[375px]:h-[36px] max-[375px]:px-[11px] max-[375px]:text-[12px] max-[320px]:h-[32px] max-[320px]:gap-[8px] max-[320px]:px-[9px] max-[320px]:text-[11px] max-[250px]:h-[26px] max-[250px]:gap-[6px] max-[250px]:px-[7px] max-[250px]:text-[9px]">
                Latest
                <i className="fa-solid fa-chevron-down text-[10px]"></i>
              </button>

              <button className="h-[44px] cursor-pointer rounded-[25px] border-none bg-black px-[22px] font-sans text-[13px] font-medium text-white transition duration-200 ease-in-out hover:bg-[#222] max-[480px]:h-[40px] max-[480px]:px-[16px] max-[375px]:h-[36px] max-[375px]:px-[14px] max-[375px]:text-[11px] max-[320px]:h-[32px] max-[320px]:px-[12px] max-[320px]:text-[10px] max-[250px]:h-[26px] max-[250px]:px-[9px] max-[250px]:text-[8px]">
                Write a Review
              </button>
            </div>
          </div>

          {/* Review Cards */}
          <div className="grid grid-cols-2 items-start gap-x-[30px] gap-y-[20px] max-[1200px]:gap-x-[24px] max-[1200px]:gap-y-[18px] max-[1024px]:gap-x-[20px] max-[1024px]:gap-y-[16px] max-[768px]:grid-cols-1 max-[768px]:gap-y-[14px]">
            {displayedReviews.map((review, index) => (
              <div
                className="w-full rounded-[16px] border border-[#e7e7e7] bg-white p-[20px] box-border max-[1200px]:p-[18px] max-[1024px]:p-[17px] max-[600px]:rounded-[14px] max-[600px]:p-[15px] max-[375px]:rounded-[12px] max-[375px]:p-[12px] max-[320px]:rounded-[10px] max-[320px]:p-[10px] max-[250px]:rounded-[8px] max-[250px]:p-[8px]"
                key={index}
              >
                <div className="flex items-center justify-between">
                  <Stars rating={review.rating} />

                  <button className="cursor-pointer border-none bg-transparent text-[14px] tracking-[1px] text-[#999]">
                    •••
                  </button>
                </div>

                <div className="mt-[10px] flex items-center gap-[6px] text-[14px] font-bold text-[#111] max-[375px]:text-[12px] max-[250px]:text-[10px]">
                  {review.name}

                  <span className="flex h-[15px] w-[15px] items-center justify-center rounded-full bg-[#00b341] text-[9px] font-bold text-white">
                    ✓
                  </span>
                </div>

                <p className="m-0 mt-[10px] pt-[20px] text-[13px] leading-[1.5] text-[#555] max-[480px]:text-[11px] max-[375px]:text-[10px] max-[320px]:text-[9px] max-[250px]:text-[8px]">
                  {review.text}
                </p>

                <p className="m-0 mt-[15px] pt-[20px] text-[11px] text-[#999] max-[250px]:text-[8px]">
                  {review.date}
                </p>
              </div>
            ))}
          </div>

          {/* Load More */}
          {!showMore && (
            <button
              className="mx-auto mt-[30px] block cursor-pointer rounded-[25px] border border-[#e5e5e5] bg-white px-[28px] py-[13px] font-sans text-[13px] text-[#111] transition duration-200 ease-in-out hover:bg-[#f5f5f5] max-[375px]:px-[22px] max-[375px]:py-[11px] max-[375px]:text-[12px] max-[250px]:px-[16px] max-[250px]:py-[8px] max-[250px]:text-[10px]"
              onClick={() => setShowMore(true)}
            >
              Load More Reviews
            </button>
          )}
        </div>
      )}

      {/* FAQ */}
      {activeTab === "faq" && (
        <div className="mx-auto my-[20px] max-w-[900px]">
          <div className="border-b border-[#e5e5e5]">
            <button className="flex w-full cursor-pointer items-center justify-between border-none bg-transparent px-[5px] py-[22px] text-left font-sans text-[15px] max-[320px]:px-[4px] max-[320px]:py-[16px] max-[320px]:text-[12px] max-[250px]:px-[3px] max-[250px]:py-[12px] max-[250px]:text-[10px]">
              What sizes are available?
              <span className="text-[20px]">+</span>
            </button>
          </div>

          <div className="border-b border-[#e5e5e5]">
            <button className="flex w-full cursor-pointer items-center justify-between border-none bg-transparent px-[5px] py-[22px] text-left font-sans text-[15px] max-[320px]:px-[4px] max-[320px]:py-[16px] max-[320px]:text-[12px] max-[250px]:px-[3px] max-[250px]:py-[12px] max-[250px]:text-[10px]">
              Is this product made from breathable fabric?
              <span className="text-[20px]">+</span>
            </button>
          </div>

          <div className="border-b border-[#e5e5e5]">
            <button className="flex w-full cursor-pointer items-center justify-between border-none bg-transparent px-[5px] py-[22px] text-left font-sans text-[15px] max-[320px]:px-[4px] max-[320px]:py-[16px] max-[320px]:text-[12px] max-[250px]:px-[3px] max-[250px]:py-[12px] max-[250px]:text-[10px]">
              Can I return or exchange this product?
              <span className="text-[20px]">+</span>
            </button>
          </div>

          <div className="border-b border-[#e5e5e5]">
            <button className="flex w-full cursor-pointer items-center justify-between border-none bg-transparent px-[5px] py-[22px] text-left font-sans text-[15px] max-[320px]:px-[4px] max-[320px]:py-[16px] max-[320px]:text-[12px] max-[250px]:px-[3px] max-[250px]:py-[12px] max-[250px]:text-[10px]">
              How long does delivery take?
              <span className="text-[20px]">+</span>
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default Reviews;
