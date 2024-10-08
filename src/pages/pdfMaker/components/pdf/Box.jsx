import React, {  } from "react";
import { Image as Img } from '@react-pdf/renderer'

import BoxManager from "./BoxManager";
import { CONTENT_TYPES } from "../../../../config/constants";
import Image from "./Image";
import Text from "./Text";
import { View } from "@react-pdf/renderer";

export default function Box({
  box, parentHeight, parentWidth, assets, indexes
}) {

  console.log(indexes, 'ind', `${(indexes?.length*100)+(2*indexes[indexes?.length - 1])}`);

  const myHeight = (parentHeight*(box?.height/100)) - (box.marginTop || 0) - (box.marginBottom || 0);
  const myWidth = (parentWidth*(box?.width/100)) - (box.marginRight || 0) - (box.marginLeft || 0);

  return (
    <View
      style={{
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        // borderWidth: 1,
        // borderStyle: 'solid',
        // borderColor: '#000',

        height: myHeight,
        width: myWidth,
        marginRight: `${box.marginRight || 0}`,
        marginLeft: `${box.marginLeft || 0}`,
        marginTop: `${box.marginTop || 0}`,
        marginBottom: `${box.marginBottom || 0}`,
        paddingRight: `${box.paddingRight || 0}`,
        paddingLeft: `${box.paddingLeft || 0}`,
        paddingTop: `${box.paddingTop || 0}`,
        paddingBottom: `${box.paddingBottom || 0}`,
        backgroundColor: `${box.backgroundColor || 'transparent'}`,
        // backgroundImage: assets[box.backgroundImage]
        //   ? `url(${URL.createObjectURL(assets[box.backgroundImage])})`
        //   : "",
        // backgroundRepeat: "no-repeat",
        // backgroundSize: "cover",
        // backgroundPosition: "center",

        //Floating
        position: box.isFloating? 'absolute' : 'relative',
        zIndex: `${((500 - indexes?.length)*100 + 500)-(2*indexes[indexes?.length - 1])}`,
        top: `${box.top || 0}`,
        left: `${box.left || 0}`,
      }}
    >
      {
        box.backgroundImage && assets && assets[box.backgroundImage] && <View 
          style={{ 
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',

            backgroundColor: '#387478',
            zIndex: `${((500 - indexes?.length)*100 + 500)-(2*indexes[indexes?.length - 1])+1}`,
          }}
        >
          <Img
            source={{
                uri: URL.createObjectURL(assets[box.backgroundImage])
            }}
            style={{
                height: '100%',
                width: '100%',
                objectFit: "cover",

            }}
          />
        </View>
      }
      
      {!box.content &&
        !box.content?.type &&
        box.children &&
        box.children.length > 0 && (
          <BoxManager
            boxes={box.children}
            parentHeight={myHeight}
            parentWidth={myWidth}
            assets={assets}
            indexes={indexes}
          />
        )}
      {box.content?.type === CONTENT_TYPES.IMAGE && (
        <Image image={box.content} assets={assets} parentHeight={myHeight} parentWidth={myWidth} />
      )}
      {box.content?.type === CONTENT_TYPES.TEXT && (
        <Text content={box.content} parentHeight={myHeight} parentWidth={myWidth} />
      )}
    </View>
  );
}
