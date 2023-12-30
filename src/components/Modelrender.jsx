import { Canvas } from '@react-three/fiber'
import { useRef } from 'react'
import { OrbitControls, useGLTF, Stars } from '@react-three/drei'
import { Suspense } from 'react'

function Shoe({ ...props }) {
  const group = useRef()
  const { nodes, materials } = useGLTF('/shoe.gltf')
  return (
    <group ref={group} {...props} dispose={null}>
      <mesh geometry={nodes.shoe.geometry} material={materials.laces} />
      <mesh geometry={nodes.shoe_1.geometry} material={materials.mesh} />
      <mesh geometry={nodes.shoe_2.geometry} material={materials.caps} />
      <mesh geometry={nodes.shoe_3.geometry} material={materials.inner} />
      <mesh geometry={nodes.shoe_4.geometry} material={materials.sole} />
      <mesh geometry={nodes.shoe_5.geometry} material={materials.stripes} />
      <mesh geometry={nodes.shoe_6.geometry} material={materials.band} />
      <mesh geometry={nodes.shoe_7.geometry} material={materials.patch} />
    </group>
  )
}
function Gopher({ ...props }) {
  const group = useRef()
  const { nodes, materials } = useGLTF('/gopher.glb')
  return (
    <group ref={group} {...props} dispose={null} position={[-2,-4,0]}>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <group position={[-1.152, -0.525, 2.8]} rotation={[0, Math.PI / 2, 0]} scale={1}>
          <group position={[-0.136, 0.012, 0.926]}>
            <mesh geometry={nodes.Nose_0.geometry} material={materials.SkinColor} />
            <mesh geometry={nodes.Nose_1.geometry} material={materials.NoseTop} />
          </group>
          <group position={[-0.47, 0.404, 0.981]}>
            <mesh geometry={nodes.Eye_R_0.geometry} material={materials['Eye-White']} />
            <mesh geometry={nodes.Eye_R_1.geometry} material={materials.Material} />
            <mesh geometry={nodes.Eye_R_2.geometry} material={materials['Material.001']} />
          </group>
          <group position={[-0.432, -0.355, 1.015]}>
            <mesh geometry={nodes.Eye_L_0.geometry} material={materials['Eye-White']} />
            <mesh geometry={nodes.Eye_L_1.geometry} material={materials.Material} />
            <mesh geometry={nodes.Eye_L_2.geometry} material={materials['Material.001']} />
          </group>
          <mesh geometry={nodes.Body_0.geometry} material={materials.Body} />
          <mesh geometry={nodes.Tail_0.geometry} material={materials.SkinColor} position={[0.848, 0, -0.876]} />
          <mesh geometry={nodes.Foot_R001_0.geometry} material={materials.SkinColor} position={[1.138, -0.606, 0.459]} rotation={[0.356, 0.041, -0.038]} />
          <mesh geometry={nodes.Foot_R_0.geometry} material={materials.SkinColor} position={[1.142, 0.566, 0.516]} rotation={[0.075, 0.027, -0.002]} />
          <mesh geometry={nodes.Hnad_L_0.geometry} material={materials.SkinColor} position={[0.374, -0.932, 0.298]} />
          <mesh geometry={nodes.Hand_R_0.geometry} material={materials.SkinColor} position={[0.302, 0.82, 0.273]} rotation={[0.413, -0.145, -0.319]} />
          <mesh geometry={nodes.Tooth_0.geometry} material={materials.Tooth} position={[0.009, -0.013, 1.01]} />
          <mesh geometry={nodes.Ear_R_0.geometry} material={materials.Body} position={[-0.823, 0.754, 0.424]} />
          <mesh geometry={nodes.Ear_L_0.geometry} material={materials.Body} position={[-0.803, -0.767, 0.404]} />
        </group>
      </group>
    </group>
  )
}
function Docker({...props}) {
  const group = useRef()
  const { nodes, materials } = useGLTF('/moby_dock_docker_whale.glb')
  return (
    <group ref={group}{...props} dispose={null} position={[-0.6,-0.5,0]}>
      <group rotation={[-Math.PI / 2, 0, 0]} scale={0.4}>
        <mesh geometry={nodes.Sphere_0.geometry} material={materials.whale} position={[-1.546, 0, -0.072]} scale={2.731} />
        <mesh geometry={nodes.Cube_0.geometry} material={materials.crate} position={[-3.008, -0.43, 0.664]} scale={0.435} />
        <mesh geometry={nodes.Cube001_0.geometry} material={materials.crate} position={[-2.03, -0.43, 0.664]} scale={0.435} />
        <mesh geometry={nodes.Cube002_0.geometry} material={materials.crate} position={[-1.07, -0.43, 0.664]} scale={0.435} />
        <mesh geometry={nodes.Cube003_0.geometry} material={materials.crate} position={[-0.128, -0.43, 0.664]} scale={0.435} />
        <mesh geometry={nodes.Cube004_0.geometry} material={materials.crate} position={[0.832, -0.43, 0.664]} scale={0.435} />
        <mesh geometry={nodes.Cube005_0.geometry} material={materials.crate} position={[-0.128, -0.43, 1.552]} scale={0.435} />
        <mesh geometry={nodes.Cube006_0.geometry} material={materials.crate} position={[-1.07, 0.439, 1.552]} scale={0.435} />
        <mesh geometry={nodes.Cube007_0.geometry} material={materials.crate} position={[-2.03, -0.43, 1.534]} scale={0.435} />
        <mesh geometry={nodes.Cube008_0.geometry} material={materials.crate} position={[-0.128, -0.43, 2.439]} scale={0.435} />
        <mesh geometry={nodes.Cube009_0.geometry} material={materials.crate} position={[-2.023, 0.528, 0.679]} scale={0.435} />
        <mesh geometry={nodes.Cube010_0.geometry} material={materials.crate} position={[-0.128, 0.488, 0.664]} scale={0.435} />
        <mesh geometry={nodes.Cube011_0.geometry} material={materials.crate} position={[-0.128, 0.469, 1.552]} scale={0.435} />
        <mesh geometry={nodes.Cube012_0.geometry} material={materials.crate} position={[-1.07, 0.482, 0.664]} scale={0.435} />
        <mesh geometry={nodes.Sphere001_0.geometry} material={materials.whale_outline} position={[-1.546, 0, -0.072]} scale={2.731} />
      </group>
    </group>
  )
}
function Stage({...props}) {
  const group = useRef()
  const { nodes, materials } = useGLTF('/neon_stage.glb')
  
  return (
    <group ref={group}{...props} dispose={null}>
      <group scale={0.01}>
        <group position={[-317.686, 369.577, -669.114]} rotation={[-1.564, 0.23, -1.787]} scale={[32.654, 30.712, 78.171]}>
          <mesh geometry={nodes.Cylinder067_Material002_0.geometry} material={materials['Material.004']} />
          <mesh geometry={nodes.Cylinder067_Material002_0_1.geometry} material={materials['Material.004']} />
        </group>
        <mesh geometry={nodes.Plane_Material_0.geometry} material={materials.Material} position={[76.675, 0, -166.309]} rotation={[-Math.PI / 2, 0, 0]} scale={[135.952, 146.829, 127.587]} />
        <mesh geometry={nodes.Torus_Material003_0.geometry} material={materials['Material.003']} position={[80.452, 226.188, -574.022]} scale={174.621} />
        {/* <mesh geometry={nodes.Sphere_Material004_0.geometry} material={materials['Material.004']} position={[95.951, 485.54, 600.858]} rotation={[-Math.PI / 2, 0, -0.279]} scale={2000.809} /> */}
      </group>
    </group>
  )
}
const Modelrender = () => {
  return (
    <Canvas>
      <Suspense>
        <ambientLight  intensity={6}/>
      <Stars radius={100} depth={50} count={1000} factor={4} saturation={0} fade speed={1} color={"orange"} />
      <color attach="background" args={['black']} />

        {/* <Gopher /> 
        <Shoe /> 
        <Docker/>  */}
        <Stage/>
      </Suspense>
      <OrbitControls />
    </Canvas>
  );
};
export default Modelrender;
