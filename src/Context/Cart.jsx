import { useEffect, useState } from "react";
import { CartContext } from "./cartContext";

const getInitialCart = () => {
  try {
    const storedCart = JSON.parse(window.localStorage.getItem("shopco-cart") || "[]");
    if (!Array.isArray(storedCart)) return [];
    return storedCart.filter(
      (item) =>
        item &&
        typeof item.id === "string" &&
        Number.isInteger(item.quantity) &&
        item.quantity > 0 &&
        Number.isFinite(item.price),
    );
  } catch (error) {
    console.error("Could not restore the saved shopping cart.", error);
    return [];
  }
};

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState(getInitialCart);

  useEffect(() => {
    try {
      window.localStorage.setItem("shopco-cart", JSON.stringify(cart));
    } catch (error) {
      console.error("Could not save the shopping cart on this device.", error);
    }
  }, [cart]);

  const addToCart = (product) => {
    if (product.stock < 1) return;
    setCart((prevCart) => {
      const quantityInOtherVariants = prevCart.reduce(
        (total, item) =>
          item.id === product.id &&
          (item.color !== product.color || item.size !== product.size)
            ? total + item.quantity
            : total,
        0,
      );
      const availableForVariant = Math.max(
        0,
        product.stock - quantityInOtherVariants,
      );
      if (availableForVariant === 0) return prevCart;

      const existingProduct = prevCart.find(
        (item) =>
          item.id === product.id &&
          item.color === product.color &&
          item.size === product.size,
      );

      if (existingProduct) {
        if (existingProduct.quantity >= availableForVariant) return prevCart;
        return prevCart.map((item) =>
          item.id === product.id &&
          item.color === product.color &&
          item.size === product.size
            ? {
                ...item,
                quantity: Math.min(
                  availableForVariant,
                  item.quantity + (product.quantity || 1),
                ),
              }
            : item,
        );
      }

      return [
        ...prevCart,
        {
          ...product,
          quantity: Math.min(availableForVariant, product.quantity || 1),
        },
      ];
    });
  };

  const removeFromCart = (id, color, size) => {
    setCart((prevCart) =>
      prevCart.filter(
        (item) =>
          !(item.id === id && item.color === color && item.size === size),
      ),
    );
  };

  const increaseQuantity = (id, color, size) => {
    setCart((prevCart) =>
      prevCart.map((item) => {
        if (item.id !== id || item.color !== color || item.size !== size) {
          return item;
        }
        const quantityInOtherVariants = prevCart.reduce(
          (total, otherItem) =>
            otherItem.id === id &&
            (otherItem.color !== color || otherItem.size !== size)
              ? total + otherItem.quantity
              : total,
          0,
        );
        const availableForVariant = Math.max(
          0,
          item.stock - quantityInOtherVariants,
        );
        return {
          ...item,
          quantity:
            item.quantity >= availableForVariant
              ? item.quantity
              : item.quantity + 1,
        };
      }),
    );
  };

  const decreaseQuantity = (id, color, size) => {
    setCart((prevCart) =>
      prevCart
        .map((item) =>
          item.id === id && item.color === color && item.size === size
            ? {
                ...item,
                quantity: item.quantity - 1,
              }
            : item,
        )
        .filter((item) => item.quantity > 0),
    );
  };

  const clearCart = () => setCart([]);

  const cartCount = cart.reduce((total, item) => total + item.quantity, 0);

  const cartTotal = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0,
  );

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        increaseQuantity,
        decreaseQuantity,
        clearCart,
        cartCount,
        cartTotal,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
