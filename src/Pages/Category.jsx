import { useState } from "react";
import { Link } from "react-router-dom";
import FilterSidebar from "../Components/FilterSidebar";
import ProductCard from "../Components/ProductCard";

import cloth9 from "../assets/cloth9.png";
import cloth11 from "../assets/cloth11.png";
import cloth12 from "../assets/cloth12.png";
import cloth2 from "../assets/cloth2.png";
import cloth3 from "../assets/cloth3.png";
import cloth4 from "../assets/cloth4.png";
import cloth5 from "../assets/cloth5.png";
import cloth6 from "../assets/cloth6.png";
import cloth7 from "../assets/cloth7.png";

const categoryProducts = [
  {
    id: 9,
    name: "Gradient Graphic T-shirt",
    price: 145,
    rating: 3.5,
    image: cloth9,
    category: "T-shirts",
    color: "#ffffff",
  },
  {
    id: 10,
    name: "Polo with Tipping Details",
    price: 180,
    rating: 4.5,
    image: cloth11,
    category: "Shirts",
    color: "#dc2626",
  },
  {
    id: 11,
    name: "Black Striped T-shirt",
    price: 120,
    oldPrice: 150,
    discount: 30,
    rating: 5.0,
    image: cloth12,
    category: "T-shirts",
    color: "#111111",
  },
  {
    id: 2,
    name: "Skinny Fit Jeans",
    price: 240,
    oldPrice: 260,
    discount: 20,
    rating: 3.5,
    image: cloth2,
    category: "Jeans",
    color: "#2563eb",
  },
  {
    id: 3,
    name: "Checkered Shirt",
    price: 180,
    rating: 4.5,
    image: cloth3,
    category: "Shirts",
    color: "#dc2626",
  },
  {
    id: 4,
    name: "Sleeve Striped T-shirt",
    price: 130,
    oldPrice: 160,
    discount: 30,
    rating: 4.5,
    image: cloth4,
    category: "T-shirts",
    color: "#ea580c",
  },
  {
    id: 5,
    name: "Vertical Striped Shirt",
    price: 212,
    oldPrice: 232,
    discount: 20,
    rating: 5.0,
    image: cloth5,
    category: "Shirts",
    color: "#16a34a",
  },
  {
    id: 6,
    name: "Courage Graphic T-shirt",
    price: 145,
    rating: 4.0,
    image: cloth6,
    category: "T-shirts",
    color: "#ea580c",
  },
  {
    id: 7,
    name: "Loose Fit Bermuda Shorts",
    price: 80,
    rating: 3.0,
    image: cloth7,
    category: "Shorts",
    color: "#2563eb",
  },
];

const Category = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedColor, setSelectedColor] = useState(null);
  const [maxPrice, setMaxPrice] = useState(500);
  const [appliedFilters, setAppliedFilters] = useState({
    category: null,
    color: null,
    maxPrice: 500,
  });

  const [currentPage, setCurrentPage] = useState(1);
  const pageNumbers = [1, 2, 3, "...", 8, 9, 10];

  const handleApplyFilter = () => {
    setAppliedFilters({
      category: selectedCategory,
      color: selectedColor,
      maxPrice,
    });
  };

  const filteredProducts = categoryProducts.filter((product) => {
    const matchesCategory = appliedFilters.category
      ? product.category === appliedFilters.category
      : true;
    const matchesColor = appliedFilters.color
      ? product.color === appliedFilters.color
      : true;
    const matchesPrice = product.price <= appliedFilters.maxPrice;
    return matchesCategory && matchesColor && matchesPrice;
  });

  return (
    <div className="mx-auto w-full max-w-[1440px] px-[40px] pb-[70px] pt-[20px] box-border lg:px-[30px] lg:pb-[60px] md:px-[22px] md:pb-[55px] sm:px-[20px] sm:pb-[50px] xs:px-[15px] xs:pb-[40px]">
      <div className="mb-[20px] flex items-center gap-[8px] text-[14px] text-[#777] sm:text-[12px]">
        <Link to="/" className="text-[#777] no-underline">
          Home
        </Link>
        <span>/</span>
        <strong className="text-[#111]">Casual</strong>
      </div>

      <div className="grid grid-cols-[280px_1fr] gap-[30px] lg:grid-cols-[250px_1fr] lg:gap-[25px] md:grid-cols-1">
        <FilterSidebar
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
          selectedColor={selectedColor}
          setSelectedColor={setSelectedColor}
          maxPrice={maxPrice}
          setMaxPrice={setMaxPrice}
          onApply={handleApplyFilter}
        />

        <div>
          <div className="mb-[25px] flex flex-wrap items-center justify-between gap-[10px]">
            <h1 className="m-0 text-[32px] md:text-[28px] sm:text-[26px] xs:text-[22px]">
              Casual
            </h1>
            <div className="flex items-center gap-[20px] text-[14px] text-[#555] sm:gap-[14px] sm:text-[12px] xs:text-[11px]">
              <span>
                Showing {filteredProducts.length} of {categoryProducts.length}{" "}
                Products
              </span>
              <span>
                Sort by: <strong className="text-[#111]">Most Popular</strong>
              </span>
            </div>
          </div>

          {filteredProducts.length === 0 ? (
            <p className="py-[60px] text-center text-[16px] text-[#777] sm:py-[45px] sm:text-[14px] xs:py-[35px] xs:text-[13px]">
              No products match your filters.
            </p>
          ) : (
            <div className="mb-[40px] grid grid-cols-3 gap-[18px]">
              {filteredProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          )}

          <div className="flex flex-wrap items-center justify-between gap-[15px] md:justify-center">
            <button
              className="flex items-center gap-[8px] border-none bg-transparent text-[14px] text-[#555] md:text-[12px]"
              onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
            >
              <i className="fa-solid fa-arrow-left" /> Previous
            </button>

            <div className="flex items-center gap-[8px]">
              {pageNumbers.map((num, index) =>
                num === "..." ? (
                  <span key={index} className="text-[#999]">
                    ...
                  </span>
                ) : (
                  <button
                    key={index}
                    className={`h-[36px] w-[36px] rounded-[8px] border-none bg-transparent text-[14px] ${currentPage === num ? "bg-[#f3f3f3] font-semibold" : ""}`}
                    onClick={() => setCurrentPage(num)}
                  >
                    {num}
                  </button>
                ),
              )}
            </div>

            <button
              className="flex items-center gap-[8px] border-none bg-transparent text-[14px] text-[#555] md:text-[12px]"
              onClick={() => setCurrentPage((p) => p + 1)}
            >
              Next <i className="fa-solid fa-arrow-right" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Category;
