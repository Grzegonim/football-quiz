import { useNavigate } from 'react-router-dom';

import styles from './Modal.module.scss';
import Button from '../Button/Button';

const Modal = ({status}) => {
  const navigate = useNavigate();

  if(status === 'success') return (
    <div className={styles.modalContainer}>
      <div className={styles.modal}>
        <h2>BRAWO!</h2>
        <Button onClick={() => navigate(-1)}>GRAJ DALEJ</Button>
        <Button onClick={() => navigate(-2)}>WYBIERZ LIGĘ</Button>
      </div>
    </div>
  )
  if(status === 'timeout') return (
    <div className={styles.modalContainer}>
      <div className={styles.modal}>
        <h2>Niestety czas się skończył!</h2>
        <Button onClick={() => navigate(-1)}>Wybierz nowy mecz!</Button>
      </div>
    </div>
  )
  if(status === 'start') return (
    <div className={styles.modalContainer}>
    <div className={styles.modal}>
      <h2>BRAWO!</h2>
      <Button onClick={() => navigate(-1)}>POTRZEBUJĘ JESZCZE MINUTKĘ!</Button>
      <Button onClick={() => navigate(-2)}>WYBIERZ LIGĘ</Button>
    </div>
  </div>
  )
  if(status === 'rules') return (
    <div className={styles.modalContainer}>
    <div className={styles.modal}>
      <h2>Jak grać</h2>
      <p>Wybierz ligę, sezon oraz zespół. Twoim zadaniem będzie poprawne wytypowanie wyjściowej jedenastki wybranego zespołu w danym meczu przed upływem wyznczonego czasu. Na odpowiedź masz pięć minut. Powodzenia!</p>    
    </div>
  </div>
  )
}

export default Modal;