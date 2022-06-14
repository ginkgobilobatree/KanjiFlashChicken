import React from "react";

export default function newCard() {
  const style = {
    form: "flex flex-col items-center justify-center border rounded py-4 px-2 bg-yellow",
    div: "flex justify-around gap-8",
    input: "w-2/3 rounded text-center text-[black]",
    button: "mt-4 bg-red py-1 px-2 rounded",
    mouth: "mt-4 w-10 h-4 border-b rounded-b-full border-b-red",
  };
  const bla = (e) => {
    e.preventDefault();
    console.log("hi");
  };
  return (
    <>
      <form className={style.form} onSubmit={bla}>
        <div className={style.div}>
          <input className={style.input} type="text" placeholder="front" />
          <input className={style.input} type="text" placeholder="back" />
        </div>
        <button className={style.button} type="submit">
          New Card
        </button>
      <div className={style.mouth}></div>
      </form>
    </>
  );
}
