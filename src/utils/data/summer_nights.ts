import { PoemType, PoemGraphicsType } from "../types/PoemTypes";
import backgroundSrc from '../../images/backgrounds/summer-nights-background-noise.png'
import colorIconSrc from '../../images/colorIcons/poem-nav-icons-summernights.png'
import bwIconSrc from '../../images/bwIcons/poem-nav-icons-summernights-bw.png'

const summerNights: PoemType = [
    {
        text: "summer nights",
        isTitle: true,
        isLink: false,
        isNewStanza: true,
        isFirstLine: false
    },
    {
        text: "by RuthAnne Dunn",
        isTitle: false,
        isLink: false,
        isNewStanza: false,
        isFirstLine: false
    },

    {
        text: "(twist the key, turn on the lights)",
        isTitle: false,
        isLink: false,
        isNewStanza: true,
        isFirstLine: true
    },
    {
        text: "these summer nights",
        isTitle: false,
        isLink: false,
        isNewStanza: false,
        isFirstLine: false
    },
    {
        text: "removed from space and time",
        isTitle: false,
        isLink: false,
        isNewStanza: false,
        isFirstLine: false
    },
    {
        text: "the music makes me feel alive",
        isTitle: false,
        isLink: false,
        isNewStanza: true,
        isFirstLine: false
    },
    {
        text: "pavement flows,",
        isTitle: false,
        isLink: false,
        isNewStanza: true,
        isFirstLine: false
    },
    {
        text: "peripheral",
        isTitle: false,
        isLink: false,
        isNewStanza: false,
        isFirstLine: false
    },
    {
        text: "And the song,",
        isTitle: false,
        isLink: false,
        isNewStanza: false,
        isFirstLine: false
    },
    {
        text: "it knows me",
        isTitle: false,
        isLink: false,
        isNewStanza: false,
        isFirstLine: false
    },
    {
        text: "an intimate acquaintance",
        isTitle: false,
        isLink: false,
        isNewStanza: false,
        isFirstLine: false
    },
    {
        text: "a tipping point, past and future",
        isTitle: false,
        isLink: false,
        isNewStanza: true,
        isFirstLine: false
    },
    {
        text: "contained in this infinite moment",
        isTitle: false,
        isLink: false,
        isNewStanza: false,
        isFirstLine: false
    },
    {
        text: "this   wanting",
        isTitle: false,
        isLink: false,
        isNewStanza: false,
        isFirstLine: false
    },
    {
        text: "not quite tangible, just out of reach and yet",
        isTitle: false,
        isLink: false,
        isNewStanza: false,
        isFirstLine: false
    },
    {
        text: "This feels like all that is real.",
        isTitle: false,
        isLink: false,
        isNewStanza: false,
        isFirstLine: false
    },
    {
        text: "This is living",
        isTitle: false,
        isLink: false,
        isNewStanza: false,
        isFirstLine: false
    },
    {
        text: "I just can't grasp it-",
        isTitle: false,
        isLink: false,
        isNewStanza: false,
        isFirstLine: false
    },
    {
        text: "car-speaker melody",
        isTitle: false,
        isLink: false,
        isNewStanza: false,
        isFirstLine: false
    },
    {
        text: "(twist the dial, turn it up)",
        isTitle: false,
        isLink: false,
        isNewStanza: false,
        isFirstLine: false
    },
    {
        text: "a whisper",
        isTitle: false,
        isLink: false,
        isNewStanza: false,
        isFirstLine: false
    },
    {
        text: "a dream",
        isTitle: false,
        isLink: false,
        isNewStanza: false,
        isFirstLine: false
    },
    {
        text: "And dreams aren't only for sleeping",
        isTitle: false,
        isLink: false,
        isNewStanza: true,
        isFirstLine: false
    },
    {
        text: "but they mostly come like this:",
        isTitle: false,
        isLink: false,
        isNewStanza: false,
        isFirstLine: false
    },
    {
        text: "summer nights, summer nights",
        isTitle: false,
        isLink: false,
        isNewStanza: false,
        isFirstLine: false
    },
    {
        text: "the most beautiful confusion",
        isTitle: false,
        isLink: false,
        isNewStanza: false,
        isFirstLine: false
    },
    {
        text: "the sweetest yearning",
        isTitle: false,
        isLink: false,
        isNewStanza: false,
        isFirstLine: false
    },
    {
        text: "Life is before me",
        isTitle: false,
        isLink: false,
        isNewStanza: true,
        isFirstLine: false
    },
    {
        text: "(twist the key, turn off the lights)",
        isTitle: false,
        isLink: false,
        isNewStanza: true,
        isFirstLine: false
    },
    {
        text: "these summer nights",
        isTitle: false,
        isLink: false,
        isNewStanza: false,
        isFirstLine: false
    },

    {
        text: "can only    suspend    space and time",
        isTitle: false,
        isLink: false,
        isNewStanza: false,
        isFirstLine: false
    },
]

const summerNightsGraphics: PoemGraphicsType = {
    backgroundSrc,
    colorIconSrc,
    bwIconSrc,
    textColor: "#855094",
    alt: "Summer Nights Icon"
}

export { summerNightsGraphics, summerNights };