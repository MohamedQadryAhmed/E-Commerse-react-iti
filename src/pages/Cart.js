import { useDispatch, useSelector } from "react-redux";
import { decreaseCounter, increaseCounter } from "../store/slices/counter";
import { Link } from "react-router-dom";
import { clearCartItems, decreaseCart, increaseCart, removeFromCart } from "../store/slices/cartSlice";
import { useEffect } from "react";

export default function Cart() {
    
   const cart = useSelector((state) => state.cart);
    const dispatch = useDispatch();

    


    return (
        <div>
            <div className="fs-5">Shoping Cart</div>
            <hr/>
            {cart.cartItems.length === 0 ? 
            <div>
               <h1 className="m-5">Cart Is Empty!</h1>
               <Link to="/" className="btn btn-outline-success ms-5">Shoping Now</Link>     
            </div>
            :<div>
                {cart.cartItems.map((item)=>{
                    return(
                        <div key={item.id}>
                            <div className="card mb-3">
                                <div className="row g-0">
                                    <div className="col-4">
                                    <img src={item.thumbnail} className="img-fluid rounded-start" height={150}/>
                                    </div>
                                    <div className="col-8">
                                    <div className="card-body row">
                                        <h3 className="col-3 card-title m-3 ">{item.title}</h3>
                                        <div className="col-3 d-flex border bg-light rounded">
                                            <button 
                                            className="btn btn-success m-2"
                                            onClick={() => dispatch(increaseCart(item))}
                                            > + </button>
                                            <h5 className="m-3 ps-2 pe-2">{item.cartQuantity}</h5>
                                            <button 
                                            className="btn btn-outline-success m-2"
                                            onClick={()=> dispatch(decreaseCart(item))}> - </button>
                                        </div>
                                        
                                        <h4 className="col-4 m-3 pe-5">${item.price * item.cartQuantity} <span className="text-danger fs-5 ms-5">-{item.discountPercentage}%</span></h4>
                                        <div 
                                        className="col-2 btn btn-danger m-2"
                                        onClick={() => dispatch(removeFromCart(item)) } >remove</div>
                                    
                                    </div>
                                    </div>
                                </div>

                                </div>

                        </div>
                    );
                    
                })}
                <hr/>
                <div className="d-flex justify-content-between m-5">
                <div 
                className="btn btn-outline-danger"
                onClick={()=> dispatch(clearCartItems())}>Clear Cart</div>
                <h4 className="">Total Price: ${cart.cartTotalPrice}</h4>

                </div>
                
            </div> }
            

        </div>
    );
}