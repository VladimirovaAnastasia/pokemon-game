import {useState, useEffect, useContext} from 'react';
import {useHistory} from 'react-router-dom';
import PokemonCard from '../../../../components/PokemonCard';

import classNames from 'classnames';
import styles from './styles.module.css';
import {FirebaseContext} from "../../../../context/fireBaseContext";
import {PokemonContext} from "../../../../context/pokemonContext";

const pokemonTemplate = {
    "abilities": [
        "blaze",
        "solar-power"
    ],
    "base_experience": 62,
    "height": 6,
    "weight": 85,
    "id": 40,
    "img": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png",
    "name": "charmander",
    "stats": {
        "hp": 39,
        "attack": 52,
        "defense": 43,
        "special-attack": 60,
        "special-defense": 50,
        "speed": 65
    },
    "type": "fire",
    "values": {
        "top": 1,
        "right": 1,
        "bottom": 2,
        "left": 1
    }
};

const StartPage = () => {
    const firebase = useContext(FirebaseContext);
    const selectedPokemons = useContext(PokemonContext);

    let [pokemons, setPokemons] = useState(null);

    const getPokemons = async () => {
        const response = await firebase.getPokemonsOnce();
        await setPokemons(response)
    };

    useEffect(() => {
        getPokemons();

        return () => firebase.offPokemonSoket()
    }, []);

    const getRandom = (min, max) => {
        return Math.floor(Math.random()*(max - min) + min)
    };

    const handleClickButton = (key) => {
        const pokemon = {...pokemons[key]};

        selectedPokemons.onChangeSelect(key, pokemon);
        setPokemons( prevState => ({
            ...prevState,
            [key]: {
                ...prevState[key],
                isSelected: !prevState[key].isSelected
            }
        }))
    };

    const history = useHistory();
    const handleClickStartButton = () => {
        history.push('/game/board')
    };

    return (
        <div className={styles.game}>
            <button
                onClick={handleClickStartButton}
                disabled={Object.keys(selectedPokemons.pokemons).length < 5}
            >
                Start Game
            </button>
            <div className={classNames(styles.flex, styles.pokemons)}>
                {
                    pokemons &&  Object.entries(pokemons).map(([key, {id, name, img, type, values, isSelected}]) =>
                        <PokemonCard
                            className = {styles.card}
                            key={key}
                            pokemonKey={key}
                            name={name}
                            img={img}
                            type={type}
                            id={id}
                            values={values}
                            isActive={true}
                            isSelected={isSelected}
                            changeVisibility={(key) => {
                                if (Object.keys(selectedPokemons.pokemons).length < 5) {
                                    handleClickButton(key)
                                }
                            }}
                        />)
                }
            </div>
        </div>
    )
};

export default StartPage;
