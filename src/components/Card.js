import {useEffect, useState} from "react";
import { useNavigate } from 'react-router-dom';

/**
 * Cards component represent the board or the cards on the game page
 * @param imagesSrc array of the images srcs
 * @param setStep function to set the steps of the game
 * @param delay the inputted delay
 * @param name player name
 * @param step game steps
 * @returns {JSX.Element}
 * @constructor
 */
export default function Card({ imagesSrc, setStep, delay, name, step })  {

    const [clickedIndexes, setClickedIndexes] = useState([]);
    const [matchedIndexes, setMatchedIndexes] = useState([]);
    const [gameWon, setGameWon] = useState(false);
    const navigate = useNavigate();
    const startTime = performance.now();

    /**
     * if the player won the game add his name to the leaderboard
     * and navigate to the win page
     */
    useEffect(() => {

        if (gameWon) {

            const data = localStorage.getItem('leaderboard');
            const leaderboard = data ? JSON.parse(data) : [];

            const score = Math.round(imagesSrc.length * 100 - delay / 100 - step * 2 - 0.01 * (performance.now() - startTime));

            const updatedBoard = [...leaderboard];
            const playerIndex = updatedBoard.findIndex(player => player.name === name);

            if (playerIndex !== -1) {
                if (updatedBoard[playerIndex].score < score) {
                    updatedBoard[playerIndex].score = score;
                }
            } else {
                updatedBoard.push({ name, score });
            }

            const sortedBoard = updatedBoard.sort((a, b) => b.score - a.score)
            localStorage.setItem('leaderboard', JSON.stringify(sortedBoard));

            navigate('/win', { state: {score: score, cardsNumber: imagesSrc.length,
                    name: name, board: sortedBoard} });
        }
    // eslint-disable-next-line
    }, [gameWon]);

    /**
     * the game main function:
     * flip the clicked image, checks if two flipped images matches or not,
     * if they are matched, both images will not be flipped again,
     * if they are not a match, they will be flipped.
     * @param index - the clicked image index
     */
    const handleImageClick = (index) => {

        // do not do anything if the clicked image is a matched image, an
        // already flipped imag, or if there is two images flipped right now
        if (clickedIndexes.length === 2 ||
            matchedIndexes.includes(index) ||
            clickedIndexes.includes(index))

            return;

        const newClickedIndexes = [...clickedIndexes, index];
        setClickedIndexes(newClickedIndexes);

        setStep(step => step + 1);
        // checks if two images are a match or not
        if (newClickedIndexes.length === 2) {

            const [firstIndex, secondIndex] = newClickedIndexes;
            if (imagesSrc[firstIndex] === imagesSrc[secondIndex]) {

                const updatedMatchedIndexes = [...matchedIndexes, firstIndex, secondIndex];
                setMatchedIndexes(updatedMatchedIndexes);
                setClickedIndexes([]);

                if (updatedMatchedIndexes.length === imagesSrc.length) {
                    setGameWon(true);
                }

            } else {
                setTimeout(() => setClickedIndexes([]), delay);
            }
        }
    };

    return (
        <>
            {imagesSrc.map((src, index) => (
                <img
                    key={index}
                    alt="card"
                    src={(clickedIndexes.includes(index) || matchedIndexes.includes(index)) ? src : 'images/card.jpg'}
                    onClick={() => handleImageClick(index)}
                />
            ))}
        </>
    );
}
