import React from 'react'

export default function Input({
    type='',
    value='',
    onChange=() => {},

    widthClass='w-full',
    textAlignClass='text-left',
    additionalClasses=''
}) {
    return (
        <input 
            type={type}
            value={value}
            onChange={e => onChange && onChange(e)}
            className={`text-black rounded-sm border border-white shadow-sm shadow-black bg-blue-50 ${widthClass} ${textAlignClass} ${additionalClasses}`}
        />
    )
}
