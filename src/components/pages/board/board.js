import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';

import styles from './board.module.scss';
import { fetchFixture } from '../../../redux/fixtureReducer';

const Board = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  useEffect(() => {
    dispatch(fetchFixture(id));
  }, [id]);
  const [correctAnswers, setCorrectAnswers] = useState([]);
  const [name, setName] = useState([]);
  const match = useSelector(state => state.lineups[0]);

  const playerLine = player => {
    let position = parseInt(player.player.grid.slice(0, 1));
    return position;
  }
  const squad = [];
  const line1 = [];
  const line2 = [];
  const line3 = [];
  const line4 = [];
  const line5 = [];

  {(match) && match.startXI.forEach(player => {
    if(playerLine(player) === 1) {
      line1.push(player);
      squad.push(player);
    } else if(playerLine(player) === 2) {
      line2.push(player);
      squad.push(player);
    } else if(playerLine(player) === 3) {
      line3.push(player);
      squad.push(player);
    } else if(playerLine(player) === 4) {
      line4.push(player);
      squad.push(player);
    } else if(playerLine(player) === 5) {
      line5.push(player);
      squad.push(player);
    }
  })};

  const handleAnswer = (e) => {
    e.preventDefault();
    const player = squad.find(player => player.player.name.includes(name));
    player !== undefined ? setCorrectAnswers([...correctAnswers, player.player.id]) : console.log('nie ma');
  }
  
  return (
    <section className={styles.boardContainer}>
      <div className={styles.board}>
        {line1.length > 0 && <div className={styles.line}>{line1.map(player => <div className={styles.player}>{correctAnswers.includes(player.player.id) ? <>{player.player.number}<span>{player.player.name}</span></> : <>?<span>?</span></>}</div>)}</div>}
        {line2.length > 0 && <div className={styles.line}>{line2.map(player => <div className={styles.player}>{correctAnswers.includes(player.player.id) ? <>{player.player.number}<span className={styles.flip}>{player.player.name}</span></> : <>?<span>?</span></>}</div>)}</div>}
        {line3.length > 0 && <div style={{columnStart: 'auto'}} className={styles.line}>{line3.map(player => <div className={styles.player}>{correctAnswers.includes(player.player.id) ? <>{player.player.number}<span className={styles.flip}>{player.player.name}</span></> : <>?<span>?</span></>}</div>)}</div>}
        {line4.length > 0 && <div className={styles.line}>{line4.map(player => <div className={styles.player}>{correctAnswers.includes(player.player.id) ? <>{player.player.number}<span className={styles.flip}>{player.player.name}</span></> : <>?<span>?</span></>}</div>)}</div>}
        {line5.length > 0 && <div className={styles.line}>{line5.map(player => <div className={styles.player}>{correctAnswers.includes(player.player.id) ? <>{player.player.number}<span className={styles.flip}>{player.player.name}</span></> : <>?<span>?</span></>}</div>)}</div>}
      </div>
      <form onSubmit={e => handleAnswer(e) }>
        <input onChange={e => setName(e.target.value)} type='text'></input>
      </form>
    </section>
  )  
}

export default Board;