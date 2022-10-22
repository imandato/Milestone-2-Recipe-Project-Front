import React from 'react'
import chef from '../assets/chef.png'
import "./navbar.css"
import { Link } from "react-router-dom";

function NavBar(){
    return(
        <div className='navbar'>
            <div className='navbar_logo'>
                <img id='logo' src={chef} alt="logo"/>
                <div className='name'>What the Chef</div>
            </div>
            <div className='navbar_links'>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/recipe">My Recipes</Link></li>
                    <li><Link to='/recipe/new'>Add a Recipe</Link></li>
                </ul>
               
            </div>
        </div>
    )
}

export default NavBar