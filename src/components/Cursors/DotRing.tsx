import React, {useEffect, useState} from "react";
import "./DotRing.css";
import useMousePosition from "../../hooks/useMousePosition";
import useMouseClicked from "../../hooks/useMouseClicked";

type DotRingProps = {
    cursorColorChange: boolean;
}

const DotRing: React.FC<DotRingProps> = ({ cursorColorChange }) => {
  const { x, y } = useMousePosition();
  const mouseClicked = useMouseClicked();
  const [displayRing, setDisplayRing] = useState(false);

    useEffect(() => {
        if (mouseClicked && !displayRing) {
            setDisplayRing(true);
            setTimeout(() => {
                setDisplayRing(false);
            }, 500);
        }
    }, [mouseClicked]);

  return (
    <>
      <div
        className={`dot ${cursorColorChange ? "dot--active" : ""}`}
        style={{ left: `${x}px`, top: `${y}px` }}
      ></div>
        {displayRing && (
            <div
                className={`dot-ring ${cursorColorChange ? "dot-ring--active" : ""}`}
                style={{ left: `${x}px`, top: `${y}px` }}
            ></div>
        )}
    </>
  );
};

export default DotRing;
