import React from "react";
import ViteLogo from '~assets/vitelogo.png';
import AppleLogo from '~assets/apple.svg';
import Button from "~components/Header/Button/Button";


let title = "Some title";

const App = () => {
    return (
        <div className="underline"> Hello Worlds
            <Button></Button>
            <img alt="logo" className="w-20" src={ViteLogo}></img>
            <AppleLogo></AppleLogo>
        </div>

    )
}

export default App;