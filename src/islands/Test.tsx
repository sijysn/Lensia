import { Stats, OrbitControls, useGLTF, Environment } from "@react-three/drei";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { useRef, useState, useEffect } from "react";
import {
  Vector3,
  BoxGeometry,
  MeshStandardMaterial,
  Mesh,
  Color,
  Group,
} from "three";
import ExhibitionItems from "./ExhibitionItems";
// import annotations from "./annotations.json";

const wall1 = new Mesh();
wall1.position.set(0, 0, -25);
const wall1geometry = new BoxGeometry(50, 50, 50);
wall1.geometry = wall1geometry;
const wall1material = new MeshStandardMaterial();
wall1material.color = new Color(0xffffff);
wall1.material = wall1material;

const wall2 = new Mesh();
wall2.position.set(0, 0, 25);
const wall2geometry = new BoxGeometry(50, 40, 0.1);
wall2.geometry = wall2geometry;
const wall2material = new MeshStandardMaterial();
wall2material.color = new Color(0xffffff);
wall2.material = wall2material;

const wall3 = new Mesh();
wall3.position.set(25, 0, 0);
const wall3geometry = new BoxGeometry(0.1, 40, 50);
wall3.geometry = wall3geometry;
const wall3material = new MeshStandardMaterial();
wall3material.color = new Color(0xffffff);
wall3.material = wall3material;

const wall4 = new Mesh();
wall4.position.set(-25, 0, 0);
const wall4geometry = new BoxGeometry(0.1, 40, 50);
wall4.geometry = wall4geometry;
const wall4material = new MeshStandardMaterial();
wall4material.color = new Color(0xffffff);
wall4.material = wall4material;

const wall5 = new Mesh();
wall5.position.set(0, 20, 0);
const wall5geometry = new BoxGeometry(50, 0.1, 50);
wall5.geometry = wall5geometry;
const wall5material = new MeshStandardMaterial();
wall5material.color = new Color(0xffffff);
wall5.material = wall5material;

const wall6 = new Mesh();
wall6.position.set(0, 20, 0);
const wall6geometry = new BoxGeometry(50, 0.1, 50);
wall6.geometry = wall6geometry;
const wall6material = new MeshStandardMaterial();
wall6material.color = new Color(0xffffff);
wall6.material = wall6material;

const group = new Group();
group.add(wall1);
group.add(wall2);
group.add(wall3);
group.add(wall4);
group.add(wall5);
group.add(wall6);
// scene.add(wall1);
// scene.add(wall2);
// scene.add(wall3);
// scene.add(wall4);
// scene.add(wall5);
// scene.add(wall6);
// const { scene } = useGLTF("/bench.glb");

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
