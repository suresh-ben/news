import React from 'react'
import Input from '../../../components/Input'

export default function Auth() {
    return (
        <div className='w-[35%] h-full bg-blue-50 flex flex-col justify-center items-center'>
            <p className='text-3xl font-semibold w-[80%] mb-10'>SignUp / Login</p>
            
            <Input 
                placeholder='User name'
                widthClass='w-[80%]'
                additionalClasses='h-[3rem] px-2 border mb-4'
                borderRadiusClass='rounded-md'
                bgColorClass='bg-white'
                shadowClasses=''
                borderClasses='border'
            />
            <Input 
                placeholder='Password'
                widthClass='w-[80%]'
                additionalClasses='h-[3rem] px-2 border mb-4'
                borderRadiusClass='rounded-md'
                bgColorClass='bg-white'
                shadowClasses=''
                borderClasses='border'
            />
      
            <button className='w-[80%] mt-5 bg-blue-600 text-white h-[3rem] rounded-md'>
                SignUp
            </button>
        </div>
    ) 
}
