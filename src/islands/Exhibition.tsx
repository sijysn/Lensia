import * as React from "react";
import EnterButton from "./EnterButton";
import Canvas from "./Canvas";

const Exhibition = () => {
  const [isLocked, setIsLocked] = React.useState(false);
  const [isLoading, setIsLoading] = React.useState(true);

  const endLoading = () => setIsLoading(false);

  const lock = () => setIsLocked(true);
  const unlock = () =>
    setTimeout(() => {
      setIsLocked(false);
    }, 1000);

  return (
    <React.Suspense
      fallback={
        <div className="w-full h-full flex justify-center">
          <img src="/img/loading.gif" className="mx-0 my-auto block" />
        </div>
      }
    >
      <Canvas onUnlock={unlock} isLocked={isLocked} endLoading={endLoading} />
      {!isLocked && !isLoading && <EnterButton onClick={lock} />}
    </React.Suspense>
  );
};

export default Exhibition;
