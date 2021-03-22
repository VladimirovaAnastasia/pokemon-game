import {useState, useEffect} from 'react';
import POKEMONS from '../../pokemons';
import PokemonCard from '../../components/PokemonCard';

import database from '../../service/firebase';

import classNames from 'classnames';
import styles from './styles.module.css';

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

const GamePage = () => {
    let [pokemons, setPokemons] = useState(POKEMONS);

    useEffect(() => {
        database.ref('pokemons').once('value', (snapshot) => {
            setPokemons(snapshot.val())
        })
    }, []);

    const getRandom = (min, max) => {
        return Math.floor(Math.random()*(max - min) + min)
    };

    const handleClickButton = (id) => {
        setPokemons(prevState => {
            return Object.entries(prevState).reduce((acc, item) => {

                const objID = item[0];
                const pokemon = {...item[1]};
                if (pokemon.id === id) {
                    pokemon.isActive = !pokemon.isActive;
                    database.ref('pokemons/'+ objID).set({
                        ...pokemon
                    });
                }

                acc[item[0]] = pokemon;

                return acc;
            }, {});
        });
    };

    const handleClickAddButton = () => {
        const data = {...pokemonTemplate, id: getRandom(30, 100)};

        const newKey = database.ref().child('pokemons').push().key;
        database.ref('pokemons/' + newKey).set(data);

        database.ref('pokemons').once('value', (snapshot) => {
            setPokemons(snapshot.val())
        })
    };

    return (
        <div className={styles.game}>
            <button onClick={handleClickAddButton}>ADD NEW POKEMON</button>
            <div className={classNames(styles.flex, styles.pokemons)}>
                {
                    Object.entries(pokemons).map(([key, {id, name, img, type, values, isActive}]) =>
                        <PokemonCard
                            key={key}
                            name={name}
                            img={img}
                            type={type}
                            id={id}
                            values={values}
                            isActive={isActive}
                            changeVisibility={(id) => handleClickButton(id)}/>)
                }
            </div>
        </div>
    )
};

export default GamePage;
