import {Route, Switch, useRouteMatch} from 'react-router-dom';
import StartPage from './routes/Start';
import BoardPage from './routes/Board';
import FinishPage from './routes/Finish';

import {useState} from 'react';

import {PokemonContext} from './../../context/pokemonContext';
import {FirebaseContext} from './../../context/fireBaseContext';

import Firebase from '../../service/firebase';

export const GamePage = () => {
    const match = useRouteMatch();
    const [selectedPokemons, setSelectedPokemons] = useState({});

    const handlerClick = (key, pokemon) => {
        console.log(pokemon)
    }

    return (
        <FirebaseContext.Provider value={new Firebase()}>
            <PokemonContext.Provider value={{pokemons: selectedPokemons,
                                            onChangeSelect: handlerClick}}>
                <Switch>
                    <Route path={`${match.path}/`} exact component={StartPage} />
                    <Route path={`${match.path}/board`} component={BoardPage} />
                    <Route path={`${match.path}/finish`} component={FinishPage} />
                </Switch>
            </PokemonContext.Provider>
        </FirebaseContext.Provider>

    );
};
