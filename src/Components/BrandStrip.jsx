import React from "react";

import versace from "../../assets/versace.png";
import zara from "../../assets/zara.png";
import gucci from "../../assets/gucci.png";
import prada from "../../assets/prada.png";
import calvinKlein from "../../assets/calvin-klein.png";

const BrandStrip = () => {
  return (
    <section
      className="
        w-full min-w-[250px]
        h-[105px]
        bg-black
        flex items-center
        box-border

        max-[1024px]:h-[95px]
        max-[768px]:h-[85px]
        max-[600px]:h-[70px] max-[600px]:overflow-x-auto
        max-[480px]:h-[62px]
        max-[375px]:h-[56px]
        max-[320px]:h-[50px]
        max-[250px]:h-[46px]
      "
    >
      <div
        className="
          w-full
          px-[7%]
          flex items-center justify-between
          box-border

          max-[1200px]:px-[6%]
          max-[768px]:px-[4%]

          max-[600px]:w-max
          max-[600px]:gap-[40px]
          max-[600px]:px-[25px]

          max-[480px]:gap-[30px]
          max-[480px]:px-[20px]

          max-[375px]:gap-[24px]
          max-[375px]:px-[16px]

          max-[320px]:gap-[18px]
          max-[320px]:px-[12px]

          max-[250px]:gap-[14px]
          max-[250px]:px-[10px]
        "
      >
        <div
          className="
            flex items-center justify-center flex-1
            max-[600px]:flex-none
          "
        >
          <img
            src={versace}
            alt="Versace"
            className="
              w-auto
              max-w-[180px]
              max-h-[42px]
              object-contain
              block

              max-[1024px]:max-w-[150px]
              max-[1024px]:max-h-[38px]

              max-[768px]:max-w-[130px]
              max-[768px]:max-h-[34px]

              max-[600px]:max-w-[100px]
              max-[600px]:max-h-[28px]

              max-[480px]:max-w-[85px]
              max-[480px]:max-h-[24px]

              max-[375px]:max-w-[72px]
              max-[375px]:max-h-[20px]

              max-[320px]:max-w-[62px]
              max-[320px]:max-h-[18px]

              max-[250px]:max-w-[52px]
              max-[250px]:max-h-[16px]
            "
          />
        </div>

        <div
          className="
            flex items-center justify-center flex-1
            max-[600px]:flex-none
          "
        >
          <img
            src={zara}
            alt="Zara"
            className="
              w-auto max-w-[180px] max-h-[42px]
              object-contain block

              max-[1024px]:max-w-[150px] max-[1024px]:max-h-[38px]
              max-[768px]:max-w-[130px] max-[768px]:max-h-[34px]
              max-[600px]:max-w-[100px] max-[600px]:max-h-[28px]
              max-[480px]:max-w-[85px] max-[480px]:max-h-[24px]
              max-[375px]:max-w-[72px] max-[375px]:max-h-[20px]
              max-[320px]:max-w-[62px] max-[320px]:max-h-[18px]
              max-[250px]:max-w-[52px] max-[250px]:max-h-[16px]
            "
          />
        </div>

        <div
          className="
            flex items-center justify-center flex-1
            max-[600px]:flex-none
          "
        >
          <img
            src={gucci}
            alt="Gucci"
            className="
              w-auto max-w-[180px] max-h-[42px]
              object-contain block

              max-[1024px]:max-w-[150px] max-[1024px]:max-h-[38px]
              max-[768px]:max-w-[130px] max-[768px]:max-h-[34px]
              max-[600px]:max-w-[100px] max-[600px]:max-h-[28px]
              max-[480px]:max-w-[85px] max-[480px]:max-h-[24px]
              max-[375px]:max-w-[72px] max-[375px]:max-h-[20px]
              max-[320px]:max-w-[62px] max-[320px]:max-h-[18px]
              max-[250px]:max-w-[52px] max-[250px]:max-h-[16px]
            "
          />
        </div>

        <div
          className="
            flex items-center justify-center flex-1
            max-[600px]:flex-none
          "
        >
          <img
            src={prada}
            alt="Prada"
            className="
              w-auto max-w-[180px] max-h-[42px]
              object-contain block

              max-[1024px]:max-w-[150px] max-[1024px]:max-h-[38px]
              max-[768px]:max-w-[130px] max-[768px]:max-h-[34px]
              max-[600px]:max-w-[100px] max-[600px]:max-h-[28px]
              max-[480px]:max-w-[85px] max-[480px]:max-h-[24px]
              max-[375px]:max-w-[72px] max-[375px]:max-h-[20px]
              max-[320px]:max-w-[62px] max-[320px]:max-h-[18px]
              max-[250px]:max-w-[52px] max-[250px]:max-h-[16px]
            "
          />
        </div>

        <div
          className="
            flex items-center justify-center flex-1
            max-[600px]:flex-none
          "
        >
          <img
            src={calvinKlein}
            alt="Calvin Klein"
            className="
              w-auto max-w-[180px] max-h-[42px]
              object-contain block

              max-[1024px]:max-w-[150px] max-[1024px]:max-h-[38px]
              max-[768px]:max-w-[130px] max-[768px]:max-h-[34px]
              max-[600px]:max-w-[100px] max-[600px]:max-h-[28px]
              max-[480px]:max-w-[85px] max-[480px]:max-h-[24px]
              max-[375px]:max-w-[72px] max-[375px]:max-h-[20px]
              max-[320px]:max-w-[62px] max-[320px]:max-h-[18px]
              max-[250px]:max-w-[52px] max-[250px]:max-h-[16px]
            "
          />
        </div>
      </div>
    </section>
  );
};

export default BrandStrip;
