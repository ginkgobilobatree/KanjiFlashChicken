import React from "react";
import Section from "../components/Section";
import ContactIcons from "../components/ContactIcons/ContactIcons";
import LinkedIn from "../assets/LinkedIn-Logos/LI-In-Bug.png";
import Phone from "../assets/phone.png";
import Email from "../assets/email.png";
import Keyboard from "../assets/keyboard.png";

const contact = {
  title: "let's get in touch",
};

const links = [
  {
    href: "https://www.linkedin.com/in/gino-massalski-367853186/",
    target: "_blank",
    src: LinkedIn,
    alt: "linkedIn",
    figcaption: "Gino Massalski",
  },
  {
    href: null,
    target: null,
    src: Phone,
    alt: "mobile",
    figcaption: "+49 179 122 3038",
  },
  {
    href: null,
    target: null,
    src: Email,
    alt: "e-mail",
    figcaption: "gino.massalski@gmail.com",
  },
];

const style = {
  section: "p-4 flex bg-canvas rounded-md mx-4 mt-3 sm:mx-20 md:mx-40 items-center justify-center",
  figure: "ml-4 w-16 h-16 flex items-center justify-center",
  img: "",
  form: "text-grayFont mx-auto flex flex-col",
  textarea: "my-2",
  input: "mb-2 bg-bigButton rounded-md text-canvas",
}

export default function Contact() {
  return (
    <>
      <Section section={contact} />
      <ContactIcons links={links} />
      <section className={style.section}>
        <figure className={style.figure}>
          <img className={style.img} src={Keyboard} alt="keyboard" />
        </figure>
        <form className={style.form}>
          <textarea className={style.textarea} placeholder="get in touch"></textarea>
          <input className={style.input} type="submit" value="abschicken"/>
        </form>
      </section>
    </>
  );
}
