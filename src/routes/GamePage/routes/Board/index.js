import styles from './styles.module.css';
import { useContext} from 'react';
import {PokemonContext} from "../../../../context/pokemonContext";
import PokemonCard from "../../../../components/PokemonCard";

const BoardPage = () => {
    const {pokemons} = useContext(PokemonContext);



    return (
        <div className={styles.root}>
            <div className={styles.playerOne}>
                {
                    Object.values(pokemons).map(({id, name, img, type, values, isSelected}) => {
                        return <PokemonCard
                            className={styles.card}
                            key={id}
                            name={name}
                            img={img}
                            type={type}
                            id={id}
                            values={values}
                            isActive
                            minimize
                            isSelected={isSelected}
                        />
                    })
                }
            </div>
            <div className={styles.board}>
                <div className={styles.boardPlate}>1</div>
                <div className={styles.boardPlate}>2</div>
                <div className={styles.boardPlate}>3</div>
                <div className={styles.boardPlate}>4</div>
                <div className={styles.boardPlate}>5</div>
                <div className={styles.boardPlate}>6</div>
                <div className={styles.boardPlate}>7</div>
                <div className={styles.boardPlate}>8</div>
                <div className={styles.boardPlate}>9</div>
            </div>
        </div>
    );
};

export default BoardPage;
