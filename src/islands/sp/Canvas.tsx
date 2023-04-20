import * as Drei from "@react-three/drei";
import * as Fiber from "@react-three/fiber";
import * as React from "react";
import ExhibitionItems from "@islands/SP/MoveableArea";

const Canvas = () => {
  const ref = React.useRef<any>();

  return (
    <Fiber.Canvas camera={{ position: [10, 10, 10] }} shadows>
      <directionalLight
        intensity={1}
        castShadow
        shadow-bias={-0.0002}
        shadow-mapSize={[2048, 2048]}
        position={[85.0, 80.0, 70.0]}
        shadow-camera-left={-30}
        shadow-camera-right={30}
        shadow-camera-top={30}
        shadow-camera-bottom={-30}
      />
      <Drei.OrbitControls
        ref={ref}
        target={[0, 5, 0]}
        minPolarAngle={Math.PI / 2}
        maxPolarAngle={Math.PI / 2}
      />
      <ExhibitionItems controls={ref} />
    </Fiber.Canvas>
  );
};

export default Canvas;
