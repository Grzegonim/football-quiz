import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { fetchMatches } from "./redux/matchesReducer";
import Board from "./components/pages/board/board";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchMatches());
  }, [dispatch])

  return (
    <Board />
  );
}

export default App;
