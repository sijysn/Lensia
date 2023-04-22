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
    <Fiber.Canvas camera={{ fov: 60, position: [0, 4, 0] }}>
      <color attach="background" args={["#191920"]} />
      <fog attach="fog" args={["#191920", 0, 15]} />
      {/* <Drei.Stage>
        <mesh visible={false} position={[0, 5, 0]}>
          <planeGeometry args={[1, 16, 1]} />
        </mesh>
      </Drei.Stage> */}
      <MoveableArea
        onUnlock={onUnlock}
        isLocked={isLocked}
        endLoading={endLoading}
      />
    </Fiber.Canvas>
  );
};

export default Canvas;
