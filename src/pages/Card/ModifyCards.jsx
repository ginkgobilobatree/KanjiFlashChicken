import React from "react";

export default function ModifyCards({ setToggle, card, setCard }) {
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
          <li onClick={() => prompt('how are you?')} className={style.li} key={i}>
              <div className={style.number}>#{i + 1}</div>
              <div className={style.front}>{elem.front}</div>
              <div className={style.back}>{elem.back}</div>
          </li>
        ))}
      </ul>
    </div> 
  );
}
