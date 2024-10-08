import React from "react";

import { Image, View } from "@react-pdf/renderer";

export default function ImageRenderer({ image, assets, parentHeight, parentWidth }) {
  return (
    <Image
        source={{
            uri: (assets && image?.image && assets[image?.image]) ? URL.createObjectURL(assets[image?.image]) : ""
        }}
        style={{
            height: '100%',
            width: '100%',
            objectFit: "fill",
            opacity: image?.opacity,
            borderRadius: `${image?.radius || 0}%`,
            borderColor: image?.borderColor,
            borderWidth: `${image?.borderWidth}px`,
            backgroundColor: `${image?.backgroundColor || 'transparent'}`,
        }}
    />
  );
}
