import React from 'react'
import chef from '../assets/chef.png'
import "./navbar.css"

function NavBar(){
    return(
        <div className='navbar'>
            <div className='navbar_logo'>
                <img id='logo' src={chef} alt="logo"/>
                <div className='name'>What the Chef</div>
            </div>
            <div className='navbar_links'>
                <ul>
                    <li><a href="home">Home</a></li>
                    <li><a href="my-recipes">My Recipes</a></li>
                    <li><a href="add-recipe">Add a Recipe</a></li>
                </ul>
               
            </div>
        </div>
    )
}

export default NavBar