import React, { useState } from "react";

export default function FlashCards({ card }) {
  const [rotation, setRotation] = useState(0); //default 0deg
  const [cardNumber, setCardNumber] = useState(0);

  const style = {
    scene: "w-[200px] h-[120px] mt-4",
    cards:
      "w-[100%] h-[100%] text-4xl relative text-attention hover:cursor-pointer",
    surfaceFront:
      "bg-deepBack absolute w-[100%] h-[100%] flex justify-center items-center text-[white] border border-dashed border-[white]",
    surfaceBack:
      "bg-deepBack absolute w-[100%] h-[100%] flex justify-center items-center text-[white] border border-dashed border-[white]",
    p: "px-1 py-1 border-l border-b text-[white] text-[9px] border-dotted mb-4",
    button:
      "w-[90px] py-1 text-[white] border border-dotted border-dry hover:scale-105 active:bg-dark active:sepia",
  };

  const prevCard = () => {
    if (card.length) {
      //requires fixing of transition while rotating card!
      rotation
        ? setTimeout(
            () =>
              cardNumber === 0
                ? setCardNumber(card.length - 1)
                : setCardNumber(cardNumber - 1),
            500
          )
        : cardNumber === 0
        ? setCardNumber(card.length - 1)
        : setCardNumber(cardNumber - 1);
      setRotation(0);
    }
  };

  const nextCard = () => {
    if (card.length) {
      rotation
        ? setTimeout(
            () =>
              cardNumber === card.length - 1
                ? setCardNumber(0)
                : setCardNumber(cardNumber + 1),
            500
          )
        : cardNumber === card.length - 1
        ? setCardNumber(0)
        : setCardNumber(cardNumber + 1);
      setRotation(0);
    }
  };

  return (
    <>
      <div style={{ perspective: "600px" }} className={style.scene}>
        <div
          onClick={() => (rotation ? setRotation(0) : setRotation(180))}
          style={{
            transformStyle: "preserve-3d",
            transform: `rotateY(${rotation}deg)`,
            transition: ".5s",
          }}
          className={style.cards}
        >
          <div
            style={{ backfaceVisibility: "hidden" }}
            className={style.surfaceFront}
          >
            <p>{card.length ? card[cardNumber].front : "front"}</p>
          </div>
          <div
            style={{
              transform: "rotateY(180deg)",
              backfaceVisibility: "hidden",
            }}
            className={style.surfaceBack}
          >
            <p>{card.length ? card[cardNumber].back : "back"}</p>
          </div>
        </div>
      </div>
      <p className={style.p}>number of cards: {card.length}</p>
      <div className="flex justify-between w-[200px] mb-6">
        <button onClick={prevCard} className={style.button}>
          prev
        </button>
        <button onClick={nextCard} className={style.button}>
          next
        </button>
      </div>
    </>
  );
}
