import React from 'react'

export default function Text({ content }) {
    return (
        <p 
            className='w-full'
            style={{
                fontSize: `${content.fontSize || 1}rem`,
                backgroundColor: content.backgroundColor,
                color: content.color || 'black',
                textAlign: content.textAlign,
                borderRadius: `${content.radius || 0}%`,
                borderWidth: `${content.borderWidth || 0}px`,
                borderColor: content.borderColor,
                lineHeight: content.lineHeight
            }}
        >
            {content.text || 'Type something'}
        </p>
    )
}