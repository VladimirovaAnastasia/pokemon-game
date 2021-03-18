import {Link} from 'react-router-dom';
import classNames from 'classnames';
import styles from './styles.module.css';

const MENU = [
  {
    title: "HOME",
    to: "/"
  },
  {
    title: "GAME",
    to: "/game"
  },
  {
    title: "ABOUT",
    to: "/about"
  },
  {
    title: "CONTACT",
    to: "/contact"
  }
];


const Menu = ({isActive, onClickButton}) => {
    const handleClick = () => {
      onClickButton && onClickButton()
    };

    return (
        <div className={classNames(styles.menuContainer, {
            [styles.deactive]: isActive === false,
            [styles.active]: isActive === true
        })}>
          <div className={styles.overlay} />
            <ul>
              {
                MENU.map(({title, to}, index) => (
                    <li key={index}>
                      <Link to={to} onClick={handleClick}>
                        {title}
                      </Link>
                    </li>
                ))
              }
            </ul>
        </div>
    )
};

export default Menu;

