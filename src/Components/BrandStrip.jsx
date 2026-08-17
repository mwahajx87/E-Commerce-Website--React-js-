import versace from "../assets/versace.png";
import zara from "../assets/zara.png";
import gucci from "../assets/gucci.png";
import prada from "../assets/prada.png";
import calvinKlein from "../assets/calvin-klein.png";

const BrandStrip = () => {
  return (
    <section className="w-full bg-black px-[20px] py-[16px]">
      <div className="mx-auto flex max-w-[1280px] items-center justify-between gap-[18px]">
        <img
          src={versace}
          alt="Versace"
          className="h-[30px] w-auto opacity-90"
        />
        <img src={zara} alt="Zara" className="h-[28px] w-auto opacity-90" />
        <img src={gucci} alt="Gucci" className="h-[28px] w-auto opacity-90" />
        <img src={prada} alt="Prada" className="h-[30px] w-auto opacity-90" />
        <img
          src={calvinKlein}
          alt="Calvin Klein"
          className="h-[26px] w-auto opacity-90"
        />
      </div>
    </section>
  );
};

export default BrandStrip;
