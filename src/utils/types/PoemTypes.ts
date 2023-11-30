import { ObjectId } from "mongodb"

export type LineType = {
    text: string,
    isTitle: boolean,
    isLink: boolean,
    isNewStanza: boolean,
    isFirstLine: boolean,
    isLastInStanza?: boolean
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

export type GalleryPoemType = {
    lines: UserLineType[],
    author: string,
    title: string,
    _id: ObjectId,
    poemLevels: {
        heartIcon: number,
        fireflies: number,
        neverendingSpring: number,
        summerNights: number,
        mirrorMirror: number,
        lotusEater: number,
        coldLeaves: number,
        friendship: number,
        desire: number,
        total: number
    }
}