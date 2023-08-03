import { Routes, Route } from "react-router-dom";

import Home from "./components/pages/Home/Home";
import MatchPicker from "./components/features/MatchPicker/MatchPicker";
import Board from './components/pages/board/board';

function App() {

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/matches/:id/:year/:league" element={<MatchPicker />} />
      <Route path="/match/:id" element={<Board />} />
    </Routes>
  );
}

export default App;
