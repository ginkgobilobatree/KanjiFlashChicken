import { BrowserRouter, Routes, Route } from "react-router-dom";
import Cube from "./pages/Cube";
import Card from "./pages/Card";
import Header from "./pages/Header";
import Footer from "./pages/Footer";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/cube" element={<Cube />}/>
        <Route path="/card" element={<Card />}/>
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
