import * as Drei from "@react-three/drei";
import * as THREE from "three";
import * as React from "react";

const Meshes: React.FC = () => {
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
      <group>
        <Drei.Stage>
          <mesh visible={false} position={[0, 5, 0]}>
            <planeGeometry args={[1, 16, 1]} />
          </mesh>
        </Drei.Stage>

        <mesh
          scale={[0.4, 0.4, 0.3]}
          position={[12, -1, 5]}
          rotation={[0, Math.PI / 2, 0]}
        >
          <primitive object={Bench.scene} />
        </mesh>

        <mesh position={[24, 12, -2]} rotation={[0, Math.PI * 1.5, 0]}>
          <planeGeometry args={[10, 10, 1]} />
          <meshStandardMaterial map={titleTexture} />
        </mesh>
        <mesh position={[24, 4, -3]} rotation={[0, Math.PI * 1.5, 0]}>
          <planeGeometry args={[6, 4, 1]} />
          <meshStandardMaterial map={mochanTexture} />
        </mesh>
        <mesh position={[24, 5, 6]} rotation={[0, Math.PI * 1.5, 0]}>
          <planeGeometry args={[8, 8, 1]} />
          <meshStandardMaterial map={description2Texture} />
        </mesh>
        <mesh position={[24, 4, 14]} rotation={[0, Math.PI * 1.5, 0]}>
          <planeGeometry args={[4, 4, 1]} />
          <meshStandardMaterial map={logoTexture} />
        </mesh>

        <mesh scale={[5, 5, 0.2]} position={[0, 4, -24.9]} castShadow>
          <boxGeometry />
          <meshStandardMaterial map={sakura1Texture} />
        </mesh>
        <mesh scale={[6, 4, 0.2]} position={[-18, 4, -24.9]}>
          <boxGeometry />
          <meshStandardMaterial map={sakura2Texture} />
        </mesh>
        <mesh scale={[6, 4, 0.2]} position={[-9, 4, -24.9]}>
          <boxGeometry />
          <meshStandardMaterial map={sakura3Texture} />
        </mesh>
        <mesh scale={[6, 4, 0.2]} position={[9, 4, -24.9]}>
          <boxGeometry />
          <meshStandardMaterial map={sakura4Texture} />
        </mesh>
        <mesh scale={[6, 4, 0.2]} position={[18, 4, -24.9]}>
          <boxGeometry />
          <meshStandardMaterial map={sakura5Texture} />
        </mesh>

        <mesh
          scale={[6, 4, 0.2]}
          position={[-24.9, 4, -12]}
          rotation={[0, Math.PI * 0.5, 0]}
        >
          <boxGeometry />
          <meshStandardMaterial map={shadowTexture} />
        </mesh>
        <mesh
          scale={[6, 4, 0.2]}
          position={[-24.9, 4, 0]}
          rotation={[0, Math.PI * 0.5, 0]}
        >
          <boxGeometry />
          <meshStandardMaterial map={tableTexture} />
        </mesh>
        <mesh position={[-24.9, 4, 16]} rotation={[0, Math.PI * 0.5, 0]}>
          <planeGeometry args={[8, 8, 1]} />
          <meshStandardMaterial color={new THREE.Color(0x000000)} />
        </mesh>

        <mesh
          scale={[6, 4, 0.2]}
          position={[-12, 4, 24.9]}
          rotation={[0, Math.PI, 0]}
        >
          <boxGeometry />
          <meshStandardMaterial map={postTexture} />
        </mesh>
        <mesh
          scale={[6, 4, 0.2]}
          position={[-4, 4, 24.9]}
          rotation={[0, Math.PI, 0]}
        >
          <boxGeometry />
          <meshStandardMaterial map={parliamentTexture} />
        </mesh>
        <mesh
          scale={[6, 4, 0.2]}
          position={[4, 4, 24.9]}
          rotation={[0, Math.PI, 0]}
        >
          <boxGeometry />
          <meshStandardMaterial map={pumpkin1Texture} />
        </mesh>
        <mesh
          scale={[6, 4, 0.2]}
          position={[12, 4, 24.9]}
          rotation={[0, Math.PI, 0]}
        >
          <boxGeometry />
          <meshStandardMaterial map={pumpkin2Texture} />
        </mesh>

        <mesh position={[0, 10, -25]}>
          <boxGeometry args={[50, 20, 0.1]} />
          <meshStandardMaterial color="white" />
        </mesh>
        <mesh position={[0, 10, 25]}>
          <boxGeometry args={[50, 20, 0.1]} />
          <meshStandardMaterial color="white" />
        </mesh>
        <mesh position={[25, 10, 0]}>
          <boxGeometry args={[0.1, 20, 50]} />
          <meshStandardMaterial color="white" />
        </mesh>
        <mesh position={[-25, 10, 0]}>
          <boxGeometry args={[0.1, 20, 50]} />
          <meshStandardMaterial color="white" />
        </mesh>

        <mesh position={[0, 20, 0]}>
          <boxGeometry args={[50, 0.1, 50]} />
          <meshStandardMaterial color="white" />
        </mesh>

        <mesh position={[0, 0, 0]}>
          <boxGeometry args={[50, 0.1, 50]} />
          <meshStandardMaterial map={floreTexture} />
          {/* <Drei.MeshReflectorMaterial
            blur={[300, 100]}
            resolution={2048}
            mixBlur={1}
            mixStrength={50}
            roughness={1}
            depthScale={1.2}
            minDepthThreshold={0.4}
            maxDepthThreshold={1.4}
            metalness={0.5}
            mirror={1}
          /> */}
        </mesh>
        <Drei.Environment preset="city" />
      </group>
    ),
    []
  );
};
export default Meshes;
