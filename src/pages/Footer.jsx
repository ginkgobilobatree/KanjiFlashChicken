import React from "react";

export default function Footer() {
  const style = {
    footer: "fixed bottom-0 w-full flex justify-center py-2 border-t",
  };
  return (
    <footer className={style.footer}>copyright Gino Massalski, 2022</footer>
  );
}
