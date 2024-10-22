import React from 'react'
import './order.css'
import { useState } from 'react'
import { toast } from "react-toastify"
import axios from "axios"
import { useEffect } from 'react'
import { assets } from "../../assets/admin_assets/assets"

const Order = ({ url }) => {
  const [orders, setOrders] = useState([]);

  const fetchAllOrders = async () => {
    const response = await axios.get(url+"/api/order/list");
    if (response.data.success) {
      setOrders(response.data.data);
      console.log(response.data.data);

    } else {
      toast.error("ERROR");
    }
  }
  const statusHandler=async(event,orderId)=>{
    const response =await axios.post(url+"/api/order/status",{orderId,status:event.target.value})
    if(response.data.success){
      await fetchAllOrders();
    }
  }
  useEffect(() => {
    fetchAllOrders();
  }, [])

  return (
    <div className='order add'>
      <h3>Order Page</h3>
      <div className="order-list">
        {orders.map((order, index) => (
          <div key={index} className='order-item'>
            <img src={assets.parcel_icon} alt="" />
            <div>
              <p className="order-item-food">
                {order.items.map((item, index) => {
                  if (index === orders.items.length - 1) {
                    return item.name + " x " + item.quantity
                  }
                  else {
                    return item.name + " x " + item.quantity + " , "
                  }
                })}
              </p>
              <p className="order-item-name">
                {orders.address.firstName + " " + orders.address.lastName}
              </p>
              <div className="order-item-address">
                <p>{orders.address.street + ","}</p>
                <p>{orders.address.city + "," + orders.address.state + ", " + orders.address.country + "," + orders.address.zipcode}</p>
              </div>
              <p className="order-item-phone">
                {order.address.phone}
              </p>
            </div>
            <p>Items:{order.item.length}</p>
            <p>${order.amount}</p>
            <select onChange={(event)=>statusHandler(event,order._id)} value={order.status}>
              <option value="Food Processing">Food Processing</option>
              <option value="Out for Delievery">Out For Delievery</option>
              <option value="Food Delievered">Food Delievered</option>
            </select>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Order