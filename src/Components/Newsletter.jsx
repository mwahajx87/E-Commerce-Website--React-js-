import { useState } from "react";

const Newsletter = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email) {
      setMessage("Please enter your email.");
      return;
    }

    if (!email.includes("@")) {
      setMessage("Please enter a valid email.");
      return;
    }

    setMessage("You're subscribed successfully!");
    setEmail("");
  };

  return (
    <section className="w-full bg-white px-5 pb-[54px] pt-[18px]">
      <div className="mx-auto flex max-w-[1280px] items-center justify-between gap-[30px] rounded-[24px] bg-black px-[34px] py-[28px]">
        <h2 className="m-0 max-w-[600px] text-[40px] font-black leading-[0.9] tracking-[-2.1px] text-white">
          STAY UP TO DATE ABOUT
          <br />
          OUR LATEST OFFERS
        </h2> 

        <form className="w-[500px]" onSubmit={handleSubmit}>
          <div className="flex h-[56px] items-center gap-[10px] rounded-full bg-white px-[18px]">
            <span className="text-[18px] text-[#777]">✉</span>
            <input
              type="email"
              placeholder="Enter your email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full border-none bg-transparent text-[16px] text-black outline-none placeholder:text-[#777]"
            />
          </div>

          <button
            type="submit"
            className="mt-[12px] h-[56px] w-full rounded-full border-none bg-white text-[16px] font-semibold text-black"
          >
            Subscribe to Newsletter
          </button>

          {message && (
            <p className="mt-[10px] text-[12px] text-white">{message}</p>
          )}
        </form>
      </div>
    </section>
  );
};

export default Newsletter;
