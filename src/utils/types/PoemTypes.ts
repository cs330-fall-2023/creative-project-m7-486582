export type LineType = {
    text: string,
    isTitle: boolean,
    isLink: boolean,
    isNewStanza: boolean,
    isFirstLine: boolean
}

export type UserLineType = {
    line: LineType,
    textColor: string
}

export type PoemType = LineType[]
export type UserPoemType = UserLineType[]

export type PoemGraphicsType = {
    backgroundSrc: string,
    colorIconSrc: string,
    bwIconSrc: string,
    textColor: string,
    alt: string,
}