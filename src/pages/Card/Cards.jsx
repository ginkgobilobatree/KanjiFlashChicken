import React, { useState } from "react";
import FlashCards from "./FlashCards";
import NewCard from "./NewCard";

export default function Card() {
  const [toggle, setToggle] = useState(false);//visibility of NewCard.jsx
  const [card, setCard] = useState([]);
  const style = {
    main: "flex justify-center items-center flex-col",
    button: toggle
      ? "hidden"
      : "py-1 text-[12px] mt-2 border border-dotted border-dry text-[white] hover:scale-105 active:bg-dark active:sepia w-[200px]",
    p: "text-[white] text-[9px] border-l border-b border-dotted",
    div1: toggle
      ? "z-20 flex justify-center items-center fixed top-0 bottom-0 left-0 right-0 backdrop-blur-sm"
      : "hidden",
    div2: toggle ? "flex justify-center items-center" : "hidden",
  };

  return (
    <main className={style.main}>
      <FlashCards card={card}/>
      <button className={style.button}>change front and back</button>
      <button
        onClick={() => setToggle(!toggle)}
        className={`${style.button} + mt-6`}
      >
        {/* button opens input fields */}
        add new card
      </button>
      {/* <button className={style.button}>choose card (32)</button> */}
      {/* number will be retrieved from DB */}
      {/* <button className={`${style.button} + mt-6`}>add new stack</button>
      <button className={style.button}>choose stack (3)</button> */}
      {/* number will be retrieved from DB */}
      <div onClick={(e) => setToggle(false)} className={style.div1}>
        {/* sets background on blur and closes input on onClick */}
        <div onClick={(e) => e.stopPropagation()} className={style.div2}>
          {/* stopPropagation leaves toggle true on onClick */}
          <NewCard card={card} setCard={setCard}/>
        </div>
      </div>
    </main>
  );
}
