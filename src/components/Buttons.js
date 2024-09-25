import ModalBoard from "./ModalBoard";
import Settings from "./Settings";
import {useState} from "react";
import {Link} from "react-router-dom";
import {Outlet} from "react-router";

/**
 * buttons component represent the three buttons in the home page
 * @param name the player name
 * @param nameResult result if the player name was valid or not
 * @returns {JSX.Element}
 * @constructor
 */
export default function Buttons({name, nameResult})  {

    const [inputs, setInputs] = useState({ row: 4, col: 4, delay: 1 });
    const [result, setResult] = useState('');
    const [isVisible, setVisible] = useState(false);

    let isDisabled = !(nameResult && name !== '' && result === '')

    return (
        <>
            <Link to= { isDisabled ? "" : "/game"} state={{name, inputs}}>
                <button className="btn btn-primary" disabled={isDisabled}>
                    Play
                </button>
            </Link>
            <Outlet />
            {'  '} {' '}
            <button className="btn btn-primary" onClick={() => setVisible(!isVisible)}>
                Settings
            </button>
            {'  '} {' '}
            <ModalBoard/>

            {isVisible && (<Settings inputs={inputs} setInputs={setInputs} result={result} setResult={setResult}/>)}

        </>
    );
}