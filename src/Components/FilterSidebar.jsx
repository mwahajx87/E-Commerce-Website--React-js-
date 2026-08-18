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
  onClose,
}) => {
  const [selectedSize, setSelectedSize] = useState("Large");
  const [collapsedSections, setCollapsedSections] = useState({
    price: false,
    colors: false,
    size: false,
    dressStyle: false,
  });

  const toggleSection = (section) => {
    setCollapsedSections((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
  };

  return (
    <aside className="w-full max-w-[280px] min-w-[250px] rounded-[20px] border border-[#e5e5e5] bg-white p-[20px] font-sans max-[767px]:max-w-none max-[767px]:min-w-0 max-[767px]:max-h-[calc(100vh-120px)] max-[767px]:overflow-y-auto max-[767px]:rounded-[16px] max-[639px]:p-[14px]">
      <div className="mb-[16px] flex items-center justify-between text-[18px] font-semibold sm:text-[17px] xs:text-[16px]">
        <span>Filters</span>
        <div className="flex items-center gap-[14px]">
          <i className="fa-solid fa-sliders" />
          {onClose && (
            <button
              type="button"
              aria-label="Close filters"
              className="flex h-[30px] w-[30px] items-center justify-center rounded-full border-none bg-[#f0f0f0] text-[14px] text-black md:hidden"
              onClick={onClose}
            >
              <i className="fa-solid fa-xmark" />
            </button>
          )}
        </div>
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

      {/* Price */}
      <div className="mb-[18px] border-b border-[#eee] pb-[18px]">
        <div className="flex cursor-pointer items-center justify-between" onClick={() => toggleSection("price")}>
          <p className="mb-[12px] text-[15px] font-semibold text-black">Price</p>
          <i className={`fa-solid ${collapsedSections.price ? "fa-chevron-up" : "fa-chevron-down"}`}></i>
        </div>
        {!collapsedSections.price && (
          <>
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
          </>
        )}
      </div>

      {/* Colors */}
      <div className="mb-[18px] border-b border-[#eee] pb-[18px]">
        <div className="flex cursor-pointer items-center justify-between" onClick={() => toggleSection("colors")}>
          <p className="mb-[12px] text-[15px] font-semibold text-black">Colors</p>
          <i className={`fa-solid ${collapsedSections.colors ? "fa-chevron-down" : "fa-chevron-up"}`}></i>
        </div>
        {!collapsedSections.colors && (
          <div className="grid grid-cols-5 gap-[10px] sm:gap-[8px] xs:grid-cols-4">
            {colors.map((c) => (
              <button
                key={c}
                className={`flex h-[28px] w-[28px] cursor-pointer items-center justify-center rounded-full border-0 ${c === "#ffffff" ? "border border-[#ddd]" : ""}`}
                style={{ backgroundColor: c }}
                onClick={(e) => { e.stopPropagation(); setSelectedColor(selectedColor === c ? null : c); }}
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
        )}
      </div>

      {/* Size */}
      <div className="mb-[18px] border-b border-[#eee] pb-[18px]">
        <div className="flex cursor-pointer items-center justify-between" onClick={() => toggleSection("size")}>
          <p className="mb-[12px] text-[15px] font-semibold text-black">Size</p>
          <i className={`fa-solid ${collapsedSections.size ? "fa-chevron-down" : "fa-chevron-up"}`}></i>
        </div>
        {!collapsedSections.size && (
          <div className="flex flex-wrap gap-[8px]">
            {sizes.map((s) => (
              <button
                key={s}
                className={`cursor-pointer rounded-full border px-[14px] py-[8px] text-[13px] ${selectedSize === s ? "border-black bg-black text-white" : "border-[#ddd] bg-white text-[#555]"}`}
                onClick={(e) => { e.stopPropagation(); setSelectedSize(s); }}
              >
                {s}
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Dress Style */}
      <div className="mb-[18px]">
        <div className="flex cursor-pointer items-center justify-between" onClick={() => toggleSection("dressStyle")}>
          <p className="mb-[12px] text-[15px] font-semibold text-black">
            Dress Style
          </p>
          <i className={`fa-solid ${collapsedSections.dressStyle ? "fa-chevron-down" : "fa-chevron-up"}`}></i>
        </div>
        {!collapsedSections.dressStyle && (
          dressStyles.map((d) => (
            <div
              className="flex cursor-pointer items-center justify-between py-[8px] text-[14px] text-[#555] hover:text-black"
              key={d}
            >
              {d} <i className="fa-solid fa-chevron-right" />
            </div>
          ))
        )}
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
