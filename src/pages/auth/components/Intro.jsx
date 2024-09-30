import React from 'react'

import introImg from '../../../assets/Intro.jpg';

export default function Intro() {
    return (
        <div className='w-[65%] h-full'>
            <img src={introImg} alt='Intro' className='w-full h-full object-cover' />
        </div>
    )
}
