import React from 'react'

export default function SizingOptions({ setPageContent, selectedBoxIndexes, selectedBoxOptions }) {

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
            <p className='mb-3 text-xl mt-5'>Sizing: </p>
            <div className='text-white flex gap-5'>
                <div className='w-1/2 '>

                    <div className='w-full mb-2 flex'>
                        <p className='w-1/2'>Height</p>
                        <div className='w-1/2 flex'>
                            <input type="number" 
                                className='w-[75%] text-black text-right' 
                                value={selectedBoxOptions?.height} 
                                onChange={(e) => {
                                    const value = e.target.value;
                                    updateSpace('height', value);
                                }}   
                                disabled={selectedBoxIndexes.length == 1} 
                            />
                            <p className='ml-2 text-gray-500'>%</p>
                        </div>
                    </div>

                </div>

                <div className='w-1/2 '>

                    <div className='w-full mb-2 flex'>
                        <p className='w-1/2'>Width</p>
                        <div className='w-1/2 flex'>
                            <input type="number" 
                                className='w-[75%] text-black text-right' 
                                value={selectedBoxOptions?.width} 
                                onChange={(e) => {
                                    const value = e.target.value;
                                    updateSpace('width', value);
                                }}    
                                disabled={selectedBoxIndexes.length == 1} 
                            />
                            <p className='ml-2 text-gray-500'>%</p>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}
