import React, { useEffect, useRef, useState } from 'react'
import { TransformWrapper, TransformComponent } from 'react-zoom-pan-pinch';
import BoxManager from './BoxManager';

import zoomIn from '../../../../assets/images/zoomIn.png';
import zoomOut from '../../../../assets/images/zoomOut.png';

export default function Viewer({ pageSize, pageContent, selectedBoxIndexes, setSelectedBoxIndexes }) {

    const viewer = useRef();
    const [viwerHeight, setViewerHeight] = useState();
    const [viwerWidth, setViewerWidth] = useState();

    const [pageRatio, setPageRatio] = useState();
    const [viwerRatio, setViewerRatio] = useState();

    useEffect(() => {
        setViewerHeight(viewer.current?.clientHeight);
        setViewerWidth(viewer.current?.clientWidth);

        setPageRatio(pageSize?.width / pageSize?.height);
        setViewerRatio(viewer.current?.clientWidth / viewer.current?.clientHeight);
    }, [viewer.current, pageSize]);

    const transformWrapperRef = useRef(null);
    return (
        <div className='w-1/2 h-full'>
            <div className='bg-gray-300 flex justify-center items-center overflow-scroll bottom-0 fixed w-[calc((100%-8rem)/2)] left-[8rem] h-[calc(100%-3.5rem)]'>
                <TransformWrapper
                    maxScale={10}
                    minScale={0.1}
                    initialScale={1}
                    // wheel={{ disabled: true }}
                    ref={transformWrapperRef}
                >
                    <TransformComponent wrapperStyle={{ width: '100%', height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }} contentStyle={{ width: '100%', height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                        <div className='w-[95%] h-[95%] flex flex-col justify-center items-center p-0 gap-5 overflow-y-scroll'
                            ref={viewer}
                            id='paper-viewer'
                        >
                            <div className='bg-white flex justify-center items-center'
                                id='paper'
                                style={{
                                    height: pageRatio == 1? Math.min(viwerHeight, viwerWidth) :
                                        (pageRatio < viwerRatio? viwerHeight :
                                        viwerWidth / pageRatio),
                                    minHeight : pageRatio == 1? Math.min(viwerHeight, viwerWidth) :
                                        (pageRatio < viwerRatio? viwerHeight :
                                        viwerWidth / pageRatio),
                                    width: pageRatio == 1? Math.min(viwerHeight, viwerWidth) :
                                        (pageRatio < viwerRatio? viwerHeight * pageRatio :
                                        viwerWidth)
                                }}
                            >
                                <BoxManager boxes={pageContent} indexes={[]} selectedBoxIndexes={selectedBoxIndexes} setSelectedBoxIndexes={setSelectedBoxIndexes} />
                            </div>
                        </div>
                    </TransformComponent>
                </TransformWrapper>

                <button className='shadow-sm shadow-black bg-white h-[2.5rem] aspect-square absolute right-5 bottom-[4.3rem] border border-black rounded'
                    onClick={() => transformWrapperRef.current?.zoomOut(0.1)}
                >
                    <img src={zoomOut} className='p-2' />
                </button>

                <button className='shadow-sm shadow-black bg-white h-[2.5rem] aspect-square absolute right-5 bottom-5 border border-black rounded'
                    onClick={() => transformWrapperRef.current?.zoomIn(0.1)}
                >
                    <img src={zoomIn} className='p-2' />
                </button>
            </div>
        </div>
    )
}