import React from 'react';
import bgImage from '../../assets/banner-img-1.png'

const Banner = () => {
    return (
        <div className='h-[60vh] my-10 max-w-10/12 mx-auto rounded-xl bg-center'
        style={{background: `url(${bgImage})`}}>
            <div className='text-center py-30'>
                <h1 className='text-5xl font-bold text-white mb-5'>It avoids subjective claims or <br /> exaggeration that might raise red <br /> flags legally</h1>
                <p className='text-xl text-gray-200'>Our platform connects you with verified, experienced doctors across various specialties — all at your convenience. Whether it's a <br /> routine checkup or urgent consultation, book appointments in minutes and receive quality care you can trust.</p>
            </div>
        </div>
    );
};

export default Banner;