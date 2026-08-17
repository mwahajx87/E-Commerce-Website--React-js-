import { useState } from "react";

import cloth1 from "../../assets/cloth1.png";
import cloth2 from "../../assets/cloth2.png";
import cloth3 from "../../assets/cloth3.png";
import cloth4 from "../../assets/cloth4.png";

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
  {
    id: 3,
    name: "Checkered Shirt",
    price: 180,
    rating: 4.5,
    image: cloth3,
  },
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

  // View All click hone par 4 products TEEN baar jod kar 12 (4+4+4) ban jate hain
  const displayedProducts = showAll
    ? [...newArrivals, ...newArrivals, ...newArrivals]
    : newArrivals;

  return (
    <section className="w-full bg-white box-border pt-[70px] px-[6%] pb-[80px] max-[1200px]:pt-[60px] max-[1200px]:px-[5%] max-[1200px]:pb-[70px] max-[1024px]:py-[55px] max-[1024px]:px-[4%] max-[768px]:pt-[50px] max-[768px]:px-[3%] max-[768px]:pb-[55px] max-[600px]:py-[45px] max-[600px]:px-[20px] max-[480px]:py-[35px] max-[480px]:px-[15px] max-[375px]:py-[28px] max-[375px]:px-[12px] max-[320px]:py-[22px] max-[320px]:px-[10px] max-[250px]:min-w-[250px] max-[250px]:overflow-x-auto max-[250px]:py-[16px] max-[250px]:px-[6px]">
      {/* Heading */}
      <h2 className="m-0 mb-[50px] text-center font-sans text-[48px] font-[900] tracking-[-1.5px] text-black max-[1200px]:mb-[42px] max-[1200px]:text-[42px] max-[1024px]:text-[40px] max-[768px]:mb-[32px] max-[768px]:text-[36px] max-[600px]:mb-[30px] max-[600px]:text-[32px] max-[480px]:mb-[24px] max-[480px]:text-[26px] max-[375px]:mb-[20px] max-[375px]:text-[22px] max-[320px]:mb-[16px] max-[320px]:text-[19px] max-[250px]:mb-[12px] max-[250px]:text-[15px]">
        NEW ARRIVALS
      </h2>

      {/* Products */}
      <div className="w-full grid grid-cols-4 gap-[20px] max-[1200px]:gap-[18px] max-[1024px]:grid-cols-2 max-[1024px]:gap-[25px_15px] max-[768px]:grid-cols-2 max-[768px]:gap-[20px_15px] max-[600px]:grid-cols-2 max-[600px]:gap-[15px] max-[480px]:gap-[12px] max-[375px]:gap-[10px] max-[320px]:gap-[8px] max-[250px]:grid-cols-2 max-[250px]:gap-[5px]">
        {displayedProducts.map((product, index) => (
          <ProductCard
            key={`${product.id}-${index}`}
            product={product}
          />
        ))}
      </div>

      {/* View All */}
      {!showAll && (
        <button
          className="block mx-auto mt-[45px] h-[50px] w-[220px] cursor-pointer rounded-[30px] border border-[#ddd] bg-white text-[14px] font-[500] text-black transition-colors duration-200 hover:bg-black hover:text-white max-[768px]:w-[200px] max-[600px]:w-full max-[480px]:h-[46px] max-[480px]:text-[13px] max-[375px]:mt-[30px] max-[375px]:h-[44px] max-[375px]:text-[13px] max-[320px]:mt-[25px] max-[320px]:h-[42px] max-[320px]:text-[12px] max-[250px]:mt-[18px] max-[250px]:h-[36px] max-[250px]:text-[11px]"
          onClick={() => setShowAll(true)}
        >
          View All
        </button>
      )}
    </section>
  );
};

export default ProductSection;