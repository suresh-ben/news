import React from "react";

import Input from "../../../../../components/Input";

export default function FloatingOptions({
  setPageContent,
  selectedBoxIndexes,
  selectedBoxOptions,
}) {
  const updateSpace = (property, value) => {
    setPageContent((pageContent) => {
      const temp = JSON.stringify(pageContent);
      const newPageContent = JSON.parse(temp);

      let selectedBox = newPageContent[0];
      for (let i = 1; i < selectedBoxIndexes.length; i++) {
        selectedBox = selectedBox.children[selectedBoxIndexes[i]];
      }
      selectedBox[`${property}`] = value;
      return newPageContent;
    });
  };

  return (
    <>
      <p className="mb-3 text-xl">Floating options: </p>
      <div className="text-white flex gap-5">
        <div className="w-1/2 ">
          <div className="w-full mb-2 flex">
            <p className="w-1/2">Top</p>
            <div className="w-1/2 flex">
              <Input
                type="number"
                value={parseFloat(selectedBoxOptions?.top)}
                onChange={(e) => {
                  const value = e.target.value;
                  updateSpace("top", value || 0);
                }}
                textAlignClass="text-right"
                widthClass="w-[75%]"
                additionalClasses=""
              />
              <p className="ml-2 text-gray-500">px</p>
            </div>
          </div>
        </div>

        <div className="w-1/2 ">
          <div className="w-full mb-2 flex">
            <p className="w-1/2">Left</p>
            <div className="w-1/2 flex">
              <Input
                type="number"
                value={parseFloat(selectedBoxOptions?.left)}
                onChange={(e) => {
                  const value = e.target.value;
                  updateSpace("left", value || 0);
                }}
                textAlignClass="text-right"
                widthClass="w-[75%]"
                additionalClasses=""
              />
              <p className="ml-2 text-gray-500">px</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
