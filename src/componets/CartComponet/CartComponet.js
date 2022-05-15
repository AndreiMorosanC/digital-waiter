import React from "react";
import { Link } from "react-router-dom";
import CartLogo from    "../images/cart-shopping.png"
import "./CartComponet.css"
const CartComponent = (props)=>{

    const {CounterCart,setCartOpenClose,cartOpenClose} = props

    return(
            <div id="Cart-container-logo" onClick={()=> setCartOpenClose(!cartOpenClose)}>
                <img src={CartLogo} alt="" id="cartImg"/>
                <p id="cartPara">{CounterCart}</p>
            </div>
        
    )
}

export default CartComponent;