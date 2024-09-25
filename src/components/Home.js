import {Outlet} from "react-router";
import PlayerName from "./PlayerName";
import {useState} from 'react';
import Buttons from "./Buttons";

/**
 * the home page component contains the name input and the buttons below it.
 * @returns {JSX.Element}
 * @constructor
 */
export default function Home() {

    const [name, setName] = useState('');
    const [nameResult, setNameResult] = useState(true);

    return (
        <div>
            <PlayerName name={name} setName={setName} result={nameResult} setResult={setNameResult}/>
            <Buttons name={name} nameResult={nameResult}/>
            <Outlet/>
        </div>
    );
}