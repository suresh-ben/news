import React from 'react'
import { useNavigate } from 'react-router-dom';

import arrow from '../../../assets/arrow.png';

//to get work object
export default function Project({ heading, description }) {

    const navigate = useNavigate();
    return (
        <div 
            className='my-2 border p-5 rounded-md flex gap-4 cursor-pointer'
            onClick={() => navigate('/work-space')}
        >
            <div className='flex justify-center items-center '>
                <div className='w-[3.5rem] h-[3.5rem] flex justify-center items-center bg-blue-50 rounded-sm'>
        
                </div>
            </div>
            <div className='flex-1 flex justify-between'>
                <div>
                    <p className='text-lg font-medium mb-2'>{heading}</p>
                    <p>{description}</p>
                </div>
        
                <div className='flex justify-center items-center'>
                    <img src={arrow} alt="" className='object-contain h-[1.25rem]' />
                </div>
            </div>
        </div>
    )
}
