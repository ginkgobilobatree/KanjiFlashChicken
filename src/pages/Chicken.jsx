import React from "react";
import Rooster from "../img/chicken.jpg";

export default function Chicken() {
  const style = {
    figure: "w-[200px] mx-auto mt-4 rounded overflow-hidden",
    img: "w-full",
  };
  return (
    <figure className={style.figure}>
      <img className={style.img} src={Rooster} alt="rooster" />
    </figure>
  );
}
