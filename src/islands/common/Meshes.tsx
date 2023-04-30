import * as Drei from "@react-three/drei";
import * as Fiber from "@react-three/fiber";
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

  const sakura1Ref = React.useRef<any>();
  const sakura2Ref = React.useRef<any>();
  const sakura3Ref = React.useRef<any>();
  const sakura4Ref = React.useRef<any>();
  const sakura5Ref = React.useRef<any>();

  const titleRef = React.useRef<any>();

  const shadowRef = React.useRef<any>();
  const tableRef = React.useRef<any>();
  const postRef = React.useRef<any>();
  const parliamentRef = React.useRef<any>();
  const pumpkin1Ref = React.useRef<any>();
  const pumpkin2Ref = React.useRef<any>();

  React.useEffect(() => {
    sakura1Ref.current.target.position.set(0, 4, -24.9);
    sakura1Ref.current.target.updateMatrixWorld();

    sakura2Ref.current.target.position.set(-18, 4, -24.9);
    sakura2Ref.current.target.updateMatrixWorld();

    sakura3Ref.current.target.position.set(-9, 4, -24.9);
    sakura3Ref.current.target.updateMatrixWorld();

    sakura4Ref.current.target.position.set(9, 4, -24.9);
    sakura4Ref.current.target.updateMatrixWorld();

    sakura5Ref.current.target.position.set(18, 4, -24.9);
    sakura5Ref.current.target.updateMatrixWorld();

    titleRef.current.target.position.set(24.9, 6, 0);
    titleRef.current.target.updateMatrixWorld();

    shadowRef.current.target.position.set(-24.9, 4, -12);
    shadowRef.current.target.updateMatrixWorld();

    tableRef.current.target.position.set(-24.9, 4, 0);
    tableRef.current.target.updateMatrixWorld();

    postRef.current.target.position.set(-12, 4, 24.9);
    postRef.current.target.updateMatrixWorld();

    parliamentRef.current.target.position.set(-4, 4, 24.9);
    parliamentRef.current.target.updateMatrixWorld();

    pumpkin1Ref.current.target.position.set(4, 4, 24.9);
    pumpkin1Ref.current.target.updateMatrixWorld();

    pumpkin2Ref.current.target.position.set(12, 4, 24.9);
    pumpkin2Ref.current.target.updateMatrixWorld();
  });

  return React.useMemo(
    () => (
      <group>
        <mesh
          scale={[0.4, 0.4, 0.3]}
          position={[12, -1, 5]}
          rotation={[0, Math.PI / 2, 0]}
        >
          <primitive object={Bench.scene} />
        </mesh>

        <Drei.Text
          color={0x404040}
          font="/fonts/NotoSerif-Bold.ttf"
          fontSize={1}
          anchorX="left"
          anchorY="middle"
          position={[24.9, 12, -6]}
          rotation={[0, Math.PI * 1.5, 0]}
          maxWidth={6}
        >
          3D PHOTO EXHIBITION
        </Drei.Text>
        <Drei.Text
          color={0x404040}
          font="/fonts/NotoSerifJP-Regular.otf"
          fontSize={0.4}
          anchorX="left"
          anchorY="middle"
          position={[24.9, 10.4, -6]}
          rotation={[0, Math.PI * 1.5, 0]}
          maxWidth={6}
        >
          3D写真展
        </Drei.Text>
        <Drei.Text
          color={0x404040}
          font="/fonts/NotoSerif-Regular.ttf"
          fontSize={0.4}
          anchorX="left"
          anchorY="middle"
          position={[24.9, 8, -6]}
          rotation={[0, Math.PI * 1.5, 0]}
          maxWidth={6}
        >
          SEIJI YOSHINO
        </Drei.Text>
        <Drei.Text
          color={0x404040}
          font="/fonts/NotoSerif-Regular.ttf"
          fontSize={0.3}
          anchorX="left"
          anchorY="middle"
          position={[24.9, 7.4, -6]}
          rotation={[0, Math.PI * 1.5, 0]}
          maxWidth={6}
        >
          WEB APPLICATION DEVELOPER
        </Drei.Text>
        <mesh position={[24, 4, -3]} rotation={[0, Math.PI * 1.5, 0]}>
          <planeGeometry args={[6, 4, 1]} />
          <meshStandardMaterial map={mochanTexture} />
        </mesh>
        <Drei.Text
          color={0x404040}
          font="/fonts/NotoSerif-Regular.ttf"
          fontSize={0.25}
          anchorX="left"
          anchorY="middle"
          position={[24, 5, 3]}
          rotation={[0, Math.PI * 1.5, 0]}
          maxWidth={6}
        >
          I expressed my own photo exhibition in the browser. The main
          technology stack consists of TypeScript, Three.js, Astro, React Three
          Fiber, React Three Drei, and Tailwind CSS. It is hosted on Vercel. I
          used Blender for modeling.
        </Drei.Text>
        <Drei.Text
          color={0x404040}
          font="/fonts/NotoSerifJP-Regular.otf"
          fontSize={0.25}
          anchorX="left"
          anchorY="middle"
          position={[24, 3, 3]}
          rotation={[0, Math.PI * 1.5, 0]}
          maxWidth={6}
        >
          ブラウザ上に自分の写真展を表現しました。 主な技術スタックはTypeScript,
          Three.js, Astro, React Three Fiber, React Three Drei, Tailwind
          CSSです。 Vercelでホスティングしています。
          モデリングには、Blenderを使いました。
        </Drei.Text>
        <Drei.SpotLight
          position={[-30, 10, 0]}
          color="orange"
          ref={titleRef}
          penumbra={1}
          distance={100}
          angle={0.2}
          attenuation={5}
          anglePower={4}
          intensity={2}
        />

        <mesh scale={[5, 5, 0.2]} position={[0, 4, -24.9]} receiveShadow>
          <boxGeometry />
          <meshStandardMaterial map={sakura1Texture} />
        </mesh>
        <Drei.SpotLight
          castShadow
          position={[0, 10, 30]}
          color="orange"
          ref={sakura1Ref}
          penumbra={1}
          distance={100}
          angle={0.1}
          attenuation={5}
          anglePower={4}
          intensity={2}
        />

        <mesh scale={[6, 4, 0.2]} position={[-18, 4, -24.9]} receiveShadow>
          <boxGeometry />
          <meshStandardMaterial map={sakura2Texture} />
        </mesh>
        <Drei.SpotLight
          castShadow
          position={[-18, 10, 30]}
          color="orange"
          ref={sakura2Ref}
          penumbra={1}
          distance={100}
          angle={0.1}
          attenuation={5}
          anglePower={4}
          intensity={2}
        />
        <mesh scale={[6, 4, 0.2]} position={[-9, 4, -24.9]} receiveShadow>
          <boxGeometry />
          <meshStandardMaterial map={sakura3Texture} />
        </mesh>
        <Drei.SpotLight
          castShadow
          position={[-9, 10, 30]}
          color="orange"
          ref={sakura3Ref}
          penumbra={1}
          distance={100}
          angle={0.1}
          attenuation={5}
          anglePower={4}
          intensity={2}
        />
        <mesh scale={[6, 4, 0.2]} position={[9, 4, -24.9]}>
          <boxGeometry />
          <meshStandardMaterial map={sakura4Texture} />
        </mesh>
        <Drei.SpotLight
          castShadow
          position={[9, 10, 30]}
          color="orange"
          ref={sakura4Ref}
          penumbra={1}
          distance={100}
          angle={0.1}
          attenuation={5}
          anglePower={4}
          intensity={2}
        />
        <mesh scale={[6, 4, 0.2]} position={[18, 4, -24.9]}>
          <boxGeometry />
          <meshStandardMaterial map={sakura5Texture} />
        </mesh>
        <Drei.SpotLight
          castShadow
          position={[18, 10, 30]}
          color="orange"
          ref={sakura5Ref}
          penumbra={1}
          distance={100}
          angle={0.1}
          attenuation={5}
          anglePower={4}
          intensity={2}
        />

        <mesh
          scale={[6, 4, 0.2]}
          position={[-24.9, 4, -12]}
          rotation={[0, Math.PI * 0.5, 0]}
        >
          <boxGeometry />
          <meshStandardMaterial map={shadowTexture} />
        </mesh>
        <Drei.SpotLight
          castShadow
          position={[30, 10, -12]}
          color="orange"
          ref={shadowRef}
          penumbra={1}
          distance={100}
          angle={0.1}
          attenuation={5}
          anglePower={4}
          intensity={2}
        />

        <mesh
          scale={[6, 4, 0.2]}
          position={[-24.9, 4, 0]}
          rotation={[0, Math.PI * 0.5, 0]}
        >
          <boxGeometry />
          <meshStandardMaterial map={tableTexture} />
        </mesh>
        <Drei.SpotLight
          castShadow
          position={[30, 10, 0]}
          color="orange"
          ref={tableRef}
          penumbra={1}
          distance={100}
          angle={0.1}
          attenuation={5}
          anglePower={4}
          intensity={2}
        />

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
        <Drei.SpotLight
          castShadow
          position={[-12, 10, -30]}
          color="orange"
          ref={postRef}
          penumbra={1}
          distance={100}
          angle={0.1}
          attenuation={5}
          anglePower={4}
          intensity={2}
        />

        <mesh
          scale={[6, 4, 0.2]}
          position={[-4, 4, 24.9]}
          rotation={[0, Math.PI, 0]}
        >
          <boxGeometry />
          <meshStandardMaterial map={parliamentTexture} />
        </mesh>
        <Drei.SpotLight
          castShadow
          position={[-4, 10, -30]}
          color="orange"
          ref={parliamentRef}
          penumbra={1}
          distance={100}
          angle={0.1}
          attenuation={5}
          anglePower={4}
          intensity={2}
        />

        <mesh
          scale={[6, 4, 0.2]}
          position={[4, 4, 24.9]}
          rotation={[0, Math.PI, 0]}
        >
          <boxGeometry />
          <meshStandardMaterial map={pumpkin1Texture} />
        </mesh>
        <Drei.SpotLight
          castShadow
          position={[4, 10, -30]}
          color="orange"
          ref={pumpkin1Ref}
          penumbra={1}
          distance={100}
          angle={0.1}
          attenuation={5}
          anglePower={4}
          intensity={2}
        />

        <mesh
          scale={[6, 4, 0.2]}
          position={[12, 4, 24.9]}
          rotation={[0, Math.PI, 0]}
        >
          <boxGeometry />
          <meshStandardMaterial map={pumpkin2Texture} />
        </mesh>
        <Drei.SpotLight
          castShadow
          position={[12, 10, -30]}
          color="orange"
          ref={pumpkin2Ref}
          penumbra={1}
          distance={100}
          angle={0.1}
          attenuation={5}
          anglePower={4}
          intensity={2}
        />

        <mesh position={[0, 10, -25]} receiveShadow>
          <boxGeometry args={[50, 20, 0.1]} />
          <meshStandardMaterial color="white" />
        </mesh>
        <mesh position={[0, 10, 25]} receiveShadow>
          <boxGeometry args={[50, 20, 0.1]} />
          <meshStandardMaterial color="white" />
        </mesh>
        <mesh position={[25, 10, 0]} receiveShadow>
          <boxGeometry args={[0.1, 20, 50]} />
          <meshStandardMaterial color="white" />
        </mesh>
        <mesh position={[-25, 10, 0]} receiveShadow>
          <boxGeometry args={[0.1, 20, 50]} />
          <meshStandardMaterial color="white" />
        </mesh>

        <mesh position={[0, 20, 0]}>
          <boxGeometry args={[50, 0.1, 50]} />
          <meshStandardMaterial color="white" />
        </mesh>

        <mesh position={[0, 0, 0]} receiveShadow>
          <boxGeometry args={[50, 0.1, 50]} />
          <Drei.MeshReflectorMaterial
            blur={[300, 100]}
            resolution={2048}
            mixBlur={1}
            mixStrength={50}
            roughness={1}
            // depthScale={1.2}
            // minDepthThreshold={0.4}
            // maxDepthThreshold={1.4}
            metalness={0.5}
            mirror={1}
            map={floreTexture}
          />
        </mesh>
        <Drei.Environment preset="city" />
      </group>
    ),
    []
  );
};
export default Meshes;
