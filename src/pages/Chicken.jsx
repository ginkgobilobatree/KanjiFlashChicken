import React from "react";
import Rooster from "../img/chicken.jpg";

export default function Chicken() {
  const style = {
    figure: "w-1/2 mx-auto mt-4",
  };
  return (
    <figure className={style.figure}>
      <img src={Rooster} alt="rooster" />
    </figure>
  );
}
