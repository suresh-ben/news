import React, { useRef } from "react";
import useAssets from "../../../../../hooks/useAssets";
import Input from "../../../../../components/Input";
import FileUpload from "../../../../../components/FileUpload";

export default function PropertyOptions({
  setPageContent,
  selectedBoxIndexes,
  selectedBoxOptions,
}) {
  const inpRef = useRef(null);
  const { assets, setAssets } = useAssets();

  const updateProperty = (property, value) => {
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
      <p className="mb-3 text-xl mt-5">Properties: </p>
      <div className="text-white flex gap-5">
        <div className="w-1/2 ">
          <div className="w-full mb-2 flex">
            <p className="w-1/2">Background color</p>
            <div className="w-1/2 flex">
              <Input
                type="color"
                value={selectedBoxOptions?.backgroundColor || "#ffffff"}
                onChange={(e) => {
                  const value = e.target.value;
                  updateProperty("backgroundColor", value);
                }}
              />
            </div>
          </div>
        </div>

        <div className="w-1/2 ">
          <div className="w-full mb-2 flex">
            <p className="w-1/2">Background image:</p>
            <FileUpload
              onChange={(e) => {
                const file = e.target.files[0];
                if (file) {
                  const assetKey = Math.floor(Math.random() * 100000);
                  setAssets({
                    ...assets,
                    [assetKey]: file,
                  });
                  updateProperty("backgroundImage", assetKey);
                }
              }}
              name={
                assets[selectedBoxOptions?.backgroundImage]?.name ||
                "Choose an image"
              }
              widthClass="w-1/2"
            />
          </div>
        </div>
      </div>
    </>
  );
}
