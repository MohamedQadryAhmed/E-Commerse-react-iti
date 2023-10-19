import { configureStore } from "@reduxjs/toolkit";
import cartCounter from "./slices/counter";
import cartSlice from "./slices/cartSlice";
import counter from "./slices/counter";


export default configureStore({
    reducer : {
        counter: counter,
        cart: cartSlice
        
    }
})

