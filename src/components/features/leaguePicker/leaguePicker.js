import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";

import styles from './leaguePicker.module.scss';
import Form from 'react-bootstrap/Form';
import { fetchSeason } from "../../../redux/matchesReducer";

const LeaguePicer = () => {
  const dispatch = useDispatch();
  const leagues = useSelector(state => state.leagues);
  const [leagueId, setLeagueId] = useState(1);
  const [leagueActive, setLeagueActive] = useState(false);
  console.log(leagueId)
  const fetchSeasons = (year) => {
    console.log(typeof year.toString())
    dispatch(fetchSeason(year.toString()));
  }
  let seasons = [];
  if(leagues.length > 0) {seasons = leagues.filter(league => league.league.id === leagueId);}

  if(leagues.length > 0) return (
    <div className={styles.container}>
      <div className={styles.picker}>
          <option>Wybierz sezon</option>
          {seasons[0].seasons.map(season => <div key={season.year} value={season.year} onClick={() => fetchSeasons(season.year)}>{season.year}</div>)}
      </div>
    </div>
  )
}

export default LeaguePicer;