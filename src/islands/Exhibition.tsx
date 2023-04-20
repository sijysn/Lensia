import * as React from "react";
import EnterButton from "./PC/EnterButton";
import PCCanvas from "./PC/Canvas";
import SPCanvas from "./SP/Canvas";

const Exhibition = () => {
  const [isLocked, setIsLocked] = React.useState(false);
  const [isLoading, setIsLoading] = React.useState(true);

  const endLoading = () => setIsLoading(false);

  const lock = () => setIsLocked(true);
  const unlock = () =>
    setTimeout(() => {
      setIsLocked(false);
    }, 1000);

  const isSmartPhone = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

  return (
    <React.Suspense
      fallback={
        <div className="w-full h-full flex justify-center">
          <img src="/img/loading.gif" className="mx-0 my-auto block" />
        </div>
      }
    >
      {isSmartPhone ? (
        <SPCanvas />
      ) : (
        <>
          <PCCanvas
            onUnlock={unlock}
            isLocked={isLocked}
            endLoading={endLoading}
          />
          {!isLocked && !isLoading && <EnterButton onClick={lock} />}
        </>
      )}
    </React.Suspense>
  );
};

export default Exhibition;
