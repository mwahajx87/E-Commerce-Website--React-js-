import { Link } from "react-router-dom";
import { useState } from "react";
import { useCart } from "../Context/useCart";
import { useCustomerAuth } from "../Context/useCustomerAuth";
import { submitOrder } from "../services/storeApi";
import { formatCurrency } from "../utils/currency";

const Cart = () => {
  const {
    cart,
    removeFromCart,
    increaseQuantity,
    decreaseQuantity,
    clearCart,
    cartTotal,
  } = useCart();
  const { user } = useCustomerAuth();
  const [customerNameEdited, setCustomerNameEdited] = useState(false);
  const [customer, setCustomer] = useState({
    customerName: "",
    customerEmail: "",
    customerAddress: "",
    paymentMethod: "Cash on delivery",
  });
  const [checkoutStatus, setCheckoutStatus] = useState("idle");
  const [checkoutMessage, setCheckoutMessage] = useState("");
  const tax = Math.round(cartTotal * 0.05);
  const deliveryFee = cartTotal > 0 && cartTotal < 5000 ? 250 : 0;
  const total = cartTotal + tax + deliveryFee;
  const quantityInOtherVariants = (item) =>
    cart.reduce(
      (quantity, otherItem) =>
        otherItem.id === item.id &&
        (otherItem.color !== item.color || otherItem.size !== item.size)
          ? quantity + otherItem.quantity
          : quantity,
      0,
    );

  const handleCheckout = async (event) => {
    event.preventDefault();
    setCheckoutStatus("submitting");
    setCheckoutMessage("");
    try {
      const order = await submitOrder({
        ...customer,
        customerName: customer.customerName || user?.name || "",
        customerEmail: user?.email || customer.customerEmail,
        items: cart.map((item) => ({
          productId: item.id,
          quantity: item.quantity,
          color: item.color,
          size: item.size,
        })),
      });
      clearCart();
      setCheckoutStatus("success");
      setCheckoutMessage(`Order ${order.id} placed successfully.`);
    } catch (error) {
      setCheckoutStatus("error");
      setCheckoutMessage(error.message);
    }
  };

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
          {checkoutMessage && (
            <p
              className={`mb-[16px] ${checkoutStatus === "error" ? "text-red-700" : "text-green-700"}`}
              role={checkoutStatus === "error" ? "alert" : "status"}
            >
              {checkoutMessage}
            </p>
          )}
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
            {cart.map((item, index) => {
              const otherVariantQuantity = quantityInOtherVariants(item);
              return (
              <div
                className="flex gap-[16px] border-b border-[#eee] py-[16px] last:border-b-0 max-[639px]:gap-[12px] max-[639px]:py-[14px]"
                key={`${item.id}-${item.color || ""}-${item.size || ""}-${index}`}
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
                      type="button"
                      aria-label={`Remove ${item.name} from cart`}
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
                      {formatCurrency(item.price)}
                    </span>

                    <div className="flex items-center gap-[14px] rounded-full bg-[#f3f3f3] px-[14px] py-[6px] max-[639px]:gap-[14px] max-[639px]:px-[12px] max-[639px]:py-[5px]">
                      <button
                        type="button"
                        aria-label={`Decrease quantity of ${item.name}`}
                        className="border-none bg-transparent text-[16px]"
                        onClick={() =>
                          decreaseQuantity(item.id, item.color, item.size)
                        }
                      >
                        −
                      </button>
                      <span>{item.quantity}</span>
                      <button
                        type="button"
                        className="border-none bg-transparent text-[16px]"
                        onClick={() =>
                          increaseQuantity(item.id, item.color, item.size)
                        }
                        disabled={
                          item.quantity + otherVariantQuantity >= item.stock
                        }
                        aria-label={`Increase quantity of ${item.name}`}
                      >
                        +
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              );
            })}
          </div>

          <div className="rounded-[20px] border border-[#e5e5e5] p-[25px] max-[639px]:rounded-[18px] max-[639px]:p-[18px]">
            <h2 className="mb-[20px] text-[20px] font-bold text-[#111] max-[639px]:text-[20px]">
              Order Summary
            </h2>

            <div className="mb-[14px] flex items-center justify-between text-[15px] text-[#444] sm:text-[13px]">
              <span>Subtotal</span>
              <span>{formatCurrency(cartTotal)}</span>
            </div>

            <div className="mb-[14px] flex items-center justify-between text-[15px] text-[#444] sm:text-[13px]">
              <span>Delivery Fee</span>
              <span>{formatCurrency(deliveryFee)}</span>
            </div>

            <div className="mb-[14px] flex items-center justify-between text-[15px] text-[#444] sm:text-[13px]">
              <span>Tax (5%)</span>
              <span>{formatCurrency(tax)}</span>
            </div>

            <div className="border-t border-[#eee] pt-[14px] text-[18px] font-bold text-[#111] sm:text-[16px]">
              <div className="flex items-center justify-between">
                <span>Total</span>
                <span>{formatCurrency(total)}</span>
              </div>
            </div>

            <form onSubmit={handleCheckout} className="mt-[20px] space-y-[10px]">
              <input
                type="text"
                required
                maxLength={120}
                placeholder="Full name"
                value={
                  customerNameEdited
                    ? customer.customerName
                    : customer.customerName || user?.name || ""
                }
                onChange={(event) => {
                  setCustomerNameEdited(true);
                  setCustomer({ ...customer, customerName: event.target.value });
                }}
                className="w-full rounded-[10px] border border-[#ddd] px-[12px] py-[11px] text-[13px] outline-none"
              />
              <input
                type="email"
                required
                maxLength={254}
                placeholder="Email address"
                value={user?.email || customer.customerEmail}
                onChange={(event) =>
                  setCustomer({ ...customer, customerEmail: event.target.value })
                }
                readOnly={Boolean(user)}
                className="w-full rounded-[10px] border border-[#ddd] px-[12px] py-[11px] text-[13px] outline-none"
              />
              <textarea
                required
                maxLength={500}
                placeholder="Delivery address"
                value={customer.customerAddress}
                onChange={(event) =>
                  setCustomer({ ...customer, customerAddress: event.target.value })
                }
                className="w-full resize-y rounded-[10px] border border-[#ddd] px-[12px] py-[11px] text-[13px] outline-none"
              />
              <div className="rounded-[10px] border border-[#ddd] bg-[#f7f7f7] px-[12px] py-[11px] text-[13px] text-[#555]">
                Payment: Cash on delivery
              </div>
              <button
                type="submit"
                disabled={checkoutStatus === "submitting"}
                className="w-full rounded-full border-none bg-black px-[15px] py-[15px] text-[15px] font-medium text-white disabled:opacity-60 max-[639px]:py-[16px]"
              >
                {checkoutStatus === "submitting" ? "Placing order..." : "Place Order →"}
              </button>
            </form>
            {checkoutMessage && (
              <p
                className={`mt-[10px] text-center text-[12px] ${checkoutStatus === "error" ? "text-red-700" : "text-[#166534]"}`}
                role={checkoutStatus === "error" ? "alert" : "status"}
              >
                {checkoutMessage}
              </p>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
