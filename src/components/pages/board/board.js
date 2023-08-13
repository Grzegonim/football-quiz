import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';

import styles from './Board.module.scss';
import { fetchFixture } from '../../../redux/fixtureReducer';
import Modal from '../../features/Modal/Modal';
import Timer from '../../features/Timer/Timer';

const Board = () => {
  const dispatch = useDispatch();
  const { id, team } = useParams();
  useEffect(() => {
    dispatch(fetchFixture(id));
  }, [id]);
  const [correctAnswers, setCorrectAnswers] = useState([]);
  const [name, setName] = useState();
  const [valid, setValid] = useState(false);
  const [history, setHistory] = useState([]);
  const match = useSelector(state => state.lineups);
  const fixture = useSelector(state => state.fixture);
  const [time, setTime] = useState(300000);
  const [timer, setTimer] = useState(true);
  const teamName = localStorage.getItem('team');

  useEffect(() => {
    let interval;
    if(timer){
      interval = setInterval(() => {
        setTime((prevTime) => prevTime - 10);
      }, 10);
    } 
    return () => clearInterval(interval);
  }, [timer])

  if(time < 0) setTime(false);

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

  { (match.length !== 0 && match.length !== undefined) && match.filter(lineup => lineup.team.id.toString() === team)[0].startXI.forEach(player => {
    const name = player.player.name.split(' ');
    squad.push({ name: name.pop(), id: player.player.id });

    if(playerLine(player) === 1) {
      line1.push(player);
    } else if(playerLine(player) === 2) {
      line2.push(player);
    } else if(playerLine(player) === 3) {
      line3.push(player);
    } else if(playerLine(player) === 4) {
      line4.push(player);
    } else if(playerLine(player) === 5) {
      line5.push(player);
    }
  })};

  const handleAnswer = async (e) => {
    e.preventDefault();
    !history.includes(name) && setHistory([...history, name]);
    const player = squad.find(player => player.name.toLowerCase() === name.toLowerCase());
    player !== undefined ? setCorrectAnswers([...correctAnswers, player.id]) : setValid(true);
    setName('');
  };
  
  return (
    <section className={styles.boardContainer}>
      <Timer time={time} />
      { fixture.length !== 0 && fixture.length !== undefined &&
        <div className={styles.fixture}>
          <span>{fixture[0].teams.home.name}</span><span>{fixture[0].goals.home}</span>:<span>{fixture[0].goals.away}</span><span>{fixture[0].teams.away.name}</span>
        </div>
      }
      <div className={styles.board}>
        {line1.length > 0 && <div className={styles.line}>{line1.map(player => <div key={player.player.id} className={correctAnswers.includes(player.player.id) ? styles.success : styles.player}>{correctAnswers.includes(player.player.id) ? <>{player.player.number}<span>{player.player.name}</span></> : <>?<span>?</span></>}</div>)}</div>}
        {line2.length > 0 && <div className={styles.line}>{line2.map(player => <div key={player.player.id} className={correctAnswers.includes(player.player.id) ? styles.success : styles.player}>{correctAnswers.includes(player.player.id) ? <>{player.player.number}<span className={styles.flip}>{player.player.name}</span></> : <>?<span>?</span></>}</div>)}</div>}
        {line3.length > 0 && <div className={styles.line}>{line3.map(player => <div key={player.player.id} className={correctAnswers.includes(player.player.id) ? styles.success : styles.player}>{correctAnswers.includes(player.player.id) ? <>{player.player.number}<span className={styles.flip}>{player.player.name}</span></> : <>?<span>?</span></>}</div>)}</div>}
        {line4.length > 0 && <div className={styles.line}>{line4.map(player => <div key={player.player.id} className={correctAnswers.includes(player.player.id) ? styles.success : styles.player}>{correctAnswers.includes(player.player.id) ? <>{player.player.number}<span className={styles.flip}>{player.player.name}</span></> : <>?<span>?</span></>}</div>)}</div>}
        {line5.length > 0 && <div className={styles.line}>{line5.map(player => <div key={player.player.id} className={correctAnswers.includes(player.player.id) ? styles.success : styles.player}>{correctAnswers.includes(player.player.id) ? <>{player.player.number}<span className={styles.flip}>{player.player.name}</span></> : <>?<span>?</span></>}</div>)}</div>}
      </div>
      <form onSubmit={e => handleAnswer(e) } onChange={() => setValid(false)}>
        <label>Wpisz nazwisko piłkarza {teamName}</label>
        <input className={valid && styles.invalid} onChange={e => setName(e.target.value)} type='text' value={name}></input>
      </form>
      <div className={styles.historyContainer}>
        {history.map(name => <span>{name}</span>)}
      </div>
      {
        (correctAnswers.length === 11) && <Modal status='success' />
      }
      {
        time === false && <Modal status='timeout' />
      }
    </section>
  )  
}

export default Board;