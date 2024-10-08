import React from 'react'
import { Text, StyleSheet } from '@react-pdf/renderer'

import { FONTS } from '../../../../config/constants';

export default function TextRenderer({ content }) {

    const styles = StyleSheet.create({
        text: {
            width: '100%',
            fontSize: `${(content.fontSize || 16)}`,
            fontWeight: `${parseInt(content.fontWeight || '400')}`,
            fontFamily: `${content.font || FONTS['Noto Sans Telugu']}`,
            backgroundColor: content.backgroundColor,
            color: content.color || 'black',
            textAlign: content.textAlign,
            borderRadius: `${content.radius || 0}%`,
            borderWidth: `${content.borderWidth || 0}px`,
            borderColor: content.borderColor,
            lineHeight: content.lineHeight,
        }
    })

    return (
        <Text
            style={styles.text}
        >
            {content.text || 'Type something'}
        </Text>
    )
}