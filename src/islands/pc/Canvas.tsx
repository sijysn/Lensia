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
    <Fiber.Canvas camera={{ fov: 60, position: [0, 4, 18] }} shadows>
      <color attach="background" args={["#191920"]} />
      <ambientLight intensity={0.1} />
      <directionalLight castShadow intensity={100} position={[0, 100, 0]} />
      <MoveableArea
        onUnlock={onUnlock}
        isLocked={isLocked}
        endLoading={endLoading}
      />
    </Fiber.Canvas>
  );
};

export default Canvas;
