import React from "react";
import { Link } from "react-router-dom";
import "./Cart.css"
const Cart=(props)=>{
  
    const {cartOpenClose,setCartOpenClose,onAdd,setCartItems,cartItems,onRemove} = props
    const itemsPrice = cartItems.reduce((a,c)=>a + c.price * c.qty, 0)
    const TaxPrice = itemsPrice * 0.14;
    const shoppingPrice = itemsPrice > 2000 ? 0: 50;
    const totalPrice = itemsPrice + TaxPrice + shoppingPrice
    return(
        <div className="container-main-cart" >
            <button onClick={()=> setCartOpenClose(!cartOpenClose)}>back.....</button>
            <div>
                {cartItems.length === 0 && <div>cart is Empty</div>}
                    {cartItems.map(item=>(
                        <div className="container-main-order" key={item.value }>
                            <h3>{item.name}</h3>
                            <h3>${item.price}</h3>
                            <h3>{item.qty}</h3>
                            <button onClick={()=>onAdd(item)} >+</button>
                            <button onClick={()=>onRemove(item)}>-</button>
                        </div>
                    ))}

                    
            </div>
            <div>
                {cartItems.length !== 0 && (
                    <div>
                        <p>Product Price</p>
                        <span>${itemsPrice.toFixed(2)}</span>
                    </div>
                )

                }
            </div>
        </div>
    )
}

export default Cart;