import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Header() {
  const [cubeCard, setCubeCard] = useState("hicken");//changes the Header to Chicken | Cubes | Cards
  const style = {
    div: "mt-4 border-4 w-3/4 mx-auto py-8 rounded bg-brightGreen",
    h1: "text-6xl text-center left-4 relative",
    span: "text-sm",
    spanF: "text-sm relative right-5",
    spanC: "relative right-6",
    nav: "mt-4",
    ul: "flex justify-center gap-4 items-center",
    link: "border py-1 px-2 rounded-md text-sm bg-darkGreen",
  };
  return (
    <>
    <nav className={style.nav}>
        <ul className={style.ul}>
          <Link
            onClick={() => setCubeCard("ubes")}
            className={style.link}
            to="/cube"
          >
            cubes
          </Link>
          <div className="w-10 h-6 bg-[white] flex justify-center items-center">
            <div className="bg-[red] w-3 h-3 rounded-full"></div>
          </div>
          <Link
            onClick={() => setCubeCard("ards")}
            className={style.link}
            to="/cards"
          >
            cards
          </Link>
        </ul>
      </nav>
      <div className={style.div}>
        <h1 className={style.h1}>
          K<span className={style.span}>anji</span>F
          <span className={style.spanF}>lash</span>
          <span></span>
          <span className={style.spanC}>
            C<span className={style.span}>{cubeCard}</span>
          </span>
        </h1>
      </div>
      
    </>
  );
}
