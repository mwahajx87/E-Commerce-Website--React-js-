import { useEffect, useState } from "react";
import { getProducts } from "../services/storeApi";
import { ProductsContext } from "./productsContext";

export function ProductsProvider({ children }) {
  const [products, setProducts] = useState([]);
  const [status, setStatus] = useState("loading");
  const [error, setError] = useState("");

  useEffect(() => {
    const controller = new AbortController();
    getProducts({ signal: controller.signal })
      .then((items) => {
        setProducts(items);
        setStatus("ready");
      })
      .catch((requestError) => {
        if (requestError.name === "AbortError") return;
        setError(requestError.message);
        setStatus("error");
      });

    return () => controller.abort();
  }, []);

  return (
    <ProductsContext.Provider value={{ products, status, error }}>
      {children}
    </ProductsContext.Provider>
  );
}
