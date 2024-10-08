import Box from "./Box"

export default function BoxManager({ boxes, indexes, parentHeight, parentWidth, assets }) {
  return (
    <>
        {
            boxes?.map((box, ind) => {
                return <Box box={box} indexes={[...indexes, ind]} key={ind} parentHeight={parentHeight} parentWidth={parentWidth} assets={assets} />
            })
        }
    </>
  )
}
