// Model.js
import React, { useRef } from 'react';
import { useFrame } from 'react-three-fiber';
import { BoxGeometry, MeshBasicMaterial, Mesh } from 'three';

const Model = ({ type }) => {
  const mesh = useRef();

  useFrame(() => {
    if (mesh.current) {
      // Rotate the model
      mesh.current.rotation.x += 0.01;
      mesh.current.rotation.y += 0.01;
    }
  });

  const renderModel = () => {
    switch (type) {
      case 'docker':
        return <boxGeometry args={[1, 1, 1]} />;
      case 'go':
        return <boxGeometry args={[1.5, 1.5, 1.5]} />;
      default:
        return null;
    }
  };

  return (
    <mesh ref={mesh}>
      {renderModel()}
      <meshBasicMaterial color={0x00ff00} wireframe />
    </mesh>
  );
};

export default Model;
