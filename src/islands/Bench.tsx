import * as React from "react";
import * as Fiber from "@react-three/fiber";
import * as Drei from "@react-three/drei";

type Props = {
  onUnlock?: (e?: any) => void;
};

const Bench: React.FC<Props> = ({ onUnlock }) => {
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
          <Drei.Stage>
            <group dispose={null}>
              <primitive scale={[1, 1, 1]} object={scene} />
            </group>
          </Drei.Stage>
          <Drei.PointerLockControls
            selector="#enter-button"
            onUnlock={onUnlock}
          />
        </mesh>
      </Fiber.Canvas>
    </React.Suspense>
  );
};
export default Bench;
