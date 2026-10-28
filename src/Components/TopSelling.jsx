import { useState } from "react";
import { useProducts } from "../Context/useProducts";
import ProductCard from "./ProductCard";

const TopSelling = () => {
  const [showAll, setShowAll] = useState(false);
  const { products, status, error } = useProducts();
  const sellingProducts = products.slice(4);
  const displayedProducts = showAll
    ? sellingProducts
    : sellingProducts.slice(0, 4);

  return (
    <section className="w-full bg-white px-[20px] pb-[58px] pt-[6px] max-[639px]:px-[16px] max-[639px]:pb-[28px] max-[639px]:pt-[8px]">
      <div className="mx-auto max-w-[1280px]">
        <h2 className="m-0 mb-[26px] text-left text-[42px] font-black leading-[1.1] tracking-[-1.1px] text-black max-[639px]:mb-[16px] max-[639px]:text-left max-[639px]:text-[25px] max-[639px]:leading-[0.95] max-[639px]:tracking-[-1px]">
          MORE TO EXPLORE
        </h2>

        {status === "loading" && <p>Loading products...</p>}
        {status === "error" && <p role="alert">{error}</p>}
        {status === "ready" && (
          <div className="grid grid-cols-4 gap-[18px] max-[639px]:grid-cols-2 max-[639px]:gap-x-[8px] max-[639px]:gap-y-[22px]">
            {displayedProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        )}

        {status === "ready" && sellingProducts.length > 4 && !showAll && (
          <button
            className="mx-auto mt-[28px] flex h-[42px] w-[120px] items-center justify-center rounded-full border border-[#d9d9d9] bg-white text-[14px] font-medium text-black max-[639px]:mt-[20px] max-[639px]:h-[38px] max-[639px]:w-full max-[639px]:text-[11px]"
            onClick={() => setShowAll(true)}
          >
            View All
          </button>
        )}
      </div>
    </section>
  );
};

export default TopSelling;
