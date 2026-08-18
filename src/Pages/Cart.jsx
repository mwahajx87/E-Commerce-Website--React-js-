import { Link } from "react-router-dom";
import { useState } from "react";
import { useCart } from "../Context/Cart.jsx";

const Cart = () => {
  const {
    cart,
    removeFromCart,
    increaseQuantity,
    decreaseQuantity,
    cartTotal,
  } = useCart();
  const [promoCode, setPromoCode] = useState("");
  const [promoMessage, setPromoMessage] = useState("");
  const [checkoutMessage, setCheckoutMessage] = useState("");

  const discount = Math.round(cartTotal * 0.2);
  const deliveryFee = cart.length > 0 ? 15 : 0;
  const total = cartTotal - discount + deliveryFee;

  return (
    <div className="mx-auto w-full max-w-[1240px] px-[20px] pb-[70px] pt-[25px] box-border max-[639px]:px-[16px] max-[639px]:pb-[50px] max-[639px]:pt-[20px]">
      <div className="mb-[20px] flex items-center gap-[8px] text-[14px] text-[#777] max-[639px]:mb-[16px] max-[639px]:text-[11px]">
        <Link to="/" className="text-[#777] no-underline">
          Home
        </Link>
        <span>/</span>
        <strong className="text-[#111]">Cart</strong>
      </div>

      <h1 className="mb-[30px] text-[42px] font-black tracking-[-1px] text-[#111] max-[639px]:mb-[20px] max-[639px]:text-[30px] max-[639px]:leading-none">
        YOUR CART
      </h1>

      {cart.length === 0 ? (
        <div className="px-[20px] py-[60px] text-center">
          <p className="mb-[20px] text-[#777]">Your cart is empty.</p>
          <Link
            to="/"
            className="inline-block rounded-full bg-black px-[30px] py-[14px] font-medium text-white no-underline"
          >
            Continue Shopping
          </Link>
        </div>
      ) : (
        <div className="grid grid-cols-[1fr_380px] gap-[30px] align-start max-[639px]:grid-cols-1 max-[639px]:gap-[20px]">
          <div className="rounded-[20px] border border-[#e5e5e5] p-[20px] max-[639px]:rounded-[18px] max-[639px]:p-[14px]">
            {cart.map((item, index) => (
              <div
                className="flex gap-[16px] border-b border-[#eee] py-[16px] last:border-b-0 max-[639px]:gap-[12px] max-[639px]:py-[14px]"
                key={index}
              >
                <img
                  src={item.image}
                  alt={item.name}
                  className="h-[90px] w-[90px] rounded-[12px] bg-[#f2f2f2] object-contain max-[639px]:h-[100px] max-[639px]:w-[100px]"
                />

                <div className="flex flex-1 flex-col justify-between">
                  <div className="flex items-start justify-between">
                    <div>
                      <h3 className="m-0 mb-[6px] text-[16px] text-[#111] max-[639px]:text-[16px]">
                        {item.name}
                      </h3>
                      {item.size && (
                        <p className="m-[2px_0] flex items-center gap-[6px] text-[13px] text-[#777] max-[639px]:text-[11px]">
                          Size: {item.size}
                        </p>
                      )}
                      {item.color && (
                        <p className="m-[2px_0] flex items-center gap-[6px] text-[13px] text-[#777] max-[639px]:text-[11px]">
                          Color: {item.color}
                        </p>
                      )}
                    </div>

                    <button
                      className="border-none bg-transparent text-[16px] max-[639px]:text-[15px]"
                      onClick={() =>
                        removeFromCart(item.id, item.color, item.size)
                      }
                    >
                      <i className="fa-solid fa-trash-can text-[#ff3333]"></i>
                    </button>
                  </div>

                  <div className="mt-[10px] flex items-center justify-between">
                    <span className="text-[18px] font-bold text-[#111] max-[639px]:text-[22px]">
                      ${item.price}
                    </span>

                    <div className="flex items-center gap-[14px] rounded-full bg-[#f3f3f3] px-[14px] py-[6px] max-[639px]:gap-[14px] max-[639px]:px-[12px] max-[639px]:py-[5px]">
                      <button
                        className="border-none bg-transparent text-[16px]"
                        onClick={() =>
                          decreaseQuantity(item.id, item.color, item.size)
                        }
                      >
                        −
                      </button>
                      <span>{item.quantity}</span>
                      <button
                        className="border-none bg-transparent text-[16px]"
                        onClick={() =>
                          increaseQuantity(item.id, item.color, item.size)
                        }
                      >
                        +
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="rounded-[20px] border border-[#e5e5e5] p-[25px] max-[639px]:rounded-[18px] max-[639px]:p-[18px]">
            <h2 className="mb-[20px] text-[20px] font-bold text-[#111] max-[639px]:text-[20px]">
              Order Summary
            </h2>

            <div className="mb-[14px] flex items-center justify-between text-[15px] text-[#444] sm:text-[13px]">
              <span>Subtotal</span>
              <span>${cartTotal}</span>
            </div>

            <div className="mb-[14px] flex items-center justify-between text-[15px] text-[#ff3333] sm:text-[13px]">
              <span>Discount (-20%)</span>
              <span>-${discount}</span>
            </div>

            <div className="mb-[14px] flex items-center justify-between text-[15px] text-[#444] sm:text-[13px]">
              <span>Delivery Fee</span>
              <span>${deliveryFee}</span>
            </div>

            <div className="border-t border-[#eee] pt-[14px] text-[18px] font-bold text-[#111] sm:text-[16px]">
              <div className="flex items-center justify-between">
                <span>Total</span>
                <span>${total}</span>
              </div>
            </div>

            <div className="my-[20px] flex gap-[10px] max-[639px]:my-[20px]">
              <div className="relative flex-1">
                <i className="fa-regular fa-tag absolute left-[16px] top-1/2 -translate-y-1/2 text-[14px] text-[#999]"></i>
                <input
                  type="text"
                  placeholder="Add promo code"
                  value={promoCode}
                  onChange={(event) => setPromoCode(event.target.value)}
                  className="w-full rounded-full border-none bg-[#f3f3f3] px-[40px] py-[12px] text-[13px] outline-none"
                />
              </div>
              <button className="rounded-full border-none bg-black px-[20px] py-[12px] text-[13px] text-white" onClick={() => setPromoMessage(promoCode.trim() ? "Promo code applied." : "Enter a promo code.")}>
                Apply
              </button>
            </div>
            {promoMessage && <p className="-mt-[12px] mb-[14px] text-[12px] text-[#666]">{promoMessage}</p>}

            <button className="w-full rounded-full border-none bg-black px-[15px] py-[15px] text-[15px] font-medium text-white max-[639px]:py-[16px]" onClick={() => setCheckoutMessage("Checkout is ready for your order.")}>
              Go to Checkout →
            </button>
            {checkoutMessage && <p className="mt-[10px] text-center text-[12px] text-[#666]">{checkoutMessage}</p>}
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
