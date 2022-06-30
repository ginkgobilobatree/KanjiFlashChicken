import React, { useState } from "react";
import FlashCards from "./FlashCards";
import NewCard from "./NewCard";
import ModifyCards from "./ModifyCards";

export default function Card() {
  const [card, setCard] = useState([]);
  const [toggle, setToggle] = useState({ newCard: false, modifyCards: false }); //visibility of NewCard.jsx and ModifyCards.jsx
  const style = {
    main: "flex justify-center items-center flex-col",
    button:
      "py-1 text-[12px] mt-2 border border-dotted border-dry text-[white] hover:scale-105 active:bg-dark active:sepia w-[200px]",
    p: "text-[white] text-[9px] border-l border-b border-dotted",
    divNewCardOuter: toggle.newCard
      ? "z-20 flex justify-center items-center fixed top-0 bottom-0 left-0 right-0 backdrop-blur-sm"
      : "hidden",
    divNewCardInner: toggle.newCard
      ? "flex justify-center items-center"
      : "hidden",
    divModifyCardsOuter: toggle.modifyCards
      ? "z-20 flex justify-center items-center fixed top-0 bottom-0 left-0 right-0 backdrop-blur-sm"
      : "hidden",
    divModifyCardsInner: toggle.modifyCards
      ? "flex justify-center items-center"
      : "hidden",
  };

  return (
    <main className={style.main}>
      <FlashCards card={card} setCard={setCard} />
      <button className={style.button}>change front and back</button>
      <button
        onClick={() => setToggle({ newCard: true, modifyCards: false })}
        className={`${style.button} + mt-6`}
      >
        {/* button opens input fields */}
        add new card
      </button>
      <button
        onClick={() => setToggle({ newCard: false, modifyCards: true })}
        className={style.button}
      >
        modify cards
      </button>
      <div
        onClick={() => setToggle({ newCard: false, modifyCards: false })}
        className={style.divNewCardOuter}
      >
        {/* sets background on blur and closes input on onClick */}
        <div
          onClick={(e) => e.stopPropagation()}
          className={style.divNewCardInner}
        >
          {/* stopPropagation leaves toggle true on onClick */}
          <NewCard
            card={card}
            setCard={setCard}
            setToggle={setToggle}
          />
        </div>
      </div>

      <div
        onClick={() => setToggle({ newCard: false, modifyCards: false })}
        className={style.divModifyCardsOuter}
      >
        {/* sets background on blur and closes input on onClick */}
        <div
          onClick={(e) => e.stopPropagation()}
          className={style.divModifyCardsInner}
        >
          {/* stopPropagation leaves toggle true on onClick */}
          <ModifyCards
            card={card}
            setCard={setCard}
            setToggle={setToggle}
          />
        </div>
      </div>
    </main>
  );
}
