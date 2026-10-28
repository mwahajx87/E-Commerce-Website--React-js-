import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import Reviews from "../Components/Reviews";
import ProductRecommendations from "../Components/ProductRecommendations";
import { useCart } from "../Context/useCart";
import { useProducts } from "../Context/useProducts";
import { formatCurrency } from "../utils/currency";

const ProductDetails = () => {
  const { id } = useParams();
  const { products, status, error } = useProducts();
  const product = products.find((item) => item.id === id);

  const [selectedColor, setSelectedColor] = useState("");
  const [selectedSize, setSelectedSize] = useState("");
  const [quantity, setQuantity] = useState(1);
  const mainImage = product?.image || "";
  const colors = product?.colors || [];
  const sizes = product?.sizes || [];
  const activeColor = colors.includes(selectedColor)
    ? selectedColor
    : colors[0] || "";
  const activeSize = sizes.includes(selectedSize)
    ? selectedSize
    : sizes[0] || "";

  const { addToCart } = useCart();

  const increaseQuantity = () =>
    setQuantity((prev) => Math.min(prev + 1, product?.stock ?? prev + 1));
  const decreaseQuantity = () =>
    setQuantity((prev) => (prev > 1 ? prev - 1 : 1));

  const handleAddToCart = () => {
    addToCart({
      ...product,
      ...(activeColor ? { color: activeColor } : {}),
      ...(activeSize ? { size: activeSize } : {}),
      quantity,
    });
  };

  if (status === "loading") {
    return <p className="mx-auto max-w-[1240px] px-5 py-16">Loading product...</p>;
  }
  if (status === "error") {
    return <p className="mx-auto max-w-[1240px] px-5 py-16 text-red-700" role="alert">{error}</p>;
  }
  if (!product) {
    return <p className="mx-auto max-w-[1240px] px-5 py-16">Product not found.</p>;
  }

  return (
    <main className="mx-auto w-full max-w-[1240px] px-[20px] pb-[60px] pt-[25px] box-border max-[639px]:px-[16px] max-[639px]:pb-[36px] max-[639px]:pt-[16px]">
      <div className="mb-[25px] flex flex-wrap items-center gap-[9px] text-[14px] text-[#777] max-[639px]:mb-[14px] max-[639px]:text-[11px]">
        <Link to="/" className="text-[#777] no-underline hover:text-[#111]">
          Home
        </Link>
        <span>/</span>
        <Link
          to="/category"
          className="text-[#777] no-underline hover:text-[#111]"
        >
          Shop
        </Link>
        <span>/</span>
        <Link
          to={`/category?search=${encodeURIComponent(product.category)}`}
          className="text-[#777] no-underline hover:text-[#111]"
        >
          {product.category}
        </Link>
        <span>/</span>
        <strong className="font-medium text-[#111]">{product.name}</strong>
      </div>

      <section className="grid grid-cols-2 gap-[55px] align-start max-[639px]:grid-cols-1 max-[639px]:gap-[20px]">
        <div className="grid grid-cols-[150px_1fr] gap-[14px] max-[639px]:flex max-[639px]:flex-col-reverse max-[639px]:gap-[8px]">
          <div className="flex flex-col gap-[14px] max-[639px]:flex-row max-[639px]:gap-[8px]">
            {[product.image].map((img, index) => (
              <div
                key={index}
                className={`h-[165px] w-full overflow-hidden rounded-[12px] border bg-[#f2f2f2] max-[639px]:h-[62px] max-[639px]:w-[62px] max-[639px]:rounded-[10px] ${mainImage === img && index === 0 ? "border-2 border-[#111]" : "border-transparent"}`}
              >
                <img
                  src={img}
                  alt={product.name}
                  className="h-full w-full object-contain block"
                />
              </div>
            ))}
          </div>

          <div className="h-[525px] overflow-hidden rounded-[12px] bg-[#f2f2f2] max-[639px]:h-[168px] max-[639px]:rounded-[10px]">
            <img
              src={mainImage}
              alt={product.name}
              className="h-full w-full object-contain block"
            />
          </div>
        </div>

        <div className="pt-[3px] max-[639px]:pt-0">
          <h1 className="mb-[10px] text-[38px] font-extrabold leading-[1.1] text-[#111] max-[639px]:text-[27px] max-[639px]:leading-[0.95]">
            {product.name.toUpperCase()}
          </h1>

          <div className="flex items-center gap-[10px]">
            <span className="text-[27px] font-bold text-[#111] max-[639px]:text-[20px]">
              {formatCurrency(product.price)}
            </span>
            {product.oldPrice && (
              <>
                <span className="text-[15px] text-[#999] line-through max-[639px]:text-[14px]">
                  {formatCurrency(product.oldPrice)}
                </span>
                <span className="rounded-full bg-[#ffe5e5] px-[10px] py-[4px] text-[11px] font-medium text-[#f33] max-[639px]:px-[8px] max-[639px]:py-[3px] max-[639px]:text-[10px]">
                  -{product.discount}%
                </span>
              </>
            )}
          </div>

          <p className="mt-[15px] max-w-[570px] text-[14px] leading-[1.65] text-[#666] max-[639px]:text-[11px]">
            {product.description || "A quality product selected from our catalog."}
          </p>

          <div className="my-[22px] h-[1px] w-full bg-[#e5e5e5]" />

          {colors.length > 0 && (
            <div className="mb-0">
              <p className="mb-[12px] text-[14px] text-[#777]">Available colors</p>
              <div className="flex flex-wrap items-center gap-[10px]">
                {colors.map((color) => (
                  <button
                    key={color}
                    type="button"
                    aria-pressed={activeColor === color}
                    className={`rounded-full border px-4 py-2 text-[13px] ${
                      activeColor === color
                        ? "border-black bg-black text-white"
                        : "border-[#ddd] bg-white text-[#555]"
                    }`}
                    onClick={() => setSelectedColor(color)}
                  >
                    {color}
                  </button>
                ))}
              </div>
            </div>
          )}

          {sizes.length > 0 && (
            <>
              {colors.length > 0 && (
                <div className="my-[22px] h-[1px] w-full bg-[#e5e5e5]" />
              )}
              <div className="mb-0">
                <p className="mb-[12px] text-[14px] text-[#777]">Available sizes</p>
                <div className="flex flex-wrap items-center gap-[10px]">
                  {sizes.map((size) => (
                    <button
                      key={size}
                      type="button"
                      aria-pressed={activeSize === size}
                      className={`rounded-full border px-[20px] py-[11px] text-[13px] ${
                        activeSize === size
                          ? "border-[#111] bg-[#111] text-white"
                          : "border-transparent bg-[#f3f3f3] text-[#555]"
                      }`}
                      onClick={() => setSelectedSize(size)}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>
            </>
          )}

          {(colors.length > 0 || sizes.length > 0) && (
            <div className="my-[22px] h-[1px] w-full bg-[#e5e5e5]" />
          )}

          <div className="flex items-center gap-[12px] max-[639px]:gap-[8px]">
            <div className="flex items-center gap-[14px] rounded-full bg-[#f3f3f3] px-[14px] py-[6px]">
              <button
                type="button"
                className="border-none bg-transparent text-[16px] text-black"
                onClick={decreaseQuantity}
              >
                −
              </button>
              <span className="text-[16px]">{quantity}</span>
              <button
                type="button"
                className="border-none bg-transparent text-[16px] text-black"
                onClick={increaseQuantity}
                disabled={quantity >= product.stock}
              >
                +
              </button>
            </div>

            <button
              type="button"
              onClick={handleAddToCart}
              disabled={product.stock < 1}
              className="h-[46px] rounded-full bg-black px-[30px] text-[15px] font-medium text-white max-[639px]:h-[40px] max-[639px]:flex-1 max-[639px]:text-[12px]"
            >
              {product.stock < 1 ? "Out of Stock" : "Add to Cart"}
            </button>
          </div>
        </div>
      </section>

      <Reviews product={product} />
      <ProductRecommendations />
    </main>
  );
};

export default ProductDetails;
