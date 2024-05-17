/* eslint-disable react/no-unknown-property */
import * as THREE from 'three'
import { Canvas } from '@react-three/fiber'
import {
  Environment,
  Float,
  Html,
  Stars,
} from '@react-three/drei'
import Notebook from './Notebook'
import Electron from './Electron'
import Swarm from './Swarm'
import PostEffects from './PostEffects'

export default function Space() {
  return (
    <Canvas flat legacy dpr={1} camera={{ position: [0, 0, 20], fov: 50 }}>
      { /* FX */ }
      <ambientLight intensity={0.01} />
      <Environment preset="city" />
      <PostEffects />
      
      { /* Swarm */ }
      <Swarm count={100} />
      
      { /* Lights */ }
      <Float
        speed={1}
        rotationIntensity={5}
        floatIntensity={6}
        position={[5, 0, 0]}
      >
        <pointLight distance={60} intensity={4} color="lightblue" />
        <spotLight intensity={1.5} position={[0, 0, 2000]} penumbra={1} color="green" />
        <pointLight position={[10, 10, 10]} intensity={1.5} />
      </Float>

      { /* Stars */ }
      <Float
        speed={1}
        rotationIntensity={1}
        floatIntensity={1}
        position={[8, 0, 0]}
      >
        <Stars />
      </Float>

      { /* Notebook and Particles */ }
      <Float
        speed={1}
        rotationIntensity={0.5}
        floatIntensity={1}
        position={[7, 0, 0]}
      >
        <Notebook />
        <>
          <Electron position={[0, 0, 0.5]} rotation={[3.14 / 1.5 - 0.2, 0, 0]} speed={1.8} />
          <Electron position={[0, 0, 0.5]} rotation={[0, 2, -3]} speed={2} />
          <Electron position={[0, 0, 0.5]} rotation={[0, 0, 0]} speed={1.6} />
        </>
      </Float>
    </Canvas>
  )
}
