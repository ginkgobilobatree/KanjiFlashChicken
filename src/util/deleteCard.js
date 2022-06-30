export const deleteCard = async (cardId) => {
  try {
    await fetch(`/flashCards/${cardId}`, { method: "DELETE" }); //:${cardId}
  } catch (error) {
    console.error(error.message);
  }
};
