import cloth9 from "../assets/cloth9.png";
import cloth10 from "../assets/cloth10.png";
import cloth11 from "../assets/cloth11.png";
import cloth12 from "../assets/cloth12.png";

const recommendedProducts = [
  {
    id: 1,
    name: "Polo with Contrast Trims",
    price: 242,
    oldPrice: 260,
    discount: "-20%",
    rating: 4.0,
    image: cloth10,
  },
  {
    id: 2,
    name: "Gradient Graphic T-shirt",
    price: 145,
    rating: 3.5,
    image: cloth9,
  },
  {
    id: 3,
    name: "Polo with Tipping Details",
    price: 180,
    rating: 4.5,
    image: cloth11,
  },
  {
    id: 4,
    name: "Black Striped T-shirt",
    price: 150,
    oldPrice: 180,
    discount: "-30%",
    rating: 5.0,
    image: cloth12,
  },
];

const ProductRecommendations = () => {
  return (
    <section className="mx-auto mt-[70px] w-full max-w-[1440px] px-[40px] lg:px-[30px] md:mt-[55px] md:px-[20px] sm:mt-[50px] sm:px-[16px] xs:mt-[40px] xs:px-[12px]">
      <h2 className="mb-[45px] text-center text-[32px] font-extrabold text-[#111] lg:text-[29px] lg:mb-[38px] md:text-[28px] md:mb-[35px] sm:text-[24px] sm:mb-[28px] xs:text-[20px] xs:mb-[22px]">
        YOU MIGHT ALSO LIKE
      </h2>

      <div className="grid grid-cols-4 gap-[20px] lg:gap-[18px] md:grid-cols-3 md:gap-[25px_16px] sm:grid-cols-2 sm:gap-[25px_12px] xs:gap-[20px_10px]">
        {recommendedProducts.map((product) => (
          <div className="min-w-0" key={product.id}>
            <div className="h-[300px] overflow-hidden rounded-[14px] bg-[#f2f2f2] lg:h-[280px] md:h-[260px] sm:h-[210px] sm:rounded-[10px] xs:h-[175px]">
              <img
                src={product.image}
                alt={product.name}
                className="h-full w-full object-cover transition-transform duration-300 hover:scale-[1.04]"
              />
            </div>

            <h3 className="mx-0 mb-[8px] mt-[14px] text-[15px] font-bold text-[#111] sm:text-[12px] sm:leading-[1.4] xs:text-[11px]">
              {product.name}
            </h3>

            <div className="flex items-center gap-[8px] text-[13px] text-[#555] sm:gap-[5px] sm:text-[10px]">
              <span className="text-[16px] tracking-[1px] text-[#ffc633] sm:text-[12px]">
                ★★★★★
              </span>
              <span>{product.rating}/5</span>
            </div>

            <div className="mt-[8px] flex flex-wrap items-center gap-[9px]">
              <span className="text-[19px] font-bold text-[#111] sm:text-[16px] xs:text-[14px]">
                ${product.price}
              </span>
              {product.oldPrice && (
                <>
                  <span className="text-[17px] text-[#999] line-through sm:text-[14px] xs:text-[12px]">
                    ${product.oldPrice}
                  </span>
                  <span className="rounded-full bg-[#ffe5e5] px-[10px] py-[5px] text-[11px] font-medium text-[#f33] sm:px-[7px] sm:py-[4px] sm:text-[9px]">
                    {product.discount}
                  </span>
                </>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProductRecommendations;
