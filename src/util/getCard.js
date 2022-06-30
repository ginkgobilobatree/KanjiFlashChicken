export async function getCard(setCard) {
    const req = {
      method: "GET",
      headers: {
        "Content-type": "application/json",
      },
    };
    try {
      const response = await fetch("/flashCards", req);
      const result = await response.json();
      setCard(JSON.parse(result));
      console.log("hi");
    } catch (error) {
      console.error(error.message);
    }
  };