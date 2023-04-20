import { Stats, OrbitControls, useGLTF, Environment } from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import { useRef, useState } from "react";
import { useControls, button } from "leva";
import { Vector3 } from "three";
// import annotations from "./annotations.json";

function Arena({ controls, lerping, setLerping }: any) {
  const { scene } = useGLTF(
    "https://cdn.jsdelivr.net/gh/Sean-Bradley/React-Three-Fiber-Boilerplate@camera/public/models/collision-world.glb"
  );
  const [to, setTo] = useState(new Vector3(10, 10, 10));
  const [target, setTarget] = useState(new Vector3(0, 1, 0));

  // useControls("Camera", () => {
  //   console.log("creating buttons");

  // using forEach
  // const _buttons = {}
  // annotations.forEach((a) => {
  //   _buttons[a.title] = button(() => {
  //     setTo(a.position)
  //     setTarget(a.lookAt)
  //     setLerping(true)
  //   })
  // })
  // return _buttons

  // using reduce
  //   const _buttons = annotations.reduce(
  //     (acc, a) =>
  //       Object.assign(acc, {
  //         [a.title]: button(() => {
  //           setTo(a.position);
  //           setTarget(a.lookAt);
  //           setLerping(true);
  //         }),
  //       }),
  //     {}
  //   );
  //   return _buttons;
  // });

  useFrame(({ camera }, delta) => {
    if (lerping) {
      camera.position.lerp(to, delta);
      controls.current.target.lerp(target, delta);
    }
  });

  return (
    <>
      <primitive
        object={scene.children[0]}
        castShadow
        receiveShadow
        material-envMapIntensity={0.4}
        onDoubleClick={(e: any) => {
          setTo(e.intersections[0].point.clone());
          setTarget(e.intersections[0].point.clone());
          setLerping(true);
        }}
      />
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
      <Environment
        files="https://cdn.jsdelivr.net/gh/Sean-Bradley/React-Three-Fiber-Boilerplate@camera/public/img/drakensberg_solitary_mountain_1k.hdr"
        background
      />
      <OrbitControls ref={ref} target={[0, 1, 0]} />
      <Arena controls={ref} lerping={lerping} setLerping={setLerping} />
      <Stats />
    </Canvas>
  );
}
