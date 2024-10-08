import React, { useState } from 'react'
import PageEditor from "./components/page-editor/PageEditor";

import Viewer from './components/PageSelectorViwer';

export default function Index() {

    const newPageContent = [{ 
        pageHeight: 297,
        pageWidth: 210,
        
        height: '100', 
        width: '100', 
        marginRight: '10', 
        marginLeft: '10', 
        marginTop: '10', 
        marginBottom: '10', 
        paddingRight: '5', 
        paddingLeft: '5', 
        paddingTop: '5', 
        paddingBottom: '5', 
        children: [] 
    }]

    const [selectedPageNum, setSelectedPageNum] = useState(1);
    const [pdfContent, setPdfContent] = useState({ 1: newPageContent });

    const addPage = () => {
        setPdfContent(pdf => {
            return {
                ...pdf,
                [Object.keys(pdfContent).length + 1]: newPageContent
            }
        })
    };

    return (
        <div className='flex h-full w-full'>
            <div className='h-full w-[8rem] '>
                <div className='fixed w-[8rem] h-[calc(100%-3.5rem)] bottom-0 left-0 bg-black overflow-y-auto flex flex-col p-2 top-[3.5rem] gap-2'>
                    {
                        Object.keys(pdfContent).map(pageNum => {
                            return <div className={`border-4 ${(pageNum == selectedPageNum)? 'border-blue-400' : 'border-black'}`} >
                                <Viewer key={pageNum} selectedPageNum={selectedPageNum} pageContent={pdfContent[pageNum]} pageNum={pageNum} setSelectedPageNum={setSelectedPageNum} />
                            </div>
                        })
                    }
                </div>
            </div>  

            <div className='flex-1 h-full'>
                <PageEditor defaultPageContent={pdfContent[selectedPageNum]} pdfContent={pdfContent} setPdfContent={setPdfContent} addPage={addPage} pageNum={selectedPageNum} />
            </div>
        </div>
    )
}
