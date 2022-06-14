import React, { useState, useEffect } from "react";
import { fetchKanji } from "../util/fetchKanji";

export default function Cube() {
  const [rotation, setRotation] = useState([0, 0]); //first value X, second Y
  const [kanji, setKanji] = useState(null);

  useEffect(() => {
    fetchKanji(setKanji);
  }, []);
  const style = {
    container: "flex justify-center flex-col w-2/3 mx-auto items-center",
    scene: "w-[160px] h-[160px] mt-20 mb-28",
    cube: "w-[100%] h-[100%] relative",
    surface:
      "absolute w-[160px] h-[160px] flex justify-center opacity-90 items-center text-red bg-canvas border text-3xl",
    buttonMeaning: "border py-1 px-2 mx-3 my-1 rounded-md bg-[green]",
    buttonOn: "border py-1 px-2 mx-3 my-1 rounded-md bg-red",
    buttonKanji: "border py-1 px-2 mx-3 my-1 rounded-md bg-black",
    buttonKun: "border py-1 px-2 mx-3 my-1 rounded-md bg-[yellow] text-[black]",
    buttonExamples: "border py-1 px-2 mx-3 my-1 rounded-md bg-[blue]",
  };

  return (
    <div className={style.container}>
      <div style={{ perspective: "600px" }} className={style.scene}>
        <div
          id="cube"
          style={{
            transformStyle: "preserve-3d",
            transform: `rotateX(${rotation[0]}deg) rotateY(${rotation[1]}deg)`,
            transition: ".7s",
          }}
          className={style.cube}
        >
          <div
            style={{ transform: "rotateY(  0deg) translateZ(80px)" }}
            className={style.surface}
          >
            {kanji ? kanji.kanji : ""}{" "}
          </div>
          <div
            style={{ transform: "rotateY(180deg) translateZ(80px)" }}
            className={style.surface}
          >
            ???
          </div>
          <div
            style={{ transform: "rotateY( 90deg) translateZ(80px)" }}
            className={style.surface}
          >
            {kanji ? kanji.kun_readings : ""}
          </div>
          <div
            style={{ transform: "rotateY(-90deg) translateZ(80px)" }}
            className={style.surface}
          >
            {kanji ? kanji.on_readings : ""}
          </div>
          <div
            style={{ transform: "rotateX( 90deg) translateZ(80px)" }}
            className={style.surface}
          >
            {kanji ? kanji.meanings : ""}
          </div>
          <div
            style={{ transform: "rotateX(-90deg) translateZ(80px)" }}
            className={style.surface}
          >
            {/* Examples */}
            <div className="w-[40%] h-[40%] rounded-full bg-red"></div>
          </div>
        </div>
      </div>
      <button
        onClick={() => setRotation([-80, 0])}
        className={style.buttonMeaning}
      >
        Meaning
      </button>
      <div className="flex justify-center items-center">
        <button
          onClick={() => setRotation([-10, 80])}
          className={style.buttonOn}
        >
          On
        </button>
        <button
          onClick={() => setRotation([0, 0])}
          className={style.buttonKanji}
        >
          Kanji
        </button>
        <button
          onClick={() => setRotation([-10, -80])}
          className={style.buttonKun}
        >
          Kun
        </button>
      </div>
      <button
        onClick={() => setRotation([80, 0])}
        className={style.buttonExamples}
      >
        Examples
      </button>
    </div>
  );
}
