import React from "react";

export default function ModifySingleCard({
  ind,
  setToggleModify,
  toggleModify,
  card,
  setCard,
}) {
  const style = {
    div: "w-60 h-80 text-[white] flex flex-col items-center justify-center py-4 px-2 border border-dashed border-[white] bg-deepBack",
    close: "self-end",
    txtContainer: "w-3/4 flex flex-col gap-2",
    labelFront: "",
    txtFront:
      "w-full bg-deepBack border border-[white] outline-none focus:border-[red] placeholder-[gray]",
    txtBack:
      "w-full bg-deepBack border border-[white] outline-none focus:border-[red] text-right placeholder-[gray]",
    labelBack: "text-right",
    buttonModify: "w-[90px] py-1 text-[white] border border-dotted border-dry hover:scale-105 active:bg-dark active:sepia",
    buttonDelete:"w-[90px] py-1 text-[white] border border-dotted border-dry hover:scale-105 active:bg-dark active:sepia bg-dry",
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
            maxLength="10"
            placeholder={card[ind]?.front}
            className={style.txtFront}
          />
        </label>
        <label className={style.labelBack}>
          <input
            type="text"
            maxLength="20"
            placeholder={card[ind]?.back}
            className={style.txtBack}
          />
          back
        </label>
      </div>
      <button className={style.buttonModify}>modify</button>
      <button className={style.buttonDelete}>delete</button>
    </div>
  );
}
