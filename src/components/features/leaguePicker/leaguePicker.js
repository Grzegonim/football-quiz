import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";

import styles from './LeaguePicker.module.scss';
import Button from "../Button/Button";
import TeamPicker from "../TeamPicker/TeamPicker";
import { fetchTeams } from "../../../redux/teamsReducer";
import { fetchSeasons } from "../../../redux/seasonsReducer";
import { Form } from "react-bootstrap";

const LeaguePicer = () => {
  const dispatch = useDispatch();
  const [season, setSeason] = useState('');
  const [status, setStatus] = useState('league');
  const seasons = useSelector(state => state.seasons);
  const teams = useSelector(state => state.teams);
  const pickSeason = (year, id) => {
    setSeason(year)
    dispatch(fetchTeams(year, id));
    setStatus('team');
  };
  const pickSeasons = (league, country) => {
    dispatch(fetchSeasons(league, country));
    setStatus('season');
  };
  console.log(status)
  
  return (
    <div className={styles.container}>
      <div className={styles.picker}>
          {status === 'league' && 
            <>
            <div className={styles.buttons}>
            <h2>Wybierz ligę</h2>
            <Button onClick={(e) => pickSeasons('Premier League', 'England')}>Premier League</Button>
            <Button onClick={(e) => pickSeasons('La Liga', 'Spain')}>La Liga</Button>
            <Button onClick={(e) => pickSeasons('Ekstraklasa', 'Poland')}>Ekstraklasa</Button>
            <Button onClick={(e) => pickSeasons('World Cup', 'World')}>World Cup</Button>
            </div>
            </>
          }
          {seasons.length !== 0 && seasons.length !== undefined && status === 'season' &&
            <>
              <Form.Select onChange={(e) => setSeason(e.target.value)}>
                <option>Wybierz sezon</option>
                {seasons[0].seasons.map(season => season.year > 2015 &&
                <option key={season.year} value={season.year}>{season.year}</option>
                )}
              </Form.Select>
              <Button onClick={(e) => pickSeason(season, seasons[0].league.id)}>Wybieram</Button>
            </>
          }
          {teams.length !== 0 && teams.length !== undefined && status === 'team' &&
            <>
              <h2>Wybierz zespół</h2>
              <TeamPicker year={season} onClick={() => setSeason('league')} />
            </>
          }
      </div>
    </div>
  )
}

export default LeaguePicer;