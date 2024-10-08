import { useState, useEffect } from 'react'
import Editor from './Editor'
import Viewer from './Viewer'
import Navbar from '../../../../components/Navbar';

export default function PageEditor({ pdfContent, pageNum, setPdfContent, addPage, defaultPageContent=[{}] }) {

    const [pageSize, setPageSize] = useState({ width: defaultPageContent[0].pageWidth, height: defaultPageContent[0].pageHeight });
    const [pageContent, setPageContent] = useState(defaultPageContent);
    const [selectedBoxIndexes, setSelectedBoxIndexes] = useState([]);

    useEffect(() => {
        setPageSize({ width: defaultPageContent[0].pageWidth, height: defaultPageContent[0].pageHeight })
        setPageContent(defaultPageContent);
        setSelectedBoxIndexes([]);
    }, [pageNum])

    useEffect(() => {
        const newPageContent = [{
            ...pageContent[0],
            pageHeight: pageSize.height,
            pageWidth: pageSize.width,
        }]
        setPdfContent(pdfContent => {
            return {
                ...pdfContent,
                [pageNum]: newPageContent
            }
        })
    }, [pageContent, pageSize])

    return (
        <div className='h-full w-full flex flex-col'>
            <Navbar />
            <div className='flex-1 w-full flex'>
                <Viewer pageSize={pageSize} pageContent={pageContent} selectedBoxIndexes={selectedBoxIndexes} setSelectedBoxIndexes={setSelectedBoxIndexes} />
                <Editor pdfContent={pdfContent} addPage={addPage} setPageSize={setPageSize} pageContent={pageContent} setPageContent={setPageContent} selectedBoxIndexes={selectedBoxIndexes} setSelectedBoxIndexes={setSelectedBoxIndexes} />
            </div>
        </div>
    )
}