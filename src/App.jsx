import { Routes, Route } from "react-router-dom";

import Navbar from "./Components/Navbar";
import Newsletter from "./Components/Newsletter";
import Footer from "./Components/Footer";
import Hero from "./Components/Hero";
import BrandStrip from "./Components/BrandStrip";
import ProductSection from "./Components/ProductSection";
import TopSelling from "./Components/TopSelling";
import BrowseStyle from "./Components/BrowseStyle";
import HappyCustomers from "./Components/HappyCustomers";
import ProductDetails from "./Pages/ProductDetails";
import Category from "./Pages/Category";
import Cart from "./Pages/Cart";
import Account from "./Pages/Account";
import InfoPage from "./Pages/InfoPage";
import ScrollToTop from "./Components/ScrollToTop";

function Home() {
  return (
    <>
      <Hero />
      <BrandStrip />
      <ProductSection />
      <TopSelling />
      <BrowseStyle />
      <HappyCustomers />
    </>
  );
}

function App() {
  return (
    <>
      <ScrollToTop />

      <Navbar />

      <Routes>
        {/* Home Page */}
        <Route path="/" element={<Home />} />

        {/* Product Details Page */}
        <Route path="/product/:id" element={<ProductDetails />} />

        {/* Category Page */}
        <Route path="/category" element={<Category />} />

        {/* Cart Page */}
        <Route path="/cart" element={<Cart />} />
        <Route path="/account" element={<Account />} />
        <Route path="/account/orders" element={<Account />} />
        <Route path="/info/:slug" element={<InfoPage />} />
      </Routes>

      <Newsletter />

      <Footer />
    </>
  );
}

export default App;
