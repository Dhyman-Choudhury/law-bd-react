import React from 'react';
import logo from '../../assets/logo.png'
import { NavLink } from 'react-router';
const Navbar = () => {
    return (
        <div>
            
            <div className="navbar border border-gray-300 px-20">

                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                            <li><NavLink className={({ isActive }) => isActive ? 'bg-green-300 text-white' : ''} to='/'>Home</NavLink></li>
                            <li><NavLink className={({ isActive }) => isActive ? 'bg-green-300 text-white' : ''} to='/bookings'>Bookings</NavLink></li>
                            <li><NavLink className={({ isActive }) => isActive ? 'bg-green-300 text-white' : ''} to='/blogs'>Blogs</NavLink></li>
                            <li><NavLink className={({ isActive }) => isActive ? 'bg-green-300 text-white' : ''} to='/contact'>Contact</NavLink></li>
                        </ul>
                    </div>
                    <div className='flex  items-center gap-2'>
                        <img className='w-8' src={logo} alt="Logo" />
                        <NavLink to='/' className=" text-xl font-bold">Law.BD</NavLink>
                    </div>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 space-x-3">
                        <li><NavLink className={({ isActive }) => isActive ? 'bg-green-400 text-white' : ''} to='/'>Home</NavLink></li>
                        <li><NavLink className={({ isActive }) => isActive ? 'bg-green-400 text-white' : ''} to='/bookings'>Bookings</NavLink></li>
                        <li><NavLink className={({ isActive }) => isActive ? 'bg-green-400 text-white' : ''} to='/blogs'>Blogs</NavLink></li>
                        <li><NavLink className={({ isActive }) => isActive ? 'bg-green-400 text-white' : ''} to='/contact'>Contact</NavLink></li>
                    </ul>
                </div>
                <div className="navbar-end">

                    <NavLink className="btn rounded-full bg-green-700 text-white">Contact Now</NavLink>
                </div>
            </div>
        </div>


    );
};

export default Navbar;