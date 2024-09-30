import React from 'react'
import Navbar from '../../components/Navbar'
import Works from './components/Works'
import Profile from './components/Profile'

export default function index() {
  return (
    <div className='h-full w-full flex flex-col'>
        <Navbar isAccountPage />

        <div className='w-full flex-1 flex'>
            <Works />
            <Profile />
        </div>
    </div>
  )
}
