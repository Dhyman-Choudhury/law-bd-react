import React from 'react';
import Navbar from '../../components/Navbar/Navbar';
import Banner from '../../components/Banner/Banner';
import CountCard from '../../components/CountCard/CountCard';
import { useLoaderData } from 'react-router';
import Lawyers from '../Lawyers/Lawyers';

const Home = () => {
    const data = useLoaderData();
    
    return (
        <div className='min-h-[calc(100vh-280px)]'>
            <Banner></Banner>
            <Lawyers data={data}></Lawyers>
            <CountCard></CountCard>
        </div>
    );
};

export default Home;