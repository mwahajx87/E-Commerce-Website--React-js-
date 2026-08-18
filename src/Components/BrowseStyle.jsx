import casual from "../assets/casual.png";
import formal from "../assets/formal.png";
import party from "../assets/party.png";
import gym from "../assets/gym.png";

const BrowseStyle = () => {
  return (
    <section className="py-6 sm:py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#F0F0F0] rounded-3xl p-6 sm:p-12 lg:p-16">
          <h2 className="font-integral text-2xl sm:text-4xl md:text-5xl font-black text-center uppercase mb-8 sm:mb-12">
            BROWSE BY DRESS STYLE
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-4 sm:gap-6">
            {/* Casual Card (1/3) */}
            <div
              onClick={() => onNavigate("category", { dressStyle: "casual" })}
              className="md:col-span-4 bg-white rounded-2xl overflow-hidden relative h-56 sm:h-72 cursor-pointer group shadow-xs hover:shadow-md transition-all"
              id="style-card-casual"
            >
              <span className="font-integral text-2xl sm:text-3xl font-bold text-black absolute top-6 left-6 z-10">
                Casual
              </span>
              <img
                src= {casual}
                alt="Casual style"
                className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
              />
            </div>

            {/* Formal Card (2/3) */}
            <div
              onClick={() => onNavigate("category", { dressStyle: "formal" })}
              className="md:col-span-8 bg-white rounded-2xl overflow-hidden relative h-56 sm:h-72 cursor-pointer group shadow-xs hover:shadow-md transition-all"
              id="style-card-formal"
            >
              <span className="font-integral text-2xl sm:text-3xl font-bold text-black absolute top-6 left-6 z-10">
                Formal
              </span>
              <img
                src={formal}
                alt="Formal style"
                className="w-full h-full object-cover object-right group-hover:scale-105 transition-transform duration-500"
              />
            </div>

            {/* Party Card (2/3) */}
            <div
              onClick={() => onNavigate("category", { dressStyle: "party" })}
              className="md:col-span-8 bg-white rounded-2xl overflow-hidden relative h-56 sm:h-72 cursor-pointer group shadow-xs hover:shadow-md transition-all"
              id="style-card-party"
            >
              <span className="font-integral text-2xl sm:text-3xl font-bold text-black absolute top-6 left-6 z-10">
                Party
              </span>
              <img
                src={party}
                alt="Party style"
                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
              />
            </div>

            {/* Gym Card (1/3) */}
            <div
              onClick={() => onNavigate("category", { dressStyle: "gym" })}
              className="md:col-span-4 bg-white rounded-2xl overflow-hidden relative h-56 sm:h-72 cursor-pointer group shadow-xs hover:shadow-md transition-all"
              id="style-card-gym"
            >
              <span className="font-integral text-2xl sm:text-3xl font-bold text-black absolute top-6 left-6 z-10">
                Gym
              </span>
              <img
                src={gym}
                alt="Gym style"
                className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrowseStyle;
