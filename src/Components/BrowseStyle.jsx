import casual from "../assets/casual.png";
import formal from "../assets/formal.png";
import party from "../assets/party.png";
import gym from "../assets/gym.png";

const BrowseStyle = () => {
  return (
    <section className="w-full px-[6%] pt-[70px] pb-[80px] box-border bg-white max-[768px]:px-[4%] max-[768px]:pt-[50px] max-[768px]:pb-[60px] max-[600px]:px-[20px] max-[600px]:py-[45px]">
      <div className="mx-auto w-full max-w-[1240px] rounded-[30px] bg-[#f0f0f0] px-[60px] pt-[55px] pb-[65px] box-border max-[1024px]:px-[40px] max-[1024px]:py-[45px] max-[768px]:px-[30px] max-[768px]:py-[40px] max-[600px]:px-[20px] max-[600px]:py-[35px] max-[600px]:rounded-[20px]">
        <h2 className="m-0 mb-[45px] text-center font-sans text-[38px] font-black text-black tracking-[-1px] max-[768px]:text-[30px] max-[768px]:mb-[30px] max-[600px]:text-[26px] max-[600px]:mb-[24px] max-[480px]:text-[22px]">
          BROWSE BY DRESS STYLE
        </h2>

        <div className="grid grid-cols-2 gap-[20px]">
          {/* Row 1: Casual + Formal */}
          <div className="relative h-[250px] overflow-hidden rounded-[20px] bg-white cursor-pointer transition-transform duration-250 hover:-translate-y-1 max-[768px]:h-[210px] max-[600px]:h-[180px] max-[480px]:h-[150px]">
            <img src={casual} alt="Casual" className="w-full h-full object-cover" />
            <h3 className="absolute top-[25px] left-[30px] m-0 z-[2] font-sans text-[28px] font-bold text-black max-[768px]:text-[24px] max-[768px]:top-[20px] max-[768px]:left-[24px] max-[600px]:text-[20px] max-[600px]:top-[16px] max-[600px]:left-[18px] max-[480px]:text-[17px]">
              Casual
            </h3>
          </div>

          <div className="relative h-[250px] overflow-hidden rounded-[20px] bg-white cursor-pointer transition-transform duration-250 hover:-translate-y-1 max-[768px]:h-[210px] max-[600px]:h-[180px] max-[480px]:h-[150px]">
            <img src={formal} alt="Formal" className="w-full h-full object-cover" />
            <h3 className="absolute top-[25px] left-[30px] m-0 z-[2] font-sans text-[28px] font-bold text-black max-[768px]:text-[24px] max-[768px]:top-[20px] max-[768px]:left-[24px] max-[600px]:text-[20px] max-[600px]:top-[16px] max-[600px]:left-[18px] max-[480px]:text-[17px]">
              Formal
            </h3>
          </div>

          {/* Row 2: Party + Gym */}
          <div className="relative h-[250px] overflow-hidden rounded-[20px] bg-white cursor-pointer transition-transform duration-250 hover:-translate-y-1 max-[768px]:h-[210px] max-[600px]:h-[180px] max-[480px]:h-[150px]">
            <img src={party} alt="Party" className="w-full h-full object-cover" />
            <h3 className="absolute top-[25px] left-[30px] m-0 z-[2] font-sans text-[28px] font-bold text-black max-[768px]:text-[24px] max-[768px]:top-[20px] max-[768px]:left-[24px] max-[600px]:text-[20px] max-[600px]:top-[16px] max-[600px]:left-[18px] max-[480px]:text-[17px]">
              Party
            </h3>
          </div>

          <div className="relative h-[250px] overflow-hidden rounded-[20px] bg-white cursor-pointer transition-transform duration-250 hover:-translate-y-1 max-[768px]:h-[210px] max-[600px]:h-[180px] max-[480px]:h-[150px]">
            <img src={gym} alt="Gym" className="w-full h-full object-cover" />
            <h3 className="absolute top-[25px] left-[30px] m-0 z-[2] font-sans text-[28px] font-bold text-black max-[768px]:text-[24px] max-[768px]:top-[20px] max-[768px]:left-[24px] max-[600px]:text-[20px] max-[600px]:top-[16px] max-[600px]:left-[18px] max-[480px]:text-[17px]">
              Gym
            </h3>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrowseStyle;
