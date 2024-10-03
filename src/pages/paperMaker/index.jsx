import { useState } from 'react'
import Editor from './components/page-editor/Editor'
import Viewer from './components/page-editor/Viewer'
import Navbar from '../../components/Navbar';

import PDF from './components/pdf/index';
import { PDFViewer } from '@react-pdf/renderer';

export default function Index() {

    const [pageSize, setPageSize] = useState({ width: 210, height: 297 });
    const [pageContent, setPageContent] = useState([{ 
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
    }]);
    const [selectedBoxIndexes, setSelectedBoxIndexes] = useState([]);

    return (
        <>
            <div className='h-full w-full flex flex-col'>
                <Navbar />
                <div className='flex-1 w-full flex'>
                    <Viewer pageSize={pageSize} pageContent={pageContent} selectedBoxIndexes={selectedBoxIndexes} setSelectedBoxIndexes={setSelectedBoxIndexes} />
                    <Editor setPageSize={setPageSize} pageContent={pageContent} setPageContent={setPageContent} selectedBoxIndexes={selectedBoxIndexes} setSelectedBoxIndexes={setSelectedBoxIndexes} />
                </div>
            </div>

            {/* <div className='p-5 h-full flex justify-end items-end'>
                <PDF pageContent={pageContent} pageSize={pageSize} selectedBoxIndexes={selectedBoxIndexes} />
            </div> */}
        </>
    )
}
