import { useState } from "react";

const colors = [
  "#16a34a",
  "#dc2626",
  "#eab308",
  "#ea580c",
  "#0ea5e9",
  "#2563eb",
  "#7c3aed",
  "#ec4899",
  "#ffffff",
  "#111111",
];
const sizes = [
  "XX-Small",
  "X-Small",
  "Small",
  "Medium",
  "Large",
  "X-Large",
  "XX-Large",
  "3X-Large",
  "4X-Large",
];
const categories = ["T-shirts", "Shorts", "Shirts", "Hoodie", "Jeans"];
const dressStyles = ["Casual", "Formal", "Party", "Gym"];

const FilterSidebar = ({
  selectedCategory,
  setSelectedCategory,
  selectedColor,
  setSelectedColor,
  maxPrice,
  setMaxPrice,
  onApply,
}) => {
  const [selectedSize, setSelectedSize] = useState("Large");

  return (
    <aside className="w-full max-w-[280px] min-w-[250px] rounded-[20px] border border-[#e5e5e5] p-[20px] font-sans lg:max-w-[260px] md:max-w-[240px] md:p-[18px] sm:max-w-full sm:p-[16px] xs:p-[14px] xs:rounded-[16px]">
      <div className="mb-[16px] flex items-center justify-between text-[18px] font-semibold sm:text-[17px] xs:text-[16px]">
        <span>Filters</span>
        <i className="fa-solid fa-sliders" />
      </div>

      <div className="mb-[18px] border-b border-[#eee] pb-[18px]">
        {categories.map((cat) => (
          <div
            className={`flex cursor-pointer items-center justify-between py-[8px] text-[14px] text-[#555] hover:text-black ${selectedCategory === cat ? "font-semibold text-black" : ""}`}
            key={cat}
            onClick={() =>
              setSelectedCategory(selectedCategory === cat ? null : cat)
            }
          >
            {cat} <i className="fa-solid fa-chevron-right" />
          </div>
        ))}
      </div>

      <div className="mb-[18px] border-b border-[#eee] pb-[18px]">
        <p className="mb-[12px] text-[15px] font-semibold text-black">Price</p>
        <input
          type="range"
          min="0"
          max="500"
          step="10"
          value={maxPrice}
          onChange={(e) => setMaxPrice(Number(e.target.value))}
          className="w-full accent-black"
        />
        <div className="mt-[6px] flex justify-between text-[13px] text-[#777]">
          <span>$0</span>
          <span>${maxPrice}</span>
        </div>
      </div>

      <div className="mb-[18px] border-b border-[#eee] pb-[18px]">
        <p className="mb-[12px] text-[15px] font-semibold text-black">Colors</p>
        <div className="grid grid-cols-5 gap-[10px] sm:gap-[8px] xs:grid-cols-4">
          {colors.map((c) => (
            <button
              key={c}
              className={`flex h-[28px] w-[28px] cursor-pointer items-center justify-center rounded-full border-0 ${c === "#ffffff" ? "border border-[#ddd]" : ""}`}
              style={{ backgroundColor: c }}
              onClick={() => setSelectedColor(selectedColor === c ? null : c)}
            >
              {selectedColor === c && (
                <i
                  className="fa-solid fa-check"
                  style={{ color: c === "#ffffff" ? "#000" : "#fff" }}
                ></i>
              )}
            </button>
          ))}
        </div>
      </div>

      <div className="mb-[18px] border-b border-[#eee] pb-[18px]">
        <p className="mb-[12px] text-[15px] font-semibold text-black">Size</p>
        <div className="flex flex-wrap gap-[8px]">
          {sizes.map((s) => (
            <button
              key={s}
              className={`cursor-pointer rounded-full border px-[14px] py-[8px] text-[13px] ${selectedSize === s ? "border-black bg-black text-white" : "border-[#ddd] bg-white text-[#555]"}`}
              onClick={() => setSelectedSize(s)}
            >
              {s}
            </button>
          ))}
        </div>
      </div>

      <div className="mb-[18px]">
        <p className="mb-[12px] text-[15px] font-semibold text-black">
          Dress Style
        </p>
        {dressStyles.map((d) => (
          <div
            className="flex cursor-pointer items-center justify-between py-[8px] text-[14px] text-[#555] hover:text-black"
            key={d}
          >
            {d} <i className="fa-solid fa-chevron-right" />
          </div>
        ))}
      </div>

      <button
        className="w-full rounded-[25px] border-0 bg-black px-[14px] py-[14px] text-[15px] font-medium text-white"
        onClick={onApply}
      >
        Apply Filter
      </button>
    </aside>
  );
};

export default FilterSidebar;
