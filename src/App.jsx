import { useContext, useState } from "react";
import AppContext from "./context/AppContext.jsx";
import ShowProduct from "./components/product/ShowProduct.jsx";

function App() {
  // const { data } = useContext(AppContext);
  return (
    <>
      <ShowProduct />
      {/* <div className="read-the-docs">App</div> */}
    </>
  );
}

export default App;
