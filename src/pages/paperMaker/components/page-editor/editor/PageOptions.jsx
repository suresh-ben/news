import React, { useEffect, useState } from "react";
import Input from "../../../../../components/Input";

export default function PageOptions({ setPageSize }) {
  const [height, setHeight] = useState(297);
  const [width, setWidth] = useState(210);

  useEffect(() => {
    setPageSize({
      height,
      width,
    });
  }, [height, width]);

  return (
    <div className="h-[3rem] border-b border-white flex justify-end">
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
