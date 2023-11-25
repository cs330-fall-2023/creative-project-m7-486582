import React, { FC, Dispatch, SetStateAction } from 'react'
import { UserPoemType } from '../../utils/types/PoemTypes'
import styles from '../../styles/PoemsPage.module.css'
import PoemLine from './PoemLine'
import classNames from 'classnames'

interface Props {
    lines: UserPoemType
    setLines: Dispatch<SetStateAction<UserPoemType>>
}

const UserPoem: FC<Props> = ({
    lines,
    setLines
}) => {

    const cx = classNames.bind(styles)

    return (
        <div className={styles.poem_container}>
            <div className={cx(styles.poem_line, styles.poem_title)}>untitled</div>
            <div className={styles.poem_line} style={{ marginBottom: '32px' }}>by <span style={{ color: 'gray' }}>your name</span></div>
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
                        />
                    )
                })
            }
        </div>
    )
}

export default UserPoem