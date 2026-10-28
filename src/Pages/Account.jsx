import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { getCustomerOrders } from "../services/storeApi";
import { useCustomerAuth } from "../Context/useCustomerAuth";
import { formatCurrency } from "../utils/currency";

const Account = () => {
  const navigate = useNavigate();
  const { user, isLoading, error: sessionError, signIn, signUp, signOut } =
    useCustomerAuth();
  const [isRegistering, setIsRegistering] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", password: "" });
  const [formError, setFormError] = useState("");
  const [orderState, setOrderState] = useState({
    userId: "",
    orders: [],
    error: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    if (!user) return undefined;

    let active = true;
    getCustomerOrders()
      .then((customerOrders) => {
        if (active) {
          setOrderState({ userId: user.id, orders: customerOrders, error: "" });
        }
      })
      .catch((requestError) => {
        if (active) {
          setOrderState({
            userId: user.id,
            orders: [],
            error: requestError.message,
          });
        }
      });

    return () => {
      active = false;
    };
  }, [user]);
  const hasLoadedOrders = orderState.userId === user?.id;
  const orders = hasLoadedOrders ? orderState.orders : [];
  const ordersError = hasLoadedOrders ? orderState.error : "";
  const isLoadingOrders = Boolean(user) && !hasLoadedOrders;

  const handleSubmit = async (event) => {
    event.preventDefault();
    setFormError("");
    setIsSubmitting(true);
    try {
      if (isRegistering) {
        await signUp(form);
      } else {
        await signIn({ email: form.email, password: form.password });
      }
      navigate("/account/orders");
    } catch (requestError) {
      setFormError(requestError.message);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleSignOut = async () => {
    try {
      await signOut();
    } catch (requestError) {
      setFormError(requestError.message);
    }
  };

  if (isLoading) {
    return <p className="mx-auto max-w-[1240px] px-5 py-16">Loading account...</p>;
  }

  return (
    <main className="mx-auto w-full max-w-[1240px] px-5 pb-16 pt-6">
      <div className="mb-6 flex items-center gap-2 text-sm text-[#777]">
        <Link to="/" className="text-inherit no-underline">Home</Link>
        <span>/</span>
        <strong className="text-black">My Account</strong>
      </div>

      <h1 className="mb-8 text-3xl font-black text-black sm:text-4xl">
        {user ? "MY ACCOUNT" : "CUSTOMER ACCOUNT"}
      </h1>

      {!user ? (
        <section className="mx-auto max-w-lg rounded-2xl border border-[#e5e5e5] p-6 sm:p-8">
          <h2 className="mb-2 text-xl font-bold text-black">
            {isRegistering ? "Create your account" : "Sign in"}
          </h2>
          <p className="mb-6 text-sm text-[#666]">
            Sign in to view your orders, or create an account to keep your order
            history together.
          </p>
          {(formError || sessionError) && (
            <p role="alert" className="mb-4 rounded-lg bg-red-50 p-3 text-sm text-red-700">
              {formError || sessionError}
            </p>
          )}
          <form onSubmit={handleSubmit} className="space-y-4">
            {isRegistering && (
              <label className="block text-sm font-medium text-slate-800">
                Full name
                <input
                  type="text"
                  required
                  maxLength={120}
                  autoComplete="name"
                  value={form.name}
                  onChange={(event) =>
                    setForm({ ...form, name: event.target.value })
                  }
                  className="mt-1 w-full rounded-lg border border-[#ddd] px-3 py-3 font-normal outline-none focus:border-black"
                />
              </label>
            )}
            <label className="block text-sm font-medium text-slate-800">
              Email address
              <input
                type="email"
                required
                maxLength={254}
                autoComplete="email"
                value={form.email}
                onChange={(event) =>
                  setForm({ ...form, email: event.target.value })
                }
                className="mt-1 w-full rounded-lg border border-[#ddd] px-3 py-3 font-normal outline-none focus:border-black"
              />
            </label>
            <label className="block text-sm font-medium text-slate-800">
              Password
              <input
                type="password"
                required
                minLength={isRegistering ? 12 : 1}
                autoComplete={isRegistering ? "new-password" : "current-password"}
                value={form.password}
                onChange={(event) =>
                  setForm({ ...form, password: event.target.value })
                }
                className="mt-1 w-full rounded-lg border border-[#ddd] px-3 py-3 font-normal outline-none focus:border-black"
              />
              {isRegistering && (
                <span className="mt-1 block text-xs text-[#777]">
                  Use at least 12 characters.
                </span>
              )}
            </label>
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full rounded-full bg-black px-5 py-3 font-semibold text-white disabled:opacity-60"
            >
              {isSubmitting
                ? "Please wait..."
                : isRegistering
                  ? "Create account"
                  : "Sign in"}
            </button>
          </form>
          <button
            type="button"
            onClick={() => {
              setIsRegistering((registering) => !registering);
              setFormError("");
            }}
            className="mt-5 w-full bg-transparent text-sm text-slate-700 underline"
          >
            {isRegistering
              ? "Already have an account? Sign in"
              : "New here? Create an account"}
          </button>
        </section>
      ) : (
        <div className="grid gap-6 md:grid-cols-[280px_1fr]">
          <section className="h-fit rounded-2xl border border-[#e5e5e5] p-5">
            <h2 className="text-lg font-bold text-black">{user.name}</h2>
            <p className="mt-1 break-all text-sm text-[#666]">{user.email}</p>
            <button
              type="button"
              onClick={handleSignOut}
              className="mt-5 rounded-full border border-[#ddd] px-4 py-2 text-sm font-semibold text-black hover:bg-[#f5f5f5]"
            >
              Sign out
            </button>
            {formError && (
              <p role="alert" className="mt-3 text-sm text-red-700">{formError}</p>
            )}
          </section>

          <section className="rounded-2xl border border-[#e5e5e5] p-5 sm:p-6">
            <h2 className="mb-5 text-xl font-bold text-black">Your orders</h2>
            {isLoadingOrders ? (
              <p className="text-sm text-[#666]">Loading your orders...</p>
            ) : ordersError ? (
              <p role="alert" className="text-sm text-red-700">{ordersError}</p>
            ) : orders.length === 0 ? (
              <div className="py-8 text-center">
                <p className="mb-4 text-sm text-[#666]">
                  No account orders yet. Orders placed while signed in will show here.
                </p>
                <Link
                  to="/category"
                  className="inline-block rounded-full bg-black px-5 py-3 text-sm font-semibold text-white no-underline"
                >
                  Browse products
                </Link>
              </div>
            ) : (
              <div className="space-y-4">
                {orders.map((order) => (
                  <article
                    key={order.id}
                    className="rounded-xl border border-[#e5e5e5] p-4"
                  >
                    <div className="flex flex-wrap items-start justify-between gap-3">
                      <div>
                        <h3 className="font-semibold text-black">{order.id}</h3>
                        <p className="mt-1 text-xs text-[#777]">
                          {order.date} · {order.status}
                        </p>
                      </div>
                      <p className="font-bold text-black">
                        {formatCurrency(order.total)}
                      </p>
                    </div>
                    <ul className="mt-4 space-y-2 border-t border-[#eee] pt-3">
                      {order.items.map((item, index) => (
                        <li
                          key={`${item.productId}-${index}`}
                          className="flex items-center justify-between gap-3 text-sm text-[#555]"
                        >
                          <span>{item.productName} × {item.quantity}</span>
                          <span>{formatCurrency(item.price * item.quantity)}</span>
                        </li>
                      ))}
                    </ul>
                  </article>
                ))}
              </div>
            )}
          </section>
        </div>
      )}
    </main>
  );
};

export default Account;
