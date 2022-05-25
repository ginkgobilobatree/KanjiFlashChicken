import React from "react";
import Section from "../components/Section";
import cv from "../assets/CV.pdf";
import cvIMG from "../assets/CV.png";

const myCV = {
  title: "my CV",
  a: cv,
  aContent: "download CV",
};

const style = {
  figure: "mx-4 flex flex-col mb-16 sm:mx-20 md:mx-40",
  img: "",
  figcaption: "mt-4 flex justify-center",
  a: "bg-bigButton px-4 py-2 rounded-md text-canvas hover:scale-[1.1] border",
}

export default function MyCV() {
  return (
    <>
      <Section section={myCV} />
      <figure className={style.figure}>
        <img className={style.img} src={cvIMG} alt="CV" />
        <figcaption className={style.figcaption}>
        <a className={style.a} href={myCV.a} target="_blank" rel="noreferrer">
        {myCV.aContent}
      </a></figcaption>
      </figure>
    </>
  );
}
