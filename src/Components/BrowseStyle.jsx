import React from "react";

import casual from "../../assets/casual.png";
import formal from "../../assets/formal.png";
import party from "../../assets/party.png";
import gym from "../../assets/gym.png";

const BrowseStyle = () => {
  const styles = [
    {
      id: 1,
      name: "Casual",
      image: casual,
      className: "casual",
    },
    {
      id: 2,
      name: "Formal",
      image: formal,
      className: "formal",
    },
    {
      id: 3,
      name: "Party",
      image: party,
      className: "party",
    },
    {
      id: 4,
      name: "Gym",
      image: gym,
      className: "gym",
    },
  ];

  return (
    <section
      className="
        w-full min-w-[250px]
        px-[6%] pt-[60px] pb-[70px]
        box-border
        bg-white

        max-[768px]:px-[4%] max-[768px]:pt-[50px] max-[768px]:pb-[60px]

        max-[600px]:px-[20px] max-[600px]:py-[40px]

        max-[480px]:px-[15px] max-[480px]:py-[32px]

        max-[375px]:px-[12px] max-[375px]:py-[26px]

        max-[320px]:px-[10px] max-[320px]:py-[20px]

        max-[250px]:px-[8px] max-[250px]:py-[16px]
      "
    >
      <div
        className="
          w-full max-w-[1240px]
          mx-auto
          bg-[#f0f0f0]
          rounded-[30px]
          px-[60px] pt-[55px] pb-[65px]
          box-border

          max-[1200px]:px-[45px] max-[1200px]:pt-[50px] max-[1200px]:pb-[55px]

          max-[1024px]:px-[35px] max-[1024px]:py-[45px]

          max-[768px]:px-[30px] max-[768px]:py-[40px]

          max-[600px]:px-[20px] max-[600px]:py-[35px]
          max-[600px]:rounded-[20px]

          max-[480px]:px-[16px] max-[480px]:py-[28px]
          max-[480px]:rounded-[16px]

          max-[375px]:px-[14px] max-[375px]:py-[22px]
          max-[375px]:rounded-[14px]

          max-[320px]:px-[12px] max-[320px]:py-[18px]
          max-[320px]:rounded-[12px]

          max-[250px]:px-[10px] max-[250px]:py-[14px]
          max-[250px]:rounded-[10px]
        "
      >
        <h2
          className="
            m-0 mb-[45px]
            text-center
            font-[Arial,Helvetica,sans-serif]
            text-[38px]
            font-black
            text-black
            tracking-[-1px]

            max-[1024px]:text-[32px]

            max-[600px]:text-[26px]
            max-[600px]:mb-[30px]

            max-[480px]:text-[22px]
            max-[480px]:mb-[24px]

            max-[375px]:text-[19px]
            max-[375px]:mb-[20px]

            max-[320px]:text-[17px]
            max-[320px]:mb-[16px]

            max-[250px]:text-[15px]
            max-[250px]:mb-[14px]
          "
        >
          BROWSE BY DRESS STYLE
        </h2>

        <div className="flex flex-wrap gap-[20px]">
          {styles.map((style) => (
            <div
              key={style.id}
              className={`
                relative
                h-[250px]
                overflow-hidden
                bg-white
                rounded-[20px]
                cursor-pointer
                box-border
                transition-transform duration-[250ms] ease-in-out
                hover:-translate-y-[3px]

                max-[1024px]:h-[220px]
                max-[768px]:h-[210px]

                max-[600px]:h-[200px]

                max-[480px]:h-[170px]

                max-[375px]:h-[150px]

                max-[320px]:h-[130px]

                max-[250px]:h-[110px]

                ${
                  style.className === "casual" || style.className === "gym"
                    ? "flex-[1_1_calc(40%-10px)]"
                    : "flex-[1_1_calc(60%-10px)]"
                }

                max-[768px]:flex-[1_1_calc(50%-10px)]
                max-[600px]:flex-[1_1_100%]
              `}
            >
              <img
                src={style.image}
                alt={style.name}
                className="
                  w-full
                  h-full
                  block
                  object-cover
                "
              />

              <h3
                className="
                  absolute
                  top-[25px]
                  left-[30px]
                  m-0
                  z-[2]
                  font-[Arial,Helvetica,sans-serif]
                  text-[28px]
                  font-bold
                  text-black

                  max-[768px]:text-[24px]
                  max-[768px]:top-[20px]
                  max-[768px]:left-[24px]

                  max-[480px]:text-[20px]
                  max-[480px]:top-[16px]
                  max-[480px]:left-[18px]

                  max-[375px]:text-[17px]
                  max-[375px]:top-[14px]
                  max-[375px]:left-[14px]

                  max-[320px]:text-[15px]
                  max-[320px]:top-[12px]
                  max-[320px]:left-[12px]

                  max-[250px]:text-[13px]
                  max-[250px]:top-[10px]
                  max-[250px]:left-[10px]
                "
              >
                {style.name}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BrowseStyle;
