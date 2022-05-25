import React from "react";

const style = {
  footer: "fixed bottom-0 w-full text-canvas bg-bigButton h-6",
  paragraph: "text-center text-sm",
};

export default function Footer() {
  return (
    <footer className={style.footer}>
      <p className={style.paragraph}>Copyright © 2022 Gino Massalski</p>
    </footer>
  );
}
