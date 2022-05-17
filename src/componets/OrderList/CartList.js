import React from "react";
import "./CartList.css"
import CartComponent from "../CartComponet/CartComponet";
const CartList = (props)=>{
        const {cartOpenClose,setCartOpenClose,cartItems}= props
        const OrderList =()=>{
            if(cartItems.length <= 4 ){
               return(
                    cartItems.map(item=>(
                        <div key={item.value }>
                            <p>{item.name}</p>
                            <p>${item.price}</p>
                            
                        </div>
                    ))
                )
            }
            if(cartItems.length >= 4){
                cartItems.shift();
            }
        }

        console.log(cartItems.length)
      
    return(
        <div className="CartList-main-container">
            <div>
                {OrderList()}
            </div>
            <div className="btn-CartList">
                <CartComponent
                        cartOpenClose={cartOpenClose}
                        setCartOpenClose={setCartOpenClose}
                    /> 
            </div>
        </div>
    )
}

export default CartList;