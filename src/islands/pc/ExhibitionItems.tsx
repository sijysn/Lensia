import * as Drei from "@react-three/drei";
import * as THREE from "three";
import * as React from "react";

const ExhibitionItems: React.FC = () => {
  const Bench = Drei.useGLTF("/bench.glb");

  const textureLoader = new THREE.TextureLoader();
  const sakura1Texture = textureLoader.load("/img/sakura1.jpg");
  const sakura2Texture = textureLoader.load("/img/sakura2.jpg");
  const sakura3Texture = textureLoader.load("/img/sakura3.jpg");
  const sakura4Texture = textureLoader.load("/img/sakura4.jpg");
  const sakura5Texture = textureLoader.load("/img/sakura5.jpg");

  const titleTexture = textureLoader.load("/img/title.png");
  const description2Texture = textureLoader.load("/img/description2.png");
  const logoTexture = textureLoader.load("/img/logo.png");

  const shadowTexture = textureLoader.load("/img/shadow.jpg");
  const tableTexture = textureLoader.load("/img/table.jpg");
  const mochanTexture = textureLoader.load("/img/mochan.jpg");

  const parliamentTexture = textureLoader.load("/img/parliament.jpg");
  const pumpkin1Texture = textureLoader.load("/img/pumpkin1.jpg");
  const pumpkin2Texture = textureLoader.load("/img/pumpkin2.jpg");
  const postTexture = textureLoader.load("/img/post.jpg");

  const floreTexture = textureLoader.load("/img/flore.jpg");

  floreTexture.wrapS = floreTexture.wrapT = THREE.RepeatWrapping; // 画像を繰り返しにする
  floreTexture.repeat.set(2, 2); // 繰り返す回数

  return React.useMemo(
    () => (
      <>
        <ambientLight intensity={0.1} />
        <ambientLight intensity={1} position={[-24.0, 0, 16]} />
        <pointLight intensity={0.1} position={[0, 5, 0]} />
        <Drei.Stage>
          <group scale={[0.4, 0.4, 0.4]}>
            <primitive object={Bench.scene} />
          </group>
        </Drei.Stage>

        <mesh position={[24, 12, -2]} rotation={[0, Math.PI * 1.5, 0]}>
          <planeBufferGeometry args={[10, 10, 1]} />
          <meshStandardMaterial map={titleTexture} />
        </mesh>
        <mesh position={[24, 5, -3]} rotation={[0, Math.PI * 1.5, 0]}>
          <planeBufferGeometry args={[6, 4, 4]} />
          <meshStandardMaterial map={mochanTexture} />
        </mesh>
        <mesh position={[24, 5, 6]} rotation={[0, Math.PI * 1.5, 0]}>
          <planeBufferGeometry args={[8, 8, 8]} />
          <meshStandardMaterial map={description2Texture} />
        </mesh>
        <mesh position={[24, 5, 14]} rotation={[0, Math.PI * 1.5, 0]}>
          <planeBufferGeometry args={[4, 4, 4]} />
          <meshStandardMaterial map={logoTexture} />
        </mesh>

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
        <mesh position={[-24.9, 0, 16]} rotation={[0, Math.PI * 0.5, 0]}>
          <planeBufferGeometry args={[8, 16, 6]} />
          <meshStandardMaterial color={new THREE.Color(0x000000)} />
        </mesh>

        <mesh position={[-12, 5, 23]} rotation={[0, Math.PI, 0]}>
          <planeBufferGeometry args={[6, 4, 3]} />
          <meshStandardMaterial map={postTexture} />
        </mesh>
        <mesh position={[-4, 5, 23]} rotation={[0, Math.PI, 0]}>
          <planeBufferGeometry args={[6, 4, 3]} />
          <meshStandardMaterial map={parliamentTexture} />
        </mesh>
        <mesh position={[4, 5, 23]} rotation={[0, Math.PI, 0]}>
          <planeBufferGeometry args={[6, 4, 3]} />
          <meshStandardMaterial map={pumpkin1Texture} />
        </mesh>
        <mesh position={[12, 5, 23]} rotation={[0, Math.PI, 0]}>
          <planeBufferGeometry args={[6, 4, 3]} />
          <meshStandardMaterial map={pumpkin2Texture} />
        </mesh>

        <mesh position={[0, 0, -25]}>
          <boxBufferGeometry args={[50, 50, 0.1]} />
          <meshStandardMaterial color="white" />
        </mesh>
        <mesh position={[0, 0, 25]}>
          <boxBufferGeometry args={[50, 40, 0.1]} />
          <meshStandardMaterial color="white" />
        </mesh>
        <mesh position={[25, 0, 0]}>
          <boxBufferGeometry args={[0.1, 40, 50]} />
          <meshStandardMaterial color="white" />
        </mesh>
        <mesh position={[-25, 0, 0]}>
          <boxBufferGeometry args={[0.1, 40, 50]} />
          <meshStandardMaterial color="white" />
        </mesh>

        <mesh position={[0, 20, 0]}>
          <boxBufferGeometry args={[50, 0.1, 50]} />
          <meshStandardMaterial color="white" />
        </mesh>

        <mesh position={[0, 0, 0]}>
          <boxBufferGeometry args={[50, 0.1, 50]} />
          <meshStandardMaterial map={floreTexture} />
        </mesh>
      </>
    ),
    []
  );
};
export default ExhibitionItems;
