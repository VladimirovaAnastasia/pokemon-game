import {useState} from 'react'
import HomePage from "./routes/Home";
import GamePage from "./routes/Game";
import './App.css';

const App = () => {
    const [page, setPage] = useState('app');

    const handleChangePage = (pageName) => {
        setPage(pageName)
    };

    switch (page) {
        case 'app':
            return <HomePage onChangePage={handleChangePage}/>;
        case 'game':
            return <GamePage onChangePage={handleChangePage}/>;
        default:
            return <HomePage/>;
    }
};

export default App;
