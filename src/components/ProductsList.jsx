import { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useDispatch } from "react-redux";
import { increaseCounter } from "../store/slices/counter";
import { addToCart } from "../store/slices/cartSlice";

function ProductsList() {
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get("https://dummyjson.com/products")
      .then((res) => {
        setProducts(res.data.products);
      })
      .catch((err) => console.log(err));
    // axios.get('https://api.noroff.dev/api/v1/online-shop').then((res) => setProducts(res.data)).catch((err) => console.log(err))
  }, []);
  const dispatch = useDispatch();
  const addProductToCart = (product) => {
    //  console.log(product);
    dispatch(addToCart(product));
  };

  const increaseCart = () => {
    dispatch(increaseCounter());
  };

  const redirectToProductDet = (id) => {
    navigate(`/product-details/${id}`);
  };

  return (
    <>
      <div className="row row-cols-1 row-cols-md-3 g-4">
        {products.map((product, index) => {
          return (
            <div className="col" key={product.id}>
              <ProductCard
                productData={product}
                btnName={"Add to Cart"}
                handleClick={(product) => addProductToCart(product)}
                handleNavigate={(id) => redirectToProductDet(id)}
              />
            </div>
          );
        })}
      </div>
    </>
  );
}

export default ProductsList;
