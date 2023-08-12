import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { fetchFixtures } from "../../../redux/fixturesReducer";
import FixtureMiniature from "../FixtureMiniature/FixtureMiniature";
import styles from './MatchPicker.module.scss';
import { Spinner } from "react-bootstrap";

const MatchPicker = () => {
  const dispatch = useDispatch();
  const { id, year, league, team } = useParams();
  const fixtures = useSelector(state => state.fixtures);
  useEffect(() => {
    dispatch(fetchFixtures(id, year, league));
  }, [id, year]);

  if(fixtures.length === undefined) return <Spinner animation="border" variant="light" />
  else return (
    <div className={styles.container}>
      {fixtures.map(fixture => <FixtureMiniature key={fixture.fixture.id} team={team} home={fixture.teams.home} away={fixture.teams.away} league={fixture.league} fixture={fixture.fixture} />)}
    </div>
  )
}

export default MatchPicker;