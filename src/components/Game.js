import {useState} from 'react';
import {Link} from "react-router-dom";
import {Outlet} from "react-router";
import Card from "./Card";

/**
 * the game page component has the steps numbers, the board,
 * and button to return to the main page.
 * @param imagesSrc - the paths of the images
 * @param col - columns of the board
 * @param delay - delay between two attempts in the game
 * @param name - player name
 * @returns {JSX.Element}
 * @constructor
 */
export default function Game({imagesSrc, col, delay, name}) {

    const [step, setStep] = useState(0);

    return (
        <div>
            <h1>Steps: {step}</h1>

            <div className={`row row-cols-${col}`}>
                <Card imagesSrc={imagesSrc} setStep={setStep} delay={delay} name={name} step={step}/>
            </div>

            <Link to="/">
                <div className="text-center">
                    <button className="btn btn-primary btn-lg">
                        Leave
                    </button>
                </div>
            </Link>
            <Outlet/>
        </div>
    );
}