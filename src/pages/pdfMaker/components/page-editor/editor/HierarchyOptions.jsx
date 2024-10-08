import React from "react";

import BorderButton from "../../../../../components/BorderButton";

export default function HierarchyOptions({
  pageContent,
  setPageContent,
  selectedBoxIndexes,
  setSelectedBoxIndexes,
}) {
  const moveToPreSib = () => {
    if (selectedBoxIndexes.length <= 1) return; //ROOT

    const lastInd = selectedBoxIndexes[selectedBoxIndexes.length - 1];
    if (lastInd == 0) return;

    setSelectedBoxIndexes([
      ...selectedBoxIndexes.slice(0, selectedBoxIndexes.length - 1),
      lastInd - 1,
    ]);
  };

  const moveNextSib = () => {
    if (selectedBoxIndexes.length <= 1) return; //ROOT

    let parentBox = pageContent[0];
    for (let i = 1; i < selectedBoxIndexes.length - 1; i++) {
      parentBox = parentBox.children[selectedBoxIndexes[i]];
    }
    const parentNumClinds = parentBox.children.length;
    const lastInd = selectedBoxIndexes[selectedBoxIndexes.length - 1];
    if (parentNumClinds - 1 == lastInd) return;

    setSelectedBoxIndexes([
      ...selectedBoxIndexes.slice(0, selectedBoxIndexes.length - 1),
      lastInd + 1,
    ]);
  };

  const moveToParent = () => {
    if (selectedBoxIndexes.length <= 1) return; //ROOT

    setSelectedBoxIndexes([
      ...selectedBoxIndexes.slice(0, selectedBoxIndexes.length - 1),
    ]);
  };

  const moveToFirstChild = () => {
    let selectedBox = pageContent[0];
    for (let i = 1; i < selectedBoxIndexes.length; i++) {
      selectedBox = selectedBox.children[selectedBoxIndexes[i]];
    }

    if (selectedBox.children.length > 0) {
      setSelectedBoxIndexes([...selectedBoxIndexes, 0]);
    }
  };

  const addBox = (isFloating) => {
    const newBoxOptions = {
      height: isFloating? "30" : "25",
      width: isFloating? "30" : "25",
      marginRight: isFloating? "0" : "5",
      marginLeft: isFloating? "0" : "5",
      marginTop: isFloating? "0" : "5",
      marginBottom: isFloating? "0" : "5",
      paddingRight: isFloating? "0" : "5",
      paddingLeft: isFloating? "0" : "5",
      paddingTop: isFloating? "0" : "5",
      paddingBottom: isFloating? "0" : "5",
      top: 0,
      bottom: 0,
      left: 0,
      right: 0,
      children: [],
      isFloating: isFloating
    };
    setPageContent((pageContent) => {
      const temp = JSON.stringify(pageContent);

      const newPageContent = JSON.parse(temp);

      let selectedBox = newPageContent[0];
      for (let i = 1; i < selectedBoxIndexes.length; i++) {
        selectedBox = selectedBox.children[selectedBoxIndexes[i]];
      }
      selectedBox.children = [...selectedBox.children, newBoxOptions];
      return newPageContent;
    });
  };

  const deleteBox = () => {
    if (selectedBoxIndexes.length <= 1) return; //ROOT

    let numSiblings = 0;
    let parentBox = pageContent[0];
    for (let i = 1; i < selectedBoxIndexes.length - 1; i++) {
      parentBox = parentBox.children[selectedBoxIndexes[i]];
    }
    numSiblings = parentBox.children.length;
    const myInd = selectedBoxIndexes[selectedBoxIndexes.length - 1];

    setPageContent((pageContent) => {
      const temp = JSON.stringify(pageContent);
      const newPageContent = JSON.parse(temp);

      let parentBox = newPageContent[0];
      for (let i = 1; i < selectedBoxIndexes.length - 1; i++) {
        parentBox = parentBox.children[selectedBoxIndexes[i]];
      }
      parentBox.children = [
        ...parentBox.children.filter(
          (_, ind) => ind != selectedBoxIndexes[selectedBoxIndexes.length - 1]
        ),
      ];
      return newPageContent;
    });

    if (numSiblings == 1) moveToParent();
    else if (numSiblings == myInd + 1) {
      moveToPreSib();
    }
  };

  return (
    <>
      <p className="mb-3 text-xl mt-5">Hierarchy: </p>
      <div className="text-white flex gap-5">
        <div className="w-1/2 ">
          <div className="w-full mb-2 flex">
            <p className="w-1/2">Move to Prior sibling</p>
            <BorderButton
              onClick={moveToPreSib}
              label={"<-"}
              widthClass="w-1/2"
            />
          </div>

          <div className="w-full mb-2 flex">
            <p className="w-1/2">Move to Parent</p>
            <BorderButton
              onClick={moveToParent}
              label={"<-*"}
              widthClass="w-1/2"
            />
          </div>

          <div className="w-full mb-2 flex">
            <p className="w-1/2">Add Child</p>
            <BorderButton onClick={() => addBox(false)} label={"+"} widthClass="w-1/2" />
          </div>

          <div className="w-full mb-2 flex">
            <p className="w-1/2">Add Floating Child</p>
            <BorderButton onClick={() => addBox(true)} label={"~"} widthClass="w-1/2" />
          </div>
        </div>

        <div className="w-1/2 ">
          <div className="w-full mb-2 flex">
            <p className="w-1/2">Move to Next sibling</p>
            <BorderButton
              onClick={moveNextSib}
              label={"->"}
              widthClass="w-1/2"
            />
          </div>

          <div className="w-full mb-2 flex">
            <p className="w-1/2">Move to First child</p>
            <BorderButton
              onClick={moveToFirstChild}
              label={"*->"}
              widthClass="w-1/2"
            />
          </div>

          <div className="w-full mb-2 flex">
            <p className="w-1/2">Delete</p>
            <BorderButton onClick={deleteBox} label={"-"} widthClass="w-1/2" />
          </div>
        </div>
      </div>
    </>
  );
}
