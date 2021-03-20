import classNames from 'classnames';
import styles from './styles.module.css';

const NavBar = ({isActive = false, bgActive = false, onClickButton}) => {
    const handleClick = () => {
        onClickButton && onClickButton()
    };

    return (
        <nav id={styles.navbar} className={classNames(
            {[styles.bgActive]: bgActive}
        )}>
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
