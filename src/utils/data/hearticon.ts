import { PoemType, PoemGraphicsType } from "../types/PoemTypes";
import backgroundSrc from '../../images/backgrounds/instant-background-noise.png'
import colorIconSrc from '../../images/colorIcons/poem-nav-icons-hearticon.png'
import bwIconSrc from '../../images/bwIcons/poem-nav-icons-hearticon-bw.png'

const heartIcon: PoemType = [
    {
        text: "hearticon.png",
        isTitle: true,
        isLink: false,
        isNewStanza: true,
        isFirstLine: false
    },
    {
        text: "by Katherine Han",
        isTitle: false,
        isLink: false,
        isNewStanza: false,
        isFirstLine: false
    },
    {
        text: "instant gratification",
        isTitle: false,
        isLink: false,
        isNewStanza: true,
        isFirstLine: true
    },
    {
        text: "in the form of little hearts",
        isTitle: false,
        isLink: false,
        isNewStanza: false,
        isFirstLine: false
    },
    {
        text: "showered by compliments",
        isTitle: false,
        isLink: false,
        isNewStanza: false,
        isFirstLine: false
    },
    {
        text: "in the comments others post",
        isTitle: false,
        isLink: false,
        isNewStanza: false,
        isFirstLine: false
    },
    {
        text: "so gorgeous, so stunning, so beautiful",
        isTitle: false,
        isLink: false,
        isNewStanza: false,
        isFirstLine: false
    },
    {
        text: "they tell you",
        isTitle: false,
        isLink: false,
        isNewStanza: false,
        isFirstLine: false
    },
    {
        text: "all the words we wish to hear",
        isTitle: false,
        isLink: false,
        isNewStanza: false,
        isFirstLine: false
    },
    {
        text: "but cannot bear to tell ourselves",
        isTitle: false,
        isLink: false,
        isNewStanza: false,
        isFirstLine: false
    },
    {
        text: "the wrinkles, the marks, the imperfections",
        isTitle: false,
        isLink: false,
        isNewStanza: false,
        isFirstLine: false
    },
    {
        text: "are all that we can see in ourselves",
        isTitle: false,
        isLink: false,
        isNewStanza: false,
        isFirstLine: false
    },
    {
        text: "we look at their pictures and envy them so",
        isTitle: false,
        isLink: false,
        isNewStanza: true,
        isFirstLine: false
    },
    {
        text: "thinking they're luckier",
        isTitle: false,
        isLink: false,
        isNewStanza: false,
        isFirstLine: false
    },
    {
        text: "thinking they're happier",
        isTitle: false,
        isLink: false,
        isNewStanza: false,
        isFirstLine: false
    },
    {
        text: "in response we post these snapshots",
        isTitle: false,
        isLink: false,
        isNewStanza: false,
        isFirstLine: false
    },
    {
        text: `showing them we're doing "fine"`,
        isTitle: false,
        isLink: false,
        isNewStanza: false,
        isFirstLine: false
    },
    {
        text: "better, in fact, than they are",
        isTitle: false,
        isLink: false,
        isNewStanza: false,
        isFirstLine: false
    },
    {
        text: "we only show the highlights",
        isTitle: false,
        isLink: false,
        isNewStanza: false,
        isFirstLine: false
    },
    {
        text: "since they don't want the full story",
        isTitle: false,
        isLink: false,
        isNewStanza: false,
        isFirstLine: false
    },
    {
        text: "increase the exposure",
        isTitle: false,
        isLink: false,
        isNewStanza: true,
        isFirstLine: false
    },
    {
        text: "lower the contrast",
        isTitle: false,
        isLink: false,
        isNewStanza: false,
        isFirstLine: false
    },
    {
        text: "and add a little warmth",
        isTitle: false,
        isLink: false,
        isNewStanza: false,
        isFirstLine: false
    },
    {
        text: "now it's perfect just as it should be",
        isTitle: false,
        isLink: false,
        isNewStanza: false,
        isFirstLine: false
    },
    {
        text: "stop scrolling past and give me a like",
        isTitle: false,
        isLink: false,
        isNewStanza: false,
        isFirstLine: false
    },
    {
        text: "it might make me feel better",
        isTitle: false,
        isLink: false,
        isNewStanza: false,
        isFirstLine: false
    },
    {
        text: "for an instant",
        isTitle: false,
        isLink: false,
        isNewStanza: false,
        isFirstLine: false
    },
]

const heartIconGraphics: PoemGraphicsType = {
    backgroundSrc,
    colorIconSrc,
    bwIconSrc,
    textColor: "#50031B",
    alt: "Heart Icon",
}

export { heartIcon, heartIconGraphics }