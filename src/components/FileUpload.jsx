import React, { useRef } from 'react'

export default function FileUpload({
    name='',
    onChange=()=>{},

    widthClass='w-full',
    textClasses='text-center text-xs',
    fileSizeLimit=5,
}) {

    const inpRef = useRef();

    const handleOnChnage = (e) => {
        //Check file limit
        let file = e.target?.files[0];
        const MAX_FILE_SIZE = fileSizeLimit * 1024 * 1024;
        if(file.size > MAX_FILE_SIZE) {
            alert(`File size should be less than ${fileSizeLimit}MB`);
            return;
        }

        onChange && onChange(e)
    }

    return (
        <div 
            className={`flex relative ${widthClass} bg-blue-50 flex justify-center items-center px-1`}
        > 
            <input 
                type="file" 
                ref={inpRef}
                className='hidden' 
                onChange={handleOnChnage}
                accept='.png, .jpg, .jpeg'
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
