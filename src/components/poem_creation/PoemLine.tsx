import React, { Dispatch, FC, SetStateAction } from 'react'
import { LineType, PoemType, UserPoemType } from '../../utils/types/PoemTypes'
import styles from '../../styles/PoemsPage.module.css'
import classNames from 'classnames'
import { Draggable } from 'react-beautiful-dnd'

interface Props {
    line: LineType
    textColor: string
    isPlaceholder?: boolean
    setLines: Dispatch<SetStateAction<UserPoemType>>
    index: number
}

const PoemLine: FC<Props> = ({
    line,
    textColor,
    isPlaceholder,
    setLines,
    index
}) => {

    const handleLineClick = () => {
        setLines(prevLines => [...prevLines, { line, textColor: textColor }])
    }

    const cx = classNames.bind(styles)

    const className = cx(
        styles.poem_line,
        line.isTitle && styles.poem_title,
        line.isLink && styles.link,
        line.isNewStanza && styles.new_stanza,
        line.isFirstLine && styles.first_line,
        isPlaceholder && styles.placeholder_line
    )

    return (
        <Draggable draggableId={line.text} index={index}>
            {(provided) => {
                return <div className={className} style={{ color: textColor }} onClick={() => handleLineClick()} {...provided.draggableProps} {...provided.dragHandleProps} ref={provided.innerRef}>{line.text}</div>
            }}
        </Draggable>
    )
}

export default PoemLine