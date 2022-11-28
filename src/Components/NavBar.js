import React from 'react'
import chef from '../assets/chef.png'
import "../Components/css/navbar.css"
import { Link } from "react-router-dom";

function NavBar(){
    return(
        <div id='navbar'>
            <div id='navbar_logo'>
            {/* <Link to="/"><img id='logo' src={chef} alt="logo"/></Link>  */}
                <div id='name'>What the Chef</div>
            </div>
            <div id='navbar_links'>
                <ul id='ul'>
                    <li id='item1'><Link style={{textDecoration: 'none', textColor: "rgba(157,47,47)"}} to="/"><h4 className='linkText'>Home</h4></Link></li>
                    <li id='item3'><Link style={{textDecoration: 'none', textColor: "rgba(157,47,47)"}} to='/recipe/new'><h4 className='linkText'>Add A Recipe</h4></Link></li>
                </ul>
               
            </div>
        </div>
    )
}

export default NavBar