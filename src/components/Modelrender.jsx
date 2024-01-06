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
        <mesh geometry={nodes.Sphere_Material004_0.geometry} material={materials['Material.004']} position={[95.951, 485.54, 600.858]} rotation={[-Math.PI / 2, 0, -0.279]} scale={2000.809} />
      </group>
    </group>
  )
}

function Meta({ ...props }) {
  const group = useRef()
  const { nodes, materials } = useGLTF('/final.glb')
  return (
    <group ref={group} {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]} scale={4.702}>
        <group rotation={[Math.PI / 2, 0, 0]}>
          <mesh geometry={nodes.Object_6.geometry} material={materials['Environment.003']} />
          <mesh geometry={nodes.Object_6001.geometry} material={materials['Environment.003']} />
          <mesh geometry={nodes.Object_6002.geometry} material={materials['Environment.003']} position={[-20.035, 0, 0]} />
          <mesh geometry={nodes.Object_6003.geometry} material={materials['Environment.003']} position={[-20.035, 0, -8.792]} />
          <mesh geometry={nodes.Object_6004.geometry} material={materials['Environment.003']} position={[-20.035, 0, -17.596]} />
          <mesh geometry={nodes.Object_6005.geometry} material={materials['Environment.003']} position={[-20.035, 0, -25.968]} />
          <mesh geometry={nodes.Object_6006.geometry} material={materials['Environment.003']} position={[-0.028, -0.304, -25.968]} />
          <mesh geometry={nodes.Object_6007.geometry} material={materials['Environment.003']} position={[19.78, 0, 0]} />
          <mesh geometry={nodes.Object_6008.geometry} material={materials['Environment.003']} position={[19.78, 0, -8.792]} />
          <mesh geometry={nodes.Object_6009.geometry} material={materials['Environment.003']} position={[19.78, 0, -17.596]} />
          <mesh geometry={nodes.Object_6010.geometry} material={materials['Environment.003']} position={[19.78, 0, -25.968]} />
          <mesh geometry={nodes.Object_6011.geometry} material={materials['Environment.003']} position={[-20.035, 0, -33.415]} />
          <mesh geometry={nodes.Object_6012.geometry} material={materials['Environment.003']} position={[-0.028, -0.304, -33.415]} />
          <mesh geometry={nodes.Object_6013.geometry} material={materials['Environment.003']} position={[19.78, 0, -33.415]} />
          <mesh geometry={nodes.Object_4.geometry} material={materials['Props.003']} />
        </group>
      </group>
      <group position={[15.047, 40.033, -15.619]} rotation={[-Math.PI / 2, 0, -Math.PI / 2]} scale={0.027}>
        <group rotation={[Math.PI / 2, 0, 0]}>
          <group scale={100}>
            <mesh geometry={nodes.Cylinder001_cables_0.geometry} material={materials['cables.001']} />
            <mesh geometry={nodes.Cylinder001_cover_0.geometry} material={materials['cover.001']} />
            <mesh geometry={nodes.Cylinder001_supports_0.geometry} material={materials['supports.001']} />
            <mesh geometry={nodes.Cylinder001_wall_mount_0.geometry} material={materials['wall_mount.001']} />
          </group>
        </group>
      </group>
      <group position={[6.213, 9.824, 14.373]} rotation={[-Math.PI / 2, 0, 0]} scale={5.843}>
        <group rotation={[Math.PI / 2, 0, 0]}>
          <mesh geometry={nodes.Object_5.geometry} material={materials['Lamp-light']} scale={0.41} />
          <mesh geometry={nodes.Object_7.geometry} material={materials.Rubber} scale={0.41} />
          <mesh geometry={nodes.Object_9.geometry} material={materials.Metal} scale={0.41} />
          <mesh geometry={nodes.Object_11.geometry} material={materials['Base-plast']} scale={0.41} />
          <mesh geometry={nodes.Object_13.geometry} material={materials['Base-glossy']} scale={0.41} />
        </group>
      </group>
      <group position={[6.213, 9.824, -3.275]} rotation={[-Math.PI / 2, 0, 0]} scale={5.843}>
        <group rotation={[Math.PI / 2, 0, 0]}>
          <mesh geometry={nodes.Object_5001.geometry} material={materials['Lamp-light']} scale={0.41} />
          <mesh geometry={nodes.Object_7001.geometry} material={materials.Rubber} scale={0.41} />
          <mesh geometry={nodes.Object_9001.geometry} material={materials.Metal} scale={0.41} />
          <mesh geometry={nodes.Object_11001.geometry} material={materials['Base-plast']} scale={0.41} />
          <mesh geometry={nodes.Object_13001.geometry} material={materials['Base-glossy']} scale={0.41} />
        </group>
      </group>
      <mesh geometry={nodes.Text.geometry} material={materials['Material.002']} position={[11.009, 29.902, 18.895]} rotation={[Math.PI, 0, Math.PI / 2]} scale={2.19} />
      <mesh geometry={nodes.Text001.geometry} material={materials['Material.003']} position={[12.473, 38.393, -45.551]} rotation={[Math.PI / 2, 0, Math.PI / 2]} scale={7.882} />
      <mesh geometry={nodes.Object_4001.geometry} material={materials['Props.002']} position={[42.245, -7.434, -19.058]} scale={5.48} />
      <mesh geometry={nodes.Plane.geometry} material={materials.grass} position={[-27.34, 8.88, 66.837]} scale={19.538} />
      <mesh geometry={nodes.Plane001.geometry} material={materials.grass} position={[-121.554, 8.88, 66.837]} scale={19.538} />
      <mesh geometry={nodes.Plane002.geometry} material={materials.grass} position={[-121.554, 8.88, 25.492]} scale={19.538} />
      <mesh geometry={nodes.Plane003.geometry} material={materials.grass} position={[-121.554, 8.88, -15.907]} scale={19.538} />
      <mesh geometry={nodes.Plane004.geometry} material={materials.grass} position={[-121.554, 8.88, -55.276]} scale={19.538} />
      <mesh geometry={nodes.Plane005.geometry} material={materials.grass} position={[-28.48, 8.88, -59.434]} scale={[19.538, 19.538, 15]} />
      <mesh geometry={nodes.Plane006.geometry} material={materials.grass} position={[65.674, 8.88, 66.837]} scale={19.538} />
      <mesh geometry={nodes.Plane007.geometry} material={materials.grass} position={[65.674, 8.88, 25.492]} scale={19.538} />
      <mesh geometry={nodes.Plane008.geometry} material={materials.grass} position={[65.674, 8.88, -15.907]} scale={19.538} />
      <mesh geometry={nodes.Plane009.geometry} material={materials.grass} position={[65.674, 8.88, -55.276]} scale={19.538} />
      <mesh geometry={nodes.Plane010.geometry} material={materials.grass} position={[-121.554, 8.88, -90.298]} scale={19.538} />
      <mesh geometry={nodes.Plane011.geometry} material={materials.grass} position={[-28.48, 8.88, -92.259]} scale={[19.538, 19.538, 18]} />
      <mesh geometry={nodes.Plane012.geometry} material={materials.grass} position={[65.674, 8.88, -90.298]} scale={19.538} />
    </group>
  )
}


const Modelrender = () => {
  return (
    <Canvas>
      <Suspense>
        <ambientLight  intensity={0}/>
      <Stars radius={100} depth={50} count={1000} factor={4} saturation={0} fade speed={1} color={"orange"} />
      <color attach="background" args={['black']} />

        {/* <Gopher /> 
        <Shoe /> 
        <Docker/>  */}
        <Meta/>
      </Suspense>
      <OrbitControls />
    </Canvas>
  );
};
export default Modelrender;
