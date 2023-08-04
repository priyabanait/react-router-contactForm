import React from 'react'
import { NavLink } from 'react-router-dom'
import './Header.css';
export default function Header() {
  return (
   



 
    <nav className="navbar">
    <div className="container">
      
      <div className="nav-elements">
        <ul>
          <li>
            <NavLink to="/home">Home</NavLink>
          </li>
         
          
          <li>
            <NavLink to="/about">About</NavLink>
          </li>
          <li>
            <NavLink to="/contactPage">Contact</NavLink>
          </li>
        </ul>
      </div>
    </div>
  </nav>
)
}


  

