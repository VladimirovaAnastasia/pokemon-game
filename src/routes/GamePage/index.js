import {useState} from 'react';
import POKEMONS from '../../pokemons';
import PokemonCard from "../../components/PokemonCard";
import classNames from "classnames";
import styles from './styles.module.css';

const GamePage = () => {
    let [pokemons, setPokemons] = useState(
        POKEMONS.map((item) => {
            return {...item, isActive: false}
        })
    );

    const handleClickButton = (id) => {
        setPokemons((pokemons) => {
            return pokemons.map((item) => {
                if (item.id === id) {
                    return {...item, isActive: !item.isActive}
                }
                return item
            })
        })

    };

    return (
        <div className={styles.game}>
            <div className={classNames(styles.flex, styles.pokemons)}>
                {
                    pokemons.map(item => <PokemonCard key={item.id}
                                                      name={item.name}
                                                      img={item.img}
                                                      type={item.type}
                                                      id={item.id}
                                                      values={item.values}
                                                      isActive={item.isActive}
                                                      changeVisibility={(id) => handleClickButton(id)}/>)
                }
            </div>
        </div>
    )
};

export default GamePage;
