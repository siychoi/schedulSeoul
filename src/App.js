import {
  HashRouter,
  BrowserRouter as Router,
  Routes,
  Route,
  BrowserRouter,
} from "react-router-dom";
import Home from "./routes/Home";
import Detail from "./routes/Detail";
import List from "./routes/List";
import "./input.css";

function App() {
  return (
      <BrowserRouter>
        <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/detail/:id" element={<Detail />}></Route>
        <Route path="/list" element={<List />}></Route>
        </Routes>
      </BrowserRouter>
  );
}

export default App;