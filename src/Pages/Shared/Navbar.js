import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/images/logo.png'

const Navbar = () => {
    const menuItem = <>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/products'>Products</Link></li>
        <li><Link to='/reviews'>Reviews</Link></li>
        <li><Link to='/blogs'>Blogs</Link></li>
        <li><Link to='/login'>Log In</Link></li></>
    return (
        <div class="navbar bg-base-100 text-xl font-bold text-#555555 ">
            <div class="navbar-start">
                <div class="dropdown">
                    <label tabindex="0" class="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabindex="0" class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box  w-52">
                        {menuItem}
                    </ul>
                </div>
                <div class="ml-8"><a class="btn btn-ghost normal-case text-xl text-cyan-400">
                    <img src={logo} /></a></div>
            </div>
            <div class="navbar-center hidden lg:flex">
                <ul class="menu menu-horizontal p-0">
                    {menuItem}
                </ul>
            </div>
        </div>
    );
};

export default Navbar;