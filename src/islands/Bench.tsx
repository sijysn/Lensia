import * as React from "react";
import * as Fiber from "@react-three/fiber";
import * as Drei from "@react-three/drei";

export default () => {
  const { scene } = Drei.useGLTF("http://localhost:3000/bench.glb");

  return (
    <React.Suspense fallback={<p>...loading...</p>}>
      <Fiber.Canvas>
        <mesh>
          <Drei.Sky
            distance={450000}
            sunPosition={[0, 1, 1]}
            inclination={0}
            azimuth={0.25}
          />
          <Drei.Stage controls={null}>
            <group dispose={null}>
              <primitive scale={[1, 1, 1]} object={scene} />
            </group>
          </Drei.Stage>
          <Drei.PointerLockControls selector="#button" />
        </mesh>
      </Fiber.Canvas>
    </React.Suspense>
  );
};
