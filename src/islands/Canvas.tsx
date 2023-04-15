import * as Fiber from "@react-three/fiber";
import * as React from "react";
import EnterButton from "./EnterButton";
import MoveableArea from "./MoveableArea";

type Props = {
  onUnlock: (e?: any) => void;
  isLocked: boolean;
};

const Canvas: React.FC<Props> = ({ onUnlock, isLocked }) => {
  return (
    <React.Suspense fallback={<p>...loading...</p>}>
      <Fiber.Canvas>
        <MoveableArea onUnlock={onUnlock} isLocked={isLocked} />
      </Fiber.Canvas>
    </React.Suspense>
  );
};

export default Canvas;
