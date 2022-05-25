import React from "react";

const style = {
  section: "bg-canvas mx-4 p-4 rounded-md mb-3 sm:mx-20 md:mx-40",
  h1: "text-red text-xl border-b",
};

export default function Section({ section }) {
  return (
    <section className={style.section}>
      <h1 className={style.h1}>{section.title}</h1>
    </section>
  );
}
