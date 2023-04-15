import * as React from "react";
import * as Drei from "@react-three/drei";
import * as THREE from "three";
import * as Fiber from "@react-three/fiber";
import ExhibitionItems from "./ExhibitionItems";

type Props = {
  onUnlock: (e?: any) => void;
  isLocked: boolean;
};

const MovementBounds = {
  xMin: -20,
  xMax: 20,
  zMin: -20,
  zMax: 20,
};

const MoveableArea: React.FC<Props> = ({ onUnlock, isLocked }) => {
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

  document.addEventListener("keydown", onKeyDown);

  return (
    <group>
      <ExhibitionItems />
      <Drei.PointerLockControls
        selector="#enter-button"
        onUnlock={onUnlock}
        ref={controlsRef}
      />
    </group>
  );
};
export default MoveableArea;
