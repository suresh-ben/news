import React from 'react'
import Navbar from '../../components/Navbar'
import Intro from './components/Intro'
import Auth from './components/Auth'

export default function Index() {
    return (
        <div className='h-full w-full flex flex-col'>
            <Navbar isAccountPage />
            <div className='h-[calc(100%-3.5rem)] flex'>
                <Intro />
                <Auth />
            </div>
        </div>
    )
}
