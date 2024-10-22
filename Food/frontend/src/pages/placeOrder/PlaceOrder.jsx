import React, { useContext, useEffect, useState } from 'react'
import './Placeorder.css';
import axios from "axios"
import { StoreContext } from '../../components/context/StoreContext';
import { useNavigate } from 'react-router-dom';
const PlaceOrder = () => {
  const {getTotalCartAmount,token,food_list,cartItems,url} =useContext(StoreContext)

  const [data,setData]=useState({
    firstName:"",
    lastName:"",
    email:"",
    street:"",
    city:"",
    state:"",
    zipcode:"",
    country:"",
    phone:""
  })

  const onChangeHandler =(e)=>{
    const name =e.target.name;
    const value =e.target.value;
    setData(data=>({...data,[name]:value}))
  }

  const placeOrder =async(e)=>{
    e.preventDefault();
    let orderItems =[];
    food_list.map((item)=>{
      if(cartItems[item._id]>0){
        let itemInfo=item;
        itemInfo["quantity"]=cartItems[item._id];
        orderItems.push(itemInfo)
      }
    })
let     orderData={
  address:data,
  items:orderItems,
  amount:getTotalCartAmount()+2
}
let response =await axios.post(url+"/api/order/place",orderData,{headers:{token}})
if(response.data.success){
  const {session_url} =response.data;
  window.location.replace(session_url);
}else{
  alert("Error");
}
  }
  const navigate=useNavigate();
  useEffect(()=>{
    if(!token){
navigate("/cart")
    }else if(getTotalCartAmount()===0){
      navigate("/cart")
    }
  },[token])

  return (
    <form className='placeorder' onSubmit={placeOrder}>
      <div className="placeorder-left">
        <h2>Delievery Information</h2>
        <div className="multi-field">
          <input required   type="text" placeholder='FirstName' name='firstName' onChange={onChangeHandler} value={data.firstName}/>
          <input required  type="text" name='lastName' onChange={onChangeHandler} value={data.lastName}  placeholder='LastName'/>
        </div>
        <input required   name='email' onChange={onChangeHandler} value={data.email}  type="email" placeholder='Email' />
        <input required  type="text" name="street" onChange={onChangeHandler} value={data.street}  placeholder='Street' id="" />
        <div className="multi-field">
          <input required  type="text" name='city' onChange={onChangeHandler} value={data.city}  placeholder='City'/>
          <input required  name='state' onChange={onChangeHandler} value={data.state}  type="text" placeholder='State'/>
        </div>
        <div className="multi-field">
          <input required  type="text" name='zipcode' onChange={onChangeHandler} value={data.zipcode}  placeholder='Zip Code'/>
          <input required  type="text" name='country' onChange={onChangeHandler} value={data.country}  placeholder='Country'/>
        </div>
        <input required  type="text" name='phone' onChange={onChangeHandler} value={data.phone}  placeholder='Phone Number'/>

      </div>
<div className="placeorder-right">
<div className="cart-total">
          <h2>Cart Totals</h2>
          <div>
            <div className="cart-total-details">
              <p>SubTotal</p>
              <p>${getTotalCartAmount()}</p>
            </div>
            <hr />
            <div className="cart-total-details">
              <p>Delievery fee</p>
              <p>${getTotalCartAmount()===0?0:2}</p>
            </div>
            <hr />
            <div className="cart-total-details">
              <b>Total</b>
              <b>${getTotalCartAmount()===0?0:getTotalCartAmount()+2}</b>
            </div>
          </div>
          <button type='submit'>Proceed to payment</button>
        </div>
</div>
    </form>
  )
}

export default PlaceOrder