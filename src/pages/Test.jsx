import React, {useState} from "react";

export default function Test() {
    const [fetched, setFetched] = useState("hallo")
  const fetching = async () => {
    const response = await fetch("/test", {
      method: "GET",
      headers: {
        "Content-Type": "application",
      },
    });
    const result = await response.json();
    setFetched(result)
  };
  console.log(fetched)
  return (<><button onClick={fetching}>Test</button><p>{fetched?.message}</p></>);

}
