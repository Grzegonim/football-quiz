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
        <h2>BRAWO!</h2>
        <Button onClick={() => navigate(-1)}>POTRZEBUJĘ JESZCZE MINUTKĘ!</Button>
        <Button onClick={() => navigate(-2)}>WYBIERZ LIGĘ</Button>
      </div>
    </div>
  )
}

export default Modal;