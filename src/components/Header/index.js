import {useHistory} from 'react-router-dom';
import styles from './styles.module.css';

const Header = (props) => {
    const {title = 'Hello', descr = 'World!'} = props;
    const history = useHistory();

    const handleClick = () => {
        history.push('/game')
    };

    return (
        <header className={styles.root}>
            <div className={styles.forest}></div>
            <div className={styles.silhouette}></div>
            <div className={styles.moon}></div>
            <div className={styles.container}>
                <h1>{title}</h1>
                <p>{descr}</p>
                <button onClick={handleClick}>Start game</button>
            </div>
        </header>
    )
};

export default Header;
