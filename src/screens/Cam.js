import { Math } from "three"
import { useThree, useFrame } from "react-three-fiber"

export default function Cam({ mouse }) {
  const { camera } = useThree()
  // useframe returns null
  return useFrame(state => {
    // normalized mouse coords (-1/1) are already part of state
    // lerping values creates smooth transitions
    camera.position.x = Math.lerp(camera.position.x, state.mouse.x * 5, 0.075)
    camera.position.y = Math.lerp(camera.position.y, state.mouse.y * 5, 0.075)
    // no need for a vector here, it acceopts numbers
    camera.lookAt(0, 0, 0)
  })
}