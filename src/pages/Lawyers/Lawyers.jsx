import React, { useEffect, useState } from 'react';
import Lawyer from '../Lawyer/Lawyer';

const Lawyers = ({data}) => {

    const [showAll, setShowAll] = useState(false)
    const[displayLawyer, setDisplayLawyer] = useState([])

    useEffect(()=>{
        if(showAll){
            setDisplayLawyer(data)
        }
        else{
            setDisplayLawyer(data.slice(0,6))
        }
    },[data, showAll])
    return (
        <div className='mx-auto max-w-10/12 my-10 '>
            <div className='gap-5 grid grid-cols-1 lg:grid-cols-2'>
            {
                displayLawyer.map(lawyer => <Lawyer key={lawyer.id} lawyer={lawyer} ></Lawyer>)
            }
            </div>
           <div className='flex justify-center my-5'>
           <button 
           className='btn bg-green-700 rounded-full px-15 text-white text-xl' 
           onClick={()=>{
            setShowAll(!showAll)
            if(showAll) window.scrollTo(0, 500)
            }}>
            {showAll? 'Show Less':'Show All'}</button>
           </div>
        </div>
        
    );
};

export default Lawyers;