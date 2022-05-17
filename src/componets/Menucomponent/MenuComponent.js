import React,{useState} from "react";
import MenuItem from "./MenuItem";
import "./MenuComponent.css"
import ListMenuOne from "../../DataMenu/ListMenuOne"
import arrow from  "../images/flecha-menudigital.png"
const MenuComponent = (props)=>{

    const {data, onAdd} = props
    const [state, setState] = useState(false)
    

    return(
        <div className="main-container-menu">
            <div id="arrow-container">
                <img src={arrow} alt="" className={!state ? "arrow-close" : "arrow-open"}   />
            </div>
            <div className="container-item-menu">
                <div className="container-arrow-tiitle">
                    <div  onClick={()=> setState(!state)}   className="tittle-item-container" >
                        <h2 id="tittle-item" >{props.tittle}</h2>
                        <img src={props.imgTittle} alt="" id="menu-img-item" />
                    </div>
                </div>
                <div className={!state ? "Ani-map" : "Ani-map-open"}>
                    {data.map((data)=>(
                        <MenuItem
                            key={data.id}
                            data={data}
                            state={state}
                            onAdd={onAdd}
                        />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default MenuComponent;

