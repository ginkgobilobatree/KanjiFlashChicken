  import React from "react";

const style = {
  div1: "flex sm:justify-evenly justify-around mt-6 mx-4 p-4 shadow-md rounded-md sm:mx-20 md:mx-40",
  hero: "bg-hero bg-cover w-20 h-20 bg-right rounded-full bg-canvas relative shadow-md",
  paragraph:"text-bigButtonHover top-2 -left-1 text-xl absolute",
  div2: "flex flex-col justify-center",
  h1: "text-red text-center text-lg font-semibold rounded tracking-widest sm:text-xl",
  h2: "text-canvas text-center text-xs sm:text-base",
};

export default function Hero() {
  return (
    <div className={style.div1}>
      <div className={style.hero}>
        <p className={style.paragraph}></p>
      </div>
      <div className={style.div2}>
        <h1 className={style.h1}>GINO MASSALSKI</h1>
        <h2 className={style.h2}>web developer in development</h2>
      </div>
    </div>
  );
}
