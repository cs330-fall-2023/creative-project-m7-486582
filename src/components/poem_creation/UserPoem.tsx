import React, { FC, Dispatch, SetStateAction, useEffect } from 'react'
import { UserPoemType } from '../../utils/types/PoemTypes'
import styles from '../../styles/PoemsPage.module.css'
import PoemLine from './PoemLine'
import classNames from 'classnames'

interface Props {
    lines: UserPoemType
    setLines: Dispatch<SetStateAction<UserPoemType>>
    title: string
    setTitle: Dispatch<SetStateAction<string>>
    author: string
    setAuthor: Dispatch<SetStateAction<string>>
}

const UserPoem: FC<Props> = ({
    lines,
    setLines,
    title,
    setTitle,
    author,
    setAuthor
}) => {

    const addStanza = () => {
        setLines(prevLines => {
            const userLine = prevLines[prevLines.length - 1]
            userLine.line.isLastInStanza = true
            const newLines = [...prevLines]
            newLines[newLines.length - 1] = userLine
            return newLines
        })
    }

    useEffect(() => {
        // @ts-ignore
        const keyDownHandler = (e) => {
            if (e.key === 'Enter') {
                e.preventDefault()
                addStanza()
            }
        }

        document.addEventListener('keydown', keyDownHandler)

        return () => {
            document.removeEventListener('keydown', keyDownHandler)
        }
    }, [])

    // @ts-ignore
    const handleTitleChange = (e) => {
        setTitle(e.target.value)
    }

    // @ts-ignore
    const handleAuthorChange = (e) => {
        setAuthor(e.target.value)
    }

    const cx = classNames.bind(styles)

    return (
        <div className={styles.poem_container}>
            <input type="text" placeholder="untitled" className={cx(styles.clean_input, styles.poem_line, styles.poem_title)} value={title} onChange={handleTitleChange} />
            <div className={styles.poem_line}>by <input type="text" placeholder="your name" className={cx(styles.clean_input)} value={author} onChange={handleAuthorChange} /></div>
            {
                lines.map((line, index) => {
                    if (index === lines.length - 1) {
                        return <div className={styles.last_line}>
                            <PoemLine
                                key={line.line.text + "_" + index}
                                line={line.line}
                                textColor={line.textColor}
                                fromUserPoem={true}
                                setLines={setLines}
                                index={index}
                            />
                            <div className={cx(styles.blinking_cursor, styles.placeholder_line)}></div>
                        </div>
                    }
                    return (
                        <PoemLine
                            key={line.line.text + "_" + index}
                            line={line.line}
                            textColor={line.textColor}
                            fromUserPoem={true}
                            setLines={setLines}
                            index={index}
                        />
                    )
                })
            }
        </div>
    )
}

export default UserPoem