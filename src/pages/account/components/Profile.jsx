import React from 'react'
import { useNavigate } from 'react-router-dom';

import arrow from '../../../assets/arrow.png';
import logout from '../../../assets/logout.png';

export default function Profile() {

    const navigate = useNavigate();

    return (
        <div className='flex-1 h-full relative'>
            <div className='bg-blue-50 fixed h-[calc(100%-3.5rem)] w-[35%] top-[3.5rem] right-0 flex flex-col'>
                <div className='flex-1 flex flex-col'>
                    <div 
                        className='h-[3rem] flex items-center border-l px-5 justify-end gap-5'
                        
                    >
                        <div 
                            className='flex gap-3 cursor-pointer items-center'
                            onClick={() => navigate('/auth')}
                        >
                            <p className='font-medium text-blue-500'>Log out</p>
                            <img src={logout} alt="" className='h-[1rem]' />
                        </div>
                    </div>
                    
                    <div className='flex-1 flex flex-col justify-center items-center'>
                        <div className='bg-blue-700 border border-white shadow-sm shadow-black w-[10rem] mx-auto aspect-square rounded-full flex justify-center items-center'>
                            <p className='text-6xl text-white font-semibold'>U</p>
                        </div>

                        <p className='mx-auto text-center mt-2 font-medium text-lg'>User name</p>
                    </div>
                </div>
                <div 
                    className='h-[3rem] flex bg-white items-center border-l border-blue-50 px-5 cursor-pointer justify-between'
                    onClick={() => navigate('/work-space')}
                >
                    <p className='font-medium'>New project</p>
        
                    <img src={arrow} alt="" className='h-[1.5rem]' />
                </div>
            </div>
        </div>
    )
}   
