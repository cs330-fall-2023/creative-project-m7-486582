import React, { FC } from 'react'
import { LineType } from '../../utils/types/PoemTypes'
import styles from '../../styles/PoemsPage.module.css'
import classNames from 'classnames'

interface Props {
    line: LineType
}

const PoemLine: FC<Props> = ({
    line
}) => {

    const cx = classNames.bind(styles)

    const className = cx(
        styles.poem_line,
        line.isTitle && styles.poem_title,
        line.isLink && styles.link,
        line.isNewStanza && styles.new_stanza,
        line.isFirstLine && styles.first_line
    )

    return (
        <div className={className}>{line.text}</div>
    )
}

export default PoemLine