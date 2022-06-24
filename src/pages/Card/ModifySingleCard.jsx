import React, { useState } from "react";
// import { deleteCard } from "../../util/deleteCard";

export default function ModifySingleCard({
  ind,
  setToggleModify,
  toggleModify,
  card, 
  setCard,
}) {

  const [inputMod, setInputMod] = useState({front: "", back: ""});

  const style = {
    div: "w-60 h-80 text-[white] flex flex-col items-center justify-center py-4 px-2 border border-dashed border-[white] bg-deepBack",
    close: "self-end",
    txtContainer: "w-3/4 flex flex-col gap-2",
    labelFront: "text-[9px]",
    txtFront:
      "pl-2 py-1 text-base w-full bg-deepBack border border-[white] outline-none focus:border-[red] placeholder-[gray]",
    txtBack:
      "pr-2 py-1 text-base w-full bg-deepBack border border-[white] outline-none focus:border-[red] text-right placeholder-[gray]",
    labelBack: "text-right text-[9px]",
    buttonModify:
      "w-[150px] py-1 text-[white] border border-dotted border-dry hover:scale-105 active:bg-dark active:sepia",
    buttonDelete:
      "w-[150px] py-1 text-[white] border border-dotted border-dry hover:scale-105 active:bg-dark active:sepia bg-dry",
  };

  const deleteCard = async (ind) => {
    console.log(ind)
    try {
      const response = await fetch('/flashCards/' + ind, {method: "DELETE"});
      const result = response.json();
      return result;
    } catch (error) {
      console.error(error);
    }
  };
  

  const modify = (e) => {
    const value = e.target.value;
    setInputMod({
      ...inputMod,
      [e.target.name] : value,
    })
  };

  return (
    <div className={style.div}>
      <button
        onClick={(e) => {
          e.preventDefault();
          setToggleModify(false);
        }}
        className={style.close}
      >
        [x]
      </button>
      <div className={style.txtContainer}>
        <label className={style.labelFront}>
          front
          <input
            type="text"
            name="front"
            maxLength="10"
            placeholder={card[ind]?.front}
            className={style.txtFront}
          />
        </label>
        <label className={style.labelBack}>
          <input
            type="text"
            name="back"
            maxLength="20"
            placeholder={card[ind]?.back}
            className={style.txtBack}
          />
          back
        </label>
      </div>
      <button className={style.buttonModify} onClick={(e) => modify(e)}>
        modify card
      </button>
      <button className={style.buttonDelete} onClick={() => deleteCard(ind)}>
        delete card
      </button>
    </div>
  );
}
