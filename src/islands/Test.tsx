import { Stats, OrbitControls, useGLTF, Environment } from "@react-three/drei";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { useRef, useState } from "react";
import { Vector3 } from "three";
import ExhibitionItems from "./ExhibitionItems";

function Arena({ controls, lerping, setLerping }: any) {
  const { scene } = useGLTF(
    "https://cdn.jsdelivr.net/gh/Sean-Bradley/React-Three-Fiber-Boilerplate@camera/public/models/collision-world.glb"
  );

  const [to, setTo] = useState(new Vector3(0, 5, 0));
  const [target, setTarget] = useState(new Vector3(0, 5, 0));

  useFrame(({ camera }, delta) => {
    if (lerping) {
      camera.position.lerp(to, delta);
      controls.current.target.lerp(target, delta);
    }
  });

  const state = useThree();

  return (
    <>
      {/* <primitive
        object={wall1}
        castShadow
        receiveShadow
        material-envMapIntensity={0.4}
        onDoubleClick={(e: any) => {
          const n = e.intersections[0].point.clone();
          const value = new Vector3(n.x, 5, n.z);
          setTo(e.intersections[0].point.clone());
          setTarget(e.intersections[0].point.clone());
          setLerping(true);
        }}
      /> */}
      <ExhibitionItems controls={controls} />
    </>
  );
}

export default function App() {
  const ref = useRef<any>();
  const [lerping, setLerping] = useState(false);

  return (
    <Canvas
      camera={{ position: [10, 10, 10] }}
      onPointerDown={() => setLerping(false)}
      onWheel={() => setLerping(false)}
      shadows
    >
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
      {/* <Environment
        files="https://cdn.jsdelivr.net/gh/Sean-Bradley/React-Three-Fiber-Boilerplate@camera/public/img/drakensberg_solitary_mountain_1k.hdr"
        background
      /> */}
      <OrbitControls ref={ref} target={[0, 5, 0]} />
      <Arena controls={ref} lerping={lerping} setLerping={setLerping} />
      <Stats />
    </Canvas>
  );
}
