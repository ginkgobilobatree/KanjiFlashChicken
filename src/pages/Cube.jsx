import React, { useState, useEffect } from "react";
import { fetchKanji } from "../util/fetchKanji";

export default function Cube() {
  const [rotation, setRotation] = useState([0, 0]); //first value rotateX(), second rotateY()
  const [kanji, setKanji] = useState(null); //to be fetched in useEffect
  const [toggle, setToggle] = useState(""); //possible states: meaning || on || kanji || kun; for styling

  useEffect(() => {
    fetchKanji(setKanji);
  }, []);

  const style = {
    container:
      "flex justify-center mt-16 flex-col w-[200px] mx-auto items-center",
    scene: "w-[180px] h-[180px] mb-10",
    cube: "w-[100%] h-[100%] relative",
    surface:
      "bg-deepBack opacity-90 absolute w-[180px] h-[180px] flex justify-center items-center text-[white] border border-dashed border-[white] text-3xl",
    buttonMeaning:
      toggle === "meaning"
        ? "w-[100px] py-1 mb-1 mt-8 text-[white] border border-dotted"
        : "w-[100px] py-1 mb-1 mt-8 text-[white] border-dark border border-dotted hover:scale-105 active:bg-dark active:sepia",
    buttonOn:
      toggle === "on"
        ? "w-[100px] py-1 my-1 text-[white] border border-dotted"
        : "w-[100px] py-1 my-1 text-[white] border-dark border border-dotted hover:scale-105 active:bg-dark active:sepia",
    buttonKanji:
      toggle === "kanji"
        ? "w-[100px] py-1 my-1 text-[white] border border-dotted"
        : "w-[100px] py-1 my-1 text-[white] border-dark border border-dotted hover:scale-105 active:bg-dark active:sepia",
    buttonKun:
      toggle === "kun"
        ? "w-[100px] py-1 my-1 text-[white] border border-dotted"
        : "w-[100px] py-1 my-1 text-[white] border-dark border border-dotted hover:scale-105 active:bg-dark active:sepia",
  };

  return (
    <div className={style.container}>
      <div style={{ perspective: "800px" }} className={style.scene}>
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
            style={{ transform: "rotateY(  0deg) translateZ(90px)" }}
            className={style.surface}
          >
            {kanji ? kanji.kanji : ""}{" "}
          </div>
          <div
            style={{ transform: "rotateY(180deg) translateZ(90px)" }}
            className={style.surface}
          ></div>
          <div
            style={{ transform: "rotateY( 90deg) translateZ(90px)" }}
            className={style.surface}
          >
            {kanji ? kanji.kun_readings : ""}
          </div>
          <div
            style={{ transform: "rotateY(-90deg) translateZ(90px)" }}
            className={style.surface}
          >
            {kanji ? kanji.on_readings : ""}
          </div>
          <div
            style={{ transform: "rotateX( 90deg) translateZ(90px)" }}
            className={style.surface}
          >
            {kanji ? kanji.meanings : ""}
          </div>
          <div
            style={{ transform: "rotateX(-90deg) translateZ(90px)" }}
            className={style.surface}
          >
            {/* Examples */}
          </div>
        </div>
      </div>
      <button
        onClick={() => {
          setRotation([-80, 0]);
          setToggle("meaning");
        }}
        className={style.buttonMeaning}
      >
        meaning
      </button>
      <div className="flex justify-center items-center">
        <button
          onClick={() => {
            setRotation([-10, 80]);
            setToggle("on");
          }}
          className={style.buttonOn}
        >
          on
        </button>
        <button
          onClick={() => {
            setRotation([0, 0]);
            setToggle("kanji");
          }}
          className={style.buttonKanji}
        >
          kanji
        </button>
        <button
          onClick={() => {
            setRotation([-10, -80]);
            setToggle("kun");
          }}
          className={style.buttonKun}
        >
          kun
        </button>
      </div>
    </div>
  );
}
