import { useState } from "react";

import cloth5 from "../../assets/cloth5.png";
import cloth6 from "../../assets/cloth6.png";
import cloth7 from "../../assets/cloth7.png";
import cloth8 from "../../assets/cloth8.png";

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
  {
    id: 8,
    image: cloth8,
    name: "Faded Skinny Jeans",
    rating: 4.5,
    price: 210,
  },
];

const TopSelling = () => {
  const [showAll, setShowAll] = useState(false);

  // View All click hone par 4 products TEEN baar jod kar 12 (4+4+4) ban jate hain
  const displayedProducts = showAll
    ? [...products, ...products, ...products]
    : products;

  return (
    <section className="mx-auto w-[88%] box-border border-t border-[#e5e5e5] bg-white px-0 pb-[80px] pt-[70px] max-[1200px]:w-full max-[1200px]:px-[5%] max-[1200px]:pb-[70px] max-[1200px]:pt-[60px] max-[768px]:px-[4%] max-[768px]:pb-[60px] max-[768px]:pt-[55px] max-[600px]:px-[20px] max-[600px]:py-[50px] max-[480px]:px-[15px] max-[480px]:py-[40px] max-[375px]:px-[12px] max-[375px]:py-[32px] max-[320px]:px-[10px] max-[320px]:py-[25px] max-[250px]:min-w-[250px] max-[250px]:overflow-x-auto max-[250px]:px-[6px] max-[250px]:py-[16px]">
      <h2 className="m-0 mb-[55px] text-center text-[48px] font-[900] tracking-[-1.5px] text-black max-[1200px]:mb-[45px] max-[1200px]:text-[42px] max-[1024px]:text-[40px] max-[768px]:mb-[38px] max-[768px]:text-[34px] max-[600px]:mb-[35px] max-[600px]:text-[32px] max-[480px]:mb-[26px] max-[480px]:text-[26px] max-[375px]:mb-[20px] max-[375px]:text-[22px] max-[320px]:mb-[16px] max-[320px]:text-[19px] max-[250px]:mb-[12px] max-[250px]:text-[15px]">
        TOP SELLING
      </h2>

      <div className="mx-auto grid w-full max-w-[1400px] grid-cols-4 gap-[28px] max-[1200px]:gap-[22px] max-[1024px]:grid-cols-2 max-[768px]:grid-cols-2 max-[768px]:gap-[20px] max-[600px]:grid-cols-1 max-[600px]:gap-[35px] max-[480px]:gap-[26px] max-[375px]:gap-[20px] max-[320px]:gap-[16px] max-[250px]:gap-[12px]">
        {displayedProducts.map((product, index) => (
          <ProductCard key={`${product.id}-${index}`} product={product} />
        ))}
      </div>

      {!showAll && (
        <button
          className="mx-auto mt-[50px] block h-[52px] w-[230px] cursor-pointer rounded-[30px] border border-[#ddd] bg-white text-[16px] text-black transition-colors duration-200 ease-in-out hover:bg-black hover:text-white max-[480px]:h-[48px] max-[480px]:w-full max-[480px]:text-[14px] max-[375px]:mt-[35px] max-[375px]:h-[44px] max-[375px]:text-[13px] max-[320px]:mt-[25px] max-[320px]:h-[40px] max-[320px]:text-[12px] max-[250px]:mt-[18px] max-[250px]:h-[36px] max-[250px]:text-[10px]"
          onClick={() => setShowAll(true)}
        >
          View All
        </button>
      )}
    </section>
  );
};

export default TopSelling;
