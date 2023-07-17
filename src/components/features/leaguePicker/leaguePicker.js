import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";

import styles from './leaguePicker.module.scss';
import Button from "../Button/Button";
import Carousel from "../Carousel/Carousel";
import { fetchTeams } from "../../../redux/teamsReducer";

const LeaguePicer = () => {
  const dispatch = useDispatch();
  const [season, setSeason] = useState('');
  const teams = useSelector(state => state.teams);
  const pickSeason = year => {
    setSeason(year)
    dispatch(fetchTeams(year));
  };
  console.log(teams)

  return (
    <div className={styles.container}>
      <div className={styles.picker}>
          <span>Wybierz sezon</span>
          <Button onClick={(e) => pickSeason(e.target.textContent)}>2010</Button>
          <Button onClick={(e) => pickSeason(e.target.textContent)}>2014</Button>
          <Button onClick={(e) => pickSeason(e.target.textContent)}>2018</Button>
          <Button onClick={(e) => pickSeason(e.target.textContent)}>2022</Button>
          {teams.length != 0 && teams.length !== undefined && <Carousel year={season} />}
      </div>
    </div>
  )
}

export default LeaguePicer;