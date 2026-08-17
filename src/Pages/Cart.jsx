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
    <div className="mx-auto w-full max-w-[1240px] box-border px-[20px] pb-[70px] pt-[25px] font-sans max-[1200px]:px-[18px] max-[1200px]:pb-[60px] max-[1200px]:pt-[22px] max-[600px]:px-[15px] max-[600px]:pb-[50px] max-[600px]:pt-[18px] max-[480px]:px-[12px] max-[480px]:pb-[40px] max-[480px]:pt-[15px] max-[375px]:px-[10px] max-[375px]:pb-[32px] max-[375px]:pt-[12px] max-[320px]:px-[8px] max-[320px]:pb-[28px] max-[320px]:pt-[10px] max-[250px]:min-w-[250px] max-[250px]:overflow-x-auto max-[250px]:px-[6px] max-[250px]:pb-[20px] max-[250px]:pt-[8px]">
      <div className="mb-[20px] flex items-center gap-[8px] text-[14px] text-[#777] max-[480px]:text-[12px] max-[250px]:text-[10px]">
        <Link to="/" className="text-[#777] no-underline">
          Home
        </Link>
        <span>/</span>
        <strong className="text-[#111]">Cart</strong>
      </div>

      <h1 className="m-0 mb-[30px] text-[42px] font-[900] tracking-[-1px] max-[1200px]:text-[38px] max-[1024px]:mb-[25px] max-[1024px]:text-[34px] max-[768px]:text-[30px] max-[600px]:mb-[20px] max-[600px]:text-[26px] max-[480px]:mb-[16px] max-[480px]:text-[22px] max-[375px]:text-[19px] max-[320px]:text-[17px] max-[250px]:mb-[10px] max-[250px]:text-[14px]">
        YOUR CART
      </h1>

      {cart.length === 0 ? (
        <div className="px-[20px] py-[60px] text-center">
          <p className="mb-[20px] text-[#777]">Your cart is empty.</p>
          <Link
            to="/"
            className="inline-block rounded-[30px] bg-black px-[30px] py-[14px] font-medium text-white no-underline"
          >
            Continue Shopping
          </Link>
        </div>
      ) : (
        <div className="grid grid-cols-[1fr_380px] items-start gap-[30px] max-[1200px]:grid-cols-[1fr_340px] max-[1200px]:gap-[24px] max-[1024px]:grid-cols-[1fr_300px] max-[1024px]:gap-[20px] max-[768px]:grid-cols-1">
          {/* Cart Items */}
          <div className="rounded-[20px] border border-[#e5e5e5] p-[20px] max-[1024px]:p-[16px] max-[480px]:rounded-[16px] max-[480px]:p-[14px]">
            {cart.map((item, index) => (
              <div
                className="flex gap-[16px] border-b border-[#eee] py-[16px] last:border-b-0 max-[600px]:gap-[12px] max-[600px]:py-[14px] max-[480px]:flex-wrap max-[320px]:gap-[8px] max-[320px]:py-[10px] max-[250px]:gap-[6px] max-[250px]:py-[8px]"
                key={index}
              >
                <img
                  src={item.image}
                  alt={item.name}
                  className="h-[90px] w-[90px] rounded-[12px] bg-[#f2f2f2] object-cover max-[768px]:h-[80px] max-[768px]:w-[80px] max-[600px]:h-[70px] max-[600px]:w-[70px] max-[480px]:h-[60px] max-[480px]:w-[60px] max-[375px]:h-[55px] max-[375px]:w-[55px] max-[375px]:rounded-[10px] max-[320px]:h-[48px] max-[320px]:w-[48px] max-[250px]:h-[40px] max-[250px]:w-[40px] max-[250px]:rounded-[8px]"
                />

                <div className="flex flex-1 flex-col justify-between">
                  <div className="flex items-start justify-between">
                    <div>
                      <h3 className="m-0 mb-[6px] text-[16px] max-[600px]:text-[14px] max-[480px]:text-[13px] max-[375px]:text-[12px] max-[320px]:text-[11px] max-[250px]:text-[10px]">
                        {item.name}
                      </h3>
                      {item.size && (
                        <p className="my-[2px] flex items-center gap-[6px] text-[13px] text-[#777] max-[480px]:text-[11px] max-[375px]:text-[10px] max-[250px]:text-[9px]">
                          Size: {item.size}
                        </p>
                      )}
                      {item.color && (
                        <p className="my-[2px] flex items-center gap-[6px] text-[13px] text-[#777] max-[480px]:text-[11px] max-[375px]:text-[10px] max-[250px]:text-[9px]">
                          Color:{" "}
                          <span
                            className="inline-block h-[14px] w-[14px] rounded-full border border-[#ddd]"
                            style={{ backgroundColor: item.color }}
                          ></span>
                        </p>
                      )}
                    </div>

                    <button
                      className="cursor-pointer border-none bg-transparent text-[16px] text-[#ff3333] max-[375px]:text-[14px]"
                      onClick={() =>
                        removeFromCart(item.id, item.color, item.size)
                      }
                    >
                      🗑
                    </button>
                  </div>

                  <div className="mt-[10px] flex items-center justify-between">
                    <span className="text-[18px] font-bold max-[600px]:text-[16px] max-[480px]:text-[14px] max-[375px]:text-[13px] max-[320px]:text-[12px] max-[250px]:text-[11px]">
                      ${item.price}
                    </span>

                    <div className="flex items-center gap-[14px] rounded-[20px] bg-[#f3f3f3] px-[14px] py-[6px] max-[600px]:gap-[10px] max-[600px]:px-[12px] max-[600px]:py-[5px] max-[480px]:gap-[8px] max-[480px]:px-[10px] max-[480px]:py-[4px] max-[375px]:gap-[6px] max-[375px]:px-[8px] max-[320px]:px-[7px] max-[320px]:py-[3px] max-[250px]:gap-[5px] max-[250px]:px-[6px]">
                      <button
                        className="cursor-pointer border-none bg-transparent text-[16px] max-[480px]:text-[14px] max-[320px]:text-[12px] max-[250px]:text-[10px]"
                        onClick={() =>
                          decreaseQuantity(item.id, item.color, item.size)
                        }
                      >
                        −
                      </button>
                      <span>{item.quantity}</span>
                      <button
                        className="cursor-pointer border-none bg-transparent text-[16px] max-[480px]:text-[14px] max-[320px]:text-[12px] max-[250px]:text-[10px]"
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

          {/* Order Summary */}
          <div className="rounded-[20px] border border-[#e5e5e5] p-[25px] max-[1024px]:p-[20px] max-[600px]:p-[18px] max-[480px]:rounded-[16px] max-[480px]:p-[16px] max-[320px]:p-[12px] max-[250px]:rounded-[12px] max-[250px]:p-[10px]">
            <h2 className="m-0 mb-[20px] text-[20px] max-[600px]:text-[18px] max-[375px]:text-[16px] max-[250px]:text-[13px]">
              Order Summary
            </h2>

            <div className="mb-[14px] flex justify-between text-[15px] text-[#444] max-[480px]:text-[13px] max-[375px]:mb-[10px] max-[375px]:text-[12px] max-[250px]:mb-[8px] max-[250px]:text-[10px]">
              <span>Subtotal</span>
              <span>${cartTotal}</span>
            </div>

            <div className="mb-[14px] flex justify-between text-[15px] text-[#ff3333] max-[480px]:text-[13px] max-[375px]:mb-[10px] max-[375px]:text-[12px] max-[250px]:mb-[8px] max-[250px]:text-[10px]">
              <span>Discount (-20%)</span>
              <span>-${discount}</span>
            </div>

            <div className="mb-[14px] flex justify-between text-[15px] text-[#444] max-[480px]:text-[13px] max-[375px]:mb-[10px] max-[375px]:text-[12px] max-[250px]:mb-[8px] max-[250px]:text-[10px]">
              <span>Delivery Fee</span>
              <span>${deliveryFee}</span>
            </div>

            <div className="flex justify-between border-t border-[#eee] pt-[14px] text-[18px] font-bold text-[#111] max-[480px]:text-[16px] max-[375px]:text-[15px] max-[250px]:text-[12px]">
              <span>Total</span>
              <span>${total}</span>
            </div>

            <div className="my-[20px] flex gap-[10px] max-[320px]:flex-col">
              <input
                type="text"
                placeholder="Add promo code"
                className="flex-1 rounded-[25px] border-none bg-[#f3f3f3] px-[16px] py-[12px] text-[13px] max-[480px]:px-[14px] max-[480px]:py-[10px] max-[480px]:text-[12px] max-[250px]:px-[10px] max-[250px]:py-[8px] max-[250px]:text-[10px]"
              />
              <button className="cursor-pointer rounded-[25px] border-none bg-black px-[20px] py-[12px] text-[13px] text-white max-[480px]:px-[14px] max-[480px]:py-[10px] max-[480px]:text-[12px] max-[250px]:px-[10px] max-[250px]:py-[8px] max-[250px]:text-[10px]">
                Apply
              </button>
            </div>

            <button className="w-full cursor-pointer rounded-[25px] border-none bg-black p-[15px] text-[15px] font-medium text-white max-[480px]:p-[13px] max-[480px]:text-[14px] max-[375px]:p-[12px] max-[375px]:text-[13px] max-[320px]:text-[12px] max-[250px]:p-[10px] max-[250px]:text-[11px]">
              Go to Checkout →
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
