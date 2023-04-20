import { Stats, OrbitControls, useGLTF, Environment } from "@react-three/drei";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { useRef, useState } from "react";
import { Vector3 } from "three";
import ExhibitionItems from "./smartphone/ExhibitionItems";

export default function Test() {
  const ref = useRef<any>();

  return (
    <Canvas camera={{ position: [10, 10, 10] }} shadows>
      <directionalLight
        intensity={1}
        castShadow
        shadow-bias={-0.0002}
        shadow-mapSize={[2048, 2048]}
        position={[85.0, 80.0, 70.0]}
        shadow-camera-left={-30}
        shadow-camera-right={30}
        shadow-camera-top={30}
        shadow-camera-bottom={-30}
      />
      <OrbitControls
        ref={ref}
        target={[0, 5, 0]}
        minPolarAngle={Math.PI / 2}
        maxPolarAngle={Math.PI / 2}
      />
      <ExhibitionItems controls={ref} />
      <Stats />
    </Canvas>
  );
}
