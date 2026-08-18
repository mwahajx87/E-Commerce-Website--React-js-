import { useEffect, useMemo, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
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
  const [searchParams] = useSearchParams();
  const searchQuery = searchParams.get("search")?.trim().toLowerCase() || "";
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedColor, setSelectedColor] = useState(null);
  const [maxPrice, setMaxPrice] = useState(500);
  const [appliedFilters, setAppliedFilters] = useState({
    category: null,
    color: null,
    maxPrice: 500,
  });

  const handleApplyFilter = () => {
    setAppliedFilters({
      category: selectedCategory,
      color: selectedColor,
      maxPrice,
    });
    setCurrentPageNum(1);
  };

  const filteredProducts = useMemo(
    () =>
      categoryProducts.filter((product) => {
        const matchesSearch =
          !searchQuery || product.name.toLowerCase().includes(searchQuery);
        const matchesCategory = appliedFilters.category
          ? product.category === appliedFilters.category
          : true;
        const matchesColor = appliedFilters.color
          ? product.color === appliedFilters.color
          : true;
        const matchesPrice = product.price <= appliedFilters.maxPrice;
        return matchesSearch && matchesCategory && matchesColor && matchesPrice;
      }),
    [appliedFilters, searchQuery],
  );

  const [isMobileFilterOpen, setIsMobileFilterOpen] = useState(false);
  const [currentPageNum, setCurrentPageNum] = useState(1);
  const productsPerPage = 6;
  const pageCount = Math.max(
    1,
    Math.ceil(filteredProducts.length / productsPerPage),
  );
  const visibleProducts = filteredProducts.slice(
    (currentPageNum - 1) * productsPerPage,
    currentPageNum * productsPerPage,
  );

  useEffect(() => {
    setCurrentPageNum(1);
  }, [searchQuery]);

  return (
    <div className="relative mx-auto w-full max-w-[1440px] px-[20px] pb-[70px] pt-[20px] box-border sm:px-[10px] sm:pb-[50px] xs:px-[15px] xs:pb-[40px]">
      <div className="mb-[20px] flex items-center gap-[8px] text-[14px] text-[#777] sm:text-[12px]">
        <Link to="/" className="text-[#777] no-underline">
          Home
        </Link>
        <span>/</span>
        <strong className="text-[#111]">Casual</strong>
      </div>

      <div className="flex items-start gap-[30px]">
        <div
          className={`${isMobileFilterOpen ? "absolute right-[15px] top-[58px] z-50 block w-[calc(100%-30px)] max-w-[340px]" : "hidden w-0"} rounded-[16px] shadow-[0_12px_30px_rgba(0,0,0,0.16)] md:static md:z-auto md:block md:w-auto md:max-w-none md:rounded-none md:shadow-none`}
        >
          <FilterSidebar
            selectedCategory={selectedCategory}
            setSelectedCategory={setSelectedCategory}
            selectedColor={selectedColor}
            setSelectedColor={setSelectedColor}
            maxPrice={maxPrice}
            setMaxPrice={setMaxPrice}
            onApply={() => {
              handleApplyFilter();
              setIsMobileFilterOpen(false);
            }}
            onClose={() => setIsMobileFilterOpen(false)}
          />
        </div>
        <div>
          {/* Header Row: Title, Count, Sort, Mobile Filter Button */}
          <div className=" w-full flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6 sm:mb-8">
            <div className="w-full gap-4 flex items-end justify-between">
              <h1 className="font-integral text-2xl sm:text-3xl md:text-4xl font-extrabold uppercase text-black">
                Casual
              </h1>

              <div className="flex items-center justify-between sm:justify-end gap-3 text-xs sm:text-sm text-gray-500">
                <span>
                  Showing{" "}
                  {filteredProducts.length === 0
                    ? 0
                    : (currentPageNum - 1) * productsPerPage + 1}
                  -
                  {Math.min(
                    currentPageNum * productsPerPage,
                    filteredProducts.length,
                  )}{" "}
                  of {filteredProducts.length} Products
                </span>
              </div>
              {/* Mobile Filter Button */}
              <button
                className="hidden items-center gap-2 rounded-full bg-[#F0F0F0] px-3.5 py-2 text-xs font-semibold text-black max-[767px]:flex"
                onClick={() => setIsMobileFilterOpen((open) => !open)}
              >
                <i className="fa-solid fa-sliders" />
              </button>
            </div>
          </div>

          {filteredProducts.length === 0 ? (
            <p className="py-[60px] text-center text-[16px] text-[#777] sm:py-[45px] sm:text-[14px] xs:py-[35px] xs:text-[13px]">
              No products match your filters.
            </p>
          ) : (
            <div className="mb-[40px] grid grid-cols-3 gap-[18px] max-[767px]:grid-cols-2 max-[767px]:gap-[10px]">
              {visibleProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          )}

          <div className="flex items-center justify-between pt-2">
            <button
              onClick={() => setCurrentPageNum((page) => Math.max(1, page - 1))}
              disabled={currentPageNum === 1}
              className="border border-gray-200 rounded-lg px-3.5 py-2 text-xs sm:text-sm font-semibold text-black hover:bg-gray-50 disabled:opacity-40 disabled:cursor-not-allowed flex items-center gap-1.5 transition-colors cursor-pointer"
            >
              <i className="fa-solid fa-chevron-left text-[10px] sm:text-[12px]" />
              <span>Previous</span>
            </button>

            <div className="flex items-center gap-1 sm:gap-2 text-xs sm:text-sm">
              {Array.from({ length: pageCount }, (_, index) => index + 1).map(
                (page) => (
                  <button
                    key={page}
                    onClick={() => setCurrentPageNum(page)}
                    className={`w-8 h-8 sm:w-9 sm:h-9 rounded-lg font-bold flex items-center justify-center transition-colors cursor-pointer ${
                      currentPageNum === page
                        ? "bg-black/10 text-black"
                        : "text-gray-500 hover:text-black hover:bg-gray-50"
                    }`}
                  >
                    {page}
                  </button>
                ),
              )}
            </div>

            <button
              onClick={() =>
                setCurrentPageNum((page) => Math.min(pageCount, page + 1))
              }
              disabled={currentPageNum === pageCount}
              className="border border-gray-200 rounded-lg px-3.5 py-2 text-xs sm:text-sm font-semibold text-black hover:bg-gray-50 flex items-center gap-1.5 transition-colors cursor-pointer"
            >
              <span>Next</span>
              <i className="fa-solid fa-chevron-right text-[10px] sm:text-[12px]" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Category;
