import React from "react";

export default function ModifySingleCard({
  setToggleModify,
  toggleModify,
  card,
  setCard,
}) {
  const style = {
    div: "w-60 h-80 text-[white] flex flex-col items-center justify-center py-4 px-2 border border-dashed border-[white] bg-deepBack",
    close: "self-end",
    txtContainer: "w-3/4",
    txtFront: "w-full bg-deepBack focus:outline-[red]",
    txtBack: "w-full bg-deepBack border",
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
        <input type="text" maxlength="10" placeholder="blabla" className={style.txtFront} />
        <input type="text" maxlength="20" placeholder="blabla" className={style.txtBack} />
      </div>
    </div>
  );
}
