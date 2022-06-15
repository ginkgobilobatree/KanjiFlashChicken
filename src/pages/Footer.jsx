import React from "react";

export default function Footer() {
  const style = {
    footer: "fixed text-dry bottom-0 w-full flex justify-center py-2 border-t border-t-dry border-dashed text-sm",
  };
  return (
    <footer className={style.footer}>copyright gino massalski, 2022</footer>
  );
}
