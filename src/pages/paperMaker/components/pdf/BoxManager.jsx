import Box from "./Box"

export default function BoxManager({ boxes, parentHeight, parentWidth, assets }) {
  return (
    <>
        {
            boxes.map((box, ind) => {
                return <Box box={box} key={ind} parentHeight={parentHeight} parentWidth={parentWidth} assets={assets} />
            })
        }
    </>
  )
}
