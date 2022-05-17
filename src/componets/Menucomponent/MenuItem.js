import React,{useState} from "react";
import "./MenuItem.css"


const MenuItem = (props)=>{

   
    const {data,state,onAdd}= props
   

    function CloseOpenMenu(){
        if(state === true){
            return(
                    <ul className="ul-menuMain">
                        <li id="li-menuMain">
                            <div className="MenuMain-item">
                                <p className="p-item-li">{data.name}</p>
                                <p className="p-item-li" >{data.price}€</p>
                                <button id="btn-item-li" onClick={()=>onAdd(data)} >ADD🤤</button>
                           </div>
                        </li>
                    </ul>
            )
        }
    }

    return(
        <>        
            {CloseOpenMenu()}
        </>
    )
}

export default MenuItem;