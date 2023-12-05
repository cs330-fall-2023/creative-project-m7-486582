import React, { Dispatch, FC, SetStateAction, useEffect } from 'react'
import { LineType, UserLineType, UserPoemType } from '../../utils/types/PoemTypes'
import styles from '../../styles/PoemsPage.module.css'
import classNames from 'classnames'
import { RectangleType } from '../../utils/types/CanvasTypes'
import { textColorToBackgroundUrl } from '../../utils/data/text_colors'

interface Props {
    rectKey: string
    line: LineType
    textColor: string
    fromUserPoem?: boolean
    setLines: Dispatch<SetStateAction<UserPoemType>>
    index: number
    nextIsNewStanza?: boolean
    setNextIsNewStanza?: Dispatch<SetStateAction<boolean>>
    addLineToLevels?: (line: UserLineType) => void
    removeLineFromLevels?: (line: UserLineType) => void
    setRectangles?: Dispatch<SetStateAction<RectangleType[]>>
}

const PoemLine: FC<Props> = ({
    rectKey,
    line,
    textColor,
    fromUserPoem = false,
    setLines,
    index,
    nextIsNewStanza = false,
    setNextIsNewStanza = () => { },
    addLineToLevels = () => { },
    removeLineFromLevels = () => { },
    setRectangles = () => { }
}) => {

    useEffect(() => {
        if (fromUserPoem) {
            const lineDiv = document.getElementById(line.text + "_" + index)
            if (lineDiv) {
                setTimeout(() => {
                    lineDiv.classList.remove(styles.fade_in)
                }, 50)
            }
        }

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])


    const handleLineClick = () => {
        setLines(prevLines => {
            const userLine: UserLineType = {
                line: {
                    ...line,
                    isNewStanza: nextIsNewStanza,
                    isFirstLine: prevLines.length === 0,
                    isLink: true,
                },
                textColor,
            }

            if (nextIsNewStanza) {
                setNextIsNewStanza(false)
            }

            if (fromUserPoem) {
                const newLines = [...prevLines]
                const index = newLines.findIndex(line => line.line.text === userLine.line.text && line.textColor === userLine.textColor)
                newLines.splice(index, 1)
                removeLineFromLevels(userLine)
                return newLines
            } else {
                addLineToLevels(userLine)
            }
            return [...prevLines, userLine]
        })

        setRectangles(prevRectangles => {
            console.log(prevRectangles)
            const newRectangles = [...prevRectangles]
            if (fromUserPoem) {
                const index = newRectangles.findIndex(rectangle => rectangle.key === rectKey)
                newRectangles.splice(index, 1)
            } else {
                const minWidthPercentage = 10;
                const maxWidthPercentage = 40;
                const minHeightPercentage = 40;
                const maxHeightPercentage = 80;

                const isHorizontal = Math.random() < 0.5

                const width = isHorizontal ? generateRandomNumber(minWidthPercentage, maxWidthPercentage) : generateRandomNumber(minHeightPercentage, maxHeightPercentage)
                const height = isHorizontal ? generateRandomNumber(minHeightPercentage, maxHeightPercentage) : generateRandomNumber(minWidthPercentage, maxWidthPercentage)

                const top = generateRandomNumber(10, 100 - height)
                const left = generateRandomNumber(10, 100 - width)
                newRectangles.push({
                    top,
                    left,
                    width,
                    height,
                    backgroundUrl: textColorToBackgroundUrl[textColor],
                    key: rectKey
                })
            }
            return newRectangles
        })
    }

    const generateRandomNumber = (min: number, max: number) => {
        return Math.random() * (max - min) + min
    }

    const cx = classNames.bind(styles)

    const className = cx(
        styles.poem_line,
        line.isTitle && styles.poem_title,
        line.isLink && styles.link,
        line.isNewStanza && styles.new_stanza,
        line.isFirstLine && styles.first_line,
        fromUserPoem && styles.fade_in,
        line.isLastInStanza && styles.last_in_stanza
    )

    return (
        <div className={className} style={{ color: textColor }} onClick={() => handleLineClick()} id={line.text + "_" + index}>{line.text}</div>
    )
}

export default PoemLine