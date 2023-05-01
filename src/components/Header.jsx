import React, { useState } from 'react';
import logo from '../images/genxsmedia-01-01.svg'
import {AiOutlineMenu, AiOutlineClose} from "react-icons/ai"
const Header = () => {
    const [toggle, setToggle]=useState(false);
    return (
        <div className='shadow-md p-4 sticky top-0 z-40 w-full backdrop-blur bg-white/75 supports-backdrop-blur:bg-white/60'>
            <div className="max-w-[1240px] mx-auto flex justify-between items-center">
                <div className="logo-area text-2xl"><img className='w-[150px] md:w-[200px]' src={logo} alt="Genxsmedia"/></div>
                {
                    toggle ?
                    <AiOutlineClose onClick={()=> setToggle(!toggle)} className='text-blue text-2xl md:hidden block'/> 
                    :
                    <AiOutlineMenu onClick={()=>setToggle(!toggle)} className='text-blue text-2xl md:hidden block'/>   
                }   
                    <ul className="menu-area hidden md:flex gap-4 text-transform: uppercase">
                        <li>Home</li>
                        <li>Portfolio</li>
                        <li>About Me</li>
                        <li>contact</li>
                    </ul>
                {/*Responsive menu*/}
                <ul className = {`duration-300 menu-area p-5 text-white md:hidden fixed top-[88px] bg-black w-full
                            ${toggle ? 'left-[0]' : 'left-[-100%]'}
                `}>
                        <li>Home</li>
                        <li>Portfolio</li>
                        <li>About Me</li>
                        <li>contact</li>
                    </ul>
            </div>
            
        </div>
    );
}

export default Header;
