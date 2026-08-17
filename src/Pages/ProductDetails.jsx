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

  const increaseQuantity = () => {
    setQuantity((prev) => prev + 1);
  };

  const decreaseQuantity = () => {
    setQuantity((prev) => (prev > 1 ? prev - 1 : 1));
  };

  const handleAddToCart = () => {
    addToCart({
      ...product,
      color: selectedColor,
      size: selectedSize,
      quantity,
    });
  };

  return (
    <main className="mx-auto w-full max-w-[1240px] box-border px-[20px] pb-[60px] pt-[25px] max-[1200px]:px-[18px] max-[1200px]:pb-[55px] max-[1200px]:pt-[22px] max-[768px]:px-[15px] max-[768px]:pb-[45px] max-[768px]:pt-[20px] max-[480px]:px-[12px] max-[480px]:pb-[35px] max-[480px]:pt-[16px] max-[375px]:px-[10px] max-[375px]:pb-[30px] max-[375px]:pt-[14px] max-[320px]:px-[8px] max-[320px]:pb-[25px] max-[320px]:pt-[10px] max-[250px]:min-w-[250px] max-[250px]:overflow-x-auto max-[250px]:px-[6px] max-[250px]:pb-[18px] max-[250px]:pt-[8px]">
      {/* Breadcrumb */}
      <div className="mb-[25px] flex flex-wrap items-center gap-[9px] text-[14px] text-[#777] max-[600px]:gap-[6px] max-[600px]:text-[12px] max-[320px]:text-[10px] max-[250px]:text-[9px]">
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

      {/* ================= PRODUCT MAIN ================= */}
      <section className="grid grid-cols-2 items-start gap-[55px] max-[1200px]:gap-[40px] max-[1024px]:gap-[30px] max-[768px]:grid-cols-1 max-[768px]:gap-[28px]">
        {/* Gallery */}
        <div className="grid grid-cols-[150px_1fr] gap-[14px] max-[1024px]:grid-cols-[100px_1fr] max-[768px]:grid-cols-[80px_1fr] max-[768px]:gap-[10px] max-[600px]:grid-cols-[65px_1fr] max-[480px]:grid-cols-[55px_1fr] max-[480px]:gap-[8px] max-[375px]:grid-cols-[48px_1fr] max-[375px]:gap-[6px] max-[320px]:grid-cols-[40px_1fr] max-[320px]:gap-[5px] max-[250px]:grid-cols-[32px_1fr] max-[250px]:gap-[4px]">
          <div className="flex flex-col gap-[14px] max-[768px]:gap-[10px]">
            {[product.image, product.image, product.image].map((img, index) => (
              <button
                key={index}
                type="button"
                className={`h-[165px] w-full cursor-pointer overflow-hidden rounded-[12px] border border-transparent bg-[#f2f2f2] p-0 max-[1024px]:h-[120px] max-[768px]:h-[95px] max-[768px]:rounded-[9px] max-[600px]:h-[75px] max-[480px]:h-[62px] max-[480px]:rounded-[8px] max-[375px]:h-[52px] max-[375px]:rounded-[7px] max-[320px]:h-[44px] max-[320px]:rounded-[6px] max-[250px]:h-[34px] max-[250px]:rounded-[5px] ${
                  mainImage === img && index === 0
                    ? "!border-2 !border-[#111]"
                    : ""
                }`}
                onClick={() => setMainImage(img)}
              >
                <img
                  src={img}
                  alt={product.name}
                  className="block h-full w-full object-cover"
                />
              </button>
            ))}
          </div>

          {/* Main Image */}
          <div className="h-[525px] w-full overflow-hidden rounded-[12px] bg-[#f2f2f2] max-[1200px]:h-[470px] max-[1024px]:h-[430px] max-[768px]:h-[360px] max-[768px]:rounded-[10px] max-[600px]:h-[300px] max-[480px]:h-[250px] max-[375px]:h-[210px] max-[375px]:rounded-[8px] max-[320px]:h-[175px] max-[320px]:rounded-[7px] max-[250px]:h-[130px] max-[250px]:rounded-[6px]">
            <img
              src={mainImage}
              alt={product.name}
              className="block h-full w-full object-cover"
            />
          </div>
        </div>

        {/* ================= PRODUCT INFO ================= */}
        <div className="pt-[3px]">
          <h1 className="m-0 mb-[10px] text-[38px] font-[800] leading-[1.1] text-[#111] max-[1200px]:text-[34px] max-[1024px]:text-[31px] max-[768px]:text-[28px] max-[600px]:text-[24px] max-[480px]:text-[21px] max-[375px]:text-[18px] max-[320px]:text-[16px] max-[250px]:text-[13px]">
            {product.name.toUpperCase()}
          </h1>

          {/* Rating */}
          <div className="mb-[12px] flex items-center gap-[9px]">
            <span className="text-[20px] tracking-[2px] text-[#ffc633] max-[600px]:text-[17px] max-[375px]:text-[15px] max-[320px]:text-[13px] max-[250px]:text-[11px]">
              ★★★★★
            </span>
            <span className="text-[14px] text-[#333] max-[375px]:text-[12px] max-[250px]:text-[9px]">
              {product.rating}/5
            </span>
          </div>

          {/* Price */}
          <div className="mb-[15px] flex items-center gap-[12px]">
            <span className="text-[27px] font-bold text-[#111] max-[768px]:text-[24px] max-[600px]:text-[22px] max-[480px]:text-[19px] max-[375px]:text-[16px] max-[320px]:text-[14px] max-[250px]:text-[12px]">
              ${product.price}
            </span>

            {product.oldPrice && (
              <>
                <span className="text-[27px] font-bold text-[#777] line-through max-[768px]:text-[24px] max-[600px]:text-[22px] max-[480px]:text-[19px] max-[375px]:text-[16px] max-[320px]:text-[14px] max-[250px]:text-[12px]">
                  ${product.oldPrice}
                </span>
                <span className="rounded-[62px] bg-[#ff3333]/10 px-[14px] py-[6px] text-[14px] font-medium text-[#ff3333] max-[480px]:text-[12px]">
                  -{product.discount}%
                </span>
              </>
            )}
          </div>

          {/* Description */}
          <p className="m-0 max-w-[570px] text-[14px] leading-[1.65] text-[#666] max-[768px]:text-[13px] max-[480px]:text-[12px] max-[375px]:text-[11px] max-[250px]:text-[9px]">
            This graphic t-shirt which is perfect for any occasion. Crafted from
            a soft and breathable fabric, it offers exceptional comfort and
            style.
          </p>

          <div className="my-[22px] h-[1px] w-full bg-[#e5e5e5]"></div>

          {/* ================= COLORS ================= */}
          <div className="mb-0">
            <p className="m-0 mb-[12px] text-[14px] text-[#777]">
              Select Colors
            </p>

            <div className="flex items-center gap-[12px]">
              <button
                type="button"
                aria-label="Brown"
                className={`flex h-[37px] w-[37px] cursor-pointer items-center justify-center rounded-full border-none bg-[#4b3a30] text-transparent max-[375px]:h-[30px] max-[375px]:w-[30px] max-[320px]:h-[26px] max-[320px]:w-[26px] max-[250px]:h-[20px] max-[250px]:w-[20px] ${
                  selectedColor === "brown" ? "!text-white" : ""
                }`}
                onClick={() => setSelectedColor("brown")}
              >
                {selectedColor === "brown" && "✓"}
              </button>

              <button
                type="button"
                aria-label="Green"
                className={`flex h-[37px] w-[37px] cursor-pointer items-center justify-center rounded-full border-none bg-[#31523b] text-transparent max-[375px]:h-[30px] max-[375px]:w-[30px] max-[320px]:h-[26px] max-[320px]:w-[26px] max-[250px]:h-[20px] max-[250px]:w-[20px] ${
                  selectedColor === "green" ? "!text-white" : ""
                }`}
                onClick={() => setSelectedColor("green")}
              >
                {selectedColor === "green" && "✓"}
              </button>

              <button
                type="button"
                aria-label="Navy"
                className={`flex h-[37px] w-[37px] cursor-pointer items-center justify-center rounded-full border-none bg-[#273c56] text-transparent max-[375px]:h-[30px] max-[375px]:w-[30px] max-[320px]:h-[26px] max-[320px]:w-[26px] max-[250px]:h-[20px] max-[250px]:w-[20px] ${
                  selectedColor === "navy" ? "!text-white" : ""
                }`}
                onClick={() => setSelectedColor("navy")}
              >
                {selectedColor === "navy" && "✓"}
              </button>
            </div>
          </div>

          <div className="my-[22px] h-[1px] w-full bg-[#e5e5e5]"></div>

          {/* ================= SIZE ================= */}
          <div className="mb-0">
            <p className="m-0 mb-[12px] text-[14px] text-[#777]">Choose Size</p>

            <div className="flex flex-wrap items-center gap-[10px]">
              {["Small", "Medium", "Large", "X-Large"].map((size) => (
                <button
                  type="button"
                  key={size}
                  className={`cursor-pointer rounded-[22px] border-none bg-[#f3f3f3] px-[20px] py-[11px] text-[13px] text-[#555] hover:bg-[#e8e8e8] max-[480px]:px-[16px] max-[480px]:py-[9px] max-[480px]:text-[12px] max-[375px]:px-[13px] max-[375px]:py-[8px] max-[375px]:text-[11px] max-[320px]:px-[11px] max-[320px]:py-[7px] max-[320px]:text-[10px] max-[250px]:px-[9px] max-[250px]:py-[5px] max-[250px]:text-[9px] ${
                    selectedSize === size
                      ? "!bg-[#111] !text-white hover:!bg-[#111]"
                      : ""
                  }`}
                  onClick={() => setSelectedSize(size)}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          <div className="my-[22px] h-[1px] w-full bg-[#e5e5e5]"></div>

          {/* ================= QUANTITY + CART ================= */}
          <div className="flex items-center gap-[12px] max-[600px]:gap-[8px] max-[375px]:gap-[6px]">
            <div className="flex h-[48px] w-[135px] items-center justify-around rounded-[25px] bg-[#f3f3f3] max-[600px]:w-[115px] max-[480px]:h-[44px] max-[480px]:w-[105px] max-[375px]:h-[40px] max-[375px]:w-[95px] max-[320px]:h-[36px] max-[320px]:w-[85px] max-[250px]:h-[32px] max-[250px]:w-[75px]">
              <button
                type="button"
                className="flex h-[38px] w-[38px] cursor-pointer items-center justify-center border-none bg-transparent text-[23px] text-[#111] max-[375px]:h-[32px] max-[375px]:w-[32px] max-[375px]:text-[19px] max-[320px]:h-[28px] max-[320px]:w-[28px] max-[320px]:text-[16px] max-[250px]:h-[24px] max-[250px]:w-[24px] max-[250px]:text-[14px]"
                onClick={decreaseQuantity}
              >
                −
              </button>
              <span className="min-w-[20px] text-center text-[14px] font-medium">
                {quantity}
              </span>
              <button
                type="button"
                className="flex h-[38px] w-[38px] cursor-pointer items-center justify-center border-none bg-transparent text-[23px] text-[#111] max-[375px]:h-[32px] max-[375px]:w-[32px] max-[375px]:text-[19px] max-[320px]:h-[28px] max-[320px]:w-[28px] max-[320px]:text-[16px] max-[250px]:h-[24px] max-[250px]:w-[24px] max-[250px]:text-[14px]"
                onClick={increaseQuantity}
              >
                +
              </button>
            </div>

            <button
              type="button"
              className="h-[48px] flex-1 cursor-pointer rounded-[25px] border-none bg-black text-[14px] font-medium text-white transition-opacity duration-200 ease-in-out hover:opacity-85 max-[600px]:text-[13px] max-[480px]:h-[44px] max-[480px]:text-[12px] max-[375px]:h-[40px] max-[375px]:text-[11px] max-[320px]:h-[36px] max-[320px]:text-[10px] max-[250px]:h-[32px] max-[250px]:text-[9px]"
              onClick={handleAddToCart}
            >
              Add to Cart
            </button>
          </div>
        </div>
      </section>

      {/* ================= REVIEWS / DETAILS / FAQ ================= */}
      <Reviews />
      <ProductRecommendations />
    </main>
  );
};

export default ProductDetails;
