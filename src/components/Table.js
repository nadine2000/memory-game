/**
 * represent the leaderboard of the game,
 * with three columns for every player: rank, name, and score.
 * @returns {JSX.Element}
 * @constructor
 */
export default function Table() {
    let data = localStorage.getItem('leaderboard');
    return (
        <table id="table" className="table table-striped" style={{marginLeft: '10px'}}>
            <thead>
            <tr>
                <th scope="col"> Rank</th>
                <th scope="col"> Player</th>
                <th scope="col"> Score</th>
            </tr>
            </thead>
            <tbody>

            {(data ? JSON.parse(data) : []).map((player, index) => (
                <tr key={player.name}>
                    <td>{index + 1}</td>
                    <td>{player.name}</td>
                    <td>{player.score}</td>
                </tr>
            ))}

            </tbody>
        </table>
    );
}