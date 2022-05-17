import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { Routes } from 'react-router-dom';
import './App.css';
import Header from './componets/Header';
import Home from "./Pages/Home";
import Cart from './componets/CartComponet/Cart';
import backgroundImg from "./componets/images/depositphotos_115402612-stock-illustration-cooking-food-seamless-background.jpg"

function App() {
  return (
    <div className='Body-background'>
        <BrowserRouter> 
          <Header/>      
          <Routes>
            <Route path='/' element={<Home/>}/>
            

          </Routes>
          
      </BrowserRouter>
    </div>
  );
}

export default App;
