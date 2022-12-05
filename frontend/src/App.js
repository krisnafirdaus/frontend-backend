import { BrowserRouter, Routes, Route } from "react-router-dom";
import List from "./components/List";
import Add from "./components/Add";
import Edit from "./components/Edit";

function App() {
  return (
    <BrowserRouter>
      <div className="container mx-auto">
        <Routes>
          <Route path="/" element={<List />} />
          <Route path="add" element={<Add />} />
          <Route path="edit/:id" element={<Edit />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
