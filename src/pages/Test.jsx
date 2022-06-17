import React from "react";

export default function Test() {
  const fetching = async () => {
    const req = {
      method: "GET",
      headers: {
        "Content-Type": "application"
      }
    }
    console.log('successfully pushed this button :-)');
    const response = await fetch("/test", req); //seems like return && async/await are mandatory
    const result = await response.json();
    console.log(result.message)
  }
  
  return (
    <div className="mt-20">
      <button className="border border-[white] text-[white]" onClick={fetching}>Test</button>
      <button className="border border-[white] text-[white]" onClick={() => console.log('test')}>test this!</button>
      {/* <p>{fetched.message}</p> */}
    </div>
  );
}
