export async function createCard(input) {
  const req = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(input),
  };
  try {
    await fetch("/flashCards", req);
  } catch (error) {
    console.error(error.message);
  }
};
