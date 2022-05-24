import React,{useState,useEffect} from "react";
import CartComponent from "../componets/CartComponet/CartComponet";
import MenuComponent from "../componets/Menucomponent/MenuComponent";
import ListMenuOne from "../DataMenu/ListMenuOne";
import ListMenutwo from "../DataMenu/ListMenutwo";
import Cart from "../componets/CartComponet/Cart";
import "./Home.css"
import pizzaMenu from "../componets/images/pizzamenu.jpg"
import Burger from "../componets/images/hamburgermenu.png"
import spaghetti from "../componets/images/spaghett.png"
import desserts from "../componets/images/dessertsmenu.png"
import CartList from "../componets/OrderList/CartList";
import ListMenuThree from "../DataMenu/ListMenuThree";
import ListMenuFour from "../DataMenu/ListMenuFour";

const Home = (props)=>{

    const [cartItems,setCartItems] = useState([])
    const [cartOpenClose,setCartOpenClose] = useState(true)
    const MenuPizza = ListMenuOne
    const Hamburguer = ListMenutwo
    const Spaghetti = ListMenuThree
    const Desserts = ListMenuFour



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
        const exist = cartItems.find(x => x.value === data.value);
        if(exist){
            setCartItems(cartItems.map(x=>x.value === data.value ? {...exist, qty:exist.qty + 1}: x))
        }else{
            setCartItems([...cartItems,{...data, qty: 1}])
        }
    };
    const onRemove = (data) =>{
        const exits = cartItems.find((x)=> x.value === data.value)
        if(exits.qty === 1){
          setCartItems(cartItems.filter((x)=>x.value !== data.value))
        }else{
          setCartItems(cartItems.map(x=> x.value === data.value ? {...exits, qty:exits.qty -1} : x));
        }
      };

    const MainContectMenu = ()=>{
        return(
            <div className="container-main-content">
                <MenuComponent                     
                data={MenuPizza}
                tittle={"PIZZA"}
                onAdd={onAdd}
                imgTittle={pizzaMenu}
                />
                <MenuComponent                     
                data={Hamburguer}
                tittle={"BURGER"}
                onAdd={onAdd}
                imgTittle={Burger}
                />
                <MenuComponent                     
                data={Spaghetti}
                tittle={"SPAGHETTI"}
                onAdd={onAdd}
                imgTittle={spaghetti}
                />
                <MenuComponent                     
                data={Desserts}
                tittle={"DESSERTS"}
                onAdd={onAdd}
                imgTittle={desserts}
                />
                <CartList
                    cartItems={cartItems}
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