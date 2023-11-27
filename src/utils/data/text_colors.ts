import { allPoemGraphics } from "./poems_wrapper";

const heartIcon = allPoemGraphics[0].textColor;
const fireflies = allPoemGraphics[1].textColor;
const neverendingSpring = allPoemGraphics[2].textColor;
const summerNights = allPoemGraphics[3].textColor;
const mirrorMirror = allPoemGraphics[4].textColor;
const lotusEater = allPoemGraphics[5].textColor;
const coldLeaves = allPoemGraphics[6].textColor;
const friendship = allPoemGraphics[7].textColor;
const desire = allPoemGraphics[8].textColor;

const textColorToPoem = {
    [heartIcon]: 'heart-icon',
    [fireflies]: 'fireflies',
    [neverendingSpring]: 'neverending-spring',
    [summerNights]: 'summer-nights',
    [mirrorMirror]: 'mirror-mirror',
    [lotusEater]: 'lotus-eater',
    [coldLeaves]: 'cold-leaves',
    [friendship]: 'friendship',
    [desire]: 'desire'
}

export { textColorToPoem }