import {useContext, useState} from 'react';
import {useHistory} from 'react-router-dom';
import PokemonCard from '../../../../components/PokemonCard';

import {PokemonContext} from '../../../../context/pokemonContext';
import {FirebaseContext} from '../../../../context/fireBaseContext';

import styles from './styles.module.css';
import classNames from 'classnames';

const FinishPage = () => {
    const firebase = useContext(FirebaseContext);
    const {gamePokemons, clearPokemonsData, winner} = useContext(PokemonContext);

    const [myPokemons, opponentPokemons] = gamePokemons;
    const [clickCounter, setClickCounter] = useState(0);
    const [newPokemon, setNewPokemon] = useState(null);

    const history = useHistory();

    const handleClickButton = () => {
        clearPokemonsData();

        if (newPokemon) {
            firebase.addPokemon(newPokemon)
        }

        history.push('/game')
    };

    const handlePokemonClick = (pokemon) => {
        if (clickCounter < 1 && winner === 1) {
            setNewPokemon({...pokemon, isSelected: false});
            pokemon.isSelected = !pokemon.isSelected;
        }
        setClickCounter(prev => prev + 1)
    };

    if (Object.keys(gamePokemons).length === 0) {
        history.replace('/game')
    }

    return (
        <>
            <div className={styles.cards}>
                {
                    myPokemons.map(item => (
                        <div className={styles.card}>
                            <PokemonCard
                                key={item.id}
                                name={item.name}
                                img={item.img}
                                type={item.type}
                                id={item.id}
                                values={item.values}
                                isActive
                                minimize
                                isSelected={item.isSelected}
                            />
                        </div>
                    ))
                }
            </div>

            <button className={styles.button} onClick={handleClickButton}>END GAME</button>

            <div className={styles.cards}>
                {
                    opponentPokemons.map(item => (
                        <div
                            className={classNames(styles.card, {
                                [styles.selected]: item.selected
                            })}
                             onClick={() => handlePokemonClick(item)}
                        >
                            <PokemonCard
                                key={item.id}
                                name={item.name}
                                img={item.img}
                                type={item.type}
                                id={item.id}
                                values={item.values}
                                isActive
                                minimize
                                isSelected={item.isSelected}
                            />
                        </div>
                    ))
                }
            </div>
        </>
    )
};

export default FinishPage;
