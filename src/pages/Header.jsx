import React from "react";
import { NavLink } from "react-router-dom";

export default function Header() {
  const style = {
    div1: "mt-4 w-[200px] mx-auto relative",
    div2: "border-t-2 border-inset border-dry w-40 h-10 absolute top-7 rounded-tl-[10%] rounded-tr-[50%]",
    h1: "z-10 relative text-2xl text-[white] border-t border-dashed rounded-tr-[80%]",
    p: "text-juicy text-right",
    nav: "mt-10",
    ul: "flex justify-between w-[200px] mx-auto items-center",
    link: "py-1 px-3 text-sm border border-dry border-dotted text-juicy active:bg-dark active:sepia hover:border-[white]",
  };

  const test = () => {
    if (window.confirm("Do you really want to leave?")) {
      alert('hi')
    }
  }

  return (
    <>
      <nav className={style.nav}>
        <ul className={style.ul}>
          <NavLink
            style={({ isActive }) => ({
              background: isActive ? "#011340" : "",
              transform: isActive ? "scale(.8)" : "scale(1)",
            })}
            className={style.link}
            to="/cubes"
          >
            cubes
          </NavLink>
          <button onClick={test}>TEST</button>
          <NavLink
            style={({ isActive }) => ({
              background: isActive ? "#011340" : "",
              transform: isActive ? "scale(.9)" : "scale(1)",
            })}
            className={style.link}
            to="/cards"
          >
            cards
          </NavLink>
        </ul>
      </nav>
      <div className={style.div1}>
        <h1 className={style.h1}>kanji flash</h1>
        <div className={style.div2}></div>
      </div>
    </>
  );
}
