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

  const nemophila1Texture = textureLoader.load("/img/nemophila1.jpg");
  const rapeFlower1Texture = textureLoader.load("/img/rape-flower1.jpg");
  const nemophila3Texture = textureLoader.load("/img/nemophila3.jpg");

  const mochanTexture = textureLoader.load("/img/mochan.jpg");

  const asakusa1Texture = textureLoader.load("/img/asakusa1.jpg");
  const asakusa2Texture = textureLoader.load("/img/asakusa2.jpg");
  const asakusa3Texture = textureLoader.load("/img/asakusa3.jpg");

  const wallTexture = textureLoader.load("/img/wall1.jpg");
  const floorTexture = textureLoader.load("/img/floor1.jpg");

  floorTexture.wrapS = floorTexture.wrapT = THREE.RepeatWrapping; // 画像を繰り返しにする
  floorTexture.repeat.set(2, 2); // 繰り返す回数

  const sakura1Ref = React.useRef<any>();
  const sakura2Ref = React.useRef<any>();
  const sakura3Ref = React.useRef<any>();
  const sakura4Ref = React.useRef<any>();
  const sakura5Ref = React.useRef<any>();

  const titleRef = React.useRef<any>();

  const nemophila1Ref = React.useRef<any>();
  const rapeFlower1Ref = React.useRef<any>();
  const nemophila3Ref = React.useRef<any>();

  const asakusa1Ref = React.useRef<any>();
  const asakusa2Ref = React.useRef<any>();
  const asakusa3Ref = React.useRef<any>();

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

    nemophila1Ref.current.target.position.set(-24.9, 4, -12);
    nemophila1Ref.current.target.updateMatrixWorld();

    rapeFlower1Ref.current.target.position.set(-24.9, 4, 0);
    rapeFlower1Ref.current.target.updateMatrixWorld();

    nemophila3Ref.current.target.position.set(-24.9, 4, 12);
    nemophila3Ref.current.target.updateMatrixWorld();

    asakusa1Ref.current.target.position.set(-10, 4, 24.9);
    asakusa1Ref.current.target.updateMatrixWorld();

    asakusa2Ref.current.target.position.set(0, 4, 24.9);
    asakusa2Ref.current.target.updateMatrixWorld();

    asakusa3Ref.current.target.position.set(10, 4, 24.9);
    asakusa3Ref.current.target.updateMatrixWorld();
  });

  return React.useMemo(
    () => (
      <group dispose={null}>
        <hemisphereLight intensity={0.1} />

        <mesh
          receiveShadow
          castShadow
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
        <mesh position={[24, 4, -2.6]} rotation={[0, Math.PI * 1.5, 0]}>
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
          intensity={1.5}
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
          intensity={1.5}
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
          intensity={1.5}
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
          intensity={1.5}
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
          intensity={1.5}
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
          intensity={1.5}
        />

        <mesh
          scale={[4, 6, 0.2]}
          position={[-24.9, 4, -12]}
          rotation={[0, Math.PI * 0.5, 0]}
        >
          <boxGeometry />
          <meshStandardMaterial map={nemophila1Texture} />
        </mesh>
        <Drei.SpotLight
          castShadow
          position={[30, 10, -12]}
          color="orange"
          ref={nemophila1Ref}
          penumbra={1}
          distance={100}
          angle={0.1}
          attenuation={5}
          anglePower={4}
          intensity={1.5}
        />

        <mesh
          scale={[6, 4, 0.2]}
          position={[-24.9, 4, 0]}
          rotation={[0, Math.PI * 0.5, 0]}
        >
          <boxGeometry />
          <meshStandardMaterial map={rapeFlower1Texture} />
        </mesh>
        <Drei.SpotLight
          castShadow
          position={[30, 10, 0]}
          color="orange"
          ref={rapeFlower1Ref}
          penumbra={1}
          distance={100}
          angle={0.1}
          attenuation={5}
          anglePower={4}
          intensity={1.5}
        />

        <mesh
          scale={[6, 4, 0.2]}
          position={[-24.9, 4, 12]}
          rotation={[0, Math.PI * 0.5, 0]}
        >
          <boxGeometry />
          <meshStandardMaterial map={nemophila3Texture} />
        </mesh>
        <Drei.SpotLight
          castShadow
          position={[30, 10, 12]}
          color="orange"
          ref={nemophila3Ref}
          penumbra={1}
          distance={100}
          angle={0.1}
          attenuation={5}
          anglePower={4}
          intensity={2}
        />

        <mesh
          scale={[6, 4, 0.2]}
          position={[-10, 4, 24.9]}
          rotation={[0, Math.PI, 0]}
        >
          <boxGeometry />
          <meshStandardMaterial map={asakusa1Texture} />
        </mesh>
        <Drei.SpotLight
          castShadow
          position={[-10, 10, -30]}
          color="orange"
          ref={asakusa1Ref}
          penumbra={1}
          distance={100}
          angle={0.1}
          attenuation={5}
          anglePower={4}
          intensity={3}
        />

        <mesh
          scale={[6, 4, 0.2]}
          position={[0, 4, 24.9]}
          rotation={[0, Math.PI, 0]}
        >
          <boxGeometry />
          <meshStandardMaterial map={asakusa2Texture} />
        </mesh>
        <Drei.SpotLight
          castShadow
          position={[0, 10, -30]}
          color="orange"
          ref={asakusa2Ref}
          penumbra={1}
          distance={100}
          angle={0.1}
          attenuation={5}
          anglePower={4}
          intensity={3}
        />

        <mesh
          scale={[6, 4, 0.2]}
          position={[10, 4, 24.9]}
          rotation={[0, Math.PI, 0]}
        >
          <boxGeometry />
          <meshStandardMaterial map={asakusa3Texture} />
        </mesh>
        <Drei.SpotLight
          castShadow
          position={[10, 10, -30]}
          color="orange"
          ref={asakusa3Ref}
          penumbra={1}
          distance={100}
          angle={0.1}
          attenuation={5}
          anglePower={4}
          intensity={3}
        />

        <mesh position={[0, 10, -25]} receiveShadow>
          <boxGeometry args={[50, 20, 0.1]} />
          <meshStandardMaterial map={wallTexture} />
        </mesh>
        <mesh position={[0, 10, 25]} receiveShadow>
          <boxGeometry args={[50, 20, 0.1]} />
          <meshStandardMaterial map={wallTexture} />
        </mesh>
        <mesh position={[25, 10, 0]} receiveShadow>
          <boxGeometry args={[0.1, 20, 50]} />
          <meshStandardMaterial map={wallTexture} />
        </mesh>
        <mesh position={[-25, 10, 0]} receiveShadow>
          <boxGeometry args={[0.1, 20, 50]} />
          <meshStandardMaterial map={wallTexture} />
        </mesh>

        <mesh position={[0, 20, 0]}>
          <boxGeometry args={[50, 0.1, 50]} />
          <meshStandardMaterial color={0x191825} />
        </mesh>

        <mesh position={[0, 0, 0]} rotation={[-Math.PI / 2, 0, 0]}>
          <planeGeometry args={[50, 50]} />
          <Drei.MeshReflectorMaterial
            blur={[400, 100]}
            resolution={1024}
            mixBlur={0.5}
            opacity={2}
            depthScale={1.1}
            minDepthThreshold={0.5}
            maxDepthThreshold={1.25}
            roughness={0.5}
            metalness={0.1}
            mirror={1}
            map={floorTexture}
          />
        </mesh>
        <Drei.Environment preset="city" />
      </group>
    ),
    []
  );
};
export default Meshes;
