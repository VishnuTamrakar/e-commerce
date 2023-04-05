import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {

    const [mobileMenu,setMobileMenu]= useState(false)
  return (
    <header className='header'>
        <div className="container d_flex">
            <div className="categories d_flex">
                <span className="fa-solid fa-border-all"></span>
                <h4>
                    Categoreis <i className="fa fa-chevron-down"></i>
                </h4>
            </div>
            <div className="navLinks">
              <ul className={mobileMenu?"nav-links-mobileMenu":"link f_flex capitalize"}
              onClick={()=>setMobileMenu(false)}>
                  <li> <Link to="/">Home</Link></li> 
                
                <li>
                    <Link to="/pages">Pages</Link>
                </li>
                <li>
                    <Link to="/">User Account</Link>
                </li>
                <li>
                    <Link to="/">Vendor Account</Link>
                </li>
                <li>
                    <Link to="/">Track My Order</Link>
                </li>
               </ul>
               <button className="toggle" onClick={()=> setMobileMenu(!mobileMenu)}>
                        {mobileMenu? <i className="fas fa-times close home-btn"></i>:
                        <i className="fa-solid fa-bars open"></i>}
               </button>
            </div>
        </div>
    </header>
  )
}

export default Navbar
