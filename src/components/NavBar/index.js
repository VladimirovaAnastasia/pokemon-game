import classNames from 'classnames';
import styles from './styles.module.css';

const NavBar = ({isActive = false, onClickButton}) => {
    const handleClick = () => {
        onClickButton && onClickButton()
    };

    return (
        <nav className={styles.root}>
            <div className={styles.navWrapper}>
                <p className={styles.brand}>
                    LOGO
                </p>
                <a onClick={handleClick} className={classNames(styles.menuButton, {[styles.active]: isActive})}>
                    <span/>
                </a>
            </div>
        </nav>
    )
};

export default NavBar;
