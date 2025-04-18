import React, {  useContext, useState } from 'react'
import './Loginpopup.css'
import axios from "axios"
import { assets } from '../../assets/frontend_assets/assets'
import { StoreContext } from '../context/StoreContext'
const LoginPopup = ({ setShowLogin }) => {

    const {url,setToken}=useContext(StoreContext)
    const [currentState, setCurrentState] = useState("Sign up");
    const [data,setData]=useState({
        name:"",
        email:"",
        password:""
    })
    const onChangeHandler=(e)=>{
        const name=e.target.name
        const value=e.target.value
        setData(data=>({...data,[name]:value}))
    }

    const onLogin=async (e)=>{
        e.preventDefault();
        let newUrl=url;
        if(currentState==="Login"){
            newUrl += "/api/user/login"
        }else{
            newUrl += "/api/user/register"
        }
        const response =await axios.post(newUrl,data);

        if(response.data.success){
            setToken(response.data.token);
            localStorage.setItem("token",response.data.token);
            setShowLogin(false)
        }else{ 
            alert(response.data.message)
        }
    }
    return (
        <div className='login-popup'>
            <form className="login-popup-container" onSubmit={onLogin}>
                <div className="login-popup-title">

                    <h2>{currentState}</h2>
                    <img onClick={() => setShowLogin(false)} src={assets.cross_icon} alt="" />
                </div>
                <div className="login-popup-inputs">
                    {currentState === "Login" ? <></> :
                        <input type="text"name='name' onChange={onChangeHandler} value={data.name}  placeholder='your name' required />
                    }
                    <input type="email" placeholder='your email' name='email' onChange={onChangeHandler} value={data.email}  required />
                    <input type="password" placeholder='password' name='password' onChange={onChangeHandler} value={data.password}  required />
                </div>
                <button type='submit'>{currentState === "Sign up" ? "Create Account" : "Login"}</button>
                <div className="login-popup-condition">
                    <input type="checkbox" required />
                    <p>By continuing ,I agree to the terms of use & privacy policy</p>
                </div>
                {currentState === "Login" ?
                    <p>Create a new account? <span onClick={() => setCurrentState("Sign up")}>Click here</span></p>
                    :
                    <p>Already have an account ?<span onClick={() => setCurrentState("Login")}>Login here</span></p>
                }
            </form>
        </div>
    )
}

export default LoginPopup