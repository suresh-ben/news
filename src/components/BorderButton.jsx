import React from 'react'

export default function BorderButton({
    onClick=() => {},
    label='',

    widthClass='w-full'
}) {
    return (
        <button
            onClick={onClick}
            className={`border border-white rounded-sm shadow-sm shadow-black bg-gray-700 ${widthClass}`}
        >
            {label}
        </button>
    )
}
