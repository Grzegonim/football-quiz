import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';

import styles from './board.module.scss';
import { fetchFixture } from '../../../redux/fixtureReducer';
import Button from '../../features/Button/Button';

const Board = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  useEffect(() => {
    dispatch(fetchFixture(id));
  }, [id]);
  const [correctAnswers, setCorrectAnswers] = useState([]);
  const [name, setName] = useState();
  const [valid, setValid] = useState(false);
  const [history, setHistory] = useState([]);
  const match = useSelector(state => state.lineups[0]);
  const fixture = useSelector(state => state.fixture);

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
    setHistory([...history, name]);
    const player = squad.find(player => player.name.toLowerCase() === name.toLowerCase());
    player !== undefined ? setCorrectAnswers([...correctAnswers, player.id]) : setValid(true);
    setName('');
  };
  console.log(correctAnswers.length)
  return (
    <section className={styles.boardContainer}>
      { fixture.length !== 0 && fixture.length !== undefined &&
        <div>
        <span>{fixture[0].teams.home.name}</span><span>{fixture[0].goals.home}</span>:<span>{fixture[0].goals.away}</span><span>{fixture[0].teams.away.name}</span>
      </div>}
      <div className={styles.board}>
        {line1.length > 0 && <div className={styles.line}>{line1.map(player => <div className={correctAnswers.includes(player.player.id) ? styles.success : styles.player}>{correctAnswers.includes(player.player.id) ? <>{player.player.number}<span>{player.player.name}</span></> : <>?<span>?</span></>}</div>)}</div>}
        {line2.length > 0 && <div className={styles.line}>{line2.map(player => <div className={correctAnswers.includes(player.player.id) ? styles.success : styles.player}>{correctAnswers.includes(player.player.id) ? <>{player.player.number}<span className={styles.flip}>{player.player.name}</span></> : <>?<span>?</span></>}</div>)}</div>}
        {line3.length > 0 && <div className={styles.line}>{line3.map(player => <div className={correctAnswers.includes(player.player.id) ? styles.success : styles.player}>{correctAnswers.includes(player.player.id) ? <>{player.player.number}<span className={styles.flip}>{player.player.name}</span></> : <>?<span>?</span></>}</div>)}</div>}
        {line4.length > 0 && <div className={styles.line}>{line4.map(player => <div className={correctAnswers.includes(player.player.id) ? styles.success : styles.player}>{correctAnswers.includes(player.player.id) ? <>{player.player.number}<span className={styles.flip}>{player.player.name}</span></> : <>?<span>?</span></>}</div>)}</div>}
        {line5.length > 0 && <div className={styles.line}>{line5.map(player => <div className={correctAnswers.includes(player.player.id) ? styles.success : styles.player}>{correctAnswers.includes(player.player.id) ? <>{player.player.number}<span className={styles.flip}>{player.player.name}</span></> : <>?<span>?</span></>}</div>)}</div>}
      </div>
      <form onSubmit={e => handleAnswer(e) } onChange={() => setValid(false)}>
        <input className={valid && styles.invalid} onChange={e => setName(e.target.value)} type='text' value={name}></input>
      </form>
      <div className={styles.historyContainer}>
        {history.map(name => <span>{name}</span>)}
      </div>
      {
        correctAnswers.length === 11 &&
        <div className={styles.modalContainer}>
          <div className={styles.modal}>
            <h2>BRAWO!</h2>
            <Button>GRAJ DALEJ</Button>
            <Button>WYBIERZ LIGĘ</Button>
          </div>
        </div>
      }
    </section>
  )  
}

export default Board;