import { useLocation } from 'react-router-dom';
import Game from "./Game";

/**
 * this component does the logic of the game. it chooses randomly the images of the card.
 * @returns {JSX.Element}
 * @constructor
 */
export default function GenerateGame()  {
    const location = useLocation();
    const { name, inputs } = location.state;

    /**
     * choose randomly "cardsNumber" distinct numbers. every number represent
     * name of an image in the public directory. convert the numbers to src images path.
     * now we have array of path's of distinct images, return
     * the array duplicated.
     * @param cardsNumber how many images we need to generate
     * @returns {string[]} array of the duplicated paths of the images
     */
    const generateImages = (cardsNumber) =>  {
        let numbers = new Set();
        while (numbers.size < cardsNumber) {
            numbers.add(Math.floor(Math.random() * 16));
        }
        const stringArray = Array.from(numbers).map(num => 'images/' + String(num) + '.jpg');
        return stringArray.flatMap(str => [str, str]);
    }
    /**
     * do the fisher Yates shuffle algorithm on the paths of the images.
     * @param arr the paths of the images
     * @returns {*} shuffled array of the paths of the images
     */
    const fisherYatesShuffle = (arr) => {
        for (let i = arr.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [arr[i], arr[j]] = [arr[j], arr[i]];
        }
        return arr;
    }

    const images = fisherYatesShuffle(generateImages((inputs.row * inputs.col) / 2));

    return (<Game imagesSrc={images} col={inputs.col} delay={inputs.delay * 1000} name={name}/>);
}