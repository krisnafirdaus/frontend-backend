import { BrowserRouter, Routes, Route } from "react-router-dom";
import List from "./components/List";
import Add from "./components/Add";

function App() {
  return (
    <BrowserRouter>
      <div className="container mx-auto">
        <Routes>
          <Route path="/" element={<List />} />
          <Route path="add" element={<Add />} />
          <Route path="edit/:id" element={<Add />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
