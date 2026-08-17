import { useState } from "react";

import cloth1 from "../assets/cloth1.png";
import cloth2 from "../assets/cloth2.png";
import cloth3 from "../assets/cloth3.png";
import cloth4 from "../assets/cloth4.png";

import ProductCard from "./ProductCard";

const newArrivals = [
  {
    id: 1,
    name: "T-shirt with Tape Details",
    price: 120,
    rating: 4.5,
    image: cloth1,
  },
  {
    id: 2,
    name: "Skinny Fit Jeans",
    price: 240,
    oldPrice: 260,
    discount: 20,
    rating: 3.5,
    image: cloth2,
  },
  { id: 3, name: "Checkered Shirt", price: 180, rating: 4.5, image: cloth3 },
  {
    id: 4,
    name: "Sleeve Striped T-shirt",
    price: 130,
    oldPrice: 160,
    discount: 30,
    rating: 4.5,
    image: cloth4,
  },
];

const ProductSection = () => {
  const [showAll, setShowAll] = useState(false);
  const displayedProducts = showAll
    ? [...newArrivals, ...newArrivals, ...newArrivals]
    : newArrivals;

  return (
    <section className="w-full bg-white px-[20px] pb-[60px] pt-[38px]">
      <div className="mx-auto max-w-[1280px]">
        <h2 className="m-0 mb-[26px] text-left text-[42px] font-black leading-[1.1] tracking-[-1.1px] text-black">
          NEW ARRIVALS
        </h2>

        <div className="grid grid-cols-4 gap-[18px]">
          {displayedProducts.map((product, index) => (
            <ProductCard key={`${product.id}-${index}`} product={product} />
          ))}
        </div>

        {!showAll && (
          <button
            className="mx-auto mt-[28px] flex h-[42px] w-[120px] items-center justify-center rounded-full border border-[#d9d9d9] bg-white text-[14px] font-medium text-black"
            onClick={() => setShowAll(true)}
          >
            View All
          </button>
        )}
      </div>
    </section>
  );
};

export default ProductSection;
