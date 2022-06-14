import React, { useState } from "react";
import FlashCards from "./FlaschCards";
import NewCard from "./NewCard";
// import { Outlet } from "react-router-dom";

export default function Card() {
  const [toggle, setToggle] = useState(false);
  const style = {
    main: "flex justify-center items-center flex-col",
    button: toggle ? "hidden" : "py-1 px-2 border rounded mt-2 bg-darkGreen",
    div1: toggle
      ? "flex justify-center items-center fixed top-0 bottom-0 left-0 right-0 backdrop-blur-sm"
      : "hidden",
    div2: toggle ? "w-3/4 flex justify-center items-center z-10" : "hidden",
  };
  return (
    <main className={style.main}>
      <FlashCards />
      <button onClick={() => setToggle(!toggle)} className={style.button}>{/* button opens input fields */}
        Add new Card
      </button>
      <div onClick={(e) => setToggle(false)} className={style.div1}>{/* sets background on blur and closes input on onClick */}
        <div onClick={(e) => e.stopPropagation()} className={style.div2}>{/* stopPropagation leaves toggle true on onClick */}
          <NewCard />
        </div>
      </div>
    </main>
  );
}
