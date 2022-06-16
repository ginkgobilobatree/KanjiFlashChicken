import React /* , { useState } */ from "react";
import { NavLink } from "react-router-dom";

export default function Header() {
  // const [cubeCard, setCubeCard] = useState("welcome!");//changes the Header to Chicken | Cubes | Cards
  const style = {
    div: "mt-4 w-[200px] mx-auto relative", // border border-dry border-dashed rounded-tr-[90%]
    h1: "text-2xl text-[white] border-t border-dashed rounded-tr-[80%]",
    p: "text-juicy text-right",
    nav: "mt-10",
    ul: "flex justify-between w-[200px] mx-auto items-center",
    link: "py-1 px-3 text-sm border border-dry border-dotted text-juicy hover:scale-105 active:bg-dark active:sepia active:text-[white]",
  };
  return (
    <>
      <nav className={style.nav}>
        <ul className={style.ul}>
          <NavLink
            style={({ isActive }) => ({
              background: isActive ? "#011340" : "",
            })}
            /* onClick={() => setCubeCard("cubes")} */
            className={style.link}
            to="/cubes"
          >
            cubes
          </NavLink>
          {/* <div className="w-10 h-6 bg-[white] flex justify-center items-center"> //japanese flag
            <div className="bg-[red] w-3 h-3 rounded-full"></div>
          </div> */}
          <NavLink
            style={({ isActive }) => ({
              background: isActive ? "#011340" : "",
            })}
            /* onClick={() => setCubeCard("cards")} */
            className={style.link}
            to="/cards"
          >
            cards
          </NavLink>
        </ul>
      </nav>
      <div className={style.div}>
        <h1 className={style.h1}>kanji flash</h1>
        {/* <p className={style.p}>{cubeCard}</p> */}
        <div className="border-t-2 border-inset border-dry w-40 h-10 absolute top-7 rounded-tl-[10%] rounded-tr-[50%]"></div>
      </div>
    </>
  );
}
