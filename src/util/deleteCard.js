export const deleteCard = async (cardId) => {
  try {
    const response = await fetch(`/flashCards/${cardId}`); //:${cardId}
    const result = response.json();
    return console.log(result)
  } catch (error) {
    console.error(error);
  }
};
