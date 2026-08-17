import React from "react";

const Announcement = () => {
  return (
    <div
      className="
        w-full min-w-[250px]
        bg-black text-white
        flex justify-center items-center
        px-[20px] py-[12px]
        relative box-border

        max-[768px]:px-[18px] max-[768px]:py-[11px]
        max-[480px]:px-[15px] max-[480px]:py-[10px]
        max-[375px]:px-[12px] max-[375px]:py-[9px]
        max-[320px]:px-[10px] max-[320px]:py-[8px]
        max-[250px]:px-[8px] max-[250px]:py-[7px]
      "
    >
      <p
        className="
          m-0
          text-[14px]
          text-center
          max-w-[90%]

          max-[1024px]:text-[13.5px]
          max-[768px]:text-[13px]
          max-[600px]:text-[12px]
          max-[480px]:text-[11.5px]
          max-[480px]:leading-[1.6]
          max-[375px]:text-[11px]
          max-[375px]:leading-[1.5]
          max-[320px]:text-[10.5px]
          max-[320px]:leading-[1.5]
          max-[250px]:text-[10px]
          max-[250px]:leading-[1.4]
        "
      >
        Sign up and get 20% off to your first order.
        <a
          href="#"
          className="
            text-white
            underline
            ml-[4px]
            inline-block

            max-[480px]:block
            max-[480px]:mx-0
            max-[480px]:mt-[4px]
            max-[480px]:text-center
          "
        >
          Sign Up Now
        </a>
      </p>
    </div>
  );
};

export default Announcement;