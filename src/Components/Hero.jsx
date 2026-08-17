import React from "react";
import hero from "../assets/Rectangle 2.png";

const Hero = () => {
  return (
    <section
      className="
        w-full min-w-[250px]
        h-[545px]
        bg-[#f2f0f1]
        flex
        relative
        overflow-hidden

        max-[768px]:h-auto
        max-[768px]:min-h-[650px]

        max-[600px]:min-h-[680px]

        max-[480px]:min-h-[630px]

        max-[375px]:min-h-[560px]

        max-[320px]:min-h-[500px]

        max-[250px]:min-h-[440px]
      "
    >
      {/* LEFT CONTENT */}
      <div
        className="
          w-[52%]
          pl-[8.3%]
          pt-[72px]
          relative
          z-[10]

          max-[1200px]:pl-[6%]

          max-[1024px]:pl-[5%]

          max-[768px]:w-full
          max-[768px]:px-[25px]
          max-[768px]:pt-[50px]

          max-[600px]:px-[20px]
          max-[600px]:pt-[40px]

          max-[480px]:px-[16px]
          max-[480px]:pt-[32px]

          max-[375px]:px-[14px]
          max-[375px]:pt-[26px]

          max-[320px]:px-[12px]
          max-[320px]:pt-[20px]

          max-[250px]:px-[10px]
          max-[250px]:pt-[16px]
        "
      >
        {/* Title */}
        <h1
          className="
            m-0
            text-black
            font-[Arial,Helvetica,sans-serif]
            text-[56px]
            font-black
            leading-[0.96]
            tracking-[-2.5px]

            max-[1200px]:text-[48px]

            max-[1024px]:text-[44px]

            max-[768px]:text-[42px]

            max-[600px]:text-[38px]
            max-[600px]:tracking-[-1.5px]

            max-[480px]:text-[30px]
            max-[480px]:tracking-[-1px]

            max-[375px]:text-[25px]

            max-[320px]:text-[21px]

            max-[250px]:text-[17px]
          "
        >
          FIND CLOTHES
          <br />
          THAT MATCHES
          <br />
          YOUR STYLE
        </h1>

        {/* Description */}
        <p
          className="
            w-[500px]
            mt-[24px]
            mb-0
            text-[#737373]
            font-[Arial,Helvetica,sans-serif]
            text-[14px]
            leading-[1.45]

            max-[1200px]:w-[430px]

            max-[1024px]:w-[380px]

            max-[768px]:w-[90%]

            max-[600px]:w-full
            max-[600px]:text-[13px]

            max-[480px]:text-[12px]
            max-[480px]:mt-[16px]

            max-[375px]:text-[11px]
            max-[375px]:mt-[12px]

            max-[320px]:text-[10px]
            max-[320px]:mt-[10px]

            max-[250px]:text-[9px]
            max-[250px]:mt-[8px]
          "
        >
          Browse through our diverse range of meticulously crafted garments,
          designed to bring out your individuality and cater to your sense of
          style.
        </p>

        {/* Shop Button */}
        <button
          className="
            w-[180px]
            h-[48px]
            mt-[25px]
            border-0
            rounded-[30px]
            bg-black
            text-white
            font-[Arial,Helvetica,sans-serif]
            text-[14px]
            font-medium
            cursor-pointer
            hover:bg-[#222]

            max-[480px]:w-[150px]
            max-[480px]:h-[44px]
            max-[480px]:text-[13px]
            max-[480px]:mt-[18px]

            max-[375px]:w-[135px]
            max-[375px]:h-[40px]
            max-[375px]:text-[12px]

            max-[320px]:w-[120px]
            max-[320px]:h-[36px]
            max-[320px]:text-[11px]
            max-[320px]:mt-[14px]

            max-[250px]:w-[100px]
            max-[250px]:h-[32px]
            max-[250px]:text-[10px]
          "
        >
          Shop Now
        </button>

        {/* Stats */}
        <div
          className="
            flex
            items-center
            mt-[40px]

            max-[600px]:gap-[12px]

            max-[480px]:mt-[26px]
            max-[480px]:gap-[8px]
          "
        >
          {/* Stat 1 */}
          <div
            className="
              pr-[28px]
              mr-[28px]
              border-r
              border-[#d5d5d5]

              max-[600px]:pr-[14px]
              max-[600px]:mr-[14px]

              max-[480px]:pr-[10px]
              max-[480px]:mr-[10px]
            "
          >
            <h3
              className="
                m-0
                text-black
                font-[Arial,Helvetica,sans-serif]
                text-[32px]
                font-medium
                leading-none

                max-[600px]:text-[24px]

                max-[480px]:text-[19px]

                max-[375px]:text-[16px]

                max-[320px]:text-[14px]

                max-[250px]:text-[12px]
              "
            >
              200+
            </h3>

            <p
              className="
                m-[8px_0_0]
                text-[#737373]
                font-[Arial,Helvetica,sans-serif]
                text-[13px]
                whitespace-nowrap

                max-[600px]:text-[10px]

                max-[480px]:text-[8.5px]

                max-[375px]:text-[8px]

                max-[320px]:text-[7px]

                max-[250px]:text-[6.5px]
              "
            >
              International Brands
            </p>
          </div>

          {/* Stat 2 */}
          <div
            className="
              pr-[28px]
              mr-[28px]
              border-r
              border-[#d5d5d5]

              max-[600px]:pr-[14px]
              max-[600px]:mr-[14px]

              max-[480px]:pr-[10px]
              max-[480px]:mr-[10px]
            "
          >
            <h3
              className="
                m-0
                text-black
                font-[Arial,Helvetica,sans-serif]
                text-[32px]
                font-medium
                leading-none

                max-[600px]:text-[24px]

                max-[480px]:text-[19px]

                max-[375px]:text-[16px]

                max-[320px]:text-[14px]

                max-[250px]:text-[12px]
              "
            >
              2,000+
            </h3>

            <p
              className="
                m-[8px_0_0]
                text-[#737373]
                font-[Arial,Helvetica,sans-serif]
                text-[13px]
                whitespace-nowrap

                max-[600px]:text-[10px]

                max-[480px]:text-[8.5px]

                max-[375px]:text-[8px]

                max-[320px]:text-[7px]

                max-[250px]:text-[6.5px]
              "
            >
              High-Quality Products
            </p>
          </div>

          {/* Stat 3 */}
          <div className="mr-0">
            <h3
              className="
                m-0
                text-black
                font-[Arial,Helvetica,sans-serif]
                text-[32px]
                font-medium
                leading-none

                max-[600px]:text-[24px]

                max-[480px]:text-[19px]

                max-[375px]:text-[16px]

                max-[320px]:text-[14px]

                max-[250px]:text-[12px]
              "
            >
              30,000+
            </h3>

            <p
              className="
                m-[8px_0_0]
                text-[#737373]
                font-[Arial,Helvetica,sans-serif]
                text-[13px]
                whitespace-nowrap

                max-[600px]:text-[10px]

                max-[480px]:text-[8.5px]

                max-[375px]:text-[8px]

                max-[320px]:text-[7px]

                max-[250px]:text-[6.5px]
              "
            >
              Happy Customers
            </p>
          </div>
        </div>
      </div>

      {/* RIGHT IMAGE AREA */}
      <div
        className="
          absolute
          right-0
          bottom-0
          w-[55%]
          h-full
          flex
          items-end
          justify-center

          max-[768px]:w-full
          max-[768px]:h-[380px]
          max-[768px]:top-[320px]

          max-[600px]:top-[370px]
          max-[600px]:h-[360px]

          max-[480px]:top-[330px]
          max-[480px]:h-[300px]

          max-[375px]:top-[290px]
          max-[375px]:h-[260px]

          max-[320px]:top-[255px]
          max-[320px]:h-[220px]

          max-[250px]:top-[210px]
          max-[250px]:h-[190px]
        "
      >
        {/* Top Star */}
        <span
          className="
            absolute
            block
            text-black
            leading-none
            font-[Arial,sans-serif]
            z-[5]
            top-[65px]
            right-[75px]
            text-[78px]

            max-[1200px]:right-[45px]

            max-[1024px]:right-[35px]
            max-[1024px]:text-[68px]

            max-[768px]:top-[60px]
            max-[768px]:right-[60px]
            max-[768px]:text-[60px]

            max-[600px]:top-[25px]
            max-[600px]:right-[30px]
            max-[600px]:text-[52px]

            max-[480px]:top-[15px]
            max-[480px]:right-[20px]
            max-[480px]:text-[42px]

            max-[375px]:top-[12px]
            max-[375px]:right-[16px]
            max-[375px]:text-[34px]

            max-[320px]:top-[10px]
            max-[320px]:right-[12px]
            max-[320px]:text-[28px]

            max-[250px]:top-[8px]
            max-[250px]:right-[10px]
            max-[250px]:text-[22px]
          "
        >
          ✦
        </span>

        {/* Middle Star */}
        <span
          className="
            absolute
            block
            text-black
            leading-none
            font-[Arial,sans-serif]
            z-[5]
            top-[285px]
            left-[35px]
            text-[48px]

            max-[1024px]:text-[42px]

            max-[768px]:top-[260px]
            max-[768px]:left-[30px]
            max-[768px]:text-[40px]

            max-[600px]:top-[175px]
            max-[600px]:left-[20px]
            max-[600px]:text-[34px]

            max-[480px]:top-[140px]
            max-[480px]:left-[15px]
            max-[480px]:text-[28px]

            max-[375px]:top-[120px]
            max-[375px]:left-[12px]
            max-[375px]:text-[22px]

            max-[320px]:top-[100px]
            max-[320px]:left-[10px]
            max-[320px]:text-[18px]

            max-[250px]:top-[82px]
            max-[250px]:left-[8px]
            max-[250px]:text-[14px]
          "
        >
          ✦
        </span>

        {/* Models */}
        <img
          src={hero}
          alt="Fashion Models"
          className="
            absolute
            w-[600px]
            max-w-none
            h-[550px]
            right-[25px]
            bottom-[-2px]
            object-contain
            z-[2]

            max-[1200px]:w-[620px]
            max-[1200px]:right-0

            max-[1024px]:w-[560px]
            max-[1024px]:right-[-10px]

            max-[768px]:w-[560px]
            max-[768px]:right-[-30px]

            max-[600px]:w-[480px]
            max-[600px]:right-[-80px]

            max-[480px]:w-[380px]
            max-[480px]:right-[-60px]

            max-[375px]:w-[320px]
            max-[375px]:right-[-40px]

            max-[320px]:w-[270px]
            max-[320px]:right-[-30px]

            max-[250px]:w-[220px]
            max-[250px]:right-[-20px]
          "
        />
      </div>
    </section>
  );
};

export default Hero;