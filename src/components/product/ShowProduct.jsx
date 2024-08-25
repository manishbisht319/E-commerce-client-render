import React, { useContext } from "react";
import AppContext from "../../context/AppContext";

const ShowProduct = () => {
  const { products } = useContext(AppContext);
  return (
    <>
      <div className="row d-flex justify-content-center align-items-center">
        <div className="row container d-flex justify-content-center align-items-center my-5">
          {products?.map((product) => (
            <div
              key={product._id}
              className="my-3 col md-4 d-flex justify-content-center align-items-center"
            >
              <div
                className="card bg-dark text-light text-center"
                style={{ width: "18rem" }}
              >
                <div className="d-flex justify-content-center align-items-center p-3">
                  <img
                    src={product.imgSrc}
                    className="card-img-top"
                    alt="..."
                    style={{
                      width: "200px",
                      height: "200px",
                      borderRadius: "10px",
                      border: "2px solid",
                    }}
                  />
                </div>
                <div className="card-body">
                  <h5 className="card-title">{product.title}</h5>
                  <p className="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                  <div className="my-3">
                    <button className="btn btn-primary mx-3">
                      {"₹ "}
                      {product.price}
                    </button>
                    <button className="btn btn-warning">Add To Cart</button>
                  </div>
                </div>
              </div>
              {/* <h1>{product.title}</h1> */}
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default ShowProduct;
