import React, { useState } from "react";

const CartContext = React.createContext();

function CartProvider(Props){
    const [cartData,setcartData]=useState([]);
    const addCartData = (data) =>{
         setcartData([...cartData,data]); 
    }
    const clearCart = () =>{
        setcartData([])
    }
    return(
        <CartContext.Provider value={{cartData,addCartData,clearCart}}>
           {Props.children}
        </CartContext.Provider>
    )
}

export {CartContext,CartProvider}
export default CartProvider