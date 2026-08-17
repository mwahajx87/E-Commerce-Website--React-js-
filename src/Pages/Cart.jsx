import { Link } from "react-router-dom";
import { useCart } from "../Context/Cart.jsx";

const Cart = () => {
  const {
    cart,
    removeFromCart,
    increaseQuantity,
    decreaseQuantity,
    cartTotal,
  } = useCart();

  const discount = Math.round(cartTotal * 0.2);
  const deliveryFee = cart.length > 0 ? 15 : 0;
  const total = cartTotal - discount + deliveryFee;

  return (
    <div className="mx-auto w-full max-w-[1240px] px-[20px] pb-[70px] pt-[25px] box-border">
      <div className="mb-[20px] flex items-center gap-[8px] text-[14px] text-[#777]">
        <Link to="/" className="text-[#777] no-underline">
          Home
        </Link>
        <span>/</span>
        <strong className="text-[#111]">Cart</strong>
      </div>

      <h1 className="mb-[30px] text-[42px] font-black tracking-[-1px] text-[#111] lg:text-[38px] md:text-[34px] sm:text-[26px] xs:text-[22px]">
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
        <div className="grid grid-cols-[1fr_380px] gap-[30px] align-start lg:grid-cols-[1fr_340px] lg:gap-[24px] md:grid-cols-1">
          <div className="rounded-[20px] border border-[#e5e5e5] p-[20px] sm:p-[16px] xs:rounded-[16px] xs:p-[14px]">
            {cart.map((item, index) => (
              <div
                className="flex gap-[16px] border-b border-[#eee] py-[16px] last:border-b-0 sm:gap-[12px] sm:py-[14px] xs:flex-wrap"
                key={index}
              >
                <img
                  src={item.image}
                  alt={item.name}
                  className="h-[90px] w-[90px] rounded-[12px] bg-[#f2f2f2] object-cover sm:h-[80px] sm:w-[80px] xs:h-[60px] xs:w-[60px]"
                />

                <div className="flex flex-1 flex-col justify-between">
                  <div className="flex items-start justify-between">
                    <div>
                      <h3 className="m-0 mb-[6px] text-[16px] text-[#111] sm:text-[14px] xs:text-[13px]">
                        {item.name}
                      </h3>
                      {item.size && (
                        <p className="m-[2px_0] flex items-center gap-[6px] text-[13px] text-[#777] sm:text-[11px]">
                          Size: {item.size}
                        </p>
                      )}
                      {item.color && (
                        <p className="m-[2px_0] flex items-center gap-[6px] text-[13px] text-[#777] sm:text-[11px]">
                          Color:{" "}
                          <span
                            className="inline-block h-[14px] w-[14px] rounded-full border border-[#ddd]"
                            style={{ backgroundColor: item.color }}
                          ></span>
                        </p>
                      )}
                    </div>

                    <button
                      className="border-none bg-transparent text-[16px] text-[#ff3333]"
                      onClick={() =>
                        removeFromCart(item.id, item.color, item.size)
                      }
                    >
                      🗑
                    </button>
                  </div>

                  <div className="mt-[10px] flex items-center justify-between">
                    <span className="text-[18px] font-bold text-[#111] sm:text-[16px] xs:text-[14px]">
                      ${item.price}
                    </span>

                    <div className="flex items-center gap-[14px] rounded-full bg-[#f3f3f3] px-[14px] py-[6px] sm:gap-[10px] sm:px-[12px] xs:gap-[8px] xs:px-[10px]">
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

          <div className="rounded-[20px] border border-[#e5e5e5] p-[25px] lg:p-[20px] sm:p-[18px] xs:rounded-[16px] xs:p-[16px]">
            <h2 className="mb-[20px] text-[20px] font-bold text-[#111] sm:text-[18px]">
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

            <div className="my-[20px] flex gap-[10px]">
              <input
                type="text"
                placeholder="Add promo code"
                className="flex-1 rounded-full border-none bg-[#f3f3f3] px-[16px] py-[12px] text-[13px] outline-none"
              />
              <button className="rounded-full border-none bg-black px-[20px] py-[12px] text-[13px] text-white">
                Apply
              </button>
            </div>

            <button className="w-full rounded-full border-none bg-black px-[15px] py-[15px] text-[15px] font-medium text-white">
              Go to Checkout →
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
