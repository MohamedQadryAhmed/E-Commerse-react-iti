import { Rating } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { decreaseCounter, increaseCounter } from "../store/slices/counter";
import cartSlice, {
  addToCart,
  decreaseCart,
  increaseCart,
} from "../store/slices/cartSlice";

export default function ProductDetails() {
  const counter = useSelector((state) => state.counter.counter_val);
  const dispatch = useDispatch();
  const params = useParams();
  const [productDetails, setProductDetails] = useState({});
  // console.log(params);

  useEffect(() => {
    axios
      .get(`https://dummyjson.com/products/${params.id}`)
      .then((res) => {
        console.log(res);
        setProductDetails(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <>
      <div>{productDetails.title}</div>
      <hr />
      <div className="row bg-light rounded d-flex flex-row mb-3">
        <div className="col-5 m-2">
          <img src={productDetails.thumbnail} className="card-img" />
        </div>
        <div className="col-5 bg-white m-5">
          <div className="d-block justify-content-end">
            <h4 className="fw-bold ">{productDetails.title}</h4>
            <h6 className="fw-light">{productDetails.description}</h6>
            {/* <h6>{productDetails.rating}</h6> */}
            {/* <Rating precision={0.1}name="rating" value={productDetails.rating} readOnly  style={{'color':'green'}}/> */}

            <div
              style={{
                direction: "ltr",
                fontFamily: "sans-serif",
                touchAction: "none",
              }}
            >
              <Rating
                value={productDetails.rating}
                // onClick={function noRefCheck() {}}
                readonly
              />
            </div>
            <hr />
            <div className="d-flex m-3">
              <h5 className="fw-bold m-2">${productDetails.price} </h5>
              <h6 className="fw-bold m-2 text-danger">
                -{productDetails.discountPercentage}%
              </h6>
            </div>
            <hr />
            {productDetails.stock > 0 ? (
              <span class="badge text-bg-success">On Stock</span>
            ) : (
              <span class="badge text-bg-danger">Out Stock</span>
            )}
            <h6 class="fw-bold mt-3">More Information</h6>
            <div className="row">
              <button className="col-3 d-block m-3 btn btn-light rounded-pill">
                {productDetails.brand}
              </button>
              <button className="col-3 d-block m-3  btn btn-light rounded-pill">
                {productDetails.category}
              </button>
            </div>
            <hr />
            <div className="row">
              <div class="btn-group col-5" role="group">
                <button
                  type="button"
                  class="btn btn-light btn-outline-success m-2"
                  onClick={() => dispatch(decreaseCounter())}
                >
                  -
                </button>
                <h4 className="m-3">{counter}</h4>
                <button
                  type="button"
                  class="btn btn-light btn-outline-success m-2"
                  // onClick={()=> dispatch(increaseCart(productDetails))}
                  onClick={() => dispatch(increaseCounter())}
                >
                  +
                </button>
              </div>
              <p className="col-5 mx-4 fs-6">
                Only{" "}
                <span className="text-warning">
                  {productDetails.stock} items
                </span>{" "}
                Left! Don't miss it.
              </p>
            </div>
          </div>
          <div className="row">
            <button className="col-3 d-block m-3 btn btn-success rounded-pill">
              Bay Now
            </button>
            <button
              className="col-3 d-block m-3 btn btn-outline-success rounded-pill"
              onClick={() => {
                dispatch(addToCart(productDetails));
              }}
            >
              Add To Cart
            </button>
          </div>
          <hr />
        </div>
      </div>
    </>
  );
}
