import { useState } from "react";
import { subscribeToNewsletter } from "../services/storeApi";

const Newsletter = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isError, setIsError] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage("");
    setIsError(false);
    setIsSubmitting(true);
    try {
      const result = await subscribeToNewsletter(email);
      setMessage(result.message);
      setEmail("");
    } catch (error) {
      setIsError(true);
      setMessage(error.message);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="newsletter" className="w-full bg-white px-[20px] pb-[54px] pt-[18px] max-[639px]:px-[16px] max-[639px]:pb-[26px] max-[639px]:pt-[22px]">
      <div className="mx-auto flex max-w-[1280px] items-center justify-between gap-[30px] rounded-[24px] bg-black px-[34px] py-[28px] max-[639px]:block max-[639px]:rounded-[18px] max-[639px]:px-[22px] max-[639px]:py-[32px]">
        <h2 className="m-0 max-w-[600px] text-[40px] font-black leading-[0.9] tracking-[-2.1px] text-white max-[639px]:text-[28px] max-[639px]:leading-[0.92] max-[639px]:tracking-[-1px]">
          STAY UP TO DATE ABOUT
          <br />
          OUR LATEST OFFERS
        </h2> 

        <form className="w-[500px] max-[639px]:mt-[24px] max-[639px]:w-full" onSubmit={handleSubmit}>
          <div className="flex h-[56px] items-center gap-[10px] rounded-full bg-white px-[18px]">
            <span className="text-[18px] text-[#777]">✉</span>
            <input
              type="email"
              required
              maxLength={254}
              placeholder="Enter your email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full border-none bg-transparent text-[16px] text-black outline-none placeholder:text-[#777] max-[639px]:text-[12px]"
            />
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="mt-[12px] h-[56px] w-full rounded-full border-none bg-white text-[16px] font-semibold text-black max-[639px]:h-[42px] max-[639px]:text-[12px]"
          >
            {isSubmitting ? "Subscribing..." : "Subscribe to Newsletter"}
          </button>

          {message && (
            <p className={`mt-[10px] text-[12px] ${isError ? "text-red-200" : "text-white"}`} role={isError ? "alert" : "status"}>{message}</p>
          )}
        </form>
      </div>
    </section>
  );
};

export default Newsletter;
