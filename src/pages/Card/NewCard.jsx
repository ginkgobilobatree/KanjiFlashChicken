import React, { useState } from "react";

export default function NewCard({ card, setCard }) {
  const [input, setInput] = useState({ front: "", back: "" });

  const style = {
    form: "flex flex-col items-center justify-center py-4 px-2 gap-2 shadow-xl border border-dashed border-[white] bg-deepBack",
    input: "w-2/3 text-center text-[black]",
    button:
      "mt-2 py-1 px-3 border border-dotted border-[white] text-[white] bg-juicy hover:scale-105 active:bg-dark active:sepia",
  };

  const createCard = (e) => {
    const value = e.target.value; //just to make it shorter
    setInput({
      ...input, //spread what's already in it; in the beginning empty array, so nothing
      [e.target.name]: value,
    });
  };

  const submit = (e) => {
    e.preventDefault();
    //check, if both input fields are filled out
    if (input.front.trim().length === 0 || input.back.trim().length === 0)
      alert("both sides of the card need to be filled");
    else {
      setCard([...card, input]); //spread what's already in it and add the state (an object) of input to the state (an array) of card
      setInput({ front: "", back: "" });
    } //delete the current state
  };

  return (
    <>
      <form className={style.form}>
        <input
          onChange={createCard}
          className={style.input}
          name="front"
          value={input.front}
          type="text"
          placeholder="front"
        />
        <input
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
        <p className="text-[yellow]">{card?.length}</p>
      </form>
    </>
  );
}
