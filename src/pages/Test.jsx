import React, { useState } from "react";

export default function Test() {
  const fetching = async () => {
    return await fetch("/test") //seems like return && async/awat are mandatory
  }


  /* const [fetched, setFetched] = useState({ message: "" });
  const fetching = async () => {
    const response = await fetch("/test", {
      method: "GET",
      headers: {
        "Content-Type": "application",
      },
    });
    const result = await response.json();
    setFetched(result);
  };
  console.log(fetched); */

  return (
    <>
      <button onClick={fetching}>Test</button>
      {/* <p>{fetched.message}</p> */}
    </>
  );
}
