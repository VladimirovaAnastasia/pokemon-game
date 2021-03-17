import classNames from 'classnames';
import styles from './styles.module.css';

const Menu = ({isActive = false, onClickButton}) => {

    return (
        <div className={classNames(styles.menuContainer, {[styles.deactive]: !isActive}, {[styles.active]: isActive})}>
          <div className={styles.overlay} />
          <div className={styles.menuItems}>
            <ul>
              <li>
                <a href="#welcome">
                  HOME
                </a>
              </li>
              <li>
                <a href="#game">
                  GAME
                </a>
              </li>
              <li>
                <a href="#about">
                  ABOUT
                </a>
              </li>
              <li>
                <a href="#contact">
                  CONTACT
                </a>
              </li>
            </ul>
          </div>
        </div>
    )
};

export default Menu;

