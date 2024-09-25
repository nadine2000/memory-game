/**
 * the header of all the pages.
 * @returns {JSX.Element}
 * @constructor
 */
export default function Header() {
    return (
        <div className="card text-bg-light">
            <div className="card-body">
                <h1 className="card-title">Memory Game</h1>
                <p className="card-text fs-5">
                    Click on the cards to flip them and find the matching pairs with as little flips as
                    possible.
                </p>
            </div>
        </div>
    );
}
