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

const textColorToBackgroundUrl = {
    [heartIcon]: allPoemGraphics[0].backgroundSrc,
    [fireflies]: allPoemGraphics[1].backgroundSrc,
    [neverendingSpring]: allPoemGraphics[2].backgroundSrc,
    [summerNights]: allPoemGraphics[3].backgroundSrc,
    [mirrorMirror]: allPoemGraphics[4].backgroundSrc,
    [lotusEater]: allPoemGraphics[5].backgroundSrc,
    [coldLeaves]: allPoemGraphics[6].backgroundSrc,
    [friendship]: allPoemGraphics[7].backgroundSrc,
    [desire]: allPoemGraphics[8].backgroundSrc
}

export { textColorToPoem, textColorToBackgroundUrl }