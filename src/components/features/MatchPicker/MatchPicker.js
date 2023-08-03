import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { fetchFixtures } from "../../../redux/fixturesReducer";
import FixtureMiniature from "../FixtureMiniature/FixtureMiniature";

const MatchPicker = () => {
  const dispatch = useDispatch();
  const { id, year, league } = useParams();
  const fixtures = useSelector(state => state.fixtures);
  useEffect(() => {
    dispatch(fetchFixtures(id, year, league));
  }, [id, year]);

  if(fixtures.length === undefined) return <h1>Loading...</h1>
  else return (
    <>
      {fixtures.map(fixture => <FixtureMiniature home={fixture.teams.home} away={fixture.teams.away} league={fixture.league} fixture={fixture.fixture} />)}
    </> 
  )
}

export default MatchPicker;