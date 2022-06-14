import React, { useState } from "react";

export default function FlaschCards() {
  const [rotation, setRotation] = useState(0);

  const style = {
    scene: "w-[200px] h-[120px] my-4",
    cards: "w-[100%] h-[100%] text-4xl relative text-red border hover:cursor-pointer rounded-md",
    surfaceFront:
      "bg-[white] absolute w-[100%] h-[100%] flex justify-center items-center text-red rounded",
    surfaceBack:
      "bg-[white] absolute w-[100%] h-[100%] flex justify-center items-center text-red rounded",
    button: "border rounded-md px-2 py-1 mx-2 bg-darkGreen",
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
        <button className={style.button}>next</button>
      </div>
    </>
  );
}
