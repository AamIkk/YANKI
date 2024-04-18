import React from 'react'
import styles from './Hero.module.css'
import Header from '../header/Header'
import Categories from '../categories/Categories'

const Hero = () => {
  return ( 
    <div className={styles.headerLogo}>  
    <div className='container'>  
        <Header/>  
        <div className={styles.headerBlock}>  
        <h2>New collection</h2>  
        <div className={styles.line}></div>  
        <h5>Watch new collection</h5> 
        </div>  
    </div> 
    </div>  
 
  ); 
}; 

export default Hero