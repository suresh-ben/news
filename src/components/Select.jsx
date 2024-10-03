import React from 'react'

export default function Select({
    options=[],
    value='',
    onChange=()=>{},
    borderClasses='rounded-sm border border-white',
    widthClass='w-full',
    otherClasses=''
}) {
  return (
    <select
        value={value}
        onChange={(e) => onChange && onChange(e)}
        className={`bg-blue-50 text-black shadow-sm shadow-black ${widthClass} ${borderClasses} ${otherClasses}`}
    >
        {
            options?.map((option, ind) => {
                return <option key={ind} value={option.value}>{option.name}</option>
            })
        }
    </select>
  )
}
