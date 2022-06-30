import React, { useState, useEffect } from "react";
import ModifySingleCard from "./ModifySingleCard";

export default function ModifyCards({ setToggle, card, setCard }) {
  const [ind, setInd] = useState(0)
  const [toggleModify, setToggleModify] = useState(false);
  const style = {
    div: "w-60 h-80 text-[white] flex flex-col items-center justify-center py-4 px-2 shadow-xl border border-dashed border-[white] bg-deepBack",
    ul: "w-3/4 overflow-y-auto",
    close: "self-end text-[white]",
    p: "w-2/3 text-center text-[9px] mb-4",
    li: "border py-2 border-[white] cursor-pointer border-dotted flex flex-col justify-center items-center",
    number: "text-[9px] w-3/4",
    cards: "flex flex-col justify-center items-center",
    front: "text-lg w-2/3 text-center",
    back: "text-sm w-2/3 text-center",
    modifyOuter: toggleModify
      ? "z-30 flex justify-center items-center fixed top-0 bottom-0 left-0 right-0"
      : "hidden",
    modifyInner: toggleModify ? "flex justify-center items-center" : "hidden",
  };

  return (
    <div className={style.div}>
      <button
        onClick={(e) => {
          e.preventDefault();
          setToggle({ newCard: false, modifyCards: false });
        }}
        className={style.close}
      >
        [x]
      </button>
      <p className={style.p}>pick a card to modify</p>
      <ul className={style.ul}>
        {card.map((elem, i) => (
          <button className="w-full"
            key={i}
            onClick={(e) => {
              setInd(i)
              setToggleModify(true);
            }}
          >
            <li className={style.li}>
              <div className={style.number}>#{i + 1}</div>
              <div className={style.front}>{elem.front}</div>
              <div className={style.back}>{elem.back}</div>
            </li>
          </button>
        ))}
      </ul>
      <div onClick={() => setToggleModify(false)} className={style.modifyOuter}>
        <div onClick={(e) => e.stopPropagation()} className={style.modifyInner}>
          <ModifySingleCard
          setInd={setInd}
          ind={ind}
          setToggleModify={setToggleModify}
          card={card}
          setCard={setCard}
        />
        </div>
      </div>
    </div>
  );
}

