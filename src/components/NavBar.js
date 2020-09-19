import React from 'react';
import Menu from "./images/bars-solid.svg";
import "./NavBar.css"

export default function Navbar(){
    
    

     
     
    
    
       

    return(
        <header>
            
            <div className='junto-logo'>
                <a href="https://junto.digital">
                    <img src="https://junto.digital/wp-content/uploads/2019/01/logo-junto-main.png"  alt="Junto Logo" title="logo-junto-white" />
                </a>
            </div>
            <nav>
                <div className="menu-item">
                    <ul>
                        <li><span className="home">Home</span></li>
                        <li><span>About Us</span></li>
                        <li><span>Blog</span></li>
                        <li><span>Services</span></li>
                    
                    </ul>
                </div>
                <div className='get-started'>
                    
                        <span>Get started</span>
                    
                    <div className="green-arrow">
                        <img src="https://junto.digital/wp-content/themes/junto/assets/img/arrow-green.svg" alt=""
                        width='26'
                        height='22'
                        />
                    </div>                     
                </div>
            </nav>
            <div className='menu'>
                <img src={Menu} alt='' width='30' />
            </div>

            
        </header>
        
    )
}