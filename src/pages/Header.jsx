import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Header() {
  const [cubeCard, setCubeCard] = useState("hicken");
  const style = {
    h1: "text-6xl mt-20 text-center left-4 relative",
    span: "text-sm",
    spanF: "text-sm relative right-5",
    spanC: "relative right-6",
    nav: "mt-10",
    ul: "flex justify-center gap-4 items-center",
    link: "border py-1 px-2 rounded-md text-sm bg-[#555555]",
  };
  return (
    <>
      <h1 className={style.h1}>
        K<span className={style.span}>anji</span>F
        <span className={style.spanF}>lash</span><span></span><span className={style.spanC}>C
        <span className={style.span}>{cubeCard}</span></span>
      </h1>
      <nav className={style.nav}>
        <ul className={style.ul}>
          <Link
            onClick={() => setCubeCard("ubes")}
            className={style.link}
            to="/cube"
          >
            cubes
          </Link>
          <div className="w-2 h-2 bg-canvas border rounded-full"></div>
          <Link
            onClick={() => setCubeCard("ards")}
            className={style.link}
            to="/card"
          >
            cards
          </Link>
        </ul>
      </nav>
    </>
  );
}
