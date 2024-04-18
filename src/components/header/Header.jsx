import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css'
import ButtonAppBar from '../burger/Burger';

const Header = ({changeVisible}) => {
  return (
    <div className='headerBlock'>
      <header>
        <nav>
          <ButtonAppBar/>
      <ul>
        <li id='liTag'>
          <NavLink to='/'>Главная</NavLink>
        </li>
        <li id='liTag'>
          <NavLink to='/catalog'>Каталог</NavLink>
        </li>
        <li id='liTag'>
          <NavLink to='/contacts'>Контакты</NavLink>
        </li>

          <div className='mainTeatle'>YANKI</div>

        <li onClick={changeVisible} id='liTag'>
            <NavLink to='user'><i className="bi bi-person"></i></NavLink>
        </li>
        <li>
          <NavLink to='/favorites'><i className="bi bi-heart"></i></NavLink>
        </li>
        <li id='liTag'>
          <NavLink to='/cart'><i className="bi bi-cart3"></i></NavLink>
        </li>
        
      </ul>
        </nav>
      {/* <p>YANKI</p> */}
      </header>
    </div>
  );
}

export default Header;

