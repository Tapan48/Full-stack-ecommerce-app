import { createContext, useEffect, useState } from "react";
import { PRODUCTS } from "../products";


export const ShopContext = createContext(" ");


// ShopContext is a React context that provides state and functions related to shopping cart management, including adding items, updating quantities, calculating totals, and checking out.
const getDefaultCart = () => {
    let cart = {};
    for (let i = 1; i < PRODUCTS.length + 1; i++) {
      cart[i] = 0;
    }
    console.log(cart);
    return cart;
  };
     

//   ShopContextProvider is a component that wraps its children with the ShopContext.Provider, supplying the shopping cart state and related functions to the components within its hierarchy.


export const  ShopContextProvider = (props) => {
    console.log('hey fuckas');
    const [cartItems, setCartItems] = useState(getDefaultCart());


   
    const addToCart = (itemId) => {
        setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
      };
    
      const removeFromCart = (itemId) => {
        setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
      };
      const updateCartItemCount = (newAmount, itemId) => {
        setCartItems((prev) => ({ ...prev, [itemId]: newAmount }));
      }
      const getTotalCartAmount = () => {
        let totalAmount = 0;
        for (const item in cartItems) {
          if (cartItems[item] > 0) {
            let itemInfo = PRODUCTS.find((product) => product.id === Number(item));
            totalAmount += cartItems[item] * itemInfo.price;
          }
        }
        return totalAmount;
      };
      const checkout = () => {
        setCartItems(getDefaultCart());
      };

      const contextValue = {
        cartItems,
        addToCart,  
        updateCartItemCount,
        removeFromCart,
        getTotalCartAmount,
        checkout,
      };
    console.log(cartItems);
  return( 
  
        <ShopContext.Provider value={contextValue}>
          {props.children}
        </ShopContext.Provider>
      );
  
}
