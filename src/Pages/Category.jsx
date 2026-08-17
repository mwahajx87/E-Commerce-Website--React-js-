import { useState } from "react";
import { Link } from "react-router-dom";
import FilterSidebar from "../../Components/FilterSidebar/FilterSidebar";
import ProductCard from "../../Components/ProductCard/ProductCard";

import cloth9 from "../../assets/cloth9.png";
import cloth11 from "../../assets/cloth11.png";
import cloth12 from "../../assets/cloth12.png";
import cloth2 from "../../assets/cloth2.png";
import cloth3 from "../../assets/cloth3.png";
import cloth4 from "../../assets/cloth4.png";
import cloth5 from "../../assets/cloth5.png";
import cloth6 from "../../assets/cloth6.png";
import cloth7 from "../../assets/cloth7.png";

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
  // Sidebar mein abhi jo select ho raha hai (Apply se pehle)
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedColor, setSelectedColor] = useState(null);
  const [maxPrice, setMaxPrice] = useState(500);

  // Jo actually "Apply Filter" dabane par lagu hota hai
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
      maxPrice: maxPrice,
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
    <div className="mx-auto w-full max-w-[1440px] box-border px-[40px] pb-[70px] pt-[20px] font-sans max-[1200px]:px-[30px] max-[1200px]:pb-[60px] max-[768px]:px-[22px] max-[768px]:pb-[55px] max-[768px]:pt-[18px] max-[600px]:px-[20px] max-[600px]:pb-[50px] max-[600px]:pt-[15px] max-[480px]:px-[15px] max-[480px]:pb-[40px] max-[480px]:pt-[12px] max-[375px]:px-[12px] max-[375px]:pb-[32px] max-[375px]:pt-[10px] max-[320px]:px-[10px] max-[320px]:pb-[28px] max-[320px]:pt-[8px] max-[250px]:min-w-[250px] max-[250px]:overflow-x-auto max-[250px]:px-[8px] max-[250px]:pb-[20px] max-[250px]:pt-[6px]">
      <div className="mb-[20px] flex gap-[8px] text-[14px] text-[#777] max-[375px]:text-[12px] max-[320px]:gap-[6px] max-[320px]:text-[11px] max-[250px]:text-[9px]">
        <Link to="/" className="text-[#777] no-underline">
          Home
        </Link>
        <span>/</span>
        <strong className="text-[#111]">Casual</strong>
      </div>

      <div className="grid grid-cols-[280px_1fr] items-start gap-[30px] max-[1200px]:grid-cols-[250px_1fr] max-[1200px]:gap-[25px] max-[1024px]:grid-cols-1">
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
            <h1 className="m-0 text-[32px] font-bold max-[1200px]:text-[28px] max-[768px]:text-[26px] max-[480px]:text-[22px] max-[375px]:text-[19px] max-[320px]:text-[17px] max-[250px]:text-[14px]">
              Casual
            </h1>
            <div className="flex items-center gap-[20px] text-[14px] text-[#555] max-[480px]:gap-[14px] max-[480px]:text-[12px] max-[375px]:gap-[10px] max-[375px]:text-[11px] max-[320px]:gap-[8px] max-[320px]:text-[10px] max-[250px]:gap-[6px] max-[250px]:text-[8px]">
              <span>
                Showing {filteredProducts.length} of {categoryProducts.length}{" "}
                Products
              </span>
              <span>
                Sort by: <strong>Most Popular</strong>
              </span>
            </div>
          </div>

          {filteredProducts.length === 0 ? (
            <p className="px-[20px] py-[60px] text-center text-[16px] text-[#777] max-[480px]:px-[15px] max-[480px]:py-[45px] max-[480px]:text-[14px] max-[375px]:px-[12px] max-[375px]:py-[35px] max-[375px]:text-[13px] max-[250px]:px-[8px] max-[250px]:py-[24px] max-[250px]:text-[11px]">
              No products match your filters.
            </p>
          ) : (
            <div className="mb-[40px] grid grid-cols-3 gap-[25px] max-[1200px]:gap-[20px] max-[1024px]:grid-cols-2 max-[768px]:grid-cols-2 max-[768px]:gap-[18px] max-[600px]:grid-cols-2 max-[600px]:gap-[15px] max-[480px]:mb-[30px] max-[480px]:gap-[12px] max-[375px]:mb-[25px] max-[375px]:gap-[10px] max-[320px]:mb-[20px] max-[320px]:gap-[8px] max-[250px]:mb-[14px] max-[250px]:grid-cols-2 max-[250px]:gap-[6px]">
              {filteredProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          )}

          <div className="flex flex-wrap items-center justify-between gap-[15px] max-[768px]:justify-center max-[768px]:text-center">
            <button
              className="flex cursor-pointer items-center gap-[8px] border-none bg-transparent text-[14px] text-[#555] max-[480px]:text-[12px] max-[375px]:text-[11px] max-[250px]:gap-[5px] max-[250px]:text-[9px]"
              onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
            >
              <i className="fa-solid fa-arrow-left"></i> Previous
            </button>

            <div className="flex items-center gap-[8px]">
              {pageNumbers.map((num, index) =>
                num === "..." ? (
                  <span
                    key={index}
                    className="text-[#999] max-[320px]:text-[12px]"
                  >
                    ...
                  </span>
                ) : (
                  <button
                    key={index}
                    className={`h-[36px] w-[36px] cursor-pointer rounded-[8px] border-none bg-transparent text-[14px] max-[480px]:h-[32px] max-[480px]:w-[32px] max-[480px]:text-[12px] max-[375px]:h-[28px] max-[375px]:w-[28px] max-[375px]:text-[11px] max-[320px]:h-[26px] max-[320px]:w-[26px] max-[320px]:text-[10px] max-[250px]:h-[20px] max-[250px]:w-[20px] max-[250px]:text-[9px] ${
                      currentPage === num ? "bg-[#f3f3f3] font-semibold" : ""
                    }`}
                    onClick={() => setCurrentPage(num)}
                  >
                    {num}
                  </button>
                ),
              )}
            </div>

            <button
              className="flex cursor-pointer items-center gap-[8px] border-none bg-transparent text-[14px] text-[#555] max-[480px]:text-[12px] max-[375px]:text-[11px] max-[250px]:gap-[5px] max-[250px]:text-[9px]"
              onClick={() => setCurrentPage((p) => p + 1)}
            >
              Next <i className="fa-solid fa-arrow-right"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Category;
