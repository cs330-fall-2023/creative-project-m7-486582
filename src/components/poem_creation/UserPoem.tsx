import React, { FC, Dispatch, SetStateAction } from 'react'
import { UserPoemType } from '../../utils/types/PoemTypes'
import styles from '../../styles/PoemsPage.module.css'
import PoemLine from './PoemLine'
import classNames from 'classnames'
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd'
import ts from 'typescript'

interface Props {
    lines: UserPoemType
    setLines: Dispatch<SetStateAction<UserPoemType>>
}

const UserPoem: FC<Props> = ({
    lines,
    setLines
}) => {

    // @ts-ignore
    const onDragEnd = result => {

    }

    const cx = classNames.bind(styles)

    return (
        <div className={styles.poem_container}>
            <div className={cx(styles.poem_line, styles.poem_title)}>untitled</div>
            <div className={styles.poem_line}>by <span style={{ color: 'gray' }}>your name</span></div>
            <DragDropContext onDragEnd={onDragEnd}>
                <Droppable droppableId="droppable">
                    {(provided) => {
                        return <div
                            ref={provided.innerRef}
                            {...provided.droppableProps}
                        >
                            {
                                lines.map((line, index) => {
                                    return (
                                        <PoemLine
                                            key={line.line.text}
                                            line={line.line}
                                            textColor={line.textColor}
                                            setLines={setLines}
                                            index={index}
                                        />
                                    )
                                })
                            }
                            {provided.placeholder}
                        </div>
                    }
                    }
                </Droppable>
            </DragDropContext>
        </div>
    )
}

export default UserPoem