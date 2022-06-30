export async function modifyCard(inputMod, ind) {
  const bodyContent = { inputMod, ind };
  const req = {
    method: "PUT",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify(bodyContent),
  };
  try {
    await fetch("/flashCards", req);
  } catch (error) {
    console.error(error.message);
  }
}
