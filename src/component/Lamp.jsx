import React, { useRef,useState,useEffect } from 'react';
import { useFrame } from '@react-three/fiber';
import { Environment, OrbitControls, PerspectiveCamera } from "@react-three/drei";
import { angleToRadians } from '../utils/angle';
import * as THREE from "three";
import gsap from "gsap";

const Lamp = ({isLampOn,level,color}) => {
    const lampRef = useRef();
    const cameraRef = useRef();
    const [currentCameraPosition, setCurrentCameraPosition] = useState([0, 3.85, 15]);
  

    useEffect(() => {
        const newCameraPosition = isLampOn ? [5, 5, 20] : [0, 3.85, 15];
    
        gsap.to(cameraRef.current.position, {
          duration: 1,
          x: newCameraPosition[0],
          y: newCameraPosition[1],
          z: newCameraPosition[2],
          ease:'linear'
        });
    
        setCurrentCameraPosition(newCameraPosition);
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


        {/* Lamp base */}
        <mesh position={[0, -3, 0]} castShadow>
          <cylinderGeometry args={[1, 1, 0.3, 32]} />
          {/* MeshStandardMaterial for the lamp base */}
          <meshStandardMaterial color="darkgray" metalness={0.6} roughness={0.2}/>
        </mesh>

        {/* Lampshade */}
        <mesh position={[0, 1.15, 0]}  castShadow>
          {/* SphereGeometry for the lampshade */}
          <sphereGeometry args={[1, 32, 32]} />
          {/* MeshStandardMaterial for the lampshade */}
          <meshStandardMaterial
          color="#ffffff"
          emissive={isLampOn ? color : '#000000'} // Set emissive color when light is on or off
          emissiveIntensity={isLampOn ? 0.07 * level : 0} // Adjust intensity when light is on or off
          metalness={0.6}
          roughness={0.2}
        />
        </mesh>

      

      </group>

        <mesh rotation={[-(angleToRadians(90)), 0, 0]} position={[0, -3.3, 0]} receiveShadow>
            <planeGeometry args={[20, 20]} />
            <meshStandardMaterial color="#ffffff" />
        </mesh>

        <Environment background>
            <mesh>
                <sphereGeometry args={[50, 100, 100]} />
                <meshBasicMaterial color="#5e548e" side={THREE.BackSide} />
            </mesh>
        </Environment>

        <ambientLight args={["#ffffff", 0.5]}/>

        {/* Spotlight light */}
        <spotLight args={["#ffffff", 10, 7, angleToRadians(45), 0.4]} position={[-3, 1, 2]} castShadow />

    </>
  );
};

export default Lamp;
