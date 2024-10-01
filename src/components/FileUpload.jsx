import React, { useRef } from 'react'

export default function FileUpload({
    name='',
    onChange=()=>{},

    widthClass='w-full',
    textClasses='text-center text-xs',
}) {

    const inpRef = useRef();

    return (
        <div 
            className={`flex relative ${widthClass} bg-blue-50 flex justify-center items-center px-1`}
        > 
            <input 
                type="file" 
                ref={inpRef}
                className='hidden' 
                onChange={(e) => onChange && onChange(e)}
            />
            <input 
                className={`text-black bg-white border border-gray-800 rounded-sm ${textClasses} w-full`} 
                value={name.length > 20? name.slice(0, 20) + '...' : name}
                onClick={() => inpRef?.current?.click()}
                disabled
            />
            <div className='w-full h-full absolute z-1 cursor-pointer' onClick={() => inpRef?.current?.click()} /> 
        </div> 
    )
}
