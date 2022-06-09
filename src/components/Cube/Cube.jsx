import React from "react";

export default function Cube() {
  const style = {
    container: "flex justify-center flex-col mx-auto items-center",
    kanji: "w-[20vw] h-[20vw] border my-10",
    button: "border py-1 px-2 mx-2 my-1 rounded-md",
  };

  return (
    <div className={style.container}>
      <div className={style.kanji}></div>
      <button className={style.button}>meaning</button>
      <div>
        <button className={style.button}>On</button>
        <button className={style.button}>Kun</button>
      </div>
      <button className={style.button}>examples</button>
    </div>
  );
}
