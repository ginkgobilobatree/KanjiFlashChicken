import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Header() {
  const [cubeCard, setCubeCard] = useState("welcome!");//changes the Header to Chicken | Cubes | Cards
  const style = {
    div: "mt-4 w-[200px] mx-auto border border-dry border-dashed rounded-tr-[90%]",
    h1: "text-2xl text-[white]",
    p: "text-juicy text-right",
    nav: "mt-10",
    ul: "flex justify-between w-[200px] mx-auto items-center",
    link: "py-1 px-3 text-sm border border-dry border-dotted text-juicy",
  };
  return (
    <>
    <nav className={style.nav}>
        <ul className={style.ul}>
          <Link
            onClick={() => setCubeCard("cubes")}
            className={style.link}
            to="/cube"
          >
            cubes
          </Link>
          {/* <div className="w-10 h-6 bg-[white] flex justify-center items-center"> //japanese flag
            <div className="bg-[red] w-3 h-3 rounded-full"></div>
          </div> */}
          <Link
            onClick={() => setCubeCard("cards")}
            className={style.link}
            to="/cards"
          >
            cards
          </Link>
        </ul>
      </nav>
      <div className={style.div}>
        <h1 className={style.h1}>
         kanji flash
        </h1>
        <p className={style.p}>{cubeCard}</p>
      </div>
      
    </>
  );
}
