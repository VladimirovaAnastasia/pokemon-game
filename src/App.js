import {Route, Switch, useLocation, Redirect} from 'react-router-dom';
import HomePage from './routes/HomePage';
import {GamePage} from './routes/GamePage';
import AboutPage from './routes/AboutPage';
import ContactPage from './routes/ContactPage';
import NotFound from './routes/NotFound';
import MenuHeader from './components/MenuHeader';
import Footer from './components/Footer';

import classNames from 'classnames';
import styles from './styles.module.css'


const App = () => {
    const location = useLocation('/');
    const idPadding = location.pathname === '/' || location.pathname === '/game/board';

    return (
        <Switch>
            <Route path="/404" component={NotFound}/>
            <Route>
                <>
                    <MenuHeader bgActive={!idPadding}/>
                    <div className={classNames(styles.wrap, {
                        [styles.isHomePage]: idPadding
                    })}>
                        <Switch>
                            <Route path="/" exact component={HomePage}/>
                            <Route path="/contact" component={ContactPage}/>
                            <Route path="/game" component={GamePage}/>
                            <Route path="/about" component={AboutPage}/>
                            <Route render={() => (
                                <Redirect to="/404"/>
                            )} />
                        </Switch>
                    </div>
                    <Footer/>
                </>
            </Route>
        </Switch>
    )
};

export default App;
