export type LineType = {
    text: string,
    isTitle: boolean,
    isLink: boolean,
    isNewStanza: boolean,
    isFirstLine: boolean
}

export type PoemType = LineType[]

export type PoemGraphicsType = {
    backgroundSrc: string,
    colorIconSrc: string,
    bwIconSrc: string,
    textColor: string,
    alt: string,
}