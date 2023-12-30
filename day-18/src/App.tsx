import { Link, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import "./App.css";
import Books from "./pages/Books";

function App() {
  return (
    <>
    <nav>
      <ul>
        <li><Link to = "/">ghar</Link></li>
        <li><Link to = "/books">books</Link></li>
        <li><Link to = "/books/1">Books 1github</Link></li>
      </ul>
    </nav>
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/books" element={<Books/>}/>
      <Route path="/books/:id" element = {<Books/>} />
      <Route />
    </Routes>
    </>
  );
}

export default App;
