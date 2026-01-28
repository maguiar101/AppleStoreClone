import React from 'react'
import './Header.css'
import { FaApple } from "react-icons/fa";
import { IoIosSearch } from "react-icons/io";
import { IoBagOutline } from "react-icons/io5";

function Header() {
  return (
      <div className="header">
          <ul className="headerLinks">
            <li><a href="#"><FaApple className='appleLogo'/></a></li>
            <li><a href="#" className='store'>Store</a></li>
            <li><a href="#">Mac</a></li>
            <li><a href="#">iPad</a></li>
            <li><a href="#">iPhone</a></li>
            <li><a href="#">Watch</a></li>
            <li><a href="#">Vision</a></li>
            <li><a href="#">AirPods</a></li>
            <li><a href="#">TV & Home</a></li>
            <li><a href="#">Entertainment</a></li>
            <li><a href="#">Accessories</a></li>
            <li><a href="#">Support</a></li>
            <li><a href="#"><IoIosSearch className='searchIcon' /></a></li>
            <li><a href="#"><IoBagOutline className='bagIcon' /></a></li>
          </ul>
      </div>
  )
}

export default Header
