import React,{useState,useEffect} from "react";
import CartComponent from "../componets/CartComponet/CartComponet";
import MenuComponent from "../componets/Menucomponent/MenuComponent";
import ListMenuOne from "../DataMenu/ListMenuOne";
import ListMenutwo from "../DataMenu/ListMenutwo";
import Cart from "../componets/CartComponet/Cart";
import "./Home.css"
const Home = (props)=>{

    const [cartItems,setCartItems] = useState([])
    const [cartOpenClose,setCartOpenClose] = useState(true)
    const MenuPizza = ListMenuOne
    const Hamburguer = ListMenutwo



    /*useEffect(()=>{
        getLocalMenu()
    },[])

    useEffect(()=>{
        saveLocalMenu()
    },[cartItems])





    const saveLocalMenu =()=>{
        localStorage.setItem("cartItems", JSON.stringify(cartItems))
    }
    const getLocalMenu = ()=>{
        if(localStorage.getItem("cartItems")=== null){
            localStorage.setItem("cartItems", JSON.stringify([]));
        }else{
            let Menulocal = JSON.parse(localStorage.getItem("cartItems"))
            setCartItems(Menulocal);
        }
    }*/


    const onAdd = (data)=>{
        const exist = cartItems.find(x=> x.value === data.value);
        if(exist){
            setCartItems(cartItems.map(x=>x.value === data.value ? {...exist, qty:exist.qty + 1}: x))
        }else{
            setCartItems([...cartItems,{...data, qty: 1}])
        }
    };
    const onRemove = (data) =>{
        const exits = cartItems.find((x)=> x.id === data.id)
        if(exits.qty === 1){
          setCartItems(cartItems.filter((x)=>x.id !== data.id))
        }else{
          setCartItems(cartItems.map(x=> x.id === data.id ? {...exits, qty:exits.qty -1} : x));
        }
      };

    const MainContectMenu = ()=>{
        return(
            <div>
                <MenuComponent                     
                data={MenuPizza}
                tittle={"pizza"}
                onAdd={onAdd}
                />
                <MenuComponent
                    data={Hamburguer}
                    tittle={"hamburger"}
                    onAdd={onAdd}
                />
                <MenuComponent
                    data={Hamburguer}
                    tittle={"hamburger X2"}
                    onAdd={onAdd}
                />
                <MenuComponent
                    data={Hamburguer}
                    tittle={"hamburger X2"}
                    onAdd={onAdd}
                />
                <MenuComponent
                    data={Hamburguer}
                    tittle={"hamburger X2"}
                    onAdd={onAdd}
                />
                <CartComponent
                    CounterCart={cartItems.length}
                    cartOpenClose={cartOpenClose}
                    setCartOpenClose={setCartOpenClose}
                    
                /> 
            </div>
        )
    }

    
    return(
        <div className="home-container-main" >
           { cartOpenClose ? MainContectMenu() : <Cart
                setCartOpenClose={setCartOpenClose}
                cartOpenClose={cartOpenClose} 
                cartItems={cartItems} 
                setCartItems={setCartItems}  
                onAdd={onAdd}    
                onRemove={onRemove}     
            />}
        </div>
    )
}

export default Home;