import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/header";
import Home from "./pages/home";
import Product from "./pages/product";
import AboutUs from "./pages/about";
import ContactUs from "./pages/contact";
import ProductDetails from "./pages/product/ProductDetails";
import Footer from "./components/footer";
import PrivacyPolicy from "./pages/privacy_policy";
import ScrollToTop from "./components/ScrollToTop";
import CattleFeed from "./pages/product/CattleFeedItem";
import Certificate from "./pages/certificate/Certificate";
function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <ScrollToTop />
        <Routes>
          <Route path="/" exact={true} element={<Home />} />
          <Route path="/product" exact={true} element={<Product />} />
          <Route path="/about-us" exact={true} element={<AboutUs />} />
          <Route path="/contact-us" exact={true} element={<ContactUs />} />
          <Route path="/certificate" exact={true} element={<Certificate />} />
          <Route
            path="/product/:name"
            exact={true}
            element={<ProductDetails />}
          />
          <Route
            path="/product/cattle_feed/:name"
            exact={true}
            element={<ProductDetails />}
          />
          <Route
            path="/privacy-policy"
            exact={true}
            element={<PrivacyPolicy />}
          />
          <Route
            path="/product/cattle_feed"
            exact={true}
            element={<CattleFeed />}
          />
          
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
