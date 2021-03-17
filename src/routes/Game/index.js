import styles from './styles.module.css';

const GamePage = ({onChangePage}) => {
    const handleClickButton = () => {
        onChangePage && onChangePage('app');
    };
    return (
        <div className={styles.game}>
            <p>This is game page!</p>
            <button onClick={handleClickButton}>Homepage</button>
        </div>
    )
};

export default GamePage;
