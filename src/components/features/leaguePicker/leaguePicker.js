import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";

import styles from './leaguePicker.module.scss';
import Button from "../Button/Button";
import Carousel from "../Carousel/Carousel";
import { fetchTeams } from "../../../redux/teamsReducer";
import { fetchSeasons } from "../../../redux/seasonsReducer";

const LeaguePicer = () => {
  const dispatch = useDispatch();
  const [season, setSeason] = useState('');
  const seasons = useSelector(state => state.seasons);
  const teams = useSelector(state => state.teams);
  const pickSeason = (year, id) => {
    setSeason(year)
    dispatch(fetchTeams(year, id));
  };
  const pickSeasons = (league, country) => {
    dispatch(fetchSeasons(league, country));
  }

  return (
    <div className={styles.container}>
      <div className={styles.picker}>
          <Button onClick={(e) => pickSeasons('Premier League', 'England')}>Premier League</Button>
          <Button onClick={(e) => pickSeasons('La Liga', 'Spain')}>La Liga</Button>
          <Button onClick={(e) => pickSeasons('Ekstraklasa', 'Poland')}>Ekstraklasa</Button>
          <Button onClick={(e) => pickSeasons('World Cup', 'World')}>World Cup</Button>
          {seasons.length !== 0 && seasons.length !== undefined && seasons[0].seasons.map(season => <Button onClick={(e) => pickSeason(season.year, seasons[0].league.id)}>{season.year}</Button>)}
          {teams.length !== 0 && teams.length !== undefined && <Carousel year={season} />}
      </div>
    </div>
  )
}

export default LeaguePicer;