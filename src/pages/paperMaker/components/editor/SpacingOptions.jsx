import React from 'react'

export default function SpacingOptions({setPageContent, selectedBoxIndexes, selectedBoxOptions}) {

    const updateSpace = (property, value) => {
        setPageContent(pageContent => {
            const temp = JSON.stringify(pageContent);
            const newPageContent = JSON.parse(temp);
        
            let selectedBox = newPageContent[0];
            for(let i = 1; i < selectedBoxIndexes.length; i++) {
                selectedBox = selectedBox.children[selectedBoxIndexes[i]];
            }
            selectedBox[`${property}`] = value;
            return newPageContent;
        })
    }

    return (
        <>
            <p className='mb-3 text-xl'>Spacing: </p>
            <div className='text-white flex gap-5'>
                <div className='w-1/2 '>

                    <div className='w-full mb-2 flex'>
                        <p className='w-1/2'>Margin Right</p>
                        <div className='w-1/2 flex'>
                            <input type="number" 
                                className='w-[75%] text-black text-right' 
                                value={selectedBoxOptions?.marginRight} 
                                onChange={(e) => {
                                    const value = e.target.value;
                                    updateSpace('marginRight', value);
                                }}    
                            />
                            <p className='ml-2 text-gray-500'>px</p>
                        </div>
                    </div>
                    <div className='w-full mb-2 flex'>
                        <p className='w-1/2'>Margin Left</p>
                        <div className='w-1/2 flex'>
                            <input type="number" 
                                className='w-[75%] text-black text-right' 
                                value={selectedBoxOptions?.marginLeft} 
                                onChange={(e) => {
                                    const value = e.target.value;
                                    updateSpace('marginLeft', value);
                                }}    
                            />
                            <p className='ml-2 text-gray-500'>px</p>
                        </div>
                    </div>

                    <div className='w-full mb-2 flex'>
                        <p className='w-1/2'>Margin Top</p>
                        <div className='w-1/2 flex'>
                            <input type="number" 
                                className='w-[75%] text-black text-right' 
                                value={selectedBoxOptions?.marginTop} 
                                onChange={(e) => {
                                    const value = e.target.value;
                                    updateSpace('marginTop', value);
                                }}    
                            />
                            <p className='ml-2 text-gray-500'>px</p>
                        </div>
                    </div>
                    <div className='w-full mb-2 flex'>
                        <p className='w-1/2'>Margin Bottom</p>
                        <div className='w-1/2 flex'>
                            <input type="number" 
                                className='w-[75%] text-black text-right' 
                                value={selectedBoxOptions?.marginBottom} 
                                onChange={(e) => {
                                    const value = e.target.value;
                                    updateSpace('marginBottom', value);
                                }}    
                            />
                            <p className='ml-2 text-gray-500'>px</p>
                        </div>
                    </div>

                </div>

                <div className='w-1/2 '>

                    <div className='w-full mb-2 flex'>
                        <p className='w-1/2'>Padding Right</p>
                        <div className='w-1/2 flex'>
                            <input type="number" 
                                className='w-[75%] text-black text-right' 
                                value={selectedBoxOptions?.paddingRight} 
                                onChange={(e) => {
                                    const value = e.target.value;
                                    updateSpace('paddingRight', value);
                                }}    
                            />
                            <p className='ml-2 text-gray-500'>px</p>
                        </div>
                    </div>
                    <div className='w-full mb-2 flex'>
                        <p className='w-1/2'>Padding Left</p>
                        <div className='w-1/2 flex'>
                            <input type="number" 
                                className='w-[75%] text-black text-right' 
                                value={selectedBoxOptions?.paddingLeft} 
                                onChange={(e) => {
                                    const value = e.target.value;
                                    updateSpace('paddingLeft', value);
                                }}    
                            />
                            <p className='ml-2 text-gray-500'>px</p>
                        </div>
                    </div>

                    <div className='w-full mb-2 flex'>
                        <p className='w-1/2'>Padding Top</p>
                        <div className='w-1/2 flex'>
                            <input type="number" 
                                className='w-[75%] text-black text-right' 
                                value={selectedBoxOptions?.paddingTop} 
                                onChange={(e) => {
                                    const value = e.target.value;
                                    updateSpace('paddingTop', value);
                                }}    
                            />
                            <p className='ml-2 text-gray-500'>px</p>
                        </div>
                    </div>
                    <div className='w-full mb-2 flex'>
                        <p className='w-1/2'>Padding Bottom</p>
                        <div className='w-1/2 flex'>
                            <input type="number" 
                                className='w-[75%] text-black text-right' 
                                value={selectedBoxOptions?.paddingBottom} 
                                onChange={(e) => {
                                    const value = e.target.value;
                                    updateSpace('paddingBottom', value);
                                }}    
                            />
                            <p className='ml-2 text-gray-500'>px</p>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}
