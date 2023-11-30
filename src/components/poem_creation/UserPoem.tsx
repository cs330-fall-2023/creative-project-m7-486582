import React, { FC, Dispatch, SetStateAction } from 'react'
import { UserLineType, UserPoemType } from '../../utils/types/PoemTypes'
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
    nextIsNewStanza: boolean
    removeLineFromLevels: (line: UserLineType) => void
}

const UserPoem: FC<Props> = ({
    lines,
    setLines,
    title,
    setTitle,
    author,
    setAuthor,
    nextIsNewStanza,
    removeLineFromLevels
}) => {

    // @ts-ignore
    const handleTitleChange = (e) => {
        setTitle(e.target.value)
    }

    // @ts-ignore
    const handleAuthorChange = (e) => {
        setAuthor(e.target.value)
    }

    const savePoem = async () => {
        let response = await fetch('http://localhost:3001/api/save', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                title: title,
                author: author,
                lines: lines
            })
        })
        let data = await response.json()
        console.log(data)
    }

    const cx = classNames.bind(styles)

    return (
        <div className={styles.poem_container + " " + styles.user_poem}>
            <button onClick={savePoem}>Save</button>
            <input type="text" placeholder="untitled" className={cx(styles.clean_input, styles.poem_line, styles.poem_title)} value={title} onChange={handleTitleChange} />
            <div className={styles.poem_line}>by <input type="text" placeholder="your name" className={cx(styles.clean_input)} value={author} onChange={handleAuthorChange} /></div>
            {
                lines.map((line, index) => {
                    return (
                        <PoemLine
                            key={line.line.text + "_" + index}
                            line={line.line}
                            textColor={line.textColor}
                            fromUserPoem={true}
                            setLines={setLines}
                            index={index}
                            removeLineFromLevels={removeLineFromLevels}
                        />
                    )
                })
            }
            <div key="cursor" className={cx(styles.blinking_cursor, styles.placeholder_line, nextIsNewStanza && styles.new_stanza)}></div>
        </div>
    )
}

export default UserPoem