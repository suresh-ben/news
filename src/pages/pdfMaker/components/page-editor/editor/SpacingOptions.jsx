import React from "react";

import Input from "../../../../../components/Input";

export default function SpacingOptions({
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
      <p className="mb-3 text-xl">Spacing: </p>
      <div className="text-white flex gap-5">
        <div className="w-1/2 ">
          <div className="w-full mb-2 flex">
            <p className="w-1/2">Margin Right</p>
            <div className="w-1/2 flex">
              <Input
                type="number"
                value={parseFloat(selectedBoxOptions?.marginRight)}
                onChange={(e) => {
                  const value = e.target.value;
                  updateSpace("marginRight", value || 0);
                }}
                textAlignClass="text-right"
                widthClass="w-[75%]"
                additionalClasses=""
              />
              <p className="ml-2 text-gray-500">px</p>
            </div>
          </div>
          <div className="w-full mb-2 flex">
            <p className="w-1/2">Margin Left</p>
            <div className="w-1/2 flex">
              <Input
                type="number"
                value={parseFloat(selectedBoxOptions?.marginLeft)}
                onChange={(e) => {
                  const value = e.target.value;
                  updateSpace("marginLeft", value || 0);
                }}
                textAlignClass="text-right"
                widthClass="w-[75%]"
                additionalClasses=""
              />
              <p className="ml-2 text-gray-500">px</p>
            </div>
          </div>

          <div className="w-full mb-2 flex">
            <p className="w-1/2">Margin Top</p>
            <div className="w-1/2 flex">
              <Input
                type="number"
                value={parseFloat(selectedBoxOptions?.marginTop)}
                onChange={(e) => {
                  const value = e.target.value;
                  updateSpace("marginTop", value || 0);
                }}
                textAlignClass="text-right"
                widthClass="w-[75%]"
                additionalClasses=""
              />
              <p className="ml-2 text-gray-500">px</p>
            </div>
          </div>
          <div className="w-full mb-2 flex">
            <p className="w-1/2">Margin Bottom</p>
            <div className="w-1/2 flex">
              <Input
                type="number"
                value={parseFloat(selectedBoxOptions?.marginBottom)}
                onChange={(e) => {
                  const value = e.target.value;
                  updateSpace("marginBottom", value || 0);
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
            <p className="w-1/2">Padding Right</p>
            <div className="w-1/2 flex">
              <Input
                type="number"
                value={parseFloat(selectedBoxOptions?.paddingRight)}
                onChange={(e) => {
                  const value = e.target.value;
                  updateSpace("paddingRight", value || 0);
                }}
                textAlignClass="text-right"
                widthClass="w-[75%]"
                additionalClasses=""
              />
              <p className="ml-2 text-gray-500">px</p>
            </div>
          </div>
          <div className="w-full mb-2 flex">
            <p className="w-1/2">Padding Left</p>
            <div className="w-1/2 flex">
              <Input
                type="number"
                value={parseFloat(selectedBoxOptions?.paddingLeft)}
                onChange={(e) => {
                  const value = e.target.value;
                  updateSpace("paddingLeft", value || 0);
                }}
                textAlignClass="text-right"
                widthClass="w-[75%]"
                additionalClasses=""
              />
              <p className="ml-2 text-gray-500">px</p>
            </div>
          </div>

          <div className="w-full mb-2 flex">
            <p className="w-1/2">Padding Top</p>
            <div className="w-1/2 flex">
              <Input
                type="number"
                value={parseFloat(selectedBoxOptions?.paddingTop)}
                onChange={(e) => {
                  const value = e.target.value;
                  updateSpace("paddingTop", value || 0);
                }}
                textAlignClass="text-right"
                widthClass="w-[75%]"
                additionalClasses=""
              />
              <p className="ml-2 text-gray-500">px</p>
            </div>
          </div>
          <div className="w-full mb-2 flex">
            <p className="w-1/2">Padding Bottom</p>
            <div className="w-1/2 flex">
              <Input
                type="number"
                value={parseFloat(selectedBoxOptions?.paddingBottom)}
                onChange={(e) => {
                  const value = e.target.value;
                  updateSpace("paddingBottom", value || 0);
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
