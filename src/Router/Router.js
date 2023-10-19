import React from "react";
import { Route, Routes } from "react-router-dom";
import Products from "../pages/Products";
import Register from "../pages/Register";
import Login from "../pages/Login";
import Cart from "../pages/Cart";
import NotFound from "../pages/notFound";
import ProductDetails from "../pages/ProductDetails";

export default function Router(){
    return(
        <Routes>
            <Route path="/" element={<Products/>} />
            <Route path="/product-details/:id" element={<ProductDetails/>}/>
            <Route path="/register" element={<Register/>}/>
            <Route path="/login" element={<Login/>}/>
            <Route path="/cart" element={<Cart/>}/>
            <Route path="/*" element={<NotFound/>}/>
        </Routes>
    );
}