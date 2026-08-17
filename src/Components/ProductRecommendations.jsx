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
    <section className="mx-auto my-[70px] mb-[80px] w-full max-w-[1440px] px-[40px] box-border max-[1200px]:px-[30px] max-[1024px]:px-[25px] max-[768px]:my-[55px] max-[768px]:mb-[65px] max-[768px]:px-[20px] max-[600px]:my-[50px] max-[600px]:mb-[60px] max-[600px]:px-[16px] max-[480px]:my-[40px] max-[480px]:mb-[50px] max-[480px]:px-[12px] max-[375px]:my-[35px] max-[375px]:mb-[45px] max-[375px]:px-[10px] max-[320px]:my-[30px] max-[320px]:mb-[40px] max-[320px]:px-[8px] max-[250px]:min-w-[250px] max-[250px]:overflow-x-auto max-[250px]:my-[25px] max-[250px]:mb-[30px] max-[250px]:px-[6px]">
      <h2 className="m-0 mb-[45px] text-center text-[32px] font-[800] text-[#111] max-[1200px]:mb-[38px] max-[1200px]:text-[29px] max-[1024px]:mb-[35px] max-[1024px]:text-[28px] max-[768px]:mb-[30px] max-[768px]:text-[25px] max-[600px]:mb-[28px] max-[600px]:text-[24px] max-[480px]:mb-[22px] max-[480px]:text-[20px] max-[375px]:mb-[18px] max-[375px]:text-[18px] max-[320px]:mb-[15px] max-[320px]:text-[16px] max-[250px]:mb-[12px] max-[250px]:text-[14px]">
        YOU MIGHT ALSO LIKE
      </h2>

      <div className="grid grid-cols-4 gap-[20px] max-[1200px]:gap-[18px] max-[1024px]:grid-cols-3 max-[1024px]:gap-[25px_16px] max-[768px]:grid-cols-2 max-[768px]:gap-[28px_15px] max-[600px]:grid-cols-2 max-[600px]:gap-[25px_12px] max-[480px]:gap-[20px_10px] max-[375px]:gap-[16px_8px] max-[320px]:gap-[14px_6px] max-[250px]:grid-cols-2 max-[250px]:gap-[10px_5px]">
        {recommendedProducts.map((product) => (
          <div className="group min-w-0" key={product.id}>
            <div className="h-[300px] w-full overflow-hidden rounded-[14px] bg-[#f2f2f2] max-[1200px]:h-[280px] max-[1024px]:h-[260px] max-[768px]:h-[240px] max-[600px]:h-[210px] max-[600px]:rounded-[10px] max-[480px]:h-[175px] max-[480px]:rounded-[9px] max-[375px]:h-[150px] max-[375px]:rounded-[8px] max-[320px]:h-[125px] max-[320px]:rounded-[7px] max-[250px]:h-[95px] max-[250px]:rounded-[6px]">
              <img
                src={product.image}
                alt={product.name}
                className="block h-full w-full object-cover transition-transform duration-300 ease-in-out group-hover:scale-[1.04]"
              />
            </div>

            <h3 className="mb-[8px] mt-[14px] text-[15px] font-[700] text-[#111] max-[600px]:text-[12px] max-[600px]:leading-[1.4] max-[480px]:text-[11px] max-[375px]:mb-[6px] max-[375px]:mt-[10px] max-[375px]:text-[10px] max-[320px]:text-[9px] max-[250px]:mb-[4px] max-[250px]:mt-[6px] max-[250px]:text-[8px]">
              {product.name}
            </h3>

            <div className="flex items-center gap-[8px] text-[13px] text-[#555] max-[600px]:gap-[5px] max-[600px]:text-[10px] max-[375px]:text-[9px] max-[250px]:text-[7px]">
              <span className="text-[16px] tracking-[1px] text-[#ffc633] max-[600px]:text-[12px] max-[375px]:text-[11px] max-[250px]:text-[9px]">
                ★★★★★
              </span>
              <span>{product.rating}/5</span>
            </div>

            <div className="mt-[8px] flex items-center flex-wrap gap-[9px]">
              <span className="text-[19px] font-[700] text-[#111] max-[600px]:text-[16px] max-[480px]:text-[14px] max-[375px]:text-[13px] max-[320px]:text-[12px] max-[250px]:text-[10px]">
                ${product.price}
              </span>

              {product.oldPrice && (
                <>
                  <span className="text-[17px] text-[#999] line-through max-[600px]:text-[14px] max-[480px]:text-[12px] max-[375px]:text-[11px] max-[320px]:text-[10px] max-[250px]:text-[9px]">
                    ${product.oldPrice}
                  </span>

                  <span className="rounded-[20px] bg-[#ffe5e5] px-[10px] py-[5px] text-[11px] font-[500] text-[#f33] max-[600px]:px-[7px] max-[600px]:py-[4px] max-[600px]:text-[9px] max-[375px]:px-[6px] max-[375px]:py-[3px] max-[375px]:text-[8px] max-[250px]:px-[5px] max-[250px]:py-[2px] max-[250px]:text-[7px]">
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
