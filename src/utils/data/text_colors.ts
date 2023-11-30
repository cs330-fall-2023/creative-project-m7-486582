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
    [heartIcon]: 'heartIcon',
    [fireflies]: 'fireflies',
    [neverendingSpring]: 'neverendingSpring',
    [summerNights]: 'summerNights',
    [mirrorMirror]: 'mirrorMirror',
    [lotusEater]: 'lotusEater',
    [coldLeaves]: 'coldLeaves',
    [friendship]: 'friendship',
    [desire]: 'desire'
}

export { textColorToPoem }