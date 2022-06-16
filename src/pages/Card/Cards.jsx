import React, { useState } from "react";
import FlashCards from "./FlaschCards";
import NewCard from "./NewCard";

// import { Outlet } from "react-router-dom";

export default function Card() {
  const [toggle, setToggle] = useState(false);
  const style = {
    main: "flex justify-center items-center flex-col",
    button: toggle ? "hidden" : "py-1 px-3 mt-2 border border-dotted border-dry text-[white] hover:scale-105 active:bg-dark active:sepia w-[200px]",
    div1: toggle
      ? "flex justify-center items-center fixed top-0 bottom-0 left-0 right-0 backdrop-blur-sm"
      : "hidden",
    div2: toggle ? "flex justify-center items-center z-10" : "hidden",
  };
  return (
    <main className={style.main}>
      <FlashCards />
      <button onClick={() => setToggle(!toggle)} className={style.button}>{/* button opens input fields */}
        add new card
      </button>
      <button className={style.button}>
        change front and back
      </button>
      <button className={style.button}>
        choose topic
      </button>
      <button className={style.button}>
        add new topic
      </button>
      <div onClick={(e) => setToggle(false)} className={style.div1}>{/* sets background on blur and closes input on onClick */}
        <div onClick={(e) => e.stopPropagation()} className={style.div2}>{/* stopPropagation leaves toggle true on onClick */}
          <NewCard />
        </div>
      </div>
    </main>
  );
}
