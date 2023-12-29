/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.16 .\gopher.glb 
Author: suguru (https://sketchfab.com/suguru)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/gopher-dcab77f1912a40da8fe05e2b49a79485
Title: Gopher
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function Model(props) {
  const { nodes, materials } = useGLTF('/gopher.glb')
  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <group position={[-1.152, -0.525, 2.8]} rotation={[0, Math.PI / 2, 0]} scale={2}>
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

useGLTF.preload('/gopher.glb')