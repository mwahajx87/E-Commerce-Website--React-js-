const apiBaseUrl = (import.meta.env.VITE_API_BASE_URL || "/api").replace(
  /\/+$/,
  "",
);

export class StoreApiError extends Error {
  constructor(message, status) {
    super(message);
    this.name = "StoreApiError";
    this.status = status;
  }
}

async function request(path, options = {}) {
  let response;
  try {
    response = await fetch(`${apiBaseUrl}${path}`, {
      ...options,
      credentials: "include",
      headers: {
        Accept: "application/json",
        ...(options.body ? { "Content-Type": "application/json" } : {}),
        ...options.headers,
      },
    });
  } catch (error) {
    if (error.name === "AbortError") throw error;
    throw new Error(
      "Could not reach the store API. Check that the backend is running.",
      { cause: error },
    );
  }

  if (!response.ok) {
    let message = `Request failed (${response.status}).`;
    try {
      const payload = await response.json();
      message = payload.message || message;
    } catch {
      // Keep the HTTP status message when the server does not return JSON.
    }
    throw new StoreApiError(message, response.status);
  }

  if (response.status === 204) return null;
  return response.json();
}

export function getProducts({ signal } = {}) {
  return request("/products", { signal });
}

export function submitOrder(order) {
  return request("/orders", {
    method: "POST",
    body: JSON.stringify(order),
  });
}

export function registerCustomer(customer) {
  return request("/auth/register", {
    method: "POST",
    body: JSON.stringify(customer),
  });
}

export function loginCustomer(credentials) {
  return request("/auth/login", {
    method: "POST",
    body: JSON.stringify(credentials),
  });
}

export function getCustomer() {
  return request("/auth/customer");
}

export function logoutCustomer() {
  return request("/auth/logout", { method: "POST" });
}

export function getCustomerOrders() {
  return request("/orders/mine");
}

export function getProductReviews(productId) {
  return request(`/products/${encodeURIComponent(productId)}/reviews`);
}

export function getRecentReviews() {
  return request("/reviews");
}

export function submitProductReview(productId, review) {
  return request(`/products/${encodeURIComponent(productId)}/reviews`, {
    method: "POST",
    body: JSON.stringify(review),
  });
}

export function subscribeToNewsletter(email) {
  return request("/newsletter", {
    method: "POST",
    body: JSON.stringify({ email }),
  });
}
