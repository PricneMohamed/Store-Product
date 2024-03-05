
import Home from "./components/Home";
import { Route, Routes } from "react-router";
import Navbar from "./components/Navbar";
import Buy from "./components/Buy";
import ProductDetails from "./components/ProductDetails";
import Cart from "./components/Cart";
import AllProduct from "./components/AllProduct";
import Sell from "./components/Sell";

export default function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/buy" element={<Buy />} />
        <Route path="/buy/:productId" element={<ProductDetails />} />
        <Route path="/cart" element={ <Cart />} />
        <Route path="/allProduct" element={<AllProduct />} />
        <Route path="/sell" element={<Sell />} />
      </Routes>
    </div>
  )
}