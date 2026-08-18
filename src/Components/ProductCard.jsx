import { Link } from "react-router-dom";
import { useCart } from "../Context/Cart.jsx";

const renderStars = (rating) => {
  const stars = [];
  for (let i = 1; i <= 5; i++) {
    if (rating >= i) {
      stars.push("★");
    } else if (rating >= i - 0.5) {
      stars.push("★");
    } else {
      stars.push("<span style='opacity:0.3'>★</span>");
    }
  }
  return stars.join("");
};

const ProductCard = ({ product }) => {
  const { addToCart } = useCart();

  return (
    <div className="group min-w-0">
      <Link
        to={`/product/${product.id}`}
        state={product}
        className="block text-inherit no-underline"
      >
        <div className="relative aspect-square w-full overflow-hidden rounded-[18px] bg-[#f2f0f0] max-[639px]:rounded-[12px] hover:cursor-pointer  not-first:">
          <img
            src={product.image}
            alt={product.name}
            className="h-full w-full object-contain block hover:scale-[1.04] transition-transform duration-300"
          />
          <button
            type="button"
            className="pointer-events-none absolute bottom-[12px] left-1/2 z-10 hidden -translate-x-1/2 rounded-full border-none bg-black px-[18px] py-[9px] text-[12px] font-medium text-white opacity-0 transition-opacity duration-200 group-hover:pointer-events-auto group-hover:opacity-100 md:block "
            onClick={(event) => {
              event.preventDefault();
              event.stopPropagation();
              addToCart(product);
            }}
            aria-label={`Add ${product.name} to cart`}
          >
            Add to Cart
          </button>
        </div>

        <h3 className="mt-[12px] text-[15px] font-bold text-[#111] max-[639px]:mt-[8px] max-[639px]:line-clamp-2 max-[639px]:text-[12px]">
          {product.name}
        </h3>

        <div className="mt-[8px] flex items-center gap-[8px] text-[12px] text-[#555] max-[639px]:mt-[4px] max-[639px]:gap-[4px] max-[639px]:text-[10px]">
          <span
            className="text-[14px] tracking-[1px] text-[#ffc633] max-[639px]:text-[11px] max-[639px]:tracking-0"
            dangerouslySetInnerHTML={{ __html: renderStars(product.rating) }}
          />
          <span>{product.rating}/5</span>
        </div>

        <div className="mt-[8px] flex items-center gap-[8px] max-[639px]:mt-[4px] max-[639px]:gap-[5px]">
          <span className="text-[18px] font-bold text-[#111] max-[639px]:text-[14px]">
            ${product.price}
          </span>

          {product.oldPrice && (
            <>
              <span className="text-[14px] text-[#999] line-through max-[639px]:text-[11px]">
                ${product.oldPrice}
              </span>
              <span className="rounded-full bg-[#ffe5e5] px-[8px] py-[3px] text-[10px] font-medium text-[#f33] max-[639px]:px-[5px] max-[639px]:py-[2px] max-[639px]:text-[9px]">
                -{product.discount}%
              </span>
            </>
          )}
        </div>
      </Link>
    </div>
  );
};

export default ProductCard;
