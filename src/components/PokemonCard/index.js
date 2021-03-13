import {useState} from "react";
import classNames from "classnames";
import styles from "./styles.module.css";

import cardBackSide from "../../assets/card-back-side.jpg";

const PokemonCard = ({name, type, img, id, values}) => {

    let [clicked, setClicked] = useState(false);

    return (
        <div className={styles.root}>
            <div className={classNames(styles.pokemonCard, clicked ? styles.active : null)}
                 onClick={() => setClicked((clicked) => !clicked)}>
                <div className={styles.cardFront}>
                    <div className={classNames(styles.wrap, styles.front)}>
                        <div className={classNames(styles.pokemon, styles[type])}>
                            <div className={styles.values}>
                                <div className={classNames(styles.count, styles.top)}>{values.top}</div>
                                <div className={classNames(styles.count, styles.right)}>{values.right}</div>
                                <div className={classNames(styles.count, styles.bottom)}>{values.bottom}</div>
                                <div className={classNames(styles.count, styles.left)}>{values.left}</div>
                            </div>
                            <div className={styles.imgContainer}>
                                <img src={img} alt={name}/>
                            </div>
                            <div className={styles.info}>
                                <span className={styles.number}>{id}</span>
                                <h3 className={styles.name}>{name}</h3>
                                <small className={styles.type}>Type: <span>{type}</span></small>
                            </div>
                        </div>
                    </div>
                </div>

                <div className={styles.cardBack}>
                    <div className={classNames(styles.wrap, styles.back)}>
                        <img src={cardBackSide} alt="Сard Backed"/>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default PokemonCard;