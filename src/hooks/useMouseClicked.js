import { useEffect, useState } from "react";

export default function useMouseClicked() {
  const [mouseClicked, setMouseClicked] = useState(false);

  useEffect(() => {
    const mouseDownHandler = () => {
      setMouseClicked(true);
    };
    const mouseUpHandler = () => {
      setMouseClicked(false);
    };
    document.addEventListener("mousedown", mouseDownHandler);
    document.addEventListener("mouseup", mouseUpHandler);

    return () => {
      document.removeEventListener("mousedown", mouseDownHandler);
      document.removeEventListener("mouseup", mouseUpHandler);
    };
  }, []);

  return mouseClicked;
}

