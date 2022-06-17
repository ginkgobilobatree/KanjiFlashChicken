import React, { useState } from "react";

export default function NewCard() {
  const [card, setCard] = useState({});
  const [value, setValue] = useState({front:"", back:""});

  const style = {
    form: "flex flex-col items-center justify-center py-4 px-2 gap-2 shadow-xl border border-dashed border-[white] bg-deepBack",
    input: "w-2/3 text-center text-[black]",
    button:
      "mt-2 py-1 px-3 border border-dotted border-[white] text-[white] bg-juicy hover:scale-105 active:bg-dark active:sepia",
  };
  const createCard = async (e) => {
    //for testing purposes
    e.preventDefault();
    setCard(value);
    setValue({front:"", back:""});
  };
  return (
    <>
      <form className={style.form} onSubmit={createCard}>
        <input
          required={true}
          onChange={(e) => setValue(e.target.value)}
          value={value.front}
          className={style.input}
          type="text"
          placeholder="front"
        />
        <input
          required={true}
          onChange={(e) => setValue(e.target.value)}
          value={value.back}
          className={style.input}
          type="text"
          placeholder="back"
        />
        <button onClick={createCard} className={style.button} type="submit">
          add card
        </button>
        <p>{card?.front}</p>
      </form>
    </>
  );
}
