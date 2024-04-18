import React, { useState } from 'react'
import styles from './SignUp.module.css'
import {useDispatch} from 'react-redux'
import { createUser } from '../../store/slices/signUpSlices'

const SingUp = ({setIsVisible}) => {

    const [userData, setUserData]=useState({
        name:'',
        password:'',
        email:'',
        img:'',
    })

    const dispatch=useDispatch()

    const changeInput=(e)=>{
        const {name, value}=e.target
        setUserData({...userData, [name]:value})
    }

    const clickOverlay=(e)=>{
        let authDiv=e.target.closest('#test')
        if(!authDiv) setIsVisible(false)
    };

    const submit=(e)=>{
        console.log(e);
        e.preventDefault()
        console.log(userData);
        dispatch(createUser(userData))
        setIsVisible(false)
    }

  return (
    <div className={styles.overlay} onClick={clickOverlay}>
        <div id='test' className={styles.auth}>
            <form onSubmit={submit}>
                <h3>SignUp</h3>
                <p>
                    <input required type="text" placeholder='Email...' name='email' onChange={changeInput}/>
                </p>
                <p>
                    <input required type="text" placeholder='Name...' name='name' onChange={changeInput}/>
                </p>
                <p>
                    <input required type="password" placeholder='Password...' name='password' onChange={changeInput}/>
                </p>
                <p>
                    <input required type="text" placeholder='Img url...' name='img' onChange={changeInput}/>
                </p>
                <p>
                    <input type="submit" />
                </p>
                
            </form>
        </div>
    </div>
  )
}

export default SingUp