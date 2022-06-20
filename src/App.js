import { BrowserRouter, Routes, Route } from "react-router-dom";
import Cube from "./pages/Cube";
import Cards from "./pages/Card";
import Header from "./pages/Header";
import Footer from "./pages/Footer";
import NewCard from "./pages/Card/NewCard";
import FlashCards from "./pages/Card/FlashCards";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="cubes" element={<Cube />} />
        <Route path="cards" element={<Cards />}>
          <Route path="newCard" element={<NewCard />} />
          <Route path="flashCards" element={<FlashCards />} />
        </Route>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
