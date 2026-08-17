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
    <section className="w-full bg-white pb-[70px] px-[6%] box-border max-[1200px]:px-[5%] max-[1200px]:pb-[65px] max-[1024px]:px-[4%] max-[1024px]:pb-[60px] max-[768px]:px-[4%] max-[768px]:pb-[55px] max-[600px]:px-[20px] max-[600px]:pb-[50px] max-[480px]:px-[15px] max-[480px]:pb-[45px] max-[375px]:px-[12px] max-[375px]:pb-[40px] max-[320px]:px-[10px] max-[320px]:pb-[35px] max-[250px]:min-w-[250px] max-[250px]:overflow-x-auto max-[250px]:px-[8px] max-[250px]:pb-[25px]">
      <div className="relative mx-auto flex w-full max-w-[1240px] items-center justify-between gap-[50px] rounded-[20px] bg-black px-[60px] py-[40px] box-border max-[1200px]:gap-[40px] max-[1200px]:px-[50px] max-[1200px]:py-[38px] max-[1024px]:flex-col max-[1024px]:items-start max-[1024px]:gap-[30px] max-[1024px]:px-[40px] max-[1024px]:py-[35px] max-[768px]:gap-[28px] max-[768px]:px-[30px] max-[768px]:py-[32px] max-[600px]:gap-[25px] max-[600px]:rounded-[18px] max-[600px]:px-[22px] max-[600px]:py-[30px] max-[480px]:gap-[20px] max-[480px]:rounded-[16px] max-[480px]:px-[18px] max-[480px]:py-[25px] max-[375px]:gap-[16px] max-[375px]:rounded-[14px] max-[375px]:px-[15px] max-[375px]:py-[22px] max-[320px]:gap-[14px] max-[320px]:rounded-[12px] max-[320px]:px-[12px] max-[320px]:py-[18px] max-[250px]:gap-[10px] max-[250px]:rounded-[10px] max-[250px]:px-[10px] max-[250px]:py-[14px]">
        <h2 className="m-0 font-sans text-[32px] font-black leading-[1.15] tracking-[-0.5px] text-white max-[1200px]:text-[30px] max-[1024px]:text-[30px] max-[768px]:text-[27px] max-[600px]:text-[25px] max-[480px]:text-[22px] max-[375px]:text-[19px] max-[320px]:text-[17px] max-[250px]:text-[15px]">
          STAY UPTO DATE ABOUT
          <br />
          OUR LATEST OFFERS
        </h2>

        <form
          className="flex w-[380px] shrink-0 flex-col gap-[12px] max-[1200px]:w-[340px] max-[1024px]:w-full max-[1024px]:max-w-[450px] max-[768px]:max-w-[420px] max-[600px]:w-full"
          onSubmit={handleSubmit}
        >
          <div className="flex h-[48px] w-full items-center gap-[10px] rounded-[25px] bg-white px-[16px] box-border max-[480px]:h-[44px] max-[375px]:h-[42px] max-[320px]:h-[40px] max-[250px]:h-[36px]">
            <span className="text-[18px] text-[#777]">✉</span>
            <input
              type="email"
              placeholder="Enter your email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full bg-transparent font-sans text-[14px] text-black outline-none border-none placeholder:text-[#777] max-[375px]:text-[13px] max-[320px]:text-[12px] max-[250px]:text-[11px]"
            />
          </div>

          <button
            type="submit"
            className="h-[48px] w-full cursor-pointer rounded-[25px] border-none bg-white font-sans text-[14px] font-semibold text-black transition duration-200 ease-in-out hover:bg-[#e8e8e8] max-[480px]:h-[44px] max-[375px]:h-[42px] max-[375px]:text-[13px] max-[320px]:h-[40px] max-[320px]:text-[12px] max-[250px]:h-[36px] max-[250px]:text-[11px]"
          >
            Subscribe to Newsletter
          </button>
        </form>

        {message && (
          <p className="absolute bottom-[12px] left-[60px] font-sans text-[13px] text-white max-[600px]:static max-[600px]:-mt-[10px] max-[600px]:text-[12px] max-[375px]:text-[11px] max-[250px]:text-[10px]">
            {message}
          </p>
        )}
      </div>
    </section>
  );
};

export default Newsletter;
