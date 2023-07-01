import styles from './board.module.scss';
import { useSelector } from 'react-redux/es/hooks/useSelector';

const Board = () => {
  const match = useSelector(state => state.leagues[0]);
  const playerLine = player => {
    let position = parseInt(player.player.grid.slice(0, 1));
    return position;
  }
  const line1 = [];
  const line2 = [];
  const line3 = [];
  const line4 = [];
  const line5 = [];

  {(match) && match.startXI.forEach(player => {
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
  
  return (
    <section className={styles.boardContainer}>
      <div className={styles.board}>
        {line1.length > 0 && <div className={styles.line}>{line1.map(player => <div>{player.player.name}</div>)}</div>}
        {line2.length > 0 && <div className={styles.line}>{line2.map(player => <div>{player.player.name}</div>)}</div>}
        {line3.length > 0 && <div style={{columnStart: 'auto'}} className={styles.line}>{line3.map(player => <div>{player.player.name}</div>)}</div>}
        {line4.length > 0 && <div className={styles.line}>{line4.map(player => <div>{player.player.name}</div>)}</div>}
        {line5.length > 0 && <div className={styles.line}>{line5.map(player => <div>{player.player.name}</div>)}</div>}
      </div>
    </section>
  )  
}

export default Board;