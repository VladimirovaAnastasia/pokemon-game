import {Route, Switch, useRouteMatch} from 'react-router-dom';
import {useState} from 'react';
import StartPage from './routes/Start';
import BoardPage from './routes/Board';
import FinishPage from './routes/Finish';

import {PokemonContext} from './../../context/pokemonContext';
import {FirebaseContext} from './../../context/fireBaseContext';

import Firebase from '../../service/firebase';

export const GamePage = () => {
    const match = useRouteMatch();
    const [selectedPokemons, setSelectedPokemons] = useState({});
    const [gamePokemons, setGamePokemons] = useState([]);
    const [winner, setWinner] = useState(0);

    const handlerClick = (key, pokemon) => {
        setSelectedPokemons(prevState => {
            if (prevState[key]) {
                const copyState = {...prevState};
                delete copyState[key];

                return copyState
            }

            return {
                ...prevState,
                [key]: pokemon
            }
        })
    };

    const addGamePokemons = (player1, player2, winner) => {
        setGamePokemons([player1, player2]);
        setWinner(winner)
    };

    const clearPokemonsData = () => {
        setSelectedPokemons([]);
        setGamePokemons([])
    };

    return (
        <FirebaseContext.Provider value={new Firebase()}>
            <PokemonContext.Provider value={{pokemons: selectedPokemons,
                                            gamePokemons: gamePokemons,
                                            winner: winner,
                                            onChangeSelect: handlerClick,
                                            addGamePokemons: addGamePokemons,
                                            clearPokemonsData: clearPokemonsData}}>
                <Switch>
                    <Route path={`${match.path}/`} exact component={StartPage} />
                    <Route path={`${match.path}/board`} component={BoardPage} />
                    <Route path={`${match.path}/finish`} component={FinishPage} />
                </Switch>
            </PokemonContext.Provider>
        </FirebaseContext.Provider>

    );
};
