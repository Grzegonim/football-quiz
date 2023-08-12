import { Routes, Route } from "react-router-dom";

import Home from "./components/pages/Home/Home";
import MatchPicker from "./components/features/MatchPicker/MatchPicker";
import Board from './components/pages/Board/Board';

function App() {

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/matches/:id/:year/:league/:team" element={<MatchPicker />} />
      <Route path="/match/:id/:team" element={<Board />} />
    </Routes>
  );
}

export default App;
