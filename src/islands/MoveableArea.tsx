import * as React from "react";
import * as Drei from "@react-three/drei";
import * as THREE from "three";

type Props = {
  onUnlock?: (e?: any) => void;
};

const MoveableArea: React.FC<Props> = ({ onUnlock }) => {
  const Bench = Drei.useGLTF("http://localhost:3000/bench.glb");

  const controlsRef = React.useRef<any>(null);

  const textureLoader = new THREE.TextureLoader();
  const sakuraTexture = textureLoader.load("/public/img/sakura.jpg");
  const floreTexture = textureLoader.load("/public/img/flore.jpg");

  floreTexture.wrapS = floreTexture.wrapT = THREE.RepeatWrapping; // 画像を繰り返しにする
  floreTexture.repeat.set(2, 2); // 繰り返す回数

  const MovementBounds = {
    xMin: -20,
    xMax: 20,
    zMin: -20,
    zMax: 20,
  };
  const onKeyDown = (e: KeyboardEvent) => {
    if (!controlsRef.current) {
      return;
    }
    const movementDistance = 0.5;
    switch (e.key) {
      case "ArrowUp":
        controlsRef.current.moveForward(movementDistance);
        break;
      case "ArrowRight":
        controlsRef.current.moveRight(-movementDistance);
        break;
      case "ArrowDown":
        controlsRef.current.moveForward(-movementDistance);
        break;
      case "ArrowLeft":
        controlsRef.current.moveRight(movementDistance);
        break;
      default:
        break;
    }
    // Check if the new position is outside the movement bounds and reset it if necessary
    const { x, z } = controlsRef.current.getObject().position;
    controlsRef.current
      .getObject()
      .position.setX(
        Math.min(Math.max(x, MovementBounds.xMin), MovementBounds.xMax)
      );
    controlsRef.current
      .getObject()
      .position.setZ(
        Math.min(Math.max(z, MovementBounds.zMin), MovementBounds.zMax)
      );
  };

  document.addEventListener("keydown", onKeyDown);

  return (
    <group>
      <ambientLight />
      <pointLight position={[10, 10, 10]} />
      <Drei.Stage>
        <group dispose={null}>
          <primitive scale={[1, 1, 1]} object={Bench.scene} />
        </group>
      </Drei.Stage>
      <Drei.Stage>
        <group dispose={null}>
          <primitive
            scale={[0.5, 0.5, 0.5]}
            position={[5, 5, 5]}
            object={Bench.scene}
          />
        </group>
      </Drei.Stage>
      <mesh position={[0, 5, -23]}>
        <planeBufferGeometry args={[4, 4, 3]} />
        <meshStandardMaterial map={sakuraTexture} />
      </mesh>
      <mesh position={[0, 0, -25]}>
        <boxBufferGeometry args={[50, 25, 0.1]} />
        <meshStandardMaterial color="lightgray" />
      </mesh>

      <mesh position={[0, 0, 25]}>
        <boxBufferGeometry args={[50, 25, 0.1]} />
        <meshStandardMaterial color="lightgray" />
      </mesh>

      <mesh position={[0, 12.5, 0]}>
        <boxBufferGeometry args={[50, 0.1, 50]} />
        <meshStandardMaterial color="lightgray" />
      </mesh>

      <mesh position={[0, 0, 0]}>
        <boxBufferGeometry args={[50, 0.1, 50]} />
        <meshStandardMaterial map={floreTexture} />
      </mesh>

      <mesh position={[25, 0, 0]}>
        <boxBufferGeometry args={[0.1, 25, 50]} />
        <meshStandardMaterial color="lightgray" />
      </mesh>
      <mesh position={[-25, 0, 0]}>
        <boxBufferGeometry args={[0.1, 25, 50]} />
        <meshStandardMaterial color="lightgray" />
      </mesh>
      <Drei.PointerLockControls
        selector="#enter-button"
        onUnlock={onUnlock}
        ref={controlsRef}
      />
    </group>
  );
};
export default MoveableArea;
