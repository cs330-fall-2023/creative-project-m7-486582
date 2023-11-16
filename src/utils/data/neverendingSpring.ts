import { Poem, PoemGraphics } from "../types/Poem";
import backgroundSrc from '../../images/backgrounds/neverending-spring-background-noise.png'
import colorIconSrc from '../../images/colorIcons/poem-nav-icons-spring.png'
import bwIconSrc from '../../images/bwIcons/poem-nav-icons-spring-bw.png'

const neverendingSpring: Poem = []

const neverendingSpringGraphics: PoemGraphics = {
    backgroundSrc,
    colorIconSrc,
    bwIconSrc,
    textColor: 'green',
    alt: "Neverending Spring"
}

export { neverendingSpring, neverendingSpringGraphics }
