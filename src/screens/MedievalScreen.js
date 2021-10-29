  
import React, { useRef, Suspense } from 'react'
import { Loader, useGLTF } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import Environment from "./Environment"
import Cam from "./Cam"


function Model({ ...props }) {
  const group = useRef()
  const { nodes, materials } = useGLTF('/medieval.glb')
  return (
    <group ref={group} {...props} dispose={null} position={[0, -35, 20]}>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <group rotation={[Math.PI / 2, 0, 0]}>
          <group rotation={[-Math.PI / 2, 0, Math.PI]} scale={[0.28, 0.28, 0.31]}>
            <group position={[0, -1.65, -0.68]}>
              <mesh
                geometry={nodes.visor__0.geometry}
                material={nodes.visor__0.material}
                position={[39.34, -69.31, 107.72]}
                rotation={[0.04, -0.07, 2.37]}
              />
            </group>
          </group>
        </group>
      </group>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <mesh geometry={nodes.Mesh_0.geometry} material={nodes.Mesh_0.material} />
        <mesh geometry={nodes.Mesh_1.geometry} material={nodes.Mesh_1.material} />
      </group>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <group rotation={[Math.PI / 2, 0, 0]}>
          <mesh
            geometry={nodes.defaultMaterial.geometry}
            material={materials.wire_135059008}
            position={[-15.91, 28.42, -21.67]}
            rotation={[-Math.PI, 1.32, -3.12]}
            scale={[20.12, 20.12, 20.12]}
          />
        </group>
      </group>
      <group position={[3.96, 30.34, -26.38]} rotation={[-Math.PI / 2, 0, 2.46]} scale={0.02}>
        <group rotation={[Math.PI / 2, 0, 0]}>
          <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
            <mesh
              geometry={nodes['1_LOW_TT_checker_1024x1024_UV_GRID_0'].geometry}
              material={nodes['1_LOW_TT_checker_1024x1024_UV_GRID_0'].material}
              position={[-0.65, 0.21, 0]}
              scale={1.25}
            />
          </group>
          <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
            <mesh
              geometry={nodes['2_LOW_TT_checker_1024x1024_UV_GRID_0'].geometry}
              material={nodes['2_LOW_TT_checker_1024x1024_UV_GRID_0'].material}
              position={[-0.65, 0.21, 0.23]}
              scale={1.25}
            />
          </group>
          <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
            <mesh
              geometry={nodes['3_LOW_TT_checker_1024x1024_UV_GRID_0'].geometry}
              material={nodes['3_LOW_TT_checker_1024x1024_UV_GRID_0'].material}
              position={[-0.65, 0.21, 0]}
              scale={1.25}
            />
          </group>
        </group>
      </group>
    </group>
  )
}




function MedievalScreen() {
  
    return (
       
    <>
    
    <Canvas 
    camera={{ position: [0, 100, -28] }}>
    
    
                <ambientLight intensity={1} />
                <directionalLight position={[10, 10, 5]} intensity={5} />
                <directionalLight position={[-10, -10, -5]} intensity={2} />
                <spotLight position={[7, 0, 5]} intensity={2} penumbra={0.5} castShadow />
                <Suspense fallback={null}>
                <Cam />
                <Environment/>
                    <Model/>
                </Suspense>
            </Canvas>
            <Loader
    dataInterpolation={(p) => 'Float3D is thinking'}>
      </Loader>
            
             
    </>
             
             
            
  )  
}
export default MedievalScreen;