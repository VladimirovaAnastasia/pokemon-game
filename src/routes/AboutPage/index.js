import {useHistory} from 'react-router-dom';
import styles from './styles.module.css';

const AboutPage = () => {
    const history = useHistory();
    const handleClickButton = () => {
        history.push('/')
    };

    return (
        <div className={styles.game}>
            <p>This is About page!</p>
            <button onClick={handleClickButton}>Homepage</button>
        </div>
    )
};

export default AboutPage;
