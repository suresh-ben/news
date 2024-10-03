import React, { useEffect } from 'react'
import { Document, Page, View, Font } from '@react-pdf/renderer'

import BoxManager from './BoxManager'

import { FONTS } from '../../../../config/constants'
import FontFamilies from '../../../../assets/fonts' 

export default function Index({ pageContent, assets }) {

    useEffect(() => {
        Object.keys(FontFamilies).map(fontName => {
            const fonts = FontFamilies[fontName];
            Font.register({
                family: fontName,
                fonts: fonts
            })
        })
    }, [FONTS]);

    return (
        <Document>
            <Page 
                size={{ width: document.getElementById('paper')?.clientWidth, height: document.getElementById('paper')?.clientHeight }}
                style={{ backgroundColor: 'white'}} 
            >
                <View
                    style={{
                        height: '100%',
                        width: '100%',
                    }}
                >
                    <BoxManager boxes={pageContent} parentHeight={document.getElementById('paper')?.clientHeight} parentWidth={document.getElementById('paper')?.clientWidth} assets={assets} />
                </View>
            </Page>
        </Document>
    )
}
