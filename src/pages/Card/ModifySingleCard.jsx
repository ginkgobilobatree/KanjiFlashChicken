import React, { useState } from "react";
import { deleteCard } from "../../util/deleteCard";
import { modifyCard } from "../../util/modifyCard";
import { getCard } from "../../util/getCard";

export default function ModifySingleCard({
  ind,
  setToggleModify,
  card,
  setCard
}) {
  const [inputMod, setInputMod] = useState({ front: "", back: "" });

  const style = {
    form: "w-60 h-80 text-[white] flex flex-col items-center justify-center py-4 px-2 border border-dashed border-[white] bg-deepBack",
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

  function collectInputModify(e) {
    const value = e.target.value;
    setInputMod({
      ...inputMod,
      [e.target.name]: value,
    });
  }

  function submitModification(e) {
    e.preventDefault();
    if (!inputMod.front.trim().length || !inputMod.back.trim().length)
      alert("please, write somehing on both sides");
    else {
      modifyCard(inputMod, ind);
      setToggleModify(false);
      setInputMod({ front: "", back: "" });
      getCard(setCard)
    }
  }

  return (
    <form className={style.form}>
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
            onChange={collectInputModify}
            value={inputMod.front}
            type="text"
            name="front"
            maxLength="10"
            placeholder={card[ind]?.front}
            className={style.txtFront}
          />
        </label>
        <label className={style.labelBack}>
          <input
            onChange={collectInputModify}
            value={inputMod.back}
            type="text"
            name="back"
            maxLength="20"
            placeholder={card[ind]?.back}
            className={style.txtBack}
          />
          back
        </label>
      </div>
      <button className={style.buttonModify} onClick={submitModification}>
        modify card
      </button>
      <button
        className={style.buttonDelete}
        onClick={() => {
          deleteCard(ind);
          getCard(setCard);
          setToggleModify(false);
        }}
      >
        delete card
      </button> 
    </form>
  );
}
