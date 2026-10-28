import { useEffect, useState } from "react";
import {
  getCustomer,
  loginCustomer,
  logoutCustomer,
  registerCustomer,
  StoreApiError,
} from "../services/storeApi";
import { CustomerAuthContext } from "./customerAuthContext";

export function CustomerAuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    let active = true;
    getCustomer()
      .then(({ user: customer }) => {
        if (active) setUser(customer);
      })
      .catch((requestError) => {
        if (!active) return;
        if (
          requestError instanceof StoreApiError &&
          [401, 403].includes(requestError.status)
        ) {
          setUser(null);
          return;
        }
        setError(requestError.message);
      })
      .finally(() => {
        if (active) setIsLoading(false);
      });

    return () => {
      active = false;
    };
  }, []);

  const signIn = async (credentials) => {
    setError("");
    const { user: customer } = await loginCustomer(credentials);
    if (customer.role !== "customer") {
      await logoutCustomer();
      throw new StoreApiError("Please sign in with a customer account.", 403);
    }
    setUser(customer);
    return customer;
  };

  const signUp = async (details) => {
    setError("");
    await registerCustomer(details);
    return signIn({ email: details.email, password: details.password });
  };

  const signOut = async () => {
    setError("");
    try {
      await logoutCustomer();
    } catch (requestError) {
      setError(requestError.message);
      throw requestError;
    } finally {
      setUser(null);
    }
  };

  return (
    <CustomerAuthContext.Provider
      value={{ user, isLoading, error, setError, signIn, signUp, signOut }}
    >
      {children}
    </CustomerAuthContext.Provider>
  );
}
