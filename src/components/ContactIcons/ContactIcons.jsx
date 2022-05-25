import React from "react";

const style = {
  section: "bg-canvas mx-4 p-4 rounded-md flex flex-col sm:mx-20 md:mx-40",
  a: "hover:bg-canvasBright flex mb-4 rounded-full items-center justify-center",
  img: "",
  figure: "ml-4 w-16 h-16 flex items-center justify-center",
  figcaption: "text-grayFont mx-auto",
};

const iconList = (links) =>
  links.map((link, i) => (
    <a
      key={i}
      className={style.a}
      href={link.href}
      target={link.target}
      rel="noreferrer"
    >
      <figure className={style.figure}>
        <img className={style.img} src={link.src} alt={link.alt} />
      </figure>
      <figcaption className={style.figcaption}>{link.figcaption}</figcaption>
    </a>
  ));

export default function ContactIcons({ links }) {
  return <section className={style.section}>{iconList(links)}</section>;
}
