import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Category from "./Pages/Category";
import Product from "./Pages/Product";
import Shop from "./Pages/Shop";
import Cart from "./Pages/Cart";
import Auth from "./Pages/Auth";
import Footer from "./Components/Footer/Footer";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Shop />} />
          <Route path="/fashion" element={<Category category="Fashion" />} />
          <Route
            path="/electronics"
            element={<Category category="Electronics" />}
          />
          <Route path="/sports" element={<Category category="Sports" />} />
          <Route
            path="/accessories"
            element={<Category category="Accessories" />}
          />
          <Route path="/product" element={<Product />}>
            <Route path=":productId" element={<Product />} />
          </Route>
          <Route path="/cart" element={<Cart />} />
          <Route path="/auth" element={<Auth />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
