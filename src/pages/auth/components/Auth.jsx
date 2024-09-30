import React from 'react'

export default function Auth() {
  return (
    <div className='w-[35%] h-full bg-blue-50 flex flex-col justify-center items-center'>
        <p className='text-3xl font-semibold w-[80%] mb-10'>SignUp / Login</p>

        <input type="text" className='w-[80%] h-[3rem] px-2 border rounded-md mb-4' placeholder='User name' />
        <input type="text" className='w-[80%] h-[3rem] px-2 border rounded-md mb-4' placeholder='Password' />

        <button className='w-[80%] mt-5 bg-blue-600 text-white h-[3rem] rounded-md'>
            SignUp
        </button>
    </div>
  )
}
