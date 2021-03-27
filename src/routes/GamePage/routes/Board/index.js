import {useContext, useEffect, useState} from 'react';
import {useHistory} from 'react-router-dom';
import PlayerBoard from './component/PlayerBoard';
import PokemonCard from '../../../../components/PokemonCard';

import {PokemonContext} from '../../../../context/pokemonContext';

import styles from './styles.module.css';

const counterWin = (board, player1, player2) => {
    let player1Count = player1.length;
    let player2Count = player2.length;

    board.forEach(item => {
        if (item.possession === 'red') {
            player2Count++
        }

        if (item.possession === 'blue') {
            player1Count++
        }
    });

    return [player1Count, player2Count]
};

const BoardPage = () => {
    const {pokemons, addGamePokemons} = useContext(PokemonContext);

    const history = useHistory();

    const [board, setBoard] = useState([]);
    const [choiceCard, setChoiceCard] = useState(null);
    const [player1, setPlayer1] = useState(() => {
        return Object.values(pokemons).map((item) => ({
                ...item,
                possession: 'blue'
            })
        )
    });
    const [player2, setPlayer2] = useState([]);
    const [steps, setSteps] = useState(0);


    const [myPokemons, setMyPokemons] = useState(() => {
        return Object.values(pokemons).map((item) => ({
                ...item,
                possession: 'blue'
            })
        )
    });
    const [opponentPokemons, setOpponentPokemons] = useState(null);

    if (Object.keys(pokemons).length === 0) {
        history.replace('/game')
    }

    useEffect( async () => {
        const boardResponse = await fetch('https://reactmarathon-api.netlify.app/api/board');
        const boardRequest = await boardResponse.json();
        setBoard(boardRequest.data);

        const player2Response = await fetch('https://reactmarathon-api.netlify.app/api/create-player');
        const player2Request = await player2Response.json();
        setPlayer2(player2Request.data);
        setPlayer2(() => {
            return player2Request.data.map((item) => ({
                    ...item,
                    possession: 'red'
                })
            )}
        )

        setOpponentPokemons(
            () => {
                return player2Request.data.map((item) => ({
                        ...item,
                        possession: 'red'
                    })
                )}
        )

    }, []);

    const handleClickBoardPlate = async (position) => {
        if (choiceCard) {
            const params = {
                position,
                card: choiceCard,
                board
            };

            const res = await fetch('https://reactmarathon-api.netlify.app/api/players-turn', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(params),
            });

            const request = await res.json();

            if (choiceCard.player === 1) {
                setPlayer1(prevState => prevState.filter(item => item.id !== choiceCard.id))
            }

            if (choiceCard.player === 2) {
                setPlayer2(prevState => prevState.filter(item => item.id !== choiceCard.id))
            }

            setSteps(prevState => {
                return prevState + 1
            });
            setBoard(request.data);
        }
    };

    useEffect(() => {
        if (steps === 9) {
            const [count1, count2] = counterWin(board, player1, player2);
            let winner = 0;
            if (count1 > count2) {
                alert('win');
                winner = 1
            } else if (count2 > count1) {
                alert('loss');
                winner = 2
            } else {
                alert('draw')
            }

            addGamePokemons(myPokemons, opponentPokemons, winner);

            history.push('/game/finish')
        }
    }, [steps]);


    return (
        <div className={styles.root}>
            <div className={styles.playerOne}>
                {
                    <PlayerBoard
                        player={1}
                        cards={player1}
                        onClickCard={(card) => setChoiceCard(card)}
                    />
                }
            </div>
            <div className={styles.board}>
                {
                    board.map(item => (
                        <div
                            key={item.position}
                            className={styles.boardPlate}
                            onClick={()=> !item.card && handleClickBoardPlate(item.position)}
                        >
                            {
                                item.card && <PokemonCard {...item.card} minimize isActive/>
                            }
                        </div>
                    ))
                }
            </div>
            <div className={styles.playerTwo}>
                {
                    <PlayerBoard
                        player={2}
                        cards={player2}
                        onClickCard={(card) => setChoiceCard(card)}
                    />
                }
            </div>
        </div>
    );
};

export default BoardPage;
