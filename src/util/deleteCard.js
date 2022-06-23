export const deleteCard = async (ind) => {
  const req = {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
    body: `${ind}`,
  };
  try {
    await fetch("/flashCards", req);
  } catch (error) {
    console.error(error);
  }
};
