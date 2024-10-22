import React from 'react'
import './navbar.css'
import { assets } from '../../assets/admin_assets/assets'
const Navbar = () => {
    return (
        <>
            <div className='navbar'>
                <img src={assets.logo} className='logo' />
                <img src={assets.profile_image} className='profile' />
            </div>
            <hr />
        </>
    )
}

export default Navbar