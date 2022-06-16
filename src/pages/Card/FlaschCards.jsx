import React, { useState } from "react";

export default function FlaschCards() {
  const [rotation, setRotation] = useState(0);

  const style = {
    scene: "w-[200px] h-[120px] mt-4",
    cards:
      "w-[100%] h-[100%] text-4xl relative text-attention hover:cursor-pointer",
    surfaceFront:
      "bg-deepBack absolute w-[100%] h-[100%] flex justify-center items-center text-[white] border border-dashed border-[white]",
    surfaceBack:
      "bg-deepBack absolute w-[100%] h-[100%] flex justify-center items-center text-[white] border border-dashed border-[white]",
    p: "px-1 py-1 border-l border-b text-[white] text-[9px] border-dotted mb-4",
    button:
      "w-[90px] py-1 text-[white] border border-dotted border-dry hover:scale-105 active:bg-dark active:sepia",
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
      <p className={style.p}>current stack: FRUITS</p>
      <div className="flex justify-between w-[200px] mb-6">
        <button className={style.button}>prev</button>
        <button className={style.button}>next</button>
      </div>
    </>
  );
}
