import * as Fiber from "@react-three/fiber";
import * as React from "react";
import MoveableArea from "./MoveableArea";

type Props = {
  onUnlock?: (e?: any) => void;
};

const Canvas: React.FC<Props> = ({ onUnlock }) => {
  return (
    <React.Suspense fallback={<p>...loading...</p>}>
      <Fiber.Canvas style={{ background: "white" }}>
        <MoveableArea onUnlock={onUnlock} />
      </Fiber.Canvas>
    </React.Suspense>
  );
};

export default Canvas;
