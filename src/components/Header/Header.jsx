import React from "react";
import Navbar from "../Navbar";
import { Link } from "react-router-dom";
import Hero from "../Hero";

export default function Header() {
  return (
    <>
      <Link to="/">
        <Hero />
      </Link>
      <Navbar />
    </>
  );
}
