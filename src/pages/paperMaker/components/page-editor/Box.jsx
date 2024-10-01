import React from "react";
import useAssets from "../../../../hooks/useAssets";

import BoxManager from "./BoxManager";
import { CONTENT_TYPES } from "../../../../config/constants";
import Image from "./elements/Image";
import Text from "./elements/Text";

export default function Box({
  box,
  indexes,
  selectedBoxIndexes,
  setSelectedBoxIndexes,
}) {
  const { assets } = useAssets();

  return (
    <div
      className={`flex flex-wrap items-start justify-start shadow hover:shadow-blue-300 cursor-pointer overflow-hidden ${
        JSON.stringify(selectedBoxIndexes) == JSON.stringify(indexes)
          ? "shadow shadow-green-300"
          : ""
      }`}
      style={{
        height: `calc(${box?.height}% - ${box.marginTop || 0}px - ${
          box.marginBottom || 0
        }px)`,
        width: `calc(${box?.width}% - ${box.marginRight || 0}px - ${
          box.marginLeft || 0
        }px)`,
        marginRight: `${box.marginRight || 0}px`,
        marginLeft: `${box.marginLeft || 0}px`,
        marginTop: `${box.marginTop || 0}px`,
        marginBottom: `${box.marginBottom || 0}px`,
        paddingRight: `${box.paddingRight || 0}px`,
        paddingLeft: `${box.paddingLeft || 0}px`,
        paddingTop: `${box.paddingTop || 0}px`,
        paddingBottom: `${box.paddingBottom || 0}px`,
        backgroundColor: `${box.backgroundColor}`,
        backgroundImage: assets[box.backgroundImage]
          ? `url(${URL.createObjectURL(assets[box.backgroundImage])})`
          : "",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      onClick={(e) => {
        e.stopPropagation();
        setSelectedBoxIndexes(indexes);
      }}
    >
      {!box.content &&
        !box.content?.type &&
        box.children &&
        box.children.length > 0 && (
          <BoxManager
            boxes={box.children}
            indexes={indexes}
            selectedBoxIndexes={selectedBoxIndexes}
            setSelectedBoxIndexes={setSelectedBoxIndexes}
          />
        )}
      {box.content?.type === CONTENT_TYPES.IMAGE && (
        <Image image={box.content} />
      )}
      {box.content?.type === CONTENT_TYPES.TEXT && (
        <Text content={box.content} />
      )}
    </div>
  );
}
