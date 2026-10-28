import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { getRecentReviews } from "../services/storeApi";

const HappyCustomers = () => {
  const [reviews, setReviews] = useState([]);
  const [status, setStatus] = useState("loading");
  const [error, setError] = useState("");
  const reviewsRef = useRef(null);

  useEffect(() => {
    let active = true;
    getRecentReviews()
      .then((recentReviews) => {
        if (!active) return;
        setReviews(recentReviews);
        setStatus("ready");
      })
      .catch((requestError) => {
        if (!active) return;
        setError(requestError.message);
        setStatus("error");
      });

    return () => {
      active = false;
    };
  }, []);

  const loadReviews = async () => {
    setStatus("loading");
    setError("");
    try {
      setReviews(await getRecentReviews());
      setStatus("ready");
    } catch (requestError) {
      setError(requestError.message);
      setStatus("error");
    }
  };

  const scrollReviews = (direction) => {
    const container = reviewsRef.current;
    if (!container) return;
    container.scrollBy({
      left: direction * container.clientWidth * 0.8,
      behavior: "smooth",
    });
  };

  return (
    <section className="w-full bg-white px-5 pb-[60px] pt-4 max-[639px]:px-4 max-[639px]:pb-7">
      <div className="mx-auto max-w-[1280px]">
        <div className="mb-6 flex items-center justify-between gap-4 max-[639px]:mb-4">
          <h2 className="m-0 text-[42px] font-black leading-tight tracking-[-1.1px] text-black max-[639px]:text-[25px]">
            CUSTOMER REVIEWS
          </h2>
          <div className="flex items-center gap-2">
            <button
              type="button"
              aria-label="Scroll reviews left"
              disabled={reviews.length === 0}
              onClick={() => scrollReviews(-1)}
              className="flex h-[34px] w-[34px] items-center justify-center rounded-full border border-[#d8d8d8] bg-white text-sm text-black hover:bg-[#f5f5f5] disabled:opacity-40"
            >
              <i className="fa-solid fa-arrow-left" />
            </button>
            <button
              type="button"
              aria-label="Scroll reviews right"
              disabled={reviews.length === 0}
              onClick={() => scrollReviews(1)}
              className="flex h-[34px] w-[34px] items-center justify-center rounded-full border border-[#d8d8d8] bg-white text-sm text-black hover:bg-[#f5f5f5] disabled:opacity-40"
            >
              <i className="fa-solid fa-arrow-right" />
            </button>
          </div>
        </div>

        {status === "loading" ? (
          <p className="py-8 text-sm text-[#666]">Loading customer reviews...</p>
        ) : status === "error" ? (
          <div className="rounded-xl border border-red-200 bg-red-50 p-4 text-sm text-red-700">
            <span role="alert">{error}</span>
            <button
              type="button"
              onClick={loadReviews}
              className="ml-3 font-semibold underline"
            >
              Try again
            </button>
          </div>
        ) : reviews.length === 0 ? (
          <div className="rounded-xl border border-[#e5e5e5] p-6 text-center">
            <p className="mb-4 text-sm text-[#666]">
              No customer reviews yet. Sign in and be the first to share one.
            </p>
            <Link
              to="/category"
              className="text-sm font-semibold text-black underline"
            >
              Browse products
            </Link>
          </div>
        ) : (
          <div
            ref={reviewsRef}
            className="flex snap-x snap-mandatory gap-4 overflow-x-auto scroll-smooth pb-3"
          >
            {reviews.map((review) => (
              <article
                key={review._id}
                className="w-[min(360px,85vw)] shrink-0 snap-start rounded-[18px] border border-[#e5e5e5] bg-white p-5"
              >
                <p
                  className="text-lg tracking-widest text-[#d89b00]"
                  aria-label={`${review.rating} out of 5 stars`}
                >
                  {"★".repeat(review.rating)}{"☆".repeat(5 - review.rating)}
                </p>
                <h3 className="mt-2 font-bold text-black">
                  {review.customerName}
                </h3>
                <p className="mt-1 text-xs font-medium text-[#777]">
                  {review.productName}
                </p>
                <p className="mt-3 line-clamp-4 text-sm leading-6 text-[#666]">
                  {review.comment}
                </p>
              </article>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default HappyCustomers;
