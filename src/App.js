import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { fetchMatches, fetchLeague } from "./redux/matchesReducer";
import Board from "./components/pages/board/board";
import LeaguePicer from "./components/features/leaguePicker/leaguePicker";
import { fetchTeams } from "./redux/teamsReducer";
import TeamPicker from "./components/features/TeamPicker/TeamPicker";
import Container from "./components/features/Container/Container";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchTeams());
    dispatch(fetchLeague());
  }, [dispatch])

  return (
    <Container>
      <LeaguePicer />
      {/*<TeamPicker />*/}
    </Container>
  );
}

export default App;
