import * as Drei from "@react-three/drei";
import * as Fiber from "@react-three/fiber";
import * as React from "react";
import ExhibitionItems from "./MoveableArea";

const Canvas = () => {
  const ref = React.useRef<any>();

  return (
    <Fiber.Canvas camera={{ fov: 90 }} shadows>
      <Drei.OrbitControls
        ref={ref}
        target={[0, 4, 0]}
        minPolarAngle={Math.PI / 2}
        maxPolarAngle={Math.PI / 2}
      />
      <ExhibitionItems controls={ref} />
    </Fiber.Canvas>
  );
};

export default Canvas;
