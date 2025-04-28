import React from 'react';
import logo from '../../assets/logo-footer.png'
import { NavLink } from 'react-router';
import { FaFacebook, FaInstagramSquare, FaLinkedin, FaYoutube } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="footer footer-horizontal footer-center bg-gray-900  p-5">
            <aside>
                <div className="grid grid-flow-col gap-4">
                    <div className='flex  items-center gap-2'>
                        <img className='w-8' src={logo} alt="Logo" />
                        <NavLink to='/' className=" text-xl font-bold text-white">Law.BD</NavLink>
                    </div>
                </div>
                <div className="navbar-center  flex">
                    <ul className="menu menu-horizontal px-1 space-x-3">
                        <li><NavLink className= {({ isActive }) => isActive ? 'bg-green-400 text-white' : 'bg-white text-gray-600'} to='/'>Home</NavLink></li>
                        <li><NavLink className={({ isActive }) => isActive ? 'bg-green-400 text-white' : 'bg-white text-gray-600'} to='/bookings'>Bookings</NavLink></li>
                        <li><NavLink className={({ isActive }) => isActive ? 'bg-green-400 text-white' : 'bg-white text-gray-600'} to='/blogs'>Blogs</NavLink></li>
                        <li><NavLink className={({ isActive }) => isActive ? 'bg-green-400 text-white' : 'bg-white text-gray-600'} to='/contact'>Contact</NavLink></li>
                    </ul>
                </div>
            </aside>
            <hr className='w-[70%] mx-auto border-gray-400' />
            <nav className='flex gap-5'>
                <a
                    href="https://www.facebook.com"
                    target="_blank"
                    className="text-blue-600 bg-white"
                >
                    <FaFacebook size={30} />
                </a>
                <a
                    href='https://www.linkedin.com'
                    target='_blank'
                    className="text-blue-600 bg-white"
                ><FaLinkedin size={30} /></a>

                <a
                    href='https://www.instagram.com/accounts/login/?hl=en'
                    target='_blank'

                    className='text-pink-600 bg-white'>
                    <FaInstagramSquare size={30} />
                </a>
                <a
                    href='https://www.youtube.com/'
                    target='_blank'
                    className='text-red-600 bg-white'>
                    <FaYoutube size={30} />
                </a>
            </nav>
        </footer>
    );
};

export default Footer;