import React from "react";
import Section from '../components/Section'

const welcome = {
  title:"welcome and click around!",
  paragraph:"i am gino ...."
}

export default function Welcome() {
  return (
    <Section section={welcome}/>
  );
}
