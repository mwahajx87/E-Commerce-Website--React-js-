import casual from "../assets/casual.png";
import formal from "../assets/formal.png";
import party from "../assets/party.png";
import gym from "../assets/gym.png";

const styles = [
  { id: 1, image: casual, label: "Casual", width: "40%" },
  { id: 2, image: formal, label: "Formal", width: "60%" },
  { id: 3, image: party, label: "Party", width: "60%" },
  { id: 4, image: gym, label: "Gym", width: "40%" },
];

const BrowseStyle = () => {
  return (
    <section className="w-full bg-white px-[20px] pb-[56px] pt-[4px]">
      <div className="mx-auto max-w-[1280px]">
        <h2 className="mb-[20px] text-left text-[42px] font-black leading-[1.1] tracking-[-1.1px] text-black">
          BROWSE BY DRESS STYLE
        </h2>

        <div className="grid grid-cols-2 gap-[18px]">
          {styles.map((style) => (
            <div
              key={style.id}
              className="relative h-[180px] overflow-hidden rounded-[18px] bg-[#f0f0f0]"
            >
              <img
                src={style.image}
                alt={style.label}
                className="h-full w-full object-cover"
              />
              <h3 className="absolute left-[22px] top-[20px] m-0 text-[26px] font-bold text-black">
                {style.label}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BrowseStyle;
