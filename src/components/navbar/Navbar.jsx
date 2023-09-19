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
          <p><a href="#Blog">Blog</a></p>
         <p><a href="#Possible">Lang</a></p>
         <p><a href="#Features">Talk to Therapist</a></p>
         </div>
         <div className="dhubb__navbar-sign">
          <button type="button">Login</button></div>
         </div>
    </div>
  )
}
export default Navbar