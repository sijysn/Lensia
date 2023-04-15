import * as React from "react";
import * as Drei from "@react-three/drei";
import ExhibitionItems from "./ExhibitionItems";

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

  React.useEffect(() => {
    document.addEventListener("keydown", onKeyDown);
    endLoading();

    return () => document.removeEventListener("keydown", onKeyDown);
  });

  return (
    <group>
      <ExhibitionItems />
      <Drei.PointerLockControls
        selector="#enter-button"
        onUnlock={() => {
          onUnlock();
          document.removeEventListener("keydown", onKeyDown);
        }}
        ref={controlsRef}
      />
    </group>
  );
};
export default MoveableArea;
