import React, { useState } from "react";

export default function NewCard({ setToggle, getCard }) {
  const [input, setInput] = useState({ front: "", back: "" });

  const style = {
    form: "flex flex-col items-center justify-center py-4 px-2 gap-2 shadow-xl border border-dashed border-[white] bg-deepBack",
    close: "self-end text-[white]",
    input: "w-2/3 text-center text-[black]",
    button:
      "mt-2 py-1 px-3 border border-dotted border-[white] text-[white] bg-juicy hover:scale-105 active:bg-dark active:sepia",
  };

  const collectInput = (e) => {
    const value = e.target.value; //just to make it shorter
    setInput({
      ...input, //spread what's already in it; in the beginning empty array, so nothing
      [e.target.name]: value,
    });
  };

  const createCard = async (input) => {
    const req = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(input),
    };
    try {
      await fetch("/flashCards", req);
    } catch (error) {
      console.error(error.message);
    }
  };

  const submit = (e) => {
    e.preventDefault();
    //check, if both input fields are filled out
    if (input.front.trim().length === 0 || input.back.trim().length === 0)
      alert("please, write something on both sides");
    else {
      createCard(input);
      //delete the current state
      setInput({ front: "", back: "" });
      getCard();
    }
  };

  return (
    <>
      <form className={style.form}>
        <button
          onClick={(e) => {
            e.preventDefault();
            setToggle(0);
          }}
          className={style.close}
        >
          [x]
        </button>
        <input
          onChange={collectInput}
          className={style.input}
          name="front"
          value={input.front}
          type="text"
          placeholder="front"
        />
        <input
          onChange={collectInput}
          className={style.input}
          name="back"
          value={input.back}
          type="text"
          placeholder="back"
        />
        <button onClick={submit} className={style.button} type="submit">
          add card
        </button>
      </form>
    </>
  );
}
