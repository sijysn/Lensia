import * as React from "react";
import EnterButton from "./EnterButton";
import Canvas from "./Canvas";

const Exhibition = () => {
  const [isLocked, setIsLocked] = React.useState(false);

  const lock = () => setIsLocked(true);
  const unlock = () =>
    setTimeout(() => {
      setIsLocked(false);
    }, 1000);

  return (
    <>
      <Canvas onUnlock={unlock} isLocked={isLocked} />
      {!isLocked && <EnterButton onClick={lock} />}
    </>
  );
};

export default Exhibition;
