import React, { useEffect } from 'react'
import WebFont from 'webfontloader';

import { FONTS } from '../../../../../config/constants';

export default function Text({ content }) {

    useEffect(() => {
        WebFont.load({
          google: {
            families: [content.font || FONTS['Noto Sans Telugu']],
            api: `https://fonts.googleapis.com/css2?family=${(content.font || FONTS['Noto Sans Telugu']).replace(' ', '+')}:ital,wght@0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap`
          },
        });
    }, [content.font])

    return (
        <p 
            className='w-full'
            style={{
                fontSize: `${content.fontSize || 16}px`,
                fontWeight: `${content.fontWeight || '400'}`,
                fontFamily: `${content.font || FONTS['Noto Sans Telugu']}`,
                backgroundColor: content.backgroundColor,
                color: content.color || 'black',
                textAlign: content.textAlign,
                borderRadius: `${content.radius || 0}%`,
                borderWidth: `${content.borderWidth || 0}px`,
                borderColor: content.borderColor,
                lineHeight: content.lineHeight,
            }}
        >
            {content.text || 'Type something'}
        </p>
    )
}