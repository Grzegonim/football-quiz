import { Link } from 'react-router-dom';

import styles from './FixtureMiniature.module.scss';
import Button from '../Button/Button';

const FixtureMiniature = ({ home, away, league, fixture, team }) => {

  return (
    <div className={styles.fixtureContainer}>

      <div className={styles.flags}>

        <div 
          style={{ backgroundImage: `url(${home.logo})` }} 
          className={styles.flag}
        >
          <span>{home.name}</span>
        </div>

        <div 
          className={styles.info}
        >
          <span>{league.name}</span>
          <span>{league.season}</span>
          <span>{league.round}</span>
          <Link to={`/match/${fixture.id}/${team}`}><Button>Graj</Button></Link>
        </div>

        <div 
          style={{ backgroundImage: `url(${away.logo})` }} 
          className={styles.flag}
        >
          <span>{away.name}</span>
        </div>

      </div>

    </div>
  )
}

export default FixtureMiniature;