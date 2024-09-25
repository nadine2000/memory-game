import Table from "./Table";
import {Link, useLocation} from "react-router-dom";
import {Outlet} from "react-router";

/**
 * win component represent the win page with the game data and the leaderboard
 * @returns {JSX.Element}
 * @constructor
 */
export default function Win() {

    const location = useLocation();
    const { score, cardsNumber, name, board } = location.state || {};
    const rank = board.map((person, index) => person.name === name ? index : null)
        .filter(index => index !== null);

    return (
        <>
            <h1>GAME OVER!</h1>
            <h3> Number Of Cards played: {cardsNumber} </h3>
            <h3> Score: {score}. You ranked {parseInt(rank) + 1} out of {board.length} </h3>
            <Table/>
            <Link to="/">
                <div className="text-center">
                    <button className="btn btn-primary btn-lg">
                        OK!
                    </button>
                </div>
            </Link>
            <Outlet/>
        </>
    );
}