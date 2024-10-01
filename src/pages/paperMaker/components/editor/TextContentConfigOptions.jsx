import React, { useRef } from 'react'

import useAssets from '../../../../hooks/useAssets';

import Input from '../../../../components/Input';

import textCenter from '../../../../assets/text-center.png';
import textJusticy from '../../../../assets/text-justify.png';
import textLeft from '../../../../assets/text-left.png';
import textRight from '../../../../assets/text-right.png';
import boldTextCenter from '../../../../assets/bold-text-center.png';
import boldTextJusticy from '../../../../assets/bold-text-justify.png';
import boldTextLeft from '../../../../assets/bold-text-left.png';
import boldTextRight from '../../../../assets/bold-text-right.png';

import { TEXT_ALIGN_TYPES } from '../../../../config/constants';

export default function TextContentConfigOptions({ pageContent, setPageContent, selectedBoxIndexes, selectedBoxOptions }) {

    const { assets, setAssets } = useAssets();

    const updateContentType = (property, value) => {
        setPageContent(pageContent => {
            const temp = JSON.stringify(pageContent);
            const newPageContent = JSON.parse(temp);
        
            let selectedBox = newPageContent[0];
            for(let i = 1; i < selectedBoxIndexes.length; i++) {
                selectedBox = selectedBox.children[selectedBoxIndexes[i]];
            }

            const content = selectedBox.content || {};
            selectedBox.content = {
                ...content,
                [property]: value
            }

            return newPageContent;
        })
    }

    return (
        <>
            <div className='flex mt-5 gap-5'>
                <div className='w-1/2 '>
                    <div className='w-full mb-2 flex'>
                        <p className='w-1/2'>Font:</p>
                        <div className='w-1/2 flex'>
                            <select name="" id=""
                                className='w-full text-black text-right'
                                onChange={(e) => {
                                    const value = e.target.value;
                                }}   
                            >
                                <option value="">Extra thin</option>
                                <option value="">Thin</option>
                                <option value="">Normal</option>
                                <option value="">Semi bold</option>
                                <option value="">Bold</option>
                            </select>
                        </div>
                    </div>

                    <div className='w-full mb-2 flex'>
                        <p className='w-1/2'>Font size:</p>
                        <div className='w-1/2 flex'>
                            <Input 
                                type='number'
                                widthClass='w-[75%]'
                                textAlignClass='text-right'
                                value={parseFloat(selectedBoxOptions.content?.fontSize == undefined? 1 : selectedBoxOptions.content?.fontSize)}
                                onChange={(e) => {
                                    const value = e.target.value;
                                    updateContentType('fontSize', value == ''? '00' : value);
                                }}  
                            />
                            <p className='ml-2 text-gray-500'>rem</p>
                        </div>
                    </div>

                    <div className='w-full mb-2 flex'>
                        <p className='w-1/2'>Background color:</p>
                        <div className='w-1/2 flex'>
                            <Input 
                                type='color'
                                value={selectedBoxOptions.content?.backgroundColor || '#ffffff'}
                                onChange={(e) => {
                                    const value = e.target.value;
                                    updateContentType('backgroundColor', value);
                                }}   
                            />
                        </div>
                    </div>

                    <div className='w-full mb-2 flex'>
                        <p className='w-1/2'>Border radius:</p>
                        <div className='w-1/2 flex'>
                            <Input 
                                type='number'
                                widthClass='w-[75%]'
                                textAlignClass='text-right'
                                value={parseFloat(selectedBoxOptions?.content?.radius == undefined? 0 : selectedBoxOptions?.content?.radius)}
                                onChange={(e) => {
                                    const value = e.target.value;
                                    updateContentType('radius', value || 0);
                                }} 
                            />
                            <p className='ml-2 text-gray-500'>%</p>
                        </div>
                    </div>

                    <div className='w-full mb-2 flex'>
                        <p className='w-1/2'>Border width:</p>
                        <div className='w-1/2 flex'>
                            <Input 
                                type='number'
                                widthClass='w-[75%]'
                                textAlignClass='text-right'
                                value={parseFloat(selectedBoxOptions?.content?.borderWidth || 0)}
                                onChange={(e) => {
                                    const value = e.target.value;
                                    updateContentType('borderWidth', value || 0);
                                }}  
                            />
                            <p className='ml-2 text-gray-500'>px</p>
                        </div>
                    </div>
                </div>

                <div className='w-1/2 '>
                    <div className='w-full mb-2 flex'>
                        <p className='w-1/2'>Font weight:</p>
                        <div className='w-1/2 flex'>
                            <select name="" id=""
                                className='w-full text-black text-right'
                                value={selectedBoxOptions.content?.fontWeight || "400"}
                                onChange={(e) => {
                                    const value = e.target.value;
                                    console.log(value);
                                    updateContentType('fontWeight', value == ''? '00' : value);
                                }}   
                            >
                                <option value="100">Hairline</option>
                                <option value="200">Extra Light</option>
                                <option value="300">Light</option>
                                <option value="400">Normal</option>
                                <option value="500">Medium</option>
                                <option value="600">Semi bold</option>
                                <option value="700">Bold</option>
                                <option value="900">Super bold</option>
                            </select>
                        </div>
                    </div>

                    <div className='w-full mb-2 flex'>
                        <p className='w-1/2'>Line spacing:</p>
                        <div className='w-1/2 flex'>
                            <Input 
                                type='number'
                                widthClass='w-[75%]'
                                textAlignClass='text-right'
                                value={parseFloat(selectedBoxOptions.content?.lineHeight == undefined? 1 : selectedBoxOptions.content?.lineHeight)}
                                onChange={(e) => {
                                    const value = e.target.value;
                                    updateContentType('lineHeight', value == ''? '00' : value);
                                }}  
                            />
                            <p className='ml-2 text-gray-500'>rem</p>
                        </div>
                    </div>

                    <div className='w-full mb-2 flex'>
                        <p className='w-1/2'>Font color:</p>
                        <div className='w-1/2 flex'>
                            <Input 
                                type='color'
                                value={selectedBoxOptions.content?.color || '#ffffff'}
                                onChange={(e) => {
                                    const value = e.target.value;
                                    updateContentType('color', value)
                                }} 
                            />
                        </div>
                    </div>

                    <div className='w-full mb-2 flex'>
                        <p className='w-1/2'>Text alignment:</p>
                        {/* w-[37.5%] */}
                        <div className='w-1/2 flex justify-between'>
                            <button className='' onClick={() => updateContentType('textAlign', TEXT_ALIGN_TYPES.LEFT)}>
                                <img src={(selectedBoxOptions.content?.textAlign === TEXT_ALIGN_TYPES.LEFT || !selectedBoxOptions.content?.textAlign)? boldTextLeft : textLeft} alt="" className='h-[1rem]' />
                            </button>

                            <button className='' onClick={() => updateContentType('textAlign', TEXT_ALIGN_TYPES.CENTER)}>
                                <img src={selectedBoxOptions.content?.textAlign === TEXT_ALIGN_TYPES.CENTER? boldTextCenter : textCenter} alt="" className='h-[1rem]' />
                            </button>

                            <button className='' onClick={() => updateContentType('textAlign', TEXT_ALIGN_TYPES.RIGHT)}>
                                <img src={selectedBoxOptions.content?.textAlign === TEXT_ALIGN_TYPES.RIGHT? boldTextRight : textRight} alt="" className='h-[1rem]' />
                            </button>

                            <button className='' onClick={() => updateContentType('textAlign', TEXT_ALIGN_TYPES.JUSTIFY)}>
                                <img src={selectedBoxOptions.content?.textAlign === TEXT_ALIGN_TYPES.JUSTIFY? boldTextJusticy : textJusticy} alt="" className='h-[1rem]' />
                            </button>
                        </div>
                    </div>

                    <div className='w-full mb-2 flex'>
                        <p className='w-1/2'>Border color:</p>
                        <div className='w-1/2 flex'>
                            <Input 
                                type='color'
                                value={selectedBoxOptions.content?.borderColor || '#ffffff'}
                                onChange={(e) => {
                                    const value = e.target.value;
                                    updateContentType('borderColor', value)
                                }}  
                            />
                        </div>
                    </div>
                </div>
            </div>
            <div className='w-full mb-2 flex'>
                <p className='w-[24.5%]'>Text:</p>
                <div className='flex-1 flex'>
                    <textarea 
                        type="color" 
                        className='w-full text-black min-h-[7rem] bg-blue-50 rounded-sm shadow-black shadow-sm' 
                        value={selectedBoxOptions.content?.text || ''}
                        onChange={(e) => {
                            const value = e.target.value;
                            updateContentType('text', value);
                        }}   
                    />
                </div>
            </div>
        </>
    )
}



{/* <div className='w-full mb-2 flex'> */}
                        {/* <p className='w-1/2'>Opacity:</p> */}
                        {/* <div className='w-1/2 flex'> */}
                            {/* <input type="number"  */}
                                // className='w-[75%] text-black text-right' 
                                // onChange={(e) => {
                                    // const value = e.target.value;
                                // }}   
                            // />
                            {/* <p className='ml-2 text-gray-500'>%</p> */}
                        {/* </div> */}
                    {/* </div> */}