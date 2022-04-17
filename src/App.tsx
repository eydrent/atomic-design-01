import React from 'react';
import './styles/styles.scss';
import {ImgIcon} from "./components/ui/atoms/ImageIcon";

function App() {
    return (
        <div className="App">
            <h1>Hello World</h1>
            <ImgIcon
                styleClass={'ImgIcon__fill'}
                size={'8rem'}
                src={'https://randomuser.me/api/portraits/women/68.jpg'}
                alt={'profilePicture'}
            />
        </div>
    );
}

export default App;
