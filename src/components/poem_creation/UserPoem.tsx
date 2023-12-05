import React, { FC, Dispatch, SetStateAction } from 'react'
import { UserLineType, UserPoemType } from '../../utils/types/PoemTypes'
import styles from '../../styles/PoemsPage.module.css'
import PoemLine from './PoemLine'
import classNames from 'classnames'
import restartIcon from '../../images/bwIcons/restart-icon.png'
import finishIcon from '../../images/bwIcons/finish-icon.png'
import shareIcon from '../../images/bwIcons/share-icon-1.png'
import shareIconFill from '../../images/bwIcons/share-icon.png'
import exploreIcon from '../../images/bwIcons/explore-icon.png'
import { RectangleType } from '../../utils/types/CanvasTypes'
import { useNavigate } from 'react-router-dom'

interface Props {
    lines: UserPoemType
    setLines: Dispatch<SetStateAction<UserPoemType>>
    title: string
    setTitle: Dispatch<SetStateAction<string>>
    author: string
    setAuthor: Dispatch<SetStateAction<string>>
    nextIsNewStanza: boolean
    removeLineFromLevels: (line: UserLineType) => void
    savePoem: () => void
    savePressed: boolean
    setRectangles: Dispatch<SetStateAction<RectangleType[]>>,
    sharePoem: () => void
}

const UserPoem: FC<Props> = ({
    lines,
    setLines,
    title,
    setTitle,
    author,
    setAuthor,
    nextIsNewStanza,
    removeLineFromLevels,
    savePoem,
    savePressed,
    setRectangles,
    sharePoem
}) => {
    let nav = useNavigate()

    // @ts-ignore
    const handleTitleChange = (e) => {
        setTitle(e.target.value)
    }

    // @ts-ignore
    const handleAuthorChange = (e) => {
        setAuthor(e.target.value)
    }

    const cx = classNames.bind(styles)

    const restartClicked = () => {
        setLines([])
        setTitle("")
        setAuthor("")
        setRectangles([])
    }

    const mouseEnterShare = (e: any) => {
        e.target.src = shareIconFill
    }

    const mouseLeaveShare = (e: any) => {
        e.target.src = shareIcon
    }

    const goToGallery = () => {
        nav('/gallery')
    }

    return (
        <div className={styles.poem_container + " " + styles.user_poem}>
            <div className={styles.actions}>
                <img onClick={restartClicked} src={restartIcon} className={styles.action_button + " " + styles.restart_button} />
                {!savePressed && <img onClick={savePoem} src={finishIcon} className={styles.action_button + " " + styles.save_button} />}
                {savePressed && <img onClick={sharePoem} onMouseEnter={mouseEnterShare} onMouseLeave={mouseLeaveShare} src={shareIcon} className={styles.action_button + " " + styles.share_button} />}
                {savePressed && <img onClick={goToGallery} src={exploreIcon} className={styles.action_button + " " + styles.explore_button} />}
            </div>
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
                            setRectangles={setRectangles}
                            rectKey={line.line.text + "_" + index}
                        />
                    )
                })
            }
            <div key="cursor" className={cx(styles.blinking_cursor, styles.placeholder_line, nextIsNewStanza && styles.new_stanza)}></div>
        </div>
    )
}

export default UserPoem