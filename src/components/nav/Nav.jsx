import React from 'react'
import styles from './Nav.module.css'

const Nav = () => {
  return ( 
    <div> 
      <div className="category">
      </div> 
      <div className="hero"> 
        <h1>Узнайте первым о новинках</h1> 
        <form> 
          <input type="email" placeholder='Ваш e-mail*' /> 
        </form> 
        <button>ПОДПИСАТЬСЯ</button> 
        <p>Нажимая на кнопку «Подписаться», я соглашаюсь на обработку моих <br />персональных данных и ознакомлен(а) с условиями конфиденциальности.</p> 
      </div> 
    </div> 
  ) 
} 

export default Nav