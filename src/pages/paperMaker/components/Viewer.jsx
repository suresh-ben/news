import React, { useEffect, useRef, useState } from 'react'
import Box from './Box';
import BoxManager from './BoxManager';

export default function Viewer({ pageSize, pageContent, selectedBoxIndexes, setSelectedBoxIndexes }) {

    const viewer = useRef();
    const [viwerHeight, setHeight] = useState(viewer.current?.clientHeight - 50);
    const [viwerWidth, setWidth] = useState(viewer.current?.clientWidth - 50);
    useEffect(() => {
        setHeight(viewer.current?.clientHeight - 50);
        setWidth(viewer.current?.clientWidth - 50);
    }, [viewer.current, pageSize])

    const [scale, setScale] = useState(1);
    const handleZoom = (e) => {
        e.preventDefault();
        const delta = e.deltaY > 0 ? -0.01 : 0.01; // Zoom in or out
        setScale((prevScale) => Math.max(prevScale + delta, 0)); // Limit zoom scale between 0.5x and 3x
    }

    return (
        <div className='w-1/2 h-full'>
            <div className='bg-blue-50 flex justify-center items-center overflow-scroll fixed w-1/2 h-[calc(100%-3.5rem)] bottom-0'
                ref={viewer}
                onWheel={handleZoom}
            >
                <div className='bg-white border flex justify-center items-center' 
                    style={{
                        transform: `scale(${scale})`,
                        height: (pageSize?.height > pageSize?.width)? viwerHeight : ((pageSize.height / pageSize.width) * viwerWidth),
                        width: (pageSize?.width > pageSize?.height)? viwerWidth : ((pageSize.width / pageSize.height) * viwerHeight)
                    }}
                >
                    <BoxManager boxes={pageContent} indexes={[]} selectedBoxIndexes={selectedBoxIndexes} setSelectedBoxIndexes={setSelectedBoxIndexes} />
                </div>
            </div>
        </div>
    )
}
