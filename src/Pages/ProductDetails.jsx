import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Reviews from "../Components/Reviews";
import ProductRecommendations from "../Components/ProductRecommendations";
import cloth1 from "../assets/cloth1.png";

import { useCart } from "../Context/Cart";

const ProductDetails = () => {
  const location = useLocation();

  const product = location.state || {
    id: 1,
    name: "One Life Graphic T-shirt",
    price: 260,
    oldPrice: 300,
    discount: 40,
    rating: 4.5,
    image: cloth1,
  };

  const [selectedColor, setSelectedColor] = useState("brown");
  const [selectedSize, setSelectedSize] = useState("Large");
  const [quantity, setQuantity] = useState(1);
  const [mainImage, setMainImage] = useState(product.image);

  const { addToCart } = useCart();

  const increaseQuantity = () => setQuantity((prev) => prev + 1);
  const decreaseQuantity = () =>
    setQuantity((prev) => (prev > 1 ? prev - 1 : 1));

  const handleAddToCart = () => {
    addToCart({
      ...product,
      color: selectedColor,
      size: selectedSize,
      quantity,
    });
  };

  return (
    <main className="mx-auto w-full max-w-[1240px] px-[20px] pb-[60px] pt-[25px] box-border">
      <div className="mb-[25px] flex flex-wrap items-center gap-[9px] text-[14px] text-[#777]">
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
          to="/category?category=men"
          className="text-[#777] no-underline hover:text-[#111]"
        >
          Men
        </Link>
        <span>/</span>
        <strong className="font-medium text-[#111]">{product.name}</strong>
      </div>

      <section className="grid grid-cols-2 gap-[55px] align-start lg:gap-[35px] md:grid-cols-1">
        <div className="grid grid-cols-[150px_1fr] gap-[14px] md:grid-cols-[120px_1fr]">
          <div className="flex flex-col gap-[14px]">
            {[product.image, product.image, product.image].map((img, index) => (
              <button
                key={index}
                type="button"
                className={`h-[165px] w-full overflow-hidden rounded-[12px] border bg-[#f2f2f2] p-0 ${mainImage === img && index === 0 ? "border-2 border-[#111]" : "border-transparent"}`}
                onClick={() => setMainImage(img)}
              >
                <img
                  src={img}
                  alt={product.name}
                  className="h-full w-full object-cover block"
                />
              </button>
            ))}
          </div>

          <div className="h-[525px] overflow-hidden rounded-[12px] bg-[#f2f2f2]">
            <img
              src={mainImage}
              alt={product.name}
              className="h-full w-full object-cover block"
            />
          </div>
        </div>

        <div className="pt-[3px]">
          <h1 className="mb-[10px] text-[38px] font-extrabold leading-[1.1] text-[#111] md:text-[32px]">
            {product.name.toUpperCase()}
          </h1>

          <div className="mb-[12px] flex items-center gap-[9px]">
            <span className="text-[20px] tracking-[2px] text-[#ffc633]">
              ★★★★★
            </span>
            <span className="text-[14px] text-[#333]">{product.rating}/5</span>
          </div>

          <div className="flex items-center gap-[10px]">
            <span className="text-[27px] font-bold text-[#111]">
              ${product.price}
            </span>
            {product.oldPrice && (
              <>
                <span className="text-[15px] text-[#999] line-through">
                  ${product.oldPrice}
                </span>
                <span className="rounded-full bg-[#ffe5e5] px-[10px] py-[4px] text-[11px] font-medium text-[#f33]">
                  -{product.discount}%
                </span>
              </>
            )}
          </div>

          <p className="mt-[15px] max-w-[570px] text-[14px] leading-[1.65] text-[#666]">
            This graphic t-shirt which is perfect for any occasion. Crafted from
            a soft and breathable fabric, it offers exceptional comfort and
            style.
          </p>

          <div className="my-[22px] h-[1px] w-full bg-[#e5e5e5]" />

          <div className="mb-0">
            <p className="mb-[12px] text-[14px] text-[#777]">Select Colors</p>
            <div className="flex items-center gap-[12px]">
              <button
                type="button"
                aria-label="Brown"
                className={`flex h-[37px] w-[37px] items-center justify-center rounded-full border-none text-transparent ${selectedColor === "brown" ? "text-white" : ""} bg-[#4b3a30]`}
                onClick={() => setSelectedColor("brown")}
              >
                {selectedColor === "brown" && "✓"}
              </button>
              <button
                type="button"
                aria-label="Green"
                className={`flex h-[37px] w-[37px] items-center justify-center rounded-full border-none text-transparent ${selectedColor === "green" ? "text-white" : ""} bg-[#31523b]`}
                onClick={() => setSelectedColor("green")}
              >
                {selectedColor === "green" && "✓"}
              </button>
              <button
                type="button"
                aria-label="Navy"
                className={`flex h-[37px] w-[37px] items-center justify-center rounded-full border-none text-transparent ${selectedColor === "navy" ? "text-white" : ""} bg-[#273c56]`}
                onClick={() => setSelectedColor("navy")}
              >
                {selectedColor === "navy" && "✓"}
              </button>
            </div>
          </div>

          <div className="my-[22px] h-[1px] w-full bg-[#e5e5e5]" />

          <div className="mb-0">
            <p className="mb-[12px] text-[14px] text-[#777]">Choose Size</p>
            <div className="flex flex-wrap items-center gap-[10px]">
              {["Small", "Medium", "Large", "X-Large"].map((size) => (
                <button
                  key={size}
                  type="button"
                  className={`rounded-full border-none px-[20px] py-[11px] text-[13px] ${selectedSize === size ? "bg-[#111] text-white" : "bg-[#f3f3f3] text-[#555]"}`}
                  onClick={() => setSelectedSize(size)}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          <div className="my-[22px] h-[1px] w-full bg-[#e5e5e5]" />

          <div className="flex items-center gap-[12px]">
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
              >
                +
              </button>
            </div>

            <button
              type="button"
              onClick={handleAddToCart}
              className="h-[46px] rounded-full bg-black px-[30px] text-[15px] font-medium text-white"
            >
              Add to Cart
            </button>
          </div>
        </div>
      </section>

      <Reviews />
      <ProductRecommendations />
    </main>
  );
};

export default ProductDetails;
