import * as Fiber from "@react-three/fiber";
import * as THREE from "three";
import * as React from "react";
import Meshes from "../common/Meshes";

type Props = {
  controls: any;
};

const MovementBounds = {
  xMin: -20,
  xMax: 20,
  zMin: -20,
  zMax: 20,
};

const MoveableArea: React.FC<Props> = ({ controls }) => {
  Fiber.useFrame(({ camera }, delta) => {
    if (lerping) {
      camera.position.lerp(to, delta);
      controls.current.target.lerp(target, delta);
    }
  });

  const [to, setTo] = React.useState(new THREE.Vector3(0, 4, 0));
  const [target, setTarget] = React.useState(new THREE.Vector3(0, 4, 0));
  const [lerping, setLerping] = React.useState(false);

  const onDoubleClick = (e: Fiber.ThreeEvent<MouseEvent>) => {
    const n = e.intersections[0].point.clone();
    const x = Math.min(Math.max(n.x, MovementBounds.xMin), MovementBounds.xMax);
    const z = Math.min(Math.max(n.z, MovementBounds.zMin), MovementBounds.zMax);
    const value = new THREE.Vector3(x, 4, z);
    setTo(value);
    setTarget(value);
    setLerping(true);
    setTimeout(() => setLerping(false), 500);
  };

  return React.useMemo(
    () => (
      <group onDoubleClick={onDoubleClick}>
        <Meshes />
      </group>
    ),
    []
  );
};
export default MoveableArea;
