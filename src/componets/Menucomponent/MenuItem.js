import React,{useState} from "react";
import "./MenuItem.css"


const MenuItem = (props)=>{

   
    const {data,state,onAdd}= props
   

    function CloseOpenMenu(){
        if(state === true){
            return(
                <div className="menu-container-item-true">

                    <div className="menu-item-Food">
                        <p>{data.name}</p>
                        <p>${data.price}</p>
                        <button onClick={()=>onAdd(data)} >Lo quiero</button>
                    </div>
                </div>
            )
        }
    }

    return(
        <div className="Menu-item-container">
           
            {CloseOpenMenu()}
        </div>
    )
}

export default MenuItem;