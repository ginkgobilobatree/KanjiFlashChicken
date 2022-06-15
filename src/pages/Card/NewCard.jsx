import React from "react";

export default function newCard() {
  const style = {
    form: "flex flex-col items-center justify-center py-4 px-2 gap-2 shadow-xl border border-dashed border-[white] bg-deepBack",
    input: "w-2/3 text-center text-[black]",
    button: "mt-2 py-1 px-3 border border-dotted border-[white] text-[white] bg-juicy",
  };
  const bla = (e) => {
    e.preventDefault();
    console.log("hi");
  };
  return (
    <>
      <form className={style.form} onSubmit={bla}>
          <input className={style.input} type="text" placeholder="front" />
          <input className={style.input} type="text" placeholder="back" />
        <button className={style.button} type="submit">
          New Card
        </button>
      </form>
    </>
  );
}
