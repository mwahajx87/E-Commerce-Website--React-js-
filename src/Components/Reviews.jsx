import { useCallback, useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { useCustomerAuth } from "../Context/useCustomerAuth";
import { getProductReviews, submitProductReview } from "../services/storeApi";

const Reviews = ({ product }) => {
  const { user } = useCustomerAuth();
  const [activeTab, setActiveTab] = useState("reviews");
  const [reviews, setReviews] = useState([]);
  const [status, setStatus] = useState("loading");
  const [error, setError] = useState("");
  const [showForm, setShowForm] = useState(false);
  const [rating, setRating] = useState("5");
  const [comment, setComment] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const loadReviews = useCallback(async () => {
    setStatus("loading");
    setError("");
    try {
      setReviews(await getProductReviews(product.id));
      setStatus("ready");
    } catch (requestError) {
      setError(requestError.message);
      setStatus("error");
    }
  }, [product.id]);

  useEffect(() => {
    let active = true;
    getProductReviews(product.id)
      .then((productReviews) => {
        if (!active) return;
        setReviews(productReviews);
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
  }, [product.id]);

  const averageRating = useMemo(() => {
    if (reviews.length === 0) return null;
    return (
      reviews.reduce((total, review) => total + review.rating, 0) /
      reviews.length
    ).toFixed(1);
  }, [reviews]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setError("");
    setIsSubmitting(true);
    try {
      await submitProductReview(product.id, {
        rating: Number(rating),
        comment,
      });
      setComment("");
      setShowForm(false);
      await loadReviews();
    } catch (requestError) {
      setError(requestError.message);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="mx-auto w-full max-w-[1280px] px-5 pb-14 pt-7">
      <div className="mb-6 flex justify-between border-b border-[#e5e5e5]">
        {[
          ["details", "Product Details"],
          ["reviews", "Rating & Reviews"],
          ["faq", "FAQs"],
        ].map(([tab, label]) => (
          <button
            key={tab}
            type="button"
            className={`border-0 border-b-2 bg-transparent px-2 py-4 text-sm ${
              activeTab === tab
                ? "border-black font-bold text-black"
                : "border-transparent text-[#777]"
            }`}
            onClick={() => setActiveTab(tab)}
          >
            {label}
          </button>
        ))}
      </div>

      {activeTab === "details" && (
        <div className="mx-auto max-w-[850px] py-6">
          <h2 className="mb-3 text-xl font-bold text-black">About this product</h2>
          <p className="text-sm leading-7 text-[#666]">
            {product.description || "No additional product details are available."}
          </p>
          <p className="mt-4 text-sm text-[#666]">
            Category: {product.category}. Available stock: {product.stock}.
          </p>
        </div>
      )}

      {activeTab === "reviews" && (
        <div>
          <div className="mb-5 flex flex-wrap items-center justify-between gap-4">
            <div>
              <h2 className="text-2xl font-black text-black">
                Customer reviews
              </h2>
              {averageRating ? (
                <p className="mt-1 text-sm text-[#666]">
                  ★ {averageRating} out of 5 · {reviews.length}{" "}
                  {reviews.length === 1 ? "review" : "reviews"}
                </p>
              ) : (
                <p className="mt-1 text-sm text-[#666]">No reviews yet.</p>
              )}
            </div>
            {user ? (
              <button
                type="button"
                onClick={() => setShowForm((open) => !open)}
                className="rounded-full bg-black px-5 py-3 text-sm font-semibold text-white"
              >
                {showForm ? "Cancel" : "Write a Review"}
              </button>
            ) : (
              <Link
                to="/account"
                className="rounded-full bg-black px-5 py-3 text-sm font-semibold text-white no-underline"
              >
                Sign in to review
              </Link>
            )}
          </div>

          {error && (
            <div role="alert" className="mb-4 rounded-lg bg-red-50 p-3 text-sm text-red-700">
              {error}
              {status === "error" && (
                <button
                  type="button"
                  className="ml-3 font-semibold underline"
                  onClick={loadReviews}
                >
                  Try again
                </button>
              )}
            </div>
          )}

          {showForm && user && (
            <form
              onSubmit={handleSubmit}
              className="mb-6 space-y-3 rounded-xl border border-[#e5e5e5] p-4 sm:p-5"
            >
              <label className="block text-sm font-semibold text-black">
                Rating
                <select
                  value={rating}
                  onChange={(event) => setRating(event.target.value)}
                  className="mt-1 block rounded-lg border border-[#ddd] bg-white px-3 py-2 font-normal"
                >
                  {[5, 4, 3, 2, 1].map((value) => (
                    <option key={value} value={value}>{value} / 5</option>
                  ))}
                </select>
              </label>
              <label className="block text-sm font-semibold text-black">
                Your review
                <textarea
                  required
                  minLength={10}
                  maxLength={2000}
                  value={comment}
                  onChange={(event) => setComment(event.target.value)}
                  placeholder="Share useful details about this product (at least 10 characters)."
                  className="mt-1 min-h-28 w-full rounded-lg border border-[#ddd] p-3 font-normal outline-none focus:border-black"
                />
              </label>
              <button
                type="submit"
                disabled={isSubmitting}
                className="rounded-full bg-black px-5 py-3 text-sm font-semibold text-white disabled:opacity-60"
              >
                {isSubmitting ? "Submitting..." : "Submit review"}
              </button>
            </form>
          )}

          {status === "loading" ? (
            <p className="py-8 text-sm text-[#666]">Loading reviews...</p>
          ) : status === "ready" && reviews.length === 0 ? (
            <p className="rounded-xl border border-[#e5e5e5] p-6 text-sm text-[#666]">
              Be the first to share a review.
            </p>
          ) : (
            <div className="grid gap-4 sm:grid-cols-2">
              {reviews.map((review) => (
                <article
                  key={review._id}
                  className="rounded-xl border border-[#e5e5e5] p-5"
                >
                  <p className="text-lg tracking-widest text-[#d89b00]" aria-label={`${review.rating} out of 5 stars`}>
                    {"★".repeat(review.rating)}{"☆".repeat(5 - review.rating)}
                  </p>
                  <h3 className="mt-2 font-bold text-black">{review.customerName}</h3>
                  <p className="mt-2 whitespace-pre-wrap text-sm leading-6 text-[#555]">
                    {review.comment}
                  </p>
                  <time className="mt-3 block text-xs text-[#888]" dateTime={review.createdAt}>
                    {new Date(review.createdAt).toLocaleDateString()}
                  </time>
                </article>
              ))}
            </div>
          )}
        </div>
      )}

      {activeTab === "faq" && (
        <div className="mx-auto max-w-[850px] space-y-5 py-6 text-sm leading-6 text-[#555]">
          <div>
            <h2 className="font-bold text-black">How do I place an order?</h2>
            <p>Add available products to your cart, enter delivery details, and choose cash on delivery.</p>
          </div>
          <div>
            <h2 className="font-bold text-black">Can I pay online?</h2>
            <p>Online payment is not enabled. Checkout currently supports cash on delivery.</p>
          </div>
          <div>
            <h2 className="font-bold text-black">How can I see my order status?</h2>
            <p>Orders placed while signed in appear in your customer account.</p>
          </div>
        </div>
      )}
    </section>
  );
};

export default Reviews;
