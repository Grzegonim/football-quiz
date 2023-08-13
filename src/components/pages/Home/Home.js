import { useState } from "react";

import LeaguePicer from "../../features/LeaguePicker/LeaguePicker";
import Info from '../../features/Info/Info';
import styles from './Home.module.scss';
import Modal from '../../features/Modal/Modal';

const Home = () => {
  const [isActive, setIsActive] = useState(false);
  return (
    <>
      <div onClick={() => setIsActive(!isActive)} className={styles.rules}>{isActive ? 'X' : 'i'}</div>
      {isActive && <Modal status='rules' />}
      <Info />
      <LeaguePicer />
    </>
  )
}

export default Home;