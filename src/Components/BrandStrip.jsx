import versace from "../assets/versace.png";
import zara from "../assets/zara.png";
import gucci from "../assets/gucci.png";
import prada from "../assets/prada.png";
import calvinKlein from "../assets/calvin-klein.png";

const BrandStrip = () => {
  return (
    <section className="w-full bg-black px-[20px] py-[30px] max-[639px]:px-[16px] max-[639px]:py-[18px]">
      <div className="mx-auto flex max-w-[1280px] flex-wrap items-center justify-center gap-[20px] max-[639px]:gap-[12px] max-[639px]:justify-center">
        <img
          src={versace}
          alt="Versace"
          className="h-[30px] w-auto opacity-90 max-[639px]:h-[22px]"
        />
        <img
          src={zara}
          alt="Zara"
          className="h-[30px] w-auto opacity-90 max-[639px]:h-[22px]"
        />
        <img
          src={gucci}
          alt="Gucci"
          className="h-[30px] w-auto opacity-90 max-[639px]:h-[22px]"
        />
        <img
          src={prada}
          alt="Prada"
          className="h-[30px] w-auto opacity-90 max-[639px]:h-[22px]"
        />
        <img
          src={calvinKlein}
          alt="Calvin Klein"
          className="h-[30px] w-auto opacity-90 max-[639px]:h-[22px]"
        />
      </div>
    </section>
  );
};

export default BrandStrip;
