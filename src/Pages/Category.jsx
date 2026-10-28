import { useMemo, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import FilterSidebar from "../Components/FilterSidebar";
import ProductCard from "../Components/ProductCard";
import { useProducts } from "../Context/useProducts";

const Category = () => {
  const { products, status, error } = useProducts();
  const [searchParams, setSearchParams] = useSearchParams();
  const searchQuery = searchParams.get("search")?.trim().toLowerCase() || "";
  const searchCategory = searchParams.get("category") || null;
  const styleQuery = searchParams.get("style")?.trim().toLowerCase() || "";
  const sortOrder = searchParams.get("sort") || "newest";
  const priceLimit = Math.max(0, ...products.map((product) => product.price));
  const maxPriceValue = searchParams.get("maxPrice");
  const maxPriceParam = maxPriceValue === null ? null : Number(maxPriceValue);
  const maxPrice = maxPriceParam !== null &&
    Number.isFinite(maxPriceParam) &&
    maxPriceParam >= 0
    ? Math.min(maxPriceParam, priceLimit)
    : priceLimit;
  const currentQuery = searchParams.toString();
  const [pageState, setPageState] = useState({ query: "", page: 1 });
  const currentPageNum =
    pageState.query === currentQuery ? pageState.page : 1;
  const setCurrentPageNum = (page) =>
    setPageState((state) => ({
      query: currentQuery,
      page:
        typeof page === "function"
          ? page(state.query === currentQuery ? state.page : 1)
          : page,
    }));

  const updateQuery = (key, value) => {
    const params = new URLSearchParams(searchParams);
    if (value === null || value === "") params.delete(key);
    else params.set(key, String(value));
    setSearchParams(params, { replace: true });
  };

  const filteredProducts = useMemo(
    () => {
      const filtered = products.filter((product) => {
        const matchesSearch =
          !searchQuery ||
          `${product.name} ${product.category} ${product.description || ""}`
            .toLowerCase()
            .includes(searchQuery);
        const matchesCategory = searchCategory
          ? product.category === searchCategory
          : true;
        const matchesStyle =
          !styleQuery ||
          (product.styles || []).some(
            (style) => style.toLowerCase() === styleQuery,
          );
        const matchesPrice = product.price <= maxPrice;
        return matchesSearch && matchesCategory && matchesStyle && matchesPrice;
      });

      return filtered.sort((first, second) => {
        if (sortOrder === "price-low") return first.price - second.price;
        if (sortOrder === "price-high") return second.price - first.price;
        if (sortOrder === "name") return first.name.localeCompare(second.name);
        return 0;
      });
    },
    [maxPrice, products, searchCategory, searchQuery, sortOrder, styleQuery],
  );

  const [isMobileFilterOpen, setIsMobileFilterOpen] = useState(false);
  const productsPerPage = 6;
  const pageCount = Math.max(1, Math.ceil(filteredProducts.length / productsPerPage));
  const visibleProducts = filteredProducts.slice(
    (currentPageNum - 1) * productsPerPage,
    currentPageNum * productsPerPage,
  );

  return (
    <div className="relative mx-auto w-full max-w-[1240px] px-[20px] pb-[70px] pt-[20px] box-border sm:px-[10px] sm:pb-[50px] xs:px-[15px] xs:pb-[40px]">
      <div className="mb-[20px] flex items-center gap-[8px] text-[14px] text-[#777] sm:text-[12px]">
        <Link to="/" className="text-[#777] no-underline">
          Home
        </Link>
        <span>/</span>
        <strong className="text-[#111]">Shop</strong>
      </div>

      <div className="flex items-start gap-[30px]">
        <div
          className={`${isMobileFilterOpen ? "absolute right-[15px] top-[58px] z-50 block w-[calc(100%-30px)] max-w-[340px]" : "hidden w-0"} rounded-[16px] shadow-[0_12px_30px_rgba(0,0,0,0.16)] md:static md:z-auto md:block md:w-auto md:max-w-none md:rounded-none md:shadow-none`}
        >
          <FilterSidebar
            selectedCategory={searchCategory}
            setSelectedCategory={(category) =>
              updateQuery("category", category)
            }
            maxPrice={maxPrice}
            setMaxPrice={(price) =>
              updateQuery("maxPrice", price >= priceLimit ? null : price)
            }
            priceLimit={priceLimit}
            categories={[...new Set(products.map((product) => product.category))]}
            onApply={() => {
              setIsMobileFilterOpen(false);
            }}
            onClose={() => setIsMobileFilterOpen(false)}
          />
        </div>
        <div className="min-w-0 flex-1">
          {/* Header Row: Title, Count, Sort, Mobile Filter Button */}
          <div className=" w-full flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6 sm:mb-8">
            <div className="w-full gap-4 flex items-end justify-between">
              <h1 className="font-integral text-2xl sm:text-3xl md:text-4xl font-extrabold uppercase text-black">
                Products
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
                <select
                  aria-label="Sort products"
                  value={sortOrder}
                  onChange={(event) => {
                    const params = new URLSearchParams(searchParams);
                    params.set("sort", event.target.value);
                    setSearchParams(params);
                  }}
                  className="rounded-full border border-[#e5e5e5] bg-white px-3 py-2 text-xs text-black"
                >
                  <option value="newest">Newest</option>
                  <option value="price-low">Price: Low to High</option>
                  <option value="price-high">Price: High to Low</option>
                  <option value="name">Name</option>
                </select>
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

          {status === "loading" ? (
            <p className="py-[60px] text-center text-[#777]">Loading products...</p>
          ) : status === "error" ? (
            <p className="py-[60px] text-center text-[#b91c1c]" role="alert">{error}</p>
          ) : filteredProducts.length === 0 ? (
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
