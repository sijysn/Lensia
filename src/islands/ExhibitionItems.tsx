import * as Drei from "@react-three/drei";
import * as THREE from "three";
import * as Fiber from "@react-three/fiber";

const ExhibitionItems: React.FC = () => {
  const Bench = Drei.useGLTF("http://localhost:3000/bench.glb");

  // Fiber.useFrame(() => {
  //   Bench.scene.position.set(0, 0, -20);
  // });

  const textureLoader = new THREE.TextureLoader();
  const sakura1Texture = textureLoader.load("/public/img/sakura1.jpg");
  const sakura2Texture = textureLoader.load("/public/img/sakura2.jpg");
  const sakura3Texture = textureLoader.load("/public/img/sakura3.jpg");
  const sakura4Texture = textureLoader.load("/public/img/sakura4.jpg");
  const sakura5Texture = textureLoader.load("/public/img/sakura5.jpg");
  const shadowTexture = textureLoader.load("/public/img/shadow.jpg");
  const tableTexture = textureLoader.load("/public/img/table.jpg");
  const mochanTexture = textureLoader.load("/public/img/mochan.jpg");
  const floreTexture = textureLoader.load("/public/img/flore.jpg");

  floreTexture.wrapS = floreTexture.wrapT = THREE.RepeatWrapping; // 画像を繰り返しにする
  floreTexture.repeat.set(2, 2); // 繰り返す回数

  return (
    <>
      <ambientLight intensity={0.1} />
      <pointLight intensity={1} position={[0, 5, 0]} />
      <Drei.Stage>
        <group scale={[0.5, 0.5, 0.5]}>
          <primitive object={Bench.scene} />
        </group>
      </Drei.Stage>

      <mesh position={[0, 5, -23]}>
        <planeBufferGeometry args={[6, 6, 6]} />
        <meshStandardMaterial map={sakura1Texture} />
      </mesh>
      <mesh position={[-18, 5, -23]}>
        <planeBufferGeometry args={[6, 4, 6]} />
        <meshStandardMaterial map={sakura2Texture} />
      </mesh>
      <mesh position={[-9, 5, -23]}>
        <planeBufferGeometry args={[6, 4, 3]} />
        <meshStandardMaterial map={sakura3Texture} />
      </mesh>
      <mesh position={[9, 5, -23]}>
        <planeBufferGeometry args={[6, 4, 3]} />
        <meshStandardMaterial map={sakura4Texture} />
      </mesh>
      <mesh position={[18, 5, -23]}>
        <planeBufferGeometry args={[6, 4, 6]} />
        <meshStandardMaterial map={sakura5Texture} />
      </mesh>

      <mesh position={[-23, 5, -12]} rotation={[0, Math.PI * 0.5, 0]}>
        <planeBufferGeometry args={[6, 4, 3]} />
        <meshStandardMaterial map={shadowTexture} />
      </mesh>
      <mesh position={[-23, 5, 0]} rotation={[0, Math.PI * 0.5, 0]}>
        <planeBufferGeometry args={[6, 4, 3]} />
        <meshStandardMaterial map={tableTexture} />
      </mesh>

      <mesh position={[0, 0, -25]}>
        <boxBufferGeometry args={[50, 50, 0.1]} />
        <meshStandardMaterial color="lightgray" />
      </mesh>
      <mesh position={[0, 0, 25]}>
        <boxBufferGeometry args={[50, 40, 0.1]} />
        <meshStandardMaterial color="lightgray" />
      </mesh>
      <mesh position={[0, 20, 0]}>
        <boxBufferGeometry args={[50, 0.1, 50]} />
        <meshStandardMaterial color="white" />
      </mesh>
      <mesh position={[25, 0, 0]}>
        <boxBufferGeometry args={[0.1, 40, 50]} />
        <meshStandardMaterial color="lightgray" />
      </mesh>
      <mesh position={[-25, 0, 0]}>
        <boxBufferGeometry args={[0.1, 40, 50]} />
        <meshStandardMaterial color="lightgray" />
      </mesh>

      <mesh position={[0, 0, 0]}>
        <boxBufferGeometry args={[50, 0.1, 50]} />
        <meshStandardMaterial map={floreTexture} />
      </mesh>
    </>
  );
};
export default ExhibitionItems;
