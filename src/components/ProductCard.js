import { Rating } from "@mui/material";
import { useDispatch } from "react-redux";

export default function ProductCard(props) {

    const dispatch = useDispatch();


    const { productData, btnName, handleClick , handleNavigate } = props;
  return (
    <div className="card h-100">
      <img src={productData.thumbnail} className="card-img-top" height={250}  onClick={()=>handleNavigate(productData.id)}/>
      <div className="card-body">
        <div className="row">
        <h5 className="col-8 fs-4 card-title"  onClick={()=>handleNavigate(productData.id)} >{productData.title}</h5>
        <h5 className="col-4 ">${productData.price}</h5>
        </div>
        <p className="card-text">{productData.description}</p>
        <Rating precision={0.1}name="rating" value={productData.rating} readOnly  style={{'color':'green'}}/>
        
        <button
          className="d-block mt-3 btn btn-outline-success rounded-pill"
          onClick={
            () => handleClick(productData)
        }
        >
          {btnName}
        </button>
      </div>

    </div>
  );
}