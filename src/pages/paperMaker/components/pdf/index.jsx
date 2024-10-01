import React, { useEffect } from 'react'
import { Document, Page, View } from '@react-pdf/renderer'

import BoxManager from './BoxManager'

export default function Index({ pageContent, assets }) {

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
