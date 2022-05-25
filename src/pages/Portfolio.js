import React from "react";
import Section from "../components/Section";
import Octocat from "../assets/GitHub-Mark/PNG/GitHub-Mark-64px.png";
import Youtube from "../assets/youtubeIcon.png";
import ContactIcons from "../components/ContactIcons";

const portfolio = {
  title: "here is what i did",
};

const links = [
  {
    href: "https://github.com/ginkgobilobatree",
    target: "_blank",
    src: Octocat,
    alt: "octocat",
    figcaption: "ginkgobilobatree",
  },
  {
    href: "https://www.youtube.com/channel/UCP9dcgnOjNQXdWC0ZJMfuUQ",
    target: "_blank",
    src: Youtube,
    alt: "youtube icon",
    figcaption: "Mino Gassa",
  },
];

export default function Portfolio() {
  return (
    <>
      <Section section={portfolio} />
      <ContactIcons links={links} />
    </>
  );
}
