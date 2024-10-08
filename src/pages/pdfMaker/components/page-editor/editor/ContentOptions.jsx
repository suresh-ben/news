import React, { useEffect, useState } from "react";

import TextContentConfigOptions from "./TextContentConfigOptions";
import ImgContentConfigOptions from "./ImgContentConfigOptions";

import addImg from "../../../../../assets/images/add.png";
import clearImg from "../../../../../assets/images/cross.png";

import { CONTENT_TYPES } from "../../../../../config/constants";
import Select from "../../../../../components/Select";

const CONTENT_SLELECTION_STATUS = {
  UNSELECTED: "un-selected",
  SELECTING: "selecting",
  SELECTED: "selected",
};

export default function ContentOptions({
  pageContent,
  setPageContent,
  selectedBoxIndexes,
  selectedBoxOptions,
}) {
  const [contentSelectionStatus, setContentSelectionStatus] = useState(
    CONTENT_SLELECTION_STATUS.UNSELECTED
  );
  useEffect(() => {
    setContentSelectionStatus(
      selectedBoxOptions?.content?.type === CONTENT_TYPES.IMAGE ||
        selectedBoxOptions?.content?.type === CONTENT_TYPES.TEXT
        ? CONTENT_SLELECTION_STATUS.SELECTED
        : CONTENT_SLELECTION_STATUS.UNSELECTED
    );
  }, [selectedBoxIndexes, selectedBoxOptions]);

  const updateContentType = (type) => {
    setPageContent((pageContent) => {
      const temp = JSON.stringify(pageContent);
      const newPageContent = JSON.parse(temp);

      let selectedBox = newPageContent[0];
      for (let i = 1; i < selectedBoxIndexes.length; i++) {
        selectedBox = selectedBox.children[selectedBoxIndexes[i]];
      }

      const content = selectedBox.content || {};

      //ToDod
      selectedBox.content = {
        // ...content,
        type: type,
      };

      return newPageContent;
    });
  };

  const clearContent = () => {
    setPageContent((pageContent) => {
      const temp = JSON.stringify(pageContent);
      const newPageContent = JSON.parse(temp);

      let selectedBox = newPageContent[0];
      for (let i = 1; i < selectedBoxIndexes.length; i++) {
        selectedBox = selectedBox.children[selectedBoxIndexes[i]];
      }

      selectedBox.content = null;
      return newPageContent;
    });
  };

  return (
    <>
      <p className="mb-3 text-xl mt-5">Content: </p>
      {contentSelectionStatus === CONTENT_SLELECTION_STATUS.UNSELECTED && (
        <button
          className="bg-white flex rounded-md justify-center items-center gap-2 p-3 py-2"
          onClick={() =>
            setContentSelectionStatus(CONTENT_SLELECTION_STATUS.SELECTING)
          }
        >
          <p className="text-black font-medium">Add content</p>
          <img src={addImg} alt="Add" className="h-[1.5rem]" />
        </button>
      )}
      {(contentSelectionStatus === CONTENT_SLELECTION_STATUS.SELECTING ||
        contentSelectionStatus === CONTENT_SLELECTION_STATUS.SELECTED) && (
        <div className="flex justify-between">
          <Select
            widthClass="w-[20rem]"
            otherClasses="p-2"
            borderClasses="rounded-md border border-white"
            value={selectedBoxOptions?.content?.type || ""}
            onChange={(e) => {
              const value = e.target.value;
              if (value) {
                setContentSelectionStatus(CONTENT_SLELECTION_STATUS.SELECTED);
                updateContentType(value);
              } else {
                setContentSelectionStatus(CONTENT_SLELECTION_STATUS.SELECTING);
                clearContent();
              }
            }}
            options={[
              { value: "", name: "Select an option" },
              { value: CONTENT_TYPES.IMAGE, name: "Image" },
              { value: CONTENT_TYPES.TEXT, name: "Text" },
            ]}
          />

          <button
            className="bg-white flex rounded-md justify-center items-center gap-2 p-3 py-2"
            onClick={() => {
              setContentSelectionStatus(CONTENT_SLELECTION_STATUS.UNSELECTED);
              clearContent();
            }}
          >
            <p className="text-black font-medium">Clear content</p>
            <img src={clearImg} alt="Add" className="h-[1.5rem]" />
          </button>
        </div>
      )}
      {selectedBoxOptions?.content?.type === CONTENT_TYPES.IMAGE && (
        <ImgContentConfigOptions
          pageContent={pageContent}
          setPageContent={setPageContent}
          selectedBoxIndexes={selectedBoxIndexes}
          selectedBoxOptions={selectedBoxOptions}
        />
      )}
      {selectedBoxOptions?.content?.type === CONTENT_TYPES.TEXT && (
        <TextContentConfigOptions
          pageContent={pageContent}
          setPageContent={setPageContent}
          selectedBoxIndexes={selectedBoxIndexes}
          selectedBoxOptions={selectedBoxOptions}
        />
      )}
    </>
  );
}
