import React, { useRef } from 'react'
import useAssets from '../../../../hooks/useAssets';

export default function PropertyOptions({ setPageContent, selectedBoxIndexes, selectedBoxOptions }) {

    const inpRef = useRef(null);
    const { assets, setAssets } = useAssets();

    const updateProperty = (property, value) => {
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
            <p className='mb-3 text-xl mt-5'>Properties: </p>
            <div className='text-white flex gap-5'>
                <div className='w-1/2 '>

                    <div className='w-full mb-2 flex'>
                        <p className='w-1/2'>Background color</p>
                        <div className='w-1/2 flex'>
                            <input type="color" 
                                className='w-full text-black text-right' 
                                value={selectedBoxOptions?.height} 
                                onChange={(e) => {
                                    const value = e.target.value;
                                    updateProperty('backgroundColor', value);
                                }}   
                            />
                        </div>
                    </div>

                </div>

                <div className='w-1/2 '>
                    <div className='w-full mb-2 flex'> 
                        <p className='w-1/2'>Background image:</p> 
                        <div className='w-1/2 flex relative'> 
                            <input  
                                type="file" 
                                ref={inpRef}
                                className='hidden' 
                                onChange={(e) => {
                                    const file = e.target.files[0];
                                    if(file) {
                                        const assetKey = Math.floor(Math.random() * 100000);
                                        setAssets({
                                            ...assets,
                                            [assetKey]: file
                                        })
                                        updateProperty('backgroundImage', assetKey);
                                    }
                                 }}   
                             />
                            <input  
                                className='w-full text-black text-xs text-center' 
                                value={assets[selectedBoxOptions?.backgroundImage]?.name || 'Choose an image'}
                                onClick={() => inpRef?.current?.click()}
                                disabled
                             />
                            <div className='w-full h-full absolute z-1 cursor-pointer' onClick={() => inpRef?.current?.click()} /> 
                         </div> 
                    </div> 
                </div>
            </div>
        </>
    )
}


