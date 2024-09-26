import { useContext, useState } from "react";
import AppContext from "./context/AppContext.jsx";
import ShowProduct from "./components/product/ShowProduct.jsx";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProductDetail from "./components/product/ProductDetail.jsx";

function App() {
  // const { data } = useContext(AppContext);
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ShowProduct />}></Route>
        <Route path="/product/:id" element={<ProductDetail />}></Route>
        {/* <div className="read-the-docs">App</div> */}
      </Routes>
    </Router>
  );
}

export default App;
