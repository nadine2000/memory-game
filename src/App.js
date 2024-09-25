import Home from "./components/Home";
import Header from "./components/Header";
import PageNotFound from "./components/PageNotFound";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import GenerateGame from "./components/GenerateGame";
import Win from "./components/Win";

function App() {
  return (
      <div className="container mx-auto">
        <Header/>
        <BrowserRouter>
          <Routes>
              <Route path="/" element={<Home/>}/>
              <Route path="/game" element={<GenerateGame/>}/>
              <Route path="/win" element={<Win/>}/>
              <Route path={"*"} element={<PageNotFound/>}/>
          </Routes>
        </BrowserRouter>
      </div>
  );
}

export default App;
