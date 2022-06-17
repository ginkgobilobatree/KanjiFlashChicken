import React, { useState } from "react";

export default function NewCard() {
  const [card, setCard] = useState([]);
  const [input, setInput] = useState({front:"", back:""});

  const style = {
    form: "flex flex-col items-center justify-center py-4 px-2 gap-2 shadow-xl border border-dashed border-[white] bg-deepBack",
    input: "w-2/3 text-center text-[black]",
    button:
      "mt-2 py-1 px-3 border border-dotted border-[white] text-[white] bg-juicy hover:scale-105 active:bg-dark active:sepia",
  };
  
  const createCard = (e) => {
    const value = e.target.value;//just to make it shorter
    setInput({
      ...input,//spread what's already in it
      [e.target.name]: value
    })
  };

  const submit = (e) => {
    e.preventDefault();
    setCard([...card, input]);
    setInput({front:"", back:""})
  }

  return (
    <>
      <form className={style.form}>
        <input
          required={true}
          onChange={createCard}
          className={style.input}
          name="front"
          value={input.front}
          type="text"
          placeholder="front"
        />
        <input
          required={true}
          onChange={createCard}
          className={style.input}
          name="back"
          value={input.back}
          type="text"
          placeholder="back"
        />
        <button onClick={submit} className={style.button} type="submit">
          add card
        </button>
        <p className="text-[yellow]">{card[0]?.front}</p>
      </form>
    </>
  );
}
