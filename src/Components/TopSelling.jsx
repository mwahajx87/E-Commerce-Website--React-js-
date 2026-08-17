import { useState } from "react";

import cloth5 from "../assets/cloth5.png";
import cloth6 from "../assets/cloth6.png";
import cloth7 from "../assets/cloth7.png";
import cloth8 from "../assets/cloth8.png";

import ProductCard from "./ProductCard";

const products = [
  {
    id: 5,
    image: cloth5,
    name: "Vertical Striped Shirt",
    rating: 5.0,
    price: 212,
    oldPrice: 232,
    discount: 20,
  },
  {
    id: 6,
    image: cloth6,
    name: "Courage Graphic T-shirt",
    rating: 4.0,
    price: 145,
  },
  {
    id: 7,
    image: cloth7,
    name: "Loose Fit Bermuda Shorts",
    rating: 3.0,
    price: 80,
  },
  { id: 8, image: cloth8, name: "Faded Skinny Jeans", rating: 4.5, price: 210 },
];

const TopSelling = () => {
  const [showAll, setShowAll] = useState(false);
  const displayedProducts = showAll
    ? [...products, ...products, ...products]
    : products;

  return (
    <section className="w-full bg-white px-[20px] pb-[58px] pt-[6px]">
      <div className="mx-auto max-w-[1280px]">
        <h2 className="m-0 mb-[26px] text-left text-[42px] font-black leading-[1.1] tracking-[-1.1px] text-black">
          TOP SELLING
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

export default TopSelling;
