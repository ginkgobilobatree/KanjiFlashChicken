import React, { useState, useEffect } from "react";

export default function FlashCards({ getCard, card }) {
  const [rotation, setRotation] = useState({ deg: 0, transition: 0.5 });
  const [cardIndex, setCardIndex] = useState(0);

  const style = {
    scene: "w-[200px] h-[120px] mt-4",
    cards:
      "w-[100%] h-[100%] text-4xl relative text-attention hover:cursor-pointer",
    surfaceFront:
      "bg-deepBack absolute w-[100%] h-[100%] flex justify-center items-center text-[white] border border-dashed border-[white]",
    surfaceBack:
      "bg-deepBack absolute w-[100%] h-[100%] flex justify-center items-center text-[white] border border-dashed border-[white]",
      pBack: "text-lg",
    p: "px-1 py-1 border-l border-b text-[white] text-[9px] border-dotted mb-4",
    button:
      "w-[90px] py-1 text-[white] border border-dotted border-dry hover:scale-105 active:bg-dark active:sepia",
  };

  useEffect(() => {
    getCard();
  }, []);

  const prevCard = () => {
    //there have to be cards to make prevCard() work -- analog to nextCard()
    if (card.length) {
      //if there is already 180deg rotate it back without transition time -- analog to nextCard()
      if (rotation.deg) setRotation({ deg: 0, transition: 0 });
      cardIndex === 0
        ? setCardIndex(card.length - 1)
        : setCardIndex(cardIndex - 1);
    }
  };

  const nextCard = () => {
    if (card.length) {
      if (rotation.deg) setRotation({ deg: 0, transition: 0 });
      cardIndex === card.length - 1
        ? setCardIndex(0)
        : setCardIndex(cardIndex + 1);
    }
  };

  return (
    <>
      <div style={{ perspective: "600px" }} className={style.scene}>
        <div
          onClick={() =>
            rotation.deg
              ? setRotation({ deg: 0, transition: 0.5 })
              : setRotation({ deg: 180, transition: 0.5 })
          }
          style={{
            //to cumbersome with tailwindCSS, that's why in style-object
            transformStyle: "preserve-3d",
            transform: `rotateY(${rotation.deg}deg)`,
            transition: `${rotation.transition}s`,
          }}
          className={style.cards}
        >
          <div
            style={{ backfaceVisibility: "hidden" }}
            className={style.surfaceFront}
          >
            <p>{card.length ? card[cardIndex].front : "front"}</p>
          </div>
          <div
            style={{
              transform: "rotateY(180deg)",
              backfaceVisibility: "hidden",
            }}
            className={style.surfaceBack}
          >
            <p className={style.pBack}>{card.length ? card[cardIndex].back : "back"}</p>
          </div>
        </div>
      </div>
      <p className={style.p}>
        number of cards: {card.length ? cardIndex + 1 : 0}/{card.length}{" "}
        {rotation.deg ? "back" : "front"}
      </p>
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
