import { Link } from "react-router-dom";

const ProductCard = ({ product }) => {
  return (
    <div className="min-w-0">
      <Link to={`/product/${product.id}`} state={product} className="block text-inherit no-underline">
        <div className="w-full overflow-hidden rounded-[18px] bg-[#f2f0f0] aspect-square">
          <img src={product.image} alt={product.name} className="h-full w-full object-contain block" />
        </div>

        <h3 className="mt-[12px] text-[15px] font-bold text-[#111]">{product.name}</h3>

        <div className="mt-[8px] flex items-center gap-[8px] text-[12px] text-[#555]">
          <span className="text-[14px] tracking-[1px] text-[#ffc633]">★★★★★</span>
          <span>{product.rating}/5</span>
        </div>

        <div className="mt-[8px] flex items-center gap-[8px]">
          <span className="text-[18px] font-bold text-[#111]">${product.price}</span>

          {product.oldPrice && (
            <>
              <span className="text-[14px] text-[#999] line-through">${product.oldPrice}</span>
              <span className="rounded-full bg-[#ffe5e5] px-[8px] py-[3px] text-[10px] font-medium text-[#f33]">-{product.discount}%</span>
            </>
          )}
        </div>
      </Link>
    </div>
  );
};

export default ProductCard;