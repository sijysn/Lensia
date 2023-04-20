import * as Fiber from "@react-three/fiber";
import EnterButton from "./EnterButton";
import MoveableArea from "./MoveableArea";

type Props = {
  onUnlock: (e?: any) => void;
  isLocked: boolean;
  endLoading: () => void;
};

const Canvas: React.FC<Props> = ({ onUnlock, isLocked, endLoading }) => {
  return (
    <Fiber.Canvas>
      <MoveableArea
        onUnlock={onUnlock}
        isLocked={isLocked}
        endLoading={endLoading}
      />
    </Fiber.Canvas>
  );
};

export default Canvas;
