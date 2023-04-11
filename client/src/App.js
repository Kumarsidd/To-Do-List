import { BrowserRouter, Route, Routes } from "react-router-dom";
import ShowToDo from "./components/ShowToDo";
import CreateToDo from "./components/CreateToDo";

function App() {
  return (
    <div className="app-contents">
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<ShowToDo />} />
          <Route path="/create-todo" element={<CreateToDo />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;