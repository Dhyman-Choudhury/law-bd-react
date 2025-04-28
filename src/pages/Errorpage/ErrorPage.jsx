import React from 'react';
import Navbar from '../../components/Navbar/Navbar';
import { NavLink } from 'react-router';
import Footer from '../../components/Footer/Footer';

const ErrorPage = () => {
    return (
        <>
            <Navbar />
            <div className='min-h-[calc(100vh-280px)] bg-[#f4eff6] py-10'>
                <div className='max-w-10/12 mx-auto rounded-xl py-12 text-center space-y-5 bg-white '>
                    <h1 className='text-7xl font-thin text-gray-900'>No Doctor Found</h1>
                    <p className='text-xl text-gray-900'>No Doctor Found with this registration No </p>
                    <NavLink to='/'>
                        <button className='btn bg-green-700 text-white'>View All Lawyers</button>
                    </NavLink>
                </div>
            </div>
                <Footer/>
        </>
    );
};

export default ErrorPage;