import { useRef, useEffect } from "react";

export const DomRef = () => {
  const inputRef = useRef<HTMLInputElement>(null!); //null! means this express cannot be null or undefined (non-null assertion operator)

  useEffect(() => {
    console.log("2"); //会跑2次！
    inputRef.current.focus();
    // alert(111);
  }, []);

  return (
    <div>
      <input type="text" ref={inputRef} />
    </div>
  );
};
