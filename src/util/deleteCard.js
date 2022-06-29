export const deleteCard = async (cardId) => {
  try {
    const response = await fetch(`/flashCards/${cardId}`, { method: "DELETE" }); //:${cardId}
  } catch (error) {
    console.error(error);
  }
};
