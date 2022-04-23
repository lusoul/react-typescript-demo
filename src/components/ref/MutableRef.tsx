import { useState, useRef, useEffect } from "react";

export const MutableRef = () => {
  const [timer, setTimer] = useState<number>(0);
  const interValRef = useRef<number | null>(null);

  const stopTimer = () => {
    if (interValRef.current) window.clearInterval(interValRef.current);
  };
  useEffect(() => {
    console.log("1"); //会跑2次！文档里写了effects run for every render and not just once
    //所以在useEffect最后要return一个方法用来clean up effects from the previous render before running the effects next time.

    // after component mounted, the intervalID is stored in interval ref.current
    interValRef.current = window.setInterval(() => {
      setTimer((timer) => timer + 1);
    }, 1000);
    return () => {
      stopTimer();
    };
  }, []);

  return (
    <div>
      HookTimer - {timer} -
      <button onClick={() => stopTimer()}>Stop Timer</button>
    </div>
  );
};
