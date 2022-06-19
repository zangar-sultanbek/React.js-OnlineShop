import React from 'react'
import {Link, Outlet} from 'react-router-dom';
import headerCSS from './Header.module.css';

const Header = () => {
  return (
      <>
        <div className={headerCSS.header}>
            <nav className={headerCSS.nav_bar}>
                <Link to="/home" className={headerCSS.nav_link}>Home</Link>
                <Link to="/products" className={headerCSS.nav_link}>Products</Link>
                <Link to="/cart" className={headerCSS.nav_link}>Cart</Link>
                <Link to="/contact" className={headerCSS.nav_link}>Contact</Link>
            </nav>     
            {/* <p className={headerCSS.theme_btn}>Dark</p> */}
        </div>
        
        <Outlet/>
      </>
  )
}

export default Header