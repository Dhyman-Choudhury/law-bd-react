import React from 'react';
import { FaRegRegistered } from 'react-icons/fa';
import { PiTrademarkRegistered } from 'react-icons/pi';

const Lawyer = ({lawyer}) => {
    console.log(lawyer)
   const {image, name, speciality, licenseNo,experience} = lawyer
    return (
        <div className="flex gap-10 bg-base-100 shadow-sm rounded-xl border border-gray-300 p-5">
  <figure className='rounded-xl bg-gray-400 border border-gray-200'>
    <img
     className='w-[200px] rounded-xl h-[250px]'
      src={image}
      alt="Lawyer" />
  </figure>
  <div className="space-y-5">
    <div className='flex gap-3'>
          <button className='btn rounded-full bg-green-50 text-green-400'>Available</button>
          <button className='btn rounded-full bg-blue-50 text-blue-400'>{experience}</button>
    </div>
    <h2 className="text-3xl font-semibold">{name}</h2>
    <p className='text-xl text-gray-500'>{speciality}</p>
    <div className='flex gap-3 items-center'>
    <PiTrademarkRegistered  className=' text-gray-500'  size={22}/>
    <p className='text-xl text-gray-500'>License No: {licenseNo}</p>
    </div>
   
    <div className="card-actions justify-end ">
      <button className="btn min-w-full border-blue-300 rounded-full bg-white text-blue-600">View Details</button>
    </div>
  </div>
</div>
    );
};

export default Lawyer;