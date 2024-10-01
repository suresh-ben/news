import React from 'react'

import { Text } from '@react-pdf/renderer'

export default function TextRenderer({ content }) {
    return (
        <Text
            style={{
                width: '100%',
                fontSize: `${(content.fontSize || 1)*16}`,
                // fontWeight: `${content.fontWeight || '400'}`,
                // // fontWeight: 'bolder',
                // backgroundColor: content.backgroundColor,
                // color: content.color || 'black',
                // textAlign: content.textAlign,
                // borderRadius: `${content.radius || 0}%`,
                // borderWidth: `${content.borderWidth || 0}px`,
                // borderColor: content.borderColor,
                // lineHeight: content.lineHeight
            }}
        >
            {content.text || 'Type something'}
        </Text>
    )
}