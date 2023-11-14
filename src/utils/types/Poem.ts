export type Line = {
    text: string,
    isTitle: boolean,
    isLink: boolean,
    isNewStanza: boolean,
    isFirstLine: boolean
}

export type Poem = Line[]

export type PoemGraphics = {
    backgroundSrc: string,
    colorIconSrc: string,
    bwIconSrc: string,
    textColor: string,
    alt: string,
}