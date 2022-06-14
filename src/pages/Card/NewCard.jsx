import React from "react";

export default function newCard() {
  const style = {
    form: "w-1/2 flex flex-col items-center justify-center mt-10",
    div: "flex justify-around",
    input: "w-1/3 rounded text-center",
    button: "mt-4 bg-red py-1 px-2 rounded",
  };
  const bla = (e) => {
    e.preventDefault();
    console.log("hi");
  };
  return (
    <form className={style.form} onSubmit={bla}>
      <div className={style.div}>
        <input className={style.input} type="text" placeholder="front" />
        <input className={style.input} type="text" placeholder="back" />
      </div>
      <button className={style.button} type="submit">New Card</ button>
    </form>
  );
}
