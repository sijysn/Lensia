import * as React from "react";
import * as Drei from "@react-three/drei";
import * as Fiber from "@react-three/fiber";
import ExhibitionItems from "./ExhibitionItems";
import * as THREE from "three";

type Props = {
  onUnlock: (e?: any) => void;
  isLocked: boolean;
  endLoading: () => void;
};

const MovementBounds = {
  xMin: -20,
  xMax: 20,
  zMin: -20,
  zMax: 20,
};

const MoveableArea: React.FC<Props> = ({ onUnlock, isLocked, endLoading }) => {
  const controlsRef = React.useRef<any>(null);

  const onKeyDown = (e: KeyboardEvent) => {
    if (!controlsRef.current || !isLocked) {
      return;
    }
    const movementDistance = 0.5;
    switch (e.key) {
      case "ArrowUp":
        controlsRef.current.moveForward(movementDistance);
        break;
      case "ArrowLeft":
        controlsRef.current.moveRight(-movementDistance);
        break;
      case "ArrowDown":
        controlsRef.current.moveForward(-movementDistance);
        break;
      case "ArrowRight":
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

  var startX: number;
  var startY: number;
  const onTouchStart = (e: TouchEvent) => {
    if (!controlsRef.current) {
      return;
    }
    startX = e.touches[0].clientX;
    startY = e.touches[0].clientY;
  };

  const onTouchMove = (e: TouchEvent) => {
    if (!controlsRef.current) {
      return;
    }
    if (e.touches[0].clientX - startX > 70) {
      controlsRef.current.moveRight(0.2);
    }
    if (startY - e.touches[0].clientY > 70) {
      controlsRef.current.moveForward(0.2);
    }
    if (startX - e.touches[0].clientX > 70) {
      controlsRef.current.moveRight(-0.2);
    }
    if (e.touches[0].clientY - startY > 70) {
      controlsRef.current.moveForward(-0.2);
    }
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

  React.useEffect(() => {
    document.addEventListener("keydown", onKeyDown);
    document.addEventListener("touchstart", onTouchStart);
    document.addEventListener("touchmove", onTouchMove);
    endLoading();

    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.removeEventListener("touchstart", onTouchStart);
      document.removeEventListener("touchmove", onTouchMove);
    };
  });

  const isSmartPhone = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

  const speed = 0.1; // 移動スピード
  const rotationSpeed = 0.002; // 回転スピード

  Fiber.useFrame(() => {
    // ジャイロスコープの傾きに応じてカメラの位置と角度を更新
    if (controlsRef.current && window.DeviceOrientationEvent) {
      window.addEventListener(
        "deviceorientation",
        (event: DeviceOrientationEvent) => {
          const { beta, gamma } = event;
          const x = controlsRef.current.position.x;
          const z = controlsRef.current.position.z;
          const newX = x - gamma! * speed; // 左右の傾きに応じてX座標を更新
          const newZ = z - beta! * speed; // 上下の傾きに応じてZ座標を更新
          controlsRef.current.position.set(newX, 0, newZ);
          controlsRef.current.rotation.y = -gamma! * rotationSpeed; // 左右の傾きに応じてY軸の回転角度を更新
          controlsRef.current.rotation.x = -beta! * rotationSpeed; // 上下の傾きに応じてX軸の回転角度を更新
          controlsRef.current.updateMatrixWorld(); // カメラの変更を反映
        }
      );
    }
  });

  return (
    <group>
      <ExhibitionItems />
      {isSmartPhone ? (
        <Drei.PerspectiveCamera ref={controlsRef} position={[0, 0, 5]} />
      ) : (
        <Drei.PointerLockControls
          selector="#enter-button"
          onUnlock={() => {
            onUnlock();
            document.removeEventListener("keydown", onKeyDown);
          }}
          ref={controlsRef}
        />
      )}
    </group>
  );
};
export default MoveableArea;
