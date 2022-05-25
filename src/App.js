import { BrowserRouter, Routes, Route } from "react-router-dom";
import Welcome from "./pages/Welcome";
import Header from "./components/Header";
import AboutMe from "./pages/AboutMe";
import Footer from "./components/Footer";
import Contact from "./pages/Contact";
import MyCV from "./pages/MyCV";
import Portfolio from "./pages/Portfolio";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/aboutMe" element={<AboutMe />} />
        <Route path="/cv" element={<MyCV />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/getInTouch" element={<Contact />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
