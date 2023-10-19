import { createSlice } from "@reduxjs/toolkit";
import { useState } from "react";

const INITIAL_STATE = {
    cartItems : [],
    cartTotalQuantity :0,
    cartTotalPrice:0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState: INITIAL_STATE,
  reducers: {
    addToCart: (state, action) => {
      const itemIndex = state.cartItems.findIndex(
        (item) => item.id === action.payload.id
      );
      if(itemIndex >= 0){
        state.cartItems[itemIndex].cartQuantity += 1;
        state.cartTotalPrice += action.payload.price;
        state.cartTotalQuantity++;
        
      }else{
        const product = {...action.payload , cartQuantity : 1}
        state.cartItems.push(product);
        state.cartTotalPrice += action.payload.price;
        state.cartTotalQuantity++;
      }
      
    },
    addToCartByValue: (state, action) => {
      state.counter_val = state.counter_val + action.payload;
    },
    removeFromCart: (state, action) => {
      const nextItemsCart = state.cartItems.filter(
        (cartItem) => cartItem.id !== action.payload.id
      );
        state.cartItems = nextItemsCart;
        state.cartTotalPrice -= action.payload.price * action.payload.cartQuantity;
        state.cartTotalQuantity -= action.payload.cartQuantity;
    },

    decreaseCart:(state, action) => {
      const itemIndex = state.cartItems.findIndex(
        (item) => item.id === action.payload.id
      );

      if(state.cartItems[itemIndex].cartQuantity > 1){
        state.cartItems[itemIndex].cartQuantity -= 1;
        state.cartTotalQuantity--;
        state.cartTotalPrice -= action.payload.price;
      }else if(state.cartItems[itemIndex].cartQuantity === 1){
        const nextItemsCart = state.cartItems.filter(
          (cartItem) => cartItem.id !== action.payload.id
        );
          state.cartItems = nextItemsCart;
          state.cartTotalQuantity--;
          state.cartTotalPrice -= action.payload.price;
      }
    },

    increaseCart:(state ,action) => {
      const itemIndex = state.cartItems.findIndex(
        (item) => item.id === action.payload.id
      );

      if(state.cartItems[itemIndex].cartQuantity < state.cartItems[itemIndex].stock){
        state.cartItems[itemIndex].cartQuantity += 1;  
        state.cartTotalPrice += action.payload.price;
        state.cartTotalQuantity++; 
      }
    },

    clearCartItems: (state,action)=>{
      state.cartItems = [];
      state.cartTotalQuantity = 0;
      state.cartTotalPrice = 0;
    },
  },
});

export const {
  addToCart,
  removeFromCart,
  decreaseCart,
  increaseCart,
  clearCartItems,

  
} = cartSlice.actions;

export default cartSlice.reducer;
