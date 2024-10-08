import React, { useEffect, useState } from "react";
import Input from "../../../../../components/Input";

import addImg from "../../../../../assets/images/add.png";

export default function PageOptions({ setPageSize, addPage }) {
  const [height, setHeight] = useState(297);
  const [width, setWidth] = useState(210);

  useEffect(() => {
    setPageSize({
      height,
      width,
    });
  }, [height, width]);

  return (
    <div className="h-[3.5rem] border-b border-white flex justify-between px-2">
      <div className="h-full flex justify-center items-center">
        <button
          className="bg-white flex rounded-md justify-center items-center gap-2 p-3 py-2 mx-1"
          onClick={() => addPage && addPage()}
        >
          <p className="text-black font-medium">New page</p>
          <img src={addImg} alt="Add" className="h-[1.5rem]" />
        </button>
      </div>

      <div className="flex items-center">
        <p>Page Dimentions</p>

        <div className="flex justify-center items-center">
          <Input
            type="number"
            value={width}
            widthClass="w-[5rem]"
            textAlignClass="text-center"
            additionalClasses="mx-1"
            onChange={(e) => {
              const val = e.target.value;
              val.replace(/\D/g, "");
              setWidth(Number(val));
            }}
          />

          <Input
            type="number"
            value={height}
            widthClass="w-[5rem]"
            textAlignClass="text-center"
            additionalClasses="mx-1"
            onChange={(e) => {
              const val = e.target.value;
              val.replace(/\D/g, "");
              setHeight(Number(val));
            }}
          />
        </div>
      </div>
    </div>
  );
}
