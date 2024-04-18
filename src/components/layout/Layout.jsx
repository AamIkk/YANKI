import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Header from '../header/Header';
import Home from '../../pages/Home';
import Contacts from '../../pages/Contacts';
import Catalog from '../../pages/Catalog';
import Favorites from '../../pages/Favorites';
import DetailProduct from '../../pages/DetailProduct';
import Footer from '../footer/Footer';
import Cart from '../../pages/Cart'
import SingUp from '../singUp/SingUp';
import Categories from '../categories/Categories';

const Layout = () => {
  const [isVisible, setIsVisible]=useState(false);
  const changeVisible=()=>{
    setIsVisible(true)
  }
  return (
    <div>
      <Header changeVisible={changeVisible} />
      {isVisible && <SingUp setIsVisible={setIsVisible} />}
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/contacts' element={<Contacts/>} />
        <Route path='/catalog' element={<Catalog/>} />
        <Route path='/favorites' element={<Favorites/>} />
        <Route path='/cart' element={<Cart/>} />
        <Route path='/detail' element={<DetailProduct/>} />
      </Routes>
      <Footer/>
    </div>
  );
}

export default Layout;

