import {useHistory} from 'react-router-dom';
import styles from './styles.module.css';

const ContactPage = () => {
    const history = useHistory();
    const handleClickButton = () => {
        history.push('/')
    };

    return (
        <div className={styles.game}>
            <p>This is Contact page!</p>
            <button onClick={handleClickButton}>Homepage</button>
        </div>
    )
};

export default ContactPage;
