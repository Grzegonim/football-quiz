import { useState } from 'react';

import styles from './Info.module.scss';
import Button from '../Button/Button';

const Info = () => {
  const [isActice, setIsActive] = useState(true);

  return (
    <>
      {isActice &&     
        <div className={styles.infoContainer}>
          <h2>Hey!</h2>
          <p>Quiz needs a lot of work, especially RWD which Im currently working on. Its a very early version so thanks for checking.</p>
          <Button onClick={() => setIsActive(false)}>Play!</Button>
        </div>
      }
    </>
  )
}

export default Info;