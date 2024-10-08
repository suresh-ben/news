import React, { useEffect, useRef, useState } from 'react'
import BoxManager from './page-editor/BoxManager';


export default function Viewer({ pageContent, selectedPageNum, selectedBoxIndexes, setSelectedBoxIndexes, pageNum, setSelectedPageNum }) {

    const [viwerHeight, setViewerHeight] = useState();
    const [viwerWidth, setViewerWidth] = useState();

    const [pageRatio, setPageRatio] = useState();
    const [viwerRatio, setViewerRatio] = useState();

    useEffect(() => {
        setViewerHeight(document.getElementById('paper')?.clientHeight);
        setViewerWidth(document.getElementById('paper')?.clientWidth); 

        setPageRatio(pageContent[0]?.pageWidth / pageContent[0]?.pageHeight);
        setViewerRatio(document.getElementById('paper')?.clientWidth / document.getElementById('paper')?.clientHeight);
    }, [document.getElementById('paper'), pageContent[0]?.pageWidth, pageContent[0]?.pageHeight]);

    const myself = useRef(null);
    return (
        <div className={`w-full h-full relative`}
            ref={myself}
            style={{
                height: myself.current?.clientWidth / pageRatio
            }}
        >
            <div 
                className='absolute w-full h-full z-50 cursor-pointer' 
                onClick={() => setSelectedPageNum(pageNum)}
            />
            <div className='w-full h-full flex flex-col justify-center items-center p-0 gap-5 overflow-y-scroll'>
                <div className='bg-white flex justify-center items-center'
                    id='page-selctor'
                    style={{
                        height: pageRatio == 1? Math.min(viwerHeight, viwerWidth) :
                            (pageRatio < viwerRatio? viwerHeight :
                            viwerWidth / pageRatio),
                        minHeight : pageRatio == 1? Math.min(viwerHeight, viwerWidth) :
                            (pageRatio < viwerRatio? viwerHeight :
                            viwerWidth / pageRatio),
                        width: pageRatio == 1? Math.min(viwerHeight, viwerWidth) :
                            (pageRatio < viwerRatio? viwerHeight * pageRatio :
                            viwerWidth),
                    }}
                >
                    <div className='w-full h-full'
                        style={{
                            transform: `scale(${myself.current?.clientWidth / (pageRatio == 1? Math.min(viwerHeight, viwerWidth) :
                                (pageRatio < viwerRatio? viwerHeight * pageRatio :
                                viwerWidth))})`
                        }}
                    >
                        <BoxManager boxes={pageContent} indexes={[]} selectedBoxIndexes={selectedBoxIndexes} setSelectedBoxIndexes={setSelectedBoxIndexes} />
                    </div>
                </div>
            </div>
        </div>
    )
}