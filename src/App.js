import { BrowserRouter, Routes, Route } from "react-router-dom";
import Cube from "./pages/Cube";
import Cards from "./pages/Card";
import Header from "./pages/Header";
import Footer from "./pages/Footer";
import NewCard from "./pages/Card/NewCard";
import FlashCards from "./pages/Card/FlaschCards";
import Chicken from "./pages/Chicken"

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/*"element={<Chicken />} />
        <Route path="/cube" element={<Cube />} />
        <Route path="/cards" element={<Cards />}>
          <Route path="newCard" element={<NewCard />} />
          <Route path="flashCards" element={<FlashCards />} />
        </Route>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
