import React from "react";
import Section from "../components/Section";

const aboutMe = {
  title: "about me",
};

const style = {
  section: "bg-canvas mx-4 mb-10 p-4 rounded-md mb-3 sm:mx-20 md:mx-40",
  p: "text-grayFont",
}

export default function AboutMe() {
  return <><Section section={aboutMe} />
  <section className={style.section}>
  <p className={style.p}>Ich bin ein (Web-) Developer in Development. Ich habe diesen Weg eingeschlagen, um meine Karriereaussichten zu verbessern. Ich finde diese Arbeit nicht nur intellektuell spannend, sie macht mir einfach auch viel Spaß. Es verbindet meinen Hang zur Problemlösung mit meinem Faible für Sprachen und der Möglichkeit mich kreativ auszulassen. Meine bunte Vergangenheit hat mich zu einem hart arbeitenden Menschen gemacht, der sich verpflichtet fühlt, sein Bestes zu geben. Ich freue mich, stetig meine Fähigkeiten in diesem Bereich zu erweitern und von zukünftigen Kollegen zu lernen.</p></section></>
}
