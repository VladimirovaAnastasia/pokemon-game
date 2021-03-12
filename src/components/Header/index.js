import styles from './styles.module.css'

const Header = (props) => {
    const {title = 'Hello', descr = 'World!'} = props;

    return (
        <header className={styles.root}>
            <div className={styles.forest}></div>
            <div className={styles.container}>
                <h1>{title}</h1>
                <p>{descr}</p>
            </div>
        </header>
    )
};

export default Header;
