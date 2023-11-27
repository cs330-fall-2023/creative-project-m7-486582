import React, { Dispatch, FC, SetStateAction } from 'react'
import styles from '../../styles/PoemsPage.module.css'
import classNames from 'classnames'

interface Props {
    title: string
    setTitle: Dispatch<SetStateAction<string>>
    author: string
    setAuthor: Dispatch<SetStateAction<string>>
}

const PlaceholderPoem: FC<Props> = ({
    title,
    setTitle,
    author,
    setAuthor
}) => {
    let cx = classNames.bind(styles)

    // @ts-ignore
    const handleTitleChange = (e) => {
        setTitle(e.target.value)
    }

    // @ts-ignore
    const handleAuthorChange = (e) => {
        setAuthor(e.target.value)
    }

    return (
        <div className={styles.poem_container + " " + styles.user_poem}>
            <input type="text" placeholder="untitled" className={cx(styles.clean_input, styles.poem_line, styles.poem_title)} value={title} onChange={handleTitleChange} />
            <div className={styles.poem_line}>by <input type="text" placeholder="your name" className={cx(styles.clean_input)} value={author} onChange={handleAuthorChange} /></div>
            <div style={{display: 'flex', alignItems: 'flex-end'}}>
                <div key="cursor" className={cx(styles.blinking_cursor, styles.placeholder_line)}></div>
                <div className={cx(styles.poem_line, styles.placeholder_line, styles.first_line)}>click through the icons</div>
            </div>
            <div className={cx(styles.poem_line, styles.placeholder_line)}>to read the poems</div>
            <div className={cx(styles.poem_line, styles.placeholder_line)}>and click the lines</div>
            <div className={cx(styles.poem_line, styles.placeholder_line)}>you want to include</div>
        </div>
    )
}

export default PlaceholderPoem