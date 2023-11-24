import { PoemType, PoemGraphicsType } from "../types/PoemTypes";
import backgroundSrc from '../../images/backgrounds/fireflies-background.png'
import colorIconSrc from '../../images/colorIcons/poem-nav-icons-firefly.png'
import bwIconSrc from '../../images/bwIcons/poem-nav-icons-firefly-bw.png'

const fireflies: PoemType = [
    {
        text: "Fireflies",
        isTitle: true,
        isLink: true,
        isNewStanza: false,
        isFirstLine: true
    },
    {
        text: "be Katherine Han",
        isTitle: false,
        isLink: true,
        isNewStanza: false,
        isFirstLine: false,
    },
    {
        text: "Since when was I so afraid to catch fireflies?",
        isTitle: false,
        isLink: true,
        isNewStanza: true,
        isFirstLine: true,
    },
    {
        text: "Then and now they are beautiful",
        isTitle: false,
        isLink: true,
        isNewStanza: false,
        isFirstLine: false,
    },
    {
        text: "Something about those soft lights drifting in the dark",
        isTitle: false,
        isLink: true,
        isNewStanza: true,
        isFirstLine: false,
    },
    {
        text: "makes me stop",
        isTitle: false,
        isLink: true,
        isNewStanza: false,
        isFirstLine: false,
    },
    {
        text: "and for a second I forget",
        isTitle: false,
        isLink: true,
        isNewStanza: false,
        isFirstLine: false,
    },
    {
        text: "time",
        isTitle: false,
        isLink: true,
        isNewStanza: false,
        isFirstLine: false,
    },
    {
        text: "obligations",
        isTitle: false,
        isLink: true,
        isNewStanza: false,
        isFirstLine: false,
    },
    {
        text: "the world",
        isTitle: false,
        isLink: true,
        isNewStanza: false,
        isFirstLine: false,
    },
    {
        text: "It is simply the fireflies drifting in front of me",
        isTitle: false,
        isLink: true,
        isNewStanza: true,
        isFirstLine: false,
    },
    {
        text: "pulling me in like a moth to a flame",
        isTitle: false,
        isLink: true,
        isNewStanza: false,
        isFirstLine: false,
    },
    {
        text: "I think how stupid to be tempted by mere light",
        isTitle: false,
        isLink: true,
        isNewStanza: true,
        isFirstLine: false,
    },
    {
        text: "yet when there are fireflies",
        isTitle: false,
        isLink: true,
        isNewStanza: false,
        isFirstLine: false,
    },
    {
        text: "I stand there mesmerized",
        isTitle: false,
        isLink: true,
        isNewStanza: false,
        isFirstLine: false,
    },
    {
        text: "Then and now they are beautiful",
        isTitle: false,
        isLink: true,
        isNewStanza: false,
        isFirstLine: false,
    },
    {
        text: "but after the second of forgetting and begin in awe",
        isTitle: false,
        isLink: true,
        isNewStanza: true,
        isFirstLine: false,
    },
    {
        text: "I am struck by irrational fear",
        isTitle: false,
        isLink: true,
        isNewStanza: false,
        isFirstLine: false,
    },
    {
        text: "Those are bugs I tell myself",
        isTitle: false,
        isLink: true,
        isNewStanza: false,
        isFirstLine: false,
    },
    {
        text: "Don't touch them",
        isTitle: false,
        isLink: true,
        isNewStanza: false,
        isFirstLine: false,
    },
    {
        text: "But really they're harmless",
        isTitle: false,
        isLink: true,
        isNewStanza: true,
        isFirstLine: false,
    },
    {
        text: "They have no bite or sting",
        isTitle: false,
        isLink: true,
        isNewStanza: false,
        isFirstLine: false,
    },
    {
        text: "like mosquitos or wasps",
        isTitle: false,
        isLink: true,
        isNewStanza: false,
        isFirstLine: false,
    },
    {
        text: "When I was young I would catch them with my brother",
        isTitle: false,
        isLink: true,
        isNewStanza: true,
        isFirstLine: false,
    },
    {
        text: "It was so beautiful to see them glowing in my hand",
        isTitle: false,
        isLink: true,
        isNewStanza: false,
        isFirstLine: false,
    },
    {
        text: "Now I can't remember the last time I touched one",
        isTitle: false,
        isLink: true,
        isNewStanza: true,
        isFirstLine: false,
    },
    {
        text: "Since when was I so afraid?",
        isTitle: false,
        isLink: true,
        isNewStanza: true,
        isFirstLine: false,
    },
]

const firefliesGraphics: PoemGraphicsType = {
    backgroundSrc,
    colorIconSrc,
    bwIconSrc,
    textColor: "blue",
    alt: "Fireflies Icon"
}

export {fireflies, firefliesGraphics};