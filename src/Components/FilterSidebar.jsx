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
    <aside
      className="
        w-full max-w-[280px] min-w-[250px]
        border border-[#e5e5e5]
        rounded-[20px]
        p-[20px]
        box-border
        font-[Arial,Helvetica,sans-serif]

        max-[1200px]:max-w-[260px]

        max-[1024px]:max-w-[240px]
        max-[1024px]:p-[18px]

        max-[768px]:max-w-full

        max-[600px]:p-[16px]

        max-[480px]:p-[14px]
        max-[480px]:rounded-[16px]

        max-[375px]:p-[12px]

        max-[320px]:p-[10px]

        max-[250px]:p-[8px]
      "
    >
      {/* Header */}
      <div
        className="
          flex
          justify-between
          items-center
          text-[18px]
          font-semibold
          mb-[16px]

          max-[600px]:text-[17px]

          max-[480px]:text-[16px]
          max-[480px]:mb-[14px]

          max-[375px]:text-[15px]

          max-[320px]:text-[14px]

          max-[250px]:text-[13px]
        "
      >
        <span>Filters</span>
        <i className="fa-solid fa-sliders"></i>
      </div>

      {/* Categories */}
      <div
        className="
          border-b border-[#eee]
          pb-[18px]
          mb-[18px]
          last:border-b-0
        "
      >
        {categories.map((cat) => (
          <div
            key={cat}
            onClick={() =>
              setSelectedCategory(selectedCategory === cat ? null : cat)
            }
            className={`
              flex
              justify-between
              items-center
              py-[8px]
              text-[14px]
              text-[#555]
              cursor-pointer
              hover:text-black

              max-[480px]:text-[13px]

              max-[375px]:text-[12.5px]

              max-[320px]:text-[12px]
              max-[320px]:py-[6px]

              max-[250px]:text-[11px]

              ${selectedCategory === cat ? "text-black font-semibold" : ""}
            `}
          >
            <span>{cat}</span>
            <i className="fa-solid fa-chevron-right"></i>
          </div>
        ))}
      </div>

      {/* Price */}
      <div
        className="
          border-b border-[#eee]
          pb-[18px]
          mb-[18px]
        "
      >
        <p
          className="
            font-semibold
            text-[15px]
            m-0
            mb-[12px]

            max-[480px]:text-[14px]

            max-[250px]:text-[13px]
          "
        >
          Price
        </p>

        <input
          type="range"
          min="0"
          max="500"
          step="10"
          value={maxPrice}
          onChange={(e) => setMaxPrice(Number(e.target.value))}
          className="
            w-full
            accent-black
          "
        />

        <div
          className="
            flex
            justify-between
            text-[13px]
            text-[#777]
            mt-[6px]
          "
        >
          <span>$0</span>
          <span>${maxPrice}</span>
        </div>
      </div>

      {/* Colors */}
      <div
        className="
          border-b border-[#eee]
          pb-[18px]
          mb-[18px]
        "
      >
        <p
          className="
            font-semibold
            text-[15px]
            m-0
            mb-[12px]

            max-[480px]:text-[14px]

            max-[250px]:text-[13px]
          "
        >
          Colors
        </p>

        <div
          className="
            grid
            grid-cols-5
            gap-[10px]

            max-[480px]:gap-[8px]

            max-[375px]:grid-cols-4

            max-[320px]:grid-cols-4
            max-[320px]:gap-[6px]

            max-[250px]:grid-cols-3
            max-[250px]:gap-[5px]
          "
        >
          {colors.map((c) => (
            <button
              key={c}
              type="button"
              onClick={() => setSelectedColor(selectedColor === c ? null : c)}
              className={`
                w-[28px]
                h-[28px]
                rounded-full
                border-0
                flex
                items-center
                justify-center
                cursor-pointer

                max-[600px]:w-[26px]
                max-[600px]:h-[26px]

                max-[480px]:w-[24px]
                max-[480px]:h-[24px]

                max-[320px]:w-[22px]
                max-[320px]:h-[22px]

                max-[250px]:w-[20px]
                max-[250px]:h-[20px]

                ${c === "#ffffff" ? "border border-[#ddd]" : ""}
              `}
              style={{ backgroundColor: c }}
            >
              {selectedColor === c && (
                <i
                  className="fa-solid fa-check"
                  style={{
                    color: c === "#ffffff" ? "#000" : "#fff",
                  }}
                ></i>
              )}
            </button>
          ))}
        </div>
      </div>

      {/* Size */}
      <div
        className="
          border-b border-[#eee]
          pb-[18px]
          mb-[18px]
        "
      >
        <p
          className="
            font-semibold
            text-[15px]
            m-0
            mb-[12px]

            max-[480px]:text-[14px]

            max-[250px]:text-[13px]
          "
        >
          Size
        </p>

        <div
          className="
            flex
            flex-wrap
            gap-[8px]
          "
        >
          {sizes.map((s) => (
            <button
              key={s}
              type="button"
              onClick={() => setSelectedSize(s)}
              className={`
                px-[14px]
                py-[8px]
                rounded-[20px]
                border
                border-[#ddd]
                bg-white
                text-[13px]
                text-[#555]
                cursor-pointer

                max-[480px]:px-[12px]
                max-[480px]:py-[7px]
                max-[480px]:text-[12px]

                max-[375px]:px-[10px]
                max-[375px]:py-[6px]
                max-[375px]:text-[11.5px]

                max-[320px]:px-[9px]
                max-[320px]:text-[11px]

                max-[250px]:px-[8px]
                max-[250px]:py-[5px]
                max-[250px]:text-[10px]

                ${selectedSize === s ? "bg-black text-white border-black" : ""}
              `}
            >
              {s}
            </button>
          ))}
        </div>
      </div>

      {/* Dress Style */}
      <div
        className="
          border-b border-[#eee]
          pb-[18px]
          mb-[18px]
        "
      >
        <p
          className="
            font-semibold
            text-[15px]
            m-0
            mb-[12px]

            max-[480px]:text-[14px]

            max-[250px]:text-[13px]
          "
        >
          Dress Style
        </p>

        {dressStyles.map((d) => (
          <div
            key={d}
            className="
              flex
              justify-between
              items-center
              py-[8px]
              text-[14px]
              text-[#555]
              cursor-pointer
              hover:text-black

              max-[480px]:text-[13px]

              max-[375px]:text-[12.5px]

              max-[320px]:text-[12px]
              max-[320px]:py-[6px]

              max-[250px]:text-[11px]
            "
          >
            <span>{d}</span>
            <i className="fa-solid fa-chevron-right"></i>
          </div>
        ))}
      </div>

      {/* Apply Filter */}
      <button
        type="button"
        onClick={onApply}
        className="
          w-full
          py-[14px]
          rounded-[25px]
          border-0
          bg-black
          text-white
          text-[15px]
          font-medium
          cursor-pointer

          max-[480px]:py-[12px]
          max-[480px]:text-[14px]

          max-[320px]:py-[11px]
          max-[320px]:text-[13px]

          max-[250px]:py-[10px]
          max-[250px]:text-[12px]
        "
      >
        Apply Filter
      </button>
    </aside>
  );
};

export default FilterSidebar;
