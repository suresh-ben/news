import React, { useEffect, useRef, useState } from 'react'
import { TransformWrapper, TransformComponent } from 'react-zoom-pan-pinch';
import BoxManager from './BoxManager';

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

    return (
        <div className='w-1/2 h-full'>
            <div className='bg-blue-50 flex justify-center items-center overflow-scroll bottom-0 fixed w-1/2 h-[calc(100%-3.5rem)]'>
                <TransformWrapper
                    maxScale={10}
                    minScale={0.1}
                    initialScale={1}
                >
                    <TransformComponent wrapperStyle={{ width: '100%', height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }} contentStyle={{ width: '100%', height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                        <div className='w-[95%] h-[95%] flex justify-center items-center p-0'
                            ref={viewer}
                        >
                            <div className='bg-white flex justify-center items-center'
                                id='paper'
                                style={{
                                    height: pageSize == 1? Math.min(viwerHeight, viwerWidth) :
                                        (pageRatio < viwerRatio? viwerHeight :
                                        viwerWidth / pageRatio),
                                    width: pageSize == 1? Math.min(viwerHeight, viwerWidth) :
                                        (pageRatio < viwerRatio? viwerHeight * pageRatio :
                                        viwerWidth)
                                }}
                            >
                                <BoxManager boxes={pageContent} indexes={[]} selectedBoxIndexes={selectedBoxIndexes} setSelectedBoxIndexes={setSelectedBoxIndexes} />
                            </div>
                        </div>
                    </TransformComponent>
                </TransformWrapper>
            </div>
        </div>
    )
}