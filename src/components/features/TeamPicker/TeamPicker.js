import { useSelector } from "react-redux";
import { useState } from "react";
import { Link } from "react-router-dom";

import styles from './TeamPicker.module.scss';
import Button from "../Button/Button";

const TeamPicker = ({ year }) => {
  const teams = useSelector(state => state.teams);
  const seasons = useSelector(state => state.seasons);
  const [currentSlide, setCurrentSlide] = useState(0);
  const handleIncrease = () => {
    currentSlide > (teams.length - 2) ? setCurrentSlide(0) : setCurrentSlide(currentSlide + 1);
  }
  const handleDecrease = () => {
    currentSlide < 1 ? setCurrentSlide(teams.length - 1) : setCurrentSlide(currentSlide - 1);
  }
  
  return (
    <div className={styles.carouselContainer}>
      <div className={styles.carousel}>
        <Button onClick={() => handleDecrease()}>&lt;</Button>
        <Link to={`/matches/${teams[currentSlide].team.id}/${year}/${seasons[0].league.id}/${teams[currentSlide].team.id}`}><img onClick={() => localStorage.setItem('team', teams[currentSlide].team.name)} key={teams[currentSlide].team.id} src={teams[currentSlide].team.logo} alt={teams[currentSlide].team.name} /></Link>
        <Button onClick={() => handleIncrease()}>&gt;</Button>
      </div>
    </div>
  )
}

export default TeamPicker;