import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function Navbar({isAccountPage}) {

    const navigate = useNavigate();

    return (
        <div className='h-[3.5rem]'>
            <div className='h-[3.5rem]' />
            <div className='w-full h-[3.5rem] flex justify-between items-center fixed top-0 left-0 bg-white border-b'>
                <div>
                    <p 
                        className='text-xl font-semibold mx-5 cursor-pointer'
                        onClick={() => navigate('/')}
                    >
                        DESIGNER
                    </p>
                </div>
        
                {
                    !isAccountPage && <div className='bg-blue-700 border border-white shadow-sm shadow-black h-[80%] mx-5 aspect-square rounded-full flex justify-center items-center cursor-pointer'
                        onClick={() => navigate('/')}
                    >
                        <p className='text-xl text-white font-semibold'>U</p>
                    </div>
                }
            </div>
        </div>
    )
}
