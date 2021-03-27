import classNames from 'classnames';
import styles from './styles.module.css';

const PokemonCard = ({name, type, img, id, pokemonKey, values, isActive, changeVisibility, minimize, className, isSelected, possession}) => {

    const handleClick = () => {
        changeVisibility && changeVisibility(pokemonKey)
    };

    return (
            <div
                className={classNames(styles.pokemonCard, className, {
                    [styles.active]: isActive,
                    [styles.selected]: isSelected,
                })}
                onClick={handleClick}
            >
                <div className={styles.cardFront}>
                    <div className={classNames(styles.wrap, styles.front)}>
                        <div className={classNames(styles.pokemon, styles[type], styles[possession])}>
                            <div className={styles.values}>
                                <div className={classNames(styles.count, styles.top)}>{values.top}</div>
                                <div className={classNames(styles.count, styles.right)}>{values.right}</div>
                                <div className={classNames(styles.count, styles.bottom)}>{values.bottom}</div>
                                <div className={classNames(styles.count, styles.left)}>{values.left}</div>
                            </div>
                            <div className={styles.imgContainer}>
                                <img src={img} alt={name} />
                            </div>
                            { !minimize && (<div className={styles.info}>
                                <span className={styles.number}>#{id}</span>
                                <h3 className={styles.name}>
                                    {name}
                                </h3>
                                <small className={styles.type}>
                                    Type: <span>{type}</span>
                                </small>
                            </div>) }
                        </div>
                    </div>
                </div>

                <div className={styles.cardBack}>
                    <div className={classNames(styles.wrap, styles.back)} />
                </div>

            </div>
    )
};

export default PokemonCard;
