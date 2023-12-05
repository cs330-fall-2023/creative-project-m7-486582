import React, { FC } from 'react'
import styles from '../../styles/Canvas.module.css'
import { RectangleType } from '../../utils/types/CanvasTypes'

const Rectangle: FC<RectangleType> = ({
    top,
    left,
    width,
    height,
    backgroundUrl
}) => {

    const extra_styles = {
        top: top + "%",
        left: left + "%",
        width: width + "%",
        height: height + "%",
        backgroundImage: `url(${backgroundUrl})`
    }

    return (
        <div className={styles.rectangle} style={extra_styles}></div>
    )
}

export default Rectangle