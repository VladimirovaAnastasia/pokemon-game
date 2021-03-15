import {useState} from 'react';
import Menu from '../Menu';
import NavBar from '../NavBar';

const MenuHeader = () => {
    const [isOpen, setOpen] = useState(false);

    const handleChangeStatus = () => {
        setOpen((isOpen) => !isOpen)
    };

    return (
            <>
                <Menu isActive={isOpen}/>
                <NavBar isActive={isOpen} onClickButton={handleChangeStatus}/>
            </>
    )
};

export default MenuHeader;
