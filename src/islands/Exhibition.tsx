import * as React from "react";
import Bench from "./Bench";
import EnterButton from "./EnterButton";

const Exhibition = () => {
  const [isLocked, setIsLocked] = React.useState(false);

  const lock = () => setIsLocked(true);
  const unlock = () =>
    setTimeout(() => {
      setIsLocked(false);
    }, 1000);

  return (
    <>
      <Bench onUnlock={unlock} />
      {!isLocked && <EnterButton onClick={lock} />}
    </>
  );
};

export default Exhibition;
