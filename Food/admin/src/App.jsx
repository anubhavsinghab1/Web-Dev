import React from 'react'
import Sidebar from './components/sidebar/sideBar'
import Navbar from './components/navbar/navBar'
import {Route,Routes} from 'react-router-dom'
import Add from './pages/add/Add'
import List from './pages/list/List'
import Order from './pages/orders/Order'
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const App = () => {
  const url="http://localhost:5175"
  return (
    <>
    <ToastContainer/>
      <Navbar/>
      <div className="app">
        <Sidebar/>
        <Routes>
          <Route path="/add" element={<Add url={url}/>}/>
          <Route path="/list" element={<List url={url}/>}/>
          <Route path="/orders" element={<Order url={url}/>}/>
        </Routes>
      </div>
    </>
  )
}

export default App