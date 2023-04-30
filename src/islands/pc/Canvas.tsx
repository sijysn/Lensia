import * as Fiber from "@react-three/fiber";
import * as Drei from "@react-three/drei";
import MoveableArea from "./MoveableArea";

type Props = {
  onUnlock: (e?: any) => void;
  isLocked: boolean;
  endLoading: () => void;
};

const Canvas: React.FC<Props> = ({ onUnlock, isLocked, endLoading }) => {
  return (
    <Fiber.Canvas
      camera={{ fov: 60, position: [0, 4, 18] }}
      shadows
      dpr={[1, 2]}
    >
      <MoveableArea
        onUnlock={onUnlock}
        isLocked={isLocked}
        endLoading={endLoading}
      />
    </Fiber.Canvas>
  );
};

export default Canvas;
