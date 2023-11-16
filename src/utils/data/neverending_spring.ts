import { Poem, PoemGraphics } from "../types/Poem";
import backgroundSrc from '../../images/backgrounds/neverending-spring-background-noise.png'
import colorIconSrc from '../../images/colorIcons/poem-nav-icons-spring.png'
import bwIconSrc from '../../images/bwIcons/poem-nav-icons-spring-bw.png'

const neverendingSpring: Poem = [
    {
        text: "Neverending Spring",
        isTitle: true,
        isLink: false,
        isNewStanza: false,
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
        text: "your touch is rich and golden honey",
        isTitle: false,
        isLink: false,
        isNewStanza: true,
        isFirstLine: true
    },
    {
        text: "as it trailes along my skin",
        isTitle: false,
        isLink: false,
        isNewStanza: false,
        isFirstLine: false
    },
    {
        text: "melting",
        isTitle: false,
        isLink: false,
        isNewStanza: false,
        isFirstLine: false
    },
    {
        text: "all my thoughts and words",
        isTitle: false,
        isLink: false,
        isNewStanza: false,
        isFirstLine: false
    },
    {
        text: "and mixing up",
        isTitle: false,
        isLink: false,
        isNewStanza: false,
        isFirstLine: false
    },
    {
        text: "my sentences",
        isTitle: false,
        isLink: false,
        isNewStanza: false,
        isFirstLine: false
    },
    {
        text: "the words blooming from your lips",
        isTitle: false,
        isLink: false,
        isNewStanza: true,
        isFirstLine: false
    },
    {
        text: "produce the sweetest nectar",
        isTitle: false,
        isLink: false,
        isNewStanza: false,
        isFirstLine: false
    },
    {
        text: "attracting",
        isTitle: false,
        isLink: false,
        isNewStanza: false,
        isFirstLine: false
    },
    {
        text: "the butterflies",
        isTitle: false,
        isLink: false,
        isNewStanza: false,
        isFirstLine: false
    },
    {
        text: "that stir in my stomach",
        isTitle: false,
        isLink: false,
        isNewStanza: false,
        isFirstLine: false
    },
    {
        text: "your soul is a spectrum of beautiful hues",
        isTitle: false,
        isLink: false,
        isNewStanza: true,
        isFirstLine: false
    },
    {
        text: "a flower with outstretched petals",
        isTitle: false,
        isLink: false,
        isNewStanza: false,
        isFirstLine: false
    },
    {
        text: "you draw me in",
        isTitle: false,
        isLink: false,
        isNewStanza: false,
        isFirstLine: false
    },
    {
        text: "a bee mesmerized",
        isTitle: false,
        isLink: false,
        isNewStanza: false,
        isFirstLine: false
    },
    {
        text: "the fruit you bear",
        isTitle: false,
        isLink: false,
        isNewStanza: true,
        isFirstLine: false
    },
    {
        text: "is sweeter than any other",
        isTitle: false,
        isLink: false,
        isNewStanza: true,
        isFirstLine: false
    },
    {
        text: "the others are bitter",
        isTitle: false,
        isLink: false,
        isNewStanza: false,
        isFirstLine: false
    },
    {
        text: "in comparison",
        isTitle: false,
        isLink: false,
        isNewStanza: false,
        isFirstLine: false
    },
]

const neverendingSpringGraphics: PoemGraphics = {
    backgroundSrc,
    colorIconSrc,
    bwIconSrc,
    textColor: 'green',
    alt: "Neverending Spring"
}

export { neverendingSpring, neverendingSpringGraphics }
