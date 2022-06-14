import React, { useState } from "react";

export default function FlaschCards() {
  const [rotation, setRotation] = useState(0);

  const style = {
    scene: "w-[200px] h-[120px] my-10",
    cards: "w-[100%] h-[100%] text-4xl relative border hover:cursor-pointer",
    surfaceFront:
      "bg-red absolute w-[100%] h-[100%] flex justify-center items-center",
    surfaceBack:
      "bg-[blue] absolute w-[100%] h-[100%] flex justify-center items-center",
    button: "border rounded-md px-2 py-1 mx-2",
  };
  return (
    <>
      <div style={{ perspective: "600px" }} className={style.scene}>
        <div
          onClick={() => (rotation ? setRotation(0) : setRotation(180))}
          style={{
            transformStyle: "preserve-3d",
            transform: `rotateY(${rotation}deg)`,
            transition: ".5s",
          }}
          className={style.cards}
        >
          <div
            style={{ backfaceVisibility: "hidden" }}
            className={style.surfaceFront}
          >
            front
          </div>
          <div
            style={{
              transform: "rotateY(180deg)",
              backfaceVisibility: "hidden",
            }}
            className={style.surfaceBack}
          >
            back
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center">
        <button className={style.button}>prev</button>
        <div className="w-2 h-2 bg-canvas border rounded-full"></div>
        <button className={style.button}>next</button>
      </div>
    </>
  );
}
