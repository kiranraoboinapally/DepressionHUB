import React from 'react';
import './navbar.css';
import DepressionHUB from '../../assets/DepressionHUB.png';

import {RiMenu3Line,RiCloseLine} from 'react-icons/ri';

const Navbar = () => {
  return (
    <div className="dhubb__navbar">
      <div className="dhubb__navbar-links">
        <div className="dhubb__navbar-links_logo">
          <img  src={DepressionHUB} alt="DepressionHUB" />
          </div>
         <div className="dhubb__navbar-links_containers">
         <div className="dhubb__navbar-menu_containers"> 
         <div className="dhubb__navbar-sign">
         <p><a href="#Blog">Blog</a></p>
         <p><a href="#Possible">Lang</a></p>
         <p><a href="#Features">Login</a></p>

         </div>
         </div>
         </div>
    </div>
    </div>
  )
}
export default Navbar