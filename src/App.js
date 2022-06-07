import { BrowserRouter, Routes, Route } from "react-router-dom";
import Cube from "./components/Cube";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="*" element={<Cube />}/>
        
      </Routes>
    </BrowserRouter>
  );
}

export default App;
