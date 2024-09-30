import Box from "./Box"

export default function BoxManager({ boxes, indexes, selectedBoxIndexes, setSelectedBoxIndexes }) {
  return (
    <>
        {
            boxes.map((box, ind) => {
                return <Box box={box} ind={ind} indexes={[...indexes, ind]} selectedBoxIndexes={selectedBoxIndexes} setSelectedBoxIndexes={setSelectedBoxIndexes} />
            })
        }
    </>
  )
}
