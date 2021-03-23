import {useHistory} from 'react-router-dom';
import styles from './styles.module.css';

const FinishPage = () => {
    const history = useHistory();
    const handleClickButton = () => {
        history.push('/')
    };

    return (
        <div className={styles.game}>
            <p>This is Finish page!</p>
            <button onClick={handleClickButton}>Homepage</button>
        </div>
    )
};

export default FinishPage;
