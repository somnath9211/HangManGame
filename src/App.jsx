import { Route, Routes } from "react-router-dom";
import "./App.css";
import StartGame from "./pages/StartGame";
import PlayGame from "./pages/PlayGame";
import HomePage from "./pages/HomePage";
import { wordContext } from "./Context/WordContext.js";
import { useState } from "react";
function App() {
  const [wordList, setWordList] = useState("");
  const [word, setWord] = useState("");
  const [hint, setHint] = useState("");
  return (
    <wordContext.Provider
      value={{ wordList, setWordList, word, setWord, hint, setHint }}>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/start" element={<StartGame />} />
        <Route path="/play" element={<PlayGame />} />
      </Routes>
    </wordContext.Provider>
  );
}

export default App;
