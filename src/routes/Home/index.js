import Header from '../../components/Header';
import Layout from '../../components/Layout';
import PokemonCard from '../../components/PokemonCard';
import Footer from '../../components/Footer';
import MenuHeader from '../../components/MenuHeader';

import POKEMONS from '../../pokemons';
import bg2 from '../../assets/bg2.jpg';
import bg1 from '../../assets/bg1.jpg';

import classNames from 'classnames';
import styles from './styles.module.css';

const HomePage = ({onChangePage}) => {
    const handleClickButton = (page) => {
        onChangePage && onChangePage(page);
    };

    return (
        <>
            <MenuHeader/>
            <Header
                title="Привет!"
                descr="Тест"
                onClickButton={handleClickButton}
            />
            <Layout title="Страница 1" desr="Описание" urlBg={bg1}>
                <p>In the game two players face off against one another, one side playing as "blue", the other as "red"
                    on a 3x3 grid.</p>
                <p>Each player has five cards in a hand and the aim is to capture the opponent"s cards by turning them
                    into the player"s own color of red or blue.</p>
            </Layout>
            <Layout title="Страница 2" descr="Описание" colorBg="#F8F63C">
                <div className={classNames(styles.flex, styles.pokemons)}>
                    {
                        POKEMONS.map(item => <PokemonCard key={item.id}
                                                          name={item.name}
                                                          img={item.img}
                                                          type={item.type}
                                                          id={item.id}
                                                          values={item.values}/>)
                    }
                </div>
            </Layout>
            <Layout title="Страница 3" descr="Описание" urlBg={bg2}>
                <p>To win, a majority of the total ten cards played (including the one card that is not placed on the
                    board) must be of the player"s card color. To do this, the player must capture cards by placing a
                    card adjacent to an opponent"s card whereupon the "ranks" of the sides where the two cards touch
                    will be compared. If the rank of the opponent"s card is higher than the player"s card, the player"s
                    card will be captured and turned into the opponent"s color. If the player"s rank is higher, the
                    opponent"s card will be captured and changed into the player"s color instead. </p>
            </Layout>
            <Footer/>
        </>
    )
};

export default HomePage;
