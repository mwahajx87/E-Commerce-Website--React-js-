import { Link, useParams } from "react-router-dom";
import { useProducts } from "../Context/useProducts";
import { formatCurrency } from "../utils/currency";

const ProductRecommendations = () => {
  const { id } = useParams();
  const { products } = useProducts();
  const currentProduct = products.find((product) => product.id === id);
  const relatedProducts = products.filter(
    (product) =>
      product.id !== id && product.category === currentProduct?.category,
  );
  const recommendedProducts = (
    relatedProducts.length > 0
      ? relatedProducts
      : products.filter((product) => product.id !== id)
  ).slice(0, 4);

  return (
    <section className="mx-auto mt-[70px] w-full max-w-[1440px] px-[40px] max-[639px]:mt-[30px] max-[639px]:px-0">
      <h2 className="mb-[45px] text-center text-[32px] font-extrabold text-[#111] max-[639px]:mb-[18px] max-[639px]:text-[20px] max-[639px]:leading-[1]">
        YOU MIGHT ALSO LIKE
      </h2>

      <div className="grid grid-cols-4 gap-[20px] max-[639px]:grid-cols-2 max-[639px]:gap-[10px]">
        {recommendedProducts.map((product) => (
          <Link to={`/product/${product.id}`} state={product} className="min-w-0 text-inherit no-underline" key={product.id}>
            <div className="h-[300px] overflow-hidden rounded-[14px] bg-[#f2f2f2] max-[639px]:h-[115px] max-[639px]:rounded-[8px]">
              <img
                src={product.image}
                alt={product.name}
                className="h-full w-full object-contain transition-transform duration-300 hover:scale-[1.04]"
              />
            </div>

            <h3 className="mx-0 mb-[8px] mt-[14px] text-[15px] font-bold text-[#111] max-[639px]:text-[11px] max-[639px]:leading-[1.4]">
              {product.name}
            </h3>

            <div className="mt-[8px] flex flex-wrap items-center gap-[9px]">
              <span className="text-[19px] font-bold text-[#111] max-[639px]:text-[14px]">
                {formatCurrency(product.price)}
              </span>
              {product.oldPrice && (
                <>
                  <span className="text-[17px] text-[#999] line-through max-[639px]:text-[12px]">
                    {formatCurrency(product.oldPrice)}
                  </span>
                  <span className="rounded-full bg-[#ffe5e5] px-[10px] py-[5px] text-[11px] font-medium text-[#f33] sm:px-[7px] sm:py-[4px] sm:text-[9px]">
                    {product.discount}
                  </span>
                </>
              )}
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default ProductRecommendations;
