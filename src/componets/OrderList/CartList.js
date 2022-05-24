import React, {useEffect} from "react";
import "./CartList.css"
import CartComponent from "../CartComponet/CartComponet";
const CartList = (props)=>{
        const {cartOpenClose,setCartOpenClose,cartItems}= props


        let OrderMap = cartItems;

       



       

        const OrderList =()=>{
                return(
                    OrderMap.map(item=>(
                            <div  key={item.value} className="OrderMap-container">
                                <p id="OrderMap-name">{item.name}</p>
                                <p>{item.price}€</p>
                                <p id="OrderMap-qty">{item.qty}</p>
                            </div>
                    ))
                    )
                
        }
       
      

        
      
    return(
        <div className="CartList-main-container">
            <div className="CartList-container-OrderMap">
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