import React from "react";
import FlashCards from "./FlaschCards";
import NewCard from "./NewCard";
// import { Outlet } from "react-router-dom";

export default function Card() {
  const style = {
    main: "flex justify-center items-center flex-col",
  };
  return (
    <main className={style.main}>
      <NewCard />
      <FlashCards />
    </main>
  );
}
