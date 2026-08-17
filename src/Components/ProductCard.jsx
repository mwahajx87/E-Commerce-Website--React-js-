import { Link } from "react-router-dom";
import { useCart } from "../Context/Cart.jsx";

const ProductCard = ({ product }) => {
  const { addToCart } = useCart();

  return (
    <div className="group flex flex-col">
      <Link
        to={`/product/${product.id}`}
        state={product}
        className="block text-inherit no-underline"
      >
        <div className="relative aspect-square w-full overflow-hidden rounded-[16px] bg-[#f2f0f0] max-[1200px]:rounded-[15px] max-[1024px]:rounded-[14px] max-[768px]:rounded-[13px] max-[600px]:rounded-[12px] max-[480px]:rounded-[10px] max-[375px]:rounded-[9px] max-[320px]:rounded-[8px] max-[250px]:min-w-[250px] max-[250px]:overflow-x-auto max-[250px]:rounded-[6px]">
          <img
            src={product.image}
            alt={product.name}
            className="block h-full w-full object-contain"
          />

          <button
            className="absolute bottom-[18px] left-1/2 h-[44px] w-[80%] -translate-x-1/2 translate-y-[15px] cursor-pointer border-none rounded-[25px] bg-black text-[14px] font-semibold text-white opacity-0 invisible transition-all duration-250 ease-in-out hover:bg-[#333] group-hover:visible group-hover:translate-y-0 group-hover:opacity-100 max-[1200px]:h-[42px] max-[1200px]:text-[14px] max-[1024px]:bottom-[16px] max-[1024px]:h-[41px] max-[1024px]:text-[13px] max-[768px]:visible max-[768px]:bottom-[14px] max-[768px]:h-[40px] max-[768px]:translate-y-0 max-[768px]:text-[13px] max-[768px]:opacity-100 max-[600px]:bottom-[12px] max-[600px]:h-[38px] max-[600px]:w-[85%] max-[600px]:text-[12px] max-[480px]:bottom-[10px] max-[480px]:h-[36px] max-[480px]:w-[88%] max-[480px]:text-[12px] max-[375px]:bottom-[8px] max-[375px]:h-[34px] max-[375px]:w-[90%] max-[375px]:text-[11px] max-[320px]:bottom-[6px] max-[320px]:h-[32px] max-[320px]:w-[90%] max-[320px]:text-[11px] max-[250px]:bottom-[5px] max-[250px]:h-[30px] max-[250px]:w-[92%] max-[250px]:text-[10px]"
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              addToCart(product);
            }}
          >
            Add to Cart
          </button>
        </div>

        <div className="mt-[16px]">
          <h3 className="m-0 mb-[8px] text-[16px] font-bold text-black leading-tight max-[1200px]:text-[15px] max-[1024px]:text-[14px] max-[768px]:text-[13px] max-[600px]:text-[12px] max-[480px]:mb-[6px] max-[480px]:text-[11px] max-[375px]:text-[10px] max-[320px]:text-[9px] max-[250px]:text-[8px]">
            {product.name}
          </h3>

          <div className="flex items-center gap-[6px] mb-[8px] max-[480px]:gap-[4px] max-[480px]:mb-[6px]">
            <span className="text-[14px] tracking-[1px] text-[#ffc633] max-[1200px]:text-[13px] max-[1024px]:text-[12px] max-[768px]:text-[11px] max-[600px]:text-[10px] max-[480px]:text-[9px] max-[375px]:text-[8px] max-[320px]:text-[7px] max-[250px]:text-[6px]">
              ★★★★★
            </span>
            <span className="text-[13px] text-[#555] max-[1200px]:text-[12px] max-[1024px]:text-[11px] max-[768px]:text-[10px] max-[600px]:text-[9px] max-[480px]:text-[8px] max-[375px]:text-[7px] max-[320px]:text-[6px] max-[250px]:text-[5px]">
              {product.rating}/5
            </span>
          </div>

          <div className="flex items-center gap-[8px] flex-wrap max-[480px]:gap-[6px]">
            <span className="text-[18px] font-bold text-black max-[1200px]:text-[16px] max-[1024px]:text-[15px] max-[768px]:text-[14px] max-[600px]:text-[13px] max-[480px]:text-[12px] max-[375px]:text-[11px] max-[320px]:text-[10px] max-[250px]:text-[9px]">
              ${product.price}
            </span>

            {product.oldPrice && (
              <>
                <span className="text-[16px] text-[#777] line-through max-[1200px]:text-[14px] max-[1024px]:text-[13px] max-[768px]:text-[12px] max-[600px]:text-[11px] max-[480px]:text-[10px] max-[375px]:text-[9px] max-[320px]:text-[8px] max-[250px]:text-[7px]">
                  ${product.oldPrice}
                </span>
                <span className="rounded-[62px] bg-[#ff3333]/10 px-[10px] py-[4px] text-[12px] font-medium text-[#ff3333] max-[1200px]:text-[11px] max-[1024px]:text-[10px] max-[768px]:text-[9px] max-[600px]:text-[8px] max-[480px]:text-[7px] max-[480px]:px-[8px] max-[480px]:py-[3px] max-[375px]:text-[6px] max-[320px]:text-[5px] max-[250px]:text-[4px]">
                  -{product.discount}%
                </span>
              </>
            )}
          </div>
        </div>
      </Link>
    </div>
  );
};

export default ProductCard;
