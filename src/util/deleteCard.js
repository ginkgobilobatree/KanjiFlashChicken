export const deleteCard = async (cardId, setToggleModify, getCard) => {
  if (window.confirm("are you sure?")) {
    try {
      await fetch(`/flashCards/${cardId}`, { method: "DELETE" }); //:${cardId}
      setToggleModify(false);
      getCard();
    } catch (error) {
      console.error(error);
    }
  }
};
