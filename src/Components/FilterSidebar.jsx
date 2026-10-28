import { useState } from "react";

const FilterSidebar = ({
  selectedCategory,
  setSelectedCategory,
  maxPrice,
  setMaxPrice,
  priceLimit,
  categories,
  onApply,
  onClose,
}) => {
  const [collapsedSections, setCollapsedSections] = useState({
    price: false,
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
          <button
            type="button"
            className={`flex w-full cursor-pointer items-center justify-between border-0 bg-transparent py-[8px] text-left text-[14px] text-[#555] hover:text-black ${selectedCategory === cat ? "font-semibold text-black" : ""}`}
            key={cat}
            onClick={() =>
              setSelectedCategory(selectedCategory === cat ? null : cat)
            }
          >
            {cat} <i className="fa-solid fa-chevron-right" />
          </button>
        ))}
      </div>

      {/* Price */}
      <div className="mb-[18px] border-b border-[#eee] pb-[18px]">
        <button
          type="button"
          className="flex w-full items-center justify-between border-0 bg-transparent p-0 text-left"
          onClick={() => toggleSection("price")}
          aria-expanded={!collapsedSections.price}
        >
          <span className="mb-[12px] text-[15px] font-semibold text-black">Price</span>
          <i className={`fa-solid ${collapsedSections.price ? "fa-chevron-up" : "fa-chevron-down"}`}></i>
        </button>
        {!collapsedSections.price && (
          <>
            <input
              type="range"
              min="0"
              max={priceLimit}
              step={Math.max(1, Math.ceil(priceLimit / 50))}
              value={maxPrice}
              onChange={(e) => setMaxPrice(Number(e.target.value))}
              className="w-full accent-black"
            />
            <div className="mt-[6px] flex justify-between text-[13px] text-[#777]">
              <span>Rs 0</span>
              <span>Rs {maxPrice}</span>
            </div>
          </>
        )}
      </div>

      <button
        type="button"
        className="w-full rounded-[25px] border-0 bg-black px-[14px] py-[14px] text-[15px] font-medium text-white"
        onClick={onApply}
      >
        View results
      </button>
    </aside>
  );
};

export default FilterSidebar;
