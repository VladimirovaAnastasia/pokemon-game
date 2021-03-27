import {useState} from 'react';
import PokemonCard from '../../../../../../components/PokemonCard';

import classNames from 'classnames';
import styles from './styles.module.css';

const PlayerBoard = ({player, cards, onClickCard}) => {
    const [selected, setSelected] = useState(null);
    return (
        <>
            {
                cards.map((item) => (
                    <div
                        className={classNames(styles.cardBoard, {
                            [styles.selected]: selected === item.id
                        })}
                        onClick={() => {
                            setSelected(item.id);
                            onClickCard && onClickCard({
                                player,
                                ...item
                            })
                        }}
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
        </>
    );
};

export default PlayerBoard;
