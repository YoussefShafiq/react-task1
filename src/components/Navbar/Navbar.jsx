import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

export default function Navbar() {

    const [toggleNav, setToggleNav] = useState(false)
    function navtoggle() {
        setToggleNav(!toggleNav)
        console.log(toggleNav);
    }

    return <>
        <nav className={`bg-sky-950 top-0 inset-x-0 md:py-2 text-center capitalize fixed z-20`}>
            <div className="container m-auto flex flex-col md:flex-row justify-between items-center text-sky-50">
                <div className='flex justify-between items-center space-x-52'>
                    <h1>LOGO</h1>
                    <button onClick={() => { navtoggle() }} className='md:hidden'>
                        <i className="fa-solid fa-bars text-3xl p-2"></i>
                    </button>
                </div>
                <ul className={`md:flex flex-col md:flex-row space-x-2 ${toggleNav ? 'flex' : 'hidden'}`}>
                    <NavLink to="/about" className="navItem md:mx-2" onClick={() => { navtoggle() }}>
                        about
                    </NavLink>
                    <NavLink to="/portfolio" className="navItem md:mx-2 " onClick={() => { navtoggle() }}>
                        portfolio
                    </NavLink>
                    <NavLink to="/contact" className="navItem md:mx-2 " onClick={() => { navtoggle() }}>
                        contact
                    </NavLink>
                </ul>
            </div>
        </nav >

    </>

}
