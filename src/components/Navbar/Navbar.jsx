import React from "react";
import { NavLink } from "react-router-dom";

const style = {
  nav: "mx-4 my-4 sticky top-2 sm:mx-20 md:mx-40",
  ul: "flex justify-around items-stretch items-center gap-[1px] rounded-md overflow-hidden",
  li: "basis-1/4 flex bg-bigButton h-10 hover:brightness-95",
  navlink: "active:bg-canvas focus:bg-red w-full text-center py-2 text-canvas text-sm sm:text-base",
};

export default function Navbar() {
  return (
    <nav className={style.nav}>
      <ul className={style.ul}>
        <li className={style.li}>
          <NavLink className={style.navlink} to="/aboutMe">
            about me
          </NavLink>
        </li>
        <li className={style.li}>
          <NavLink className={style.navlink} to="/cv">
            my CV
          </NavLink>
        </li>
        <li className={style.li}>
          <NavLink className={style.navlink} to="/getInTouch">
            contact
          </NavLink>
        </li>
        <li className={style.li}>
          <NavLink className={style.navlink} to="/portfolio">
            portfolio
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}
