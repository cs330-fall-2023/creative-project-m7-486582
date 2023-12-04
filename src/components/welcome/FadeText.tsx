import React, { FC } from 'react'
import styles from '../../styles/WelcomePage.module.css'
import classNames from 'classnames'

interface Props {
    text: string
    isTitle: boolean
    isLink: boolean
    isNewStanza: boolean
    isFirstLine: boolean
    style?: React.CSSProperties
    onClick?: () => void
}

const FadeText: FC<Props> = ({
    text,
    isTitle,
    isLink,
    isNewStanza,
    isFirstLine,
    style,
    onClick
}) => {

    const cx = classNames.bind(styles)

    const className = cx(
        styles.poem_line,
        isTitle && styles.poem_title,
        isLink && styles.link,
        isNewStanza && styles.new_stanza,
        isFirstLine && styles.first_line
    )
    console.log(text)

    return (
        <div className={className} style={style} onClick={onClick}>{text}</div>
    )
}

export default FadeText