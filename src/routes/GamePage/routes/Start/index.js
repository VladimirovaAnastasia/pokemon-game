import {useState, useEffect, useContext} from 'react';
import {useHistory} from 'react-router-dom';
import PokemonCard from '../../../../components/PokemonCard';

import classNames from 'classnames';
import styles from './styles.module.css';

import {FirebaseContext} from '../../../../context/fireBaseContext';
import {PokemonContext} from '../../../../context/pokemonContext';
import {useDispatch, useSelector} from "react-redux";
import {selectedPokemonsData} from "../../../../store/pokemons";


const StartPage = () => {
    const firebase = useContext(FirebaseContext);
    const selectedPokemons = useContext(PokemonContext);


    const pokemonsRedux = useSelector(selectedPokemonsData);
    const dispatch = useDispatch();

    let [pokemons, setPokemons] = useState(null);
    const [isLoading, setLoading] = useState(true);

    const getPokemons = async () => {
        const response = await firebase.getPokemonsOnce();
        await setPokemons(response)
    };

    useEffect(() => {
        getPokemons();
        setLoading(false);
        dispatch(getPokemons(pokemons));

        return () => firebase.offPokemonSoket()
    }, []);

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
