import { OrbitControls } from '@react-three/drei';
import { Canvas, useFrame } from '@react-three/fiber'
import { useRef, useState } from 'react'
const Model = () => {
  const Box = (props) => {
    const ref=useRef()
    useFrame((state, delta) => {
      ref.current.rotation.x+=delta
      // ref.current.rotation.y+=delta*2.0
      // ref.current.position.z=Math.sin(state.clock.elapsedTime)
    })
    return (
      <mesh position={props.position} ref={ref} >
        <boxGeometry args={props.size} />
        <meshStandardMaterial  color={props.color}/>
      </mesh>
    )
  }

  return (
    <Canvas>
      <directionalLight position={[0, 0, 1]} intensity={2} />
      <ambientLight intensity={2}/>
      <Box position={[0, 0, 0]} size={[2, 2, 2]} color={'red'} />
      <OrbitControls />
    </Canvas>
  );
};

export default Model;
