import React, { useState } from "react";
import FlashCards from "./FlashCards";
import NewCard from "./NewCard";

export default function Card() {
  const [card, setCard] = useState([]);
  const [toggle, setToggle] = useState(false); //visibility of NewCard.jsx
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

  const getCard = async () => {
    const req = {
      method: "GET",
      headers: {
        "Content-type": "application/json",
      },
    };
    try {
      const response = await fetch("/flashCards", req);
      const result = await response.json();
      setCard(JSON.parse(result));
      console.log('hi')
    } catch (error) {
      console.error(error.message);
    }
  };

  return (
    <main className={style.main}>
      <FlashCards getCard={getCard} card={card} />
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
          <NewCard
            card={card}
            setCard={setCard}
            setToggle={setToggle}
            getCard={getCard}
          />
        </div>
      </div>
    </main>
  );
}
