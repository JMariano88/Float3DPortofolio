import * as THREE from 'three'
import React, {  useEffect } from 'react'
import { Math, CubeTextureLoader } from "three"
import { useThree, useFrame, useLoader } from "react-three-fiber"
import { HDRCubeTextureLoader } from 'three/examples/jsm/loaders/HDRCubeTextureLoader'


export default function Environment() {
  const texture = useLoader(THREE.TextureLoader, '/pisaHDR/room.jpg')
  return (
    <mesh>
      <sphereBufferGeometry attach="geometry" args={[200, 100, 0]} />
      <meshBasicMaterial attach="material" map={texture} side={THREE.BackSide} />
    </mesh>
  )
}

