import React from 'react'

export default function Input({
    type='',
    value='',
    onChange=() => {},
    disabled=false,
    placeholder='',

    widthClass='w-full',
    textAlignClass='text-left',
    additionalClasses='',
    borderRadiusClass='rounded-sm',
    bgColorClass='bg-blue-50',
    shadowClasses='shadow-sm shadow-black',
    borderClasses='border border-white'
}) {
    return (
        <input 
            placeholder={placeholder}
            type={type}
            value={value}
            disabled={disabled}
            onChange={e => onChange && onChange(e)}
            className={`text-black ${disabled? 'bg-gray-400' : `${bgColorClass}`} ${borderClasses} ${shadowClasses} ${borderRadiusClass} ${widthClass} ${textAlignClass} ${additionalClasses}`}
        />
    )
}
