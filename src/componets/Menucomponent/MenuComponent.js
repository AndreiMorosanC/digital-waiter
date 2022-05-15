import React,{useState} from "react";
import MenuItem from "./MenuItem";
import "./MenuComponent.css"
import ListMenuOne from "../../DataMenu/ListMenuOne"

const MenuComponent = (props)=>{

    const {data, onAdd} = props
    const [state, setState] = useState(false)
    
    

    return(
        <div className="Main-Menu-container">
            <div className="Menu-Item-Logo" onClick={()=>setState(!state)}>
                <img src={props.ImgMenu} alt=""  className="Img-menu"/>
                <h2>{props.tittle}</h2>
                <img src={props.ImgMenu} alt="" className="Img-menu"/>
            </div>
            <div >
                {data.map( (data)=>(
                    <MenuItem
                        key={data.id}
                        data={data}
                        state={state}
                        onAdd={onAdd}
                    />
                ))}
            
            
            </div>
        </div>
    )
}

export default MenuComponent;

