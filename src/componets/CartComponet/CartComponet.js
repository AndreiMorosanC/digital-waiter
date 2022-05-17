import React from "react";
import { Link } from "react-router-dom";
import CartLogo from    "../images/cart-shopping.png"
import "./CartComponet.css"
const CartComponent = (props)=>{

    const {setCartOpenClose,cartOpenClose} = props

    return(
            <div id="Cart-container-logo" onClick={()=> setCartOpenClose(!cartOpenClose)}>
                <button className="Cart-btn" >FINISH ORDER</button>
            </div>
        
    )
}

export default CartComponent;