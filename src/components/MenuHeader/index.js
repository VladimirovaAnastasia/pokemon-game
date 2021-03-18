import {useHistory} from 'react-router-dom';
import {useState} from 'react';
import Menu from '../Menu';
import NavBar from '../NavBar';

const MenuHeader = ({bgActive}) => {
    const history = useHistory();
    let initOpenState = null;
    if (history.location.pathname === '/game') {
        initOpenState = false
    }

    const [isOpen, setOpen] = useState(initOpenState);

    const handleChangeStatus = () => {
        setOpen((isOpen) => !isOpen)
    };

    return (
            <>
                <Menu isActive={isOpen} onClickButton={handleChangeStatus}/>
                <NavBar isActive={isOpen} bgActive={bgActive} onClickButton={handleChangeStatus}/>
            </>
    )
};

export default MenuHeader;
