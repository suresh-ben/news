import React, { useRef } from "react";
import useAssets from "../../../../../hooks/useAssets";

import Input from "../../../../../components/Input";
import FileUpload from "../../../../../components/FileUpload";

export default function ImgContentConfigOptions({
  pageContent,
  setPageContent,
  selectedBoxIndexes,
  selectedBoxOptions,
}) {
  const inpRef = useRef(null);
  const { assets, setAssets } = useAssets();

  const updateContentType = (property, value) => {
    setPageContent((pageContent) => {
      const temp = JSON.stringify(pageContent);
      const newPageContent = JSON.parse(temp);

      let selectedBox = newPageContent[0];
      for (let i = 1; i < selectedBoxIndexes.length; i++) {
        selectedBox = selectedBox.children[selectedBoxIndexes[i]];
      }

      const content = selectedBox.content || {};
      selectedBox.content = {
        ...content,
        [property]: value,
      };

      return newPageContent;
    });
  };

  return (
    <>
      <div className="flex mt-5 gap-5">
        <div className="w-1/2 ">
          <div className="w-full mb-2 flex">
            <p className="w-1/2">Background image:</p>
            <FileUpload
              widthClass="w-1/2"
              name={
                assets[selectedBoxOptions?.content?.image]?.name ||
                "Choose an image"
              }
              onChange={(e) => {
                const file = e.target.files[0];
                if (file) {
                  const assetKey = Math.floor(Math.random() * 100000);
                  setAssets((assets) => {
                    return {
                      ...assets,
                      [assetKey]: file,
                    };
                  });

                  updateContentType("image", assetKey);
                } else updateContentType("image", null);
              }}
            />
          </div>

          <div className="w-full mb-2 flex">
            <p className="w-1/2">Border radius:</p>
            <div className="w-1/2 flex">
              <Input
                type="number"
                widthClass="w-[75%]"
                textAlignClass="text-right"
                value={parseFloat(
                  selectedBoxOptions?.content?.radius == undefined
                    ? 0
                    : selectedBoxOptions?.content?.radius
                )}
                onChange={(e) => {
                  const value = e.target.value;
                  updateContentType("radius", value || 0);
                }}
              />
              <p className="ml-2 text-gray-500">%</p>
            </div>
          </div>

          <div className="w-full mb-2 flex">
            <p className="w-1/2">Background color:</p>
            <div className="w-1/2 flex">
              <Input
                type="color"
                value={selectedBoxOptions.content?.backgroundColor || "#ffffff"}
                onChange={(e) => {
                  const value = e.target.value;
                  updateContentType("backgroundColor", value);
                }}
              />
            </div>
          </div>
        </div>

        <div className="w-1/2 ">
          <div className="w-full mb-2 flex">
            <p className="w-1/2">Opacity:</p>
            <div className="w-1/2 flex">
              <Input
                type="number"
                widthClass="w-[75%]"
                textAlignClass="text-right"
                value={parseFloat(
                  selectedBoxOptions?.content?.opacity == undefined
                    ? 100
                    : selectedBoxOptions?.content?.opacity * 100
                )}
                onChange={(e) => {
                  const value = e.target.value;
                  updateContentType("opacity", value / 100);
                }}
              />
              <p className="ml-2 text-gray-500">%</p>
            </div>
          </div>

          <div className="w-full mb-2 flex">
            <p className="w-1/2">Border width:</p>
            <div className="w-1/2 flex">
              <Input
                type="number"
                widthClass="w-[75%]"
                textAlignClass="text-right"
                value={parseFloat(
                  selectedBoxOptions?.content?.borderWidth || 0
                )}
                onChange={(e) => {
                  const value = e.target.value;
                  updateContentType("borderWidth", value || 0);
                }}
              />
              <p className="ml-2 text-gray-500">px</p>
            </div>
          </div>

          <div className="w-full mb-2 flex">
            <p className="w-1/2">Border color:</p>
            <div className="w-1/2 flex">
              <Input
                type="color"
                value={selectedBoxOptions.content?.borderColor || "#ffffff"}
                onChange={(e) => {
                  const value = e.target.value;
                  updateContentType("borderColor", value);
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
