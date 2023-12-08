import React, { useRef,useState,useEffect } from 'react';
import { useFrame } from '@react-three/fiber';
import { Environment, OrbitControls, PerspectiveCamera } from "@react-three/drei";
import { angleToRadians } from '../utils/angle';
import * as THREE from "three";
import gsap from "gsap";

const Lamp = ({isLampOn,level,color}) => {
    const lampRef = useRef();
    const cameraRef = useRef();
  

    useEffect(() => {
        const newCameraPosition = isLampOn ? [5, 5, 20] : [0, 3.85, 15];
    
        gsap.to(cameraRef.current.position, {
          duration: 1,
          x: newCameraPosition[0],
          y: newCameraPosition[1],
          z: newCameraPosition[2],
          ease:'linear'
        });
    
      }, [isLampOn]);
  

  return (
    <>
      <PerspectiveCamera makeDefault ref={cameraRef}/>
      <OrbitControls minPolarAngle={angleToRadians(60)} maxPolarAngle={angleToRadians(80)} />
      

      <group ref={lampRef} castShadow>
        <mesh position={[0, -1.35, 0]} castShadow>
          <cylinderGeometry args={[0.1, 0.1, 3, 32]} />
          <meshStandardMaterial color="gray" metalness={0.6} roughness={0.5}/>
        </mesh>


        <mesh position={[0, -3, 0]} castShadow>
          <cylinderGeometry args={[1, 1, 0.3, 32]} />
          <meshStandardMaterial color="darkgray" metalness={0.4} roughness={0.4}/>
        </mesh>

        <mesh position={[0, 1.15, 0]}  castShadow>
          <sphereGeometry args={[1, 32, 32]} />
          <meshStandardMaterial
          color="#ffffff"
          emissive={isLampOn ? color : '#000000'} 
          emissiveIntensity={isLampOn ? 0.07 * level : 0} 
          metalness={0.6}
          roughness={0.4}
        />
        </mesh>

      

      </group>

        <mesh rotation={[-(angleToRadians(90)), 0, 0]} position={[0, -3.3, 0]} receiveShadow>
            <planeGeometry args={[20, 20]} />
            <meshStandardMaterial color="#ffffff" metalness={0.4} roughness={0.4}/>
        </mesh>

        <Environment background>
            <mesh>
                <sphereGeometry args={[50, 100, 100]} />
                <meshBasicMaterial color="#5e548e" side={THREE.BackSide} />
            </mesh>
        </Environment>

        <ambientLight args={["#ffffff", 0.5]}/>

        <spotLight args={["#ffffff", 100, 50, angleToRadians(45), 0.2]} position={[-5, 3, 2]} castShadow />
        <pointLight args={[isLampOn ? color : '#000000', isLampOn ? 30 * level : 0, 10, 2]} position={[0, 2, 0]} castShadow />
        <pointLight args={[isLampOn ? color : '#000000', isLampOn ? 30 * level : 0, 10, 4]} position={[0,-1.2, 0]} castShadow />

    </>
  );
};

export default Lamp;
