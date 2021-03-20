import {useHistory} from 'react-router-dom';
import styles from './styles.module.css';

const NotFound = ({onChangePage}) => {
    const history = useHistory();
    const handleClickButton = () => {
        history.push('/game')
    };

    return (
        <div className={styles.game}>
            <p>This is NotFound page!</p>
            <button onClick={handleClickButton}>Homepage</button>
        </div>
    )
};

export default NotFound;
