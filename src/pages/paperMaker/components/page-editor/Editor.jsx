import { useEffect, useState } from "react";
import { PDFDownloadLink } from "@react-pdf/renderer";

import PDF from '../pdf/index'
import useAssets from "../../../../hooks/useAssets";

import PageOptions from "./editor/PageOptions";
import SpacingOptions from "./editor/SpacingOptions";
import SizingOptions from "./editor/SizingOptions";
import HierarchyOptions from "./editor/HierarchyOptions";
import ContentOptions from "./editor/ContentOptions";

import downloadImg from "../../../../assets/download.png";
import saveImg from "../../../../assets/save.png";
import PropertyOptions from "./editor/PropertyOptions";

export default function Editor({
  setPageSize,
  pageContent,
  setPageContent,
  selectedBoxIndexes,
  setSelectedBoxIndexes,
}) {
  const { assets } = useAssets();
  const [selectedBoxOptions, setSelectedBoxOptions] = useState(null);
  useEffect(() => {
    let selectedBox = pageContent[0];
    for (let i = 1; i < selectedBoxIndexes.length; i++) {
      selectedBox = selectedBox.children[selectedBoxIndexes[i]];
    }

    setSelectedBoxOptions(selectedBox);
  });

  return (
    <div className="w-1/2 h-full bg-gray-600 text-white flex flex-col justify-between">
      <div>
        <PageOptions setPageSize={setPageSize} />
        {selectedBoxIndexes && selectedBoxIndexes.length > 0 && (
          <div className="p-4">
            <SpacingOptions
              setPageContent={setPageContent}
              selectedBoxIndexes={selectedBoxIndexes}
              selectedBoxOptions={selectedBoxOptions}
            />
            <SizingOptions
              setPageContent={setPageContent}
              selectedBoxIndexes={selectedBoxIndexes}
              selectedBoxOptions={selectedBoxOptions}
            />
            <HierarchyOptions
              pageContent={pageContent}
              selectedBoxIndexes={selectedBoxIndexes}
              setPageContent={setPageContent}
              setSelectedBoxIndexes={setSelectedBoxIndexes}
              selectedBoxOptions={selectedBoxOptions}
            />
            <PropertyOptions
              setPageContent={setPageContent}
              selectedBoxIndexes={selectedBoxIndexes}
              selectedBoxOptions={selectedBoxOptions}
            />
            <ContentOptions
              pageContent={pageContent}
              setPageContent={setPageContent}
              selectedBoxIndexes={selectedBoxIndexes}
              selectedBoxOptions={selectedBoxOptions}
            />
          </div>
        )}
      </div>

      <div className="flex justify-between items-end m-5 border-t border-white pt-5">
      <PDFDownloadLink document={<PDF pageContent={pageContent} assets={assets} />} fileName="paper.pdf">
        {({ blob, url, loading, error }) => 
          <button className="bg-white flex rounded-md justify-center items-center gap-3 p-3 py-2">
            <p className="text-black font-medium">{loading? 'Loading...' : 'Download'}</p>
            <img src={downloadImg} alt="Add" className="h-[1.1rem]" />
          </button>
        }
      </PDFDownloadLink>
        

        <button className="bg-white flex rounded-md justify-center items-center gap-3 p-3 py-2">
          <p className="text-black font-medium">Save</p>
          <img src={saveImg} alt="Add" className="h-[1.1rem]" />
        </button>
      </div>
    </div>
  );
}
