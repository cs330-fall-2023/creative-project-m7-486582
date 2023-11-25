import React, { Dispatch, FC, SetStateAction, useEffect } from 'react'
import { LineType, UserLineType, UserPoemType } from '../../utils/types/PoemTypes'
import styles from '../../styles/PoemsPage.module.css'
import classNames from 'classnames'

interface Props {
    line: LineType
    textColor: string
    fromUserPoem?: boolean
    setLines: Dispatch<SetStateAction<UserPoemType>>
    index: number
}

const PoemLine: FC<Props> = ({
    line,
    textColor,
    fromUserPoem = false,
    setLines,
    index
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
    }, [])


    const handleLineClick = () => {
        setLines(prevLines => {
            const userLine: UserLineType = {
                line: {
                    ...line,
                    isNewStanza: false,
                    isFirstLine: false,
                    isLink: true,
                },
                textColor
            }

            if (fromUserPoem) {
                const newLines = [...prevLines]
                const index = newLines.findIndex(line => line.line.text === userLine.line.text && line.textColor === userLine.textColor)
                newLines.splice(index, 1)
                return newLines
            }
            return [...prevLines, userLine]
        })
    }

    const cx = classNames.bind(styles)

    const className = cx(
        styles.poem_line,
        line.isTitle && styles.poem_title,
        line.isLink && styles.link,
        line.isNewStanza && styles.new_stanza,
        line.isFirstLine && styles.first_line,
        fromUserPoem && styles.fade_in
    )

    return (
        <div className={className} style={{ color: textColor }} onClick={() => handleLineClick()} id={line.text + "_" + index}>{line.text}</div>
    )
}

export default PoemLine