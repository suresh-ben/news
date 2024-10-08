import React, { useEffect } from 'react'
import { Document, Page, View, Font } from '@react-pdf/renderer'

import BoxManager from './BoxManager'

import { FONTS } from '../../../../config/constants'
import FontFamilies from '../../../../assets/fonts' 

export default function Index({ pdfContent, assets }) {

    useEffect(() => {
        Object.keys(FontFamilies).map(fontName => {
            const fonts = FontFamilies[fontName];
            Font.register({
                family: fontName,
                fonts: fonts
            })
        })
    }, [FONTS]);

    const viewer = document.getElementById('paper-viewer');
    const caculatePageDimentions = (pageHeight, pageWidth) => {
        const viwerHeight = viewer?.clientHeight;
        const viwerWidth = viewer?.clientWidth;

        const pageRatio = pageWidth / pageHeight;
        const viwerRatio = viewer?.clientWidth / viwerHeight;

        return {
            height: pageRatio == 1? Math.min(viwerHeight, viwerWidth) : (pageRatio < viwerRatio? viwerHeight : viwerWidth / pageRatio),
            width: pageRatio == 1? Math.min(viwerHeight, viwerWidth) : (pageRatio < viwerRatio? viwerHeight * pageRatio : viwerWidth)
        }
    }

    return (
        <Document>
            {
                Object.keys(pdfContent).map(pageNum => {
                    const pageSize = caculatePageDimentions(pdfContent[pageNum][0].pageHeight, pdfContent[pageNum][0].pageWidth);

                    return (
                        <Page 
                            size={{ width: pageSize.width, height: pageSize.height }}
                            style={{ backgroundColor: 'white'}} 
                            key={pageNum}
                        >
                            <View
                                style={{
                                    height: '100%',
                                    width: '100%',
                                }}
                            >
                                <BoxManager boxes={pdfContent[pageNum]} indexes={[]} parentHeight={pageSize.height} parentWidth={pageSize.width} assets={assets} />
                            </View>
                        </Page>
                    )
                })
            }
        </Document>
    )
}
