import React, { useRef, Suspense, useState, useEffect } from 'react'
import * as THREE from 'three'
import { Canvas, useFrame } from '@react-three/fiber'
import { useGLTF, OrbitControls, Loader} from '@react-three/drei'
import { useTransition, a, useSpring } from 'react-spring'
import { useLocation } from "wouter"



  
  function Model(props) {
    const group1 = useRef()
    const group2 = useRef()
    const group3 = useRef()
  
    useFrame(() => (group1.current.rotation.y -= -0.004))
    useFrame(() => (group2.current.rotation.y -= 0.0015))
    useFrame(() => (group3.current.rotation.y -= -0.003))
    
    const { nodes, materials } = useGLTF('./earthuni1.glb')
    return (
      <group {...props} dispose={null}>
        <mesh ref={group1} position={[0.5,0,1]}  geometry={nodes.Sphere.geometry} material={materials['Material.001']} />
        <mesh ref={group2} geometry={nodes.Sphere001.geometry} material={materials['Material.003']} scale={5.52} />
        <mesh ref={group3} position={[0.5,0,1]} geometry={nodes.Sphere002.geometry} material={materials['Material.005']} scale={1.02} />
      </group>
    )
  }

  



  export default function HomeScreen() {
    const [location] = useLocation()
    const transition = useTransition(location, {
      from: { position: [0, 0, -20], rotation: [0, Math.PI, 0], scale: [0, 0, 0], opacity: 0 },
      enter: { position: [0, 0, 0], rotation: [0, 0, 0], scale: [1, 1, 1], opacity: 1 },
      leave: { position: [0, 0, -10], rotation: [0, -Math.PI, 0], scale: [0, 0, 0], opacity: 0 },
      config: () => (n) => n === "opacity" && { friction: 60 },
    })
    return (
        <>
        
        <Canvas
    camera={{ position: [3, 0, 0] }}>
      
      <pointLight position={[0, 3, -5]} intensity={1} />
      <ambientLight intensity={0.05} />
      
      <Suspense fallback={null}>
        <Model transition={transition} />
      </Suspense>
      <OrbitControls enablePan={false} enableZoom={false} maxPolarAngle={Math.PI / 2.5} minPolarAngle={Math.PI / 4}  />
      
    </Canvas>
    
    <Loader
    dataInterpolation={(p) => 'Float3D is thinking'}>
      </Loader>
    
    
    </>
    )
}


