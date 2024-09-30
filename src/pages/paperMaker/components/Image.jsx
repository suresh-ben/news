import React from 'react'
import useAssets from '../../../hooks/useAssets';

export default function Image({ image }) {

    const { assets } = useAssets();
    console.log(image?.radius)

    return (
        <img 
            src={assets[image?.image] ? URL.createObjectURL(assets[image?.image]) : ''} 
            alt="user-input" 
            className='h-full w-full'
            style={{
                objectFit: 'fill',
                opacity: image?.opacity,
                borderRadius: `${image?.radius || 0}%`,
                borderColor: image?.borderColor,
                borderWidth: `${image?.borderWidth}px`,
                backgroundColor: `${image?.backgroundColor}`
            }}
        />
    )
}
