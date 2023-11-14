import React, { FC } from 'react'
import styles from '../../styles/PoemsPage.module.css'
import classNames from 'classnames'

interface Props {
    bwSrc: string,
    colorSrc: string,
    alt: string,
}

const PoemIcon: FC<Props> = ({
    bwSrc,
    colorSrc,
    alt,
}) => {

    const cx = classNames.bind(styles)

    const bwId = alt + "_bw"
    const colorId = alt + "_color"
    let bwImg = document.getElementById(bwId)
    let colorImg = document.getElementById(colorId)

    const handleMouseEnter = () => {
        if (bwImg && colorImg) {
            bwImg.classList.add(styles.poem_icon_inactive)
            bwImg.classList.remove(styles.poem_icon_active)
            colorImg.classList.add(styles.poem_icon_active)
            colorImg.classList.remove(styles.poem_icon_inactive)
        }
    }   

    const handleMouseLeave = () => {
        if (bwImg && colorImg) {
            bwImg.classList.remove(styles.poem_icon_inactive)
            bwImg.classList.add(styles.poem_icon_active)
            colorImg.classList.remove(styles.poem_icon_active)
            colorImg.classList.add(styles.poem_icon_inactive)
        }
    }

    return (
        <div className={styles.poem_icon_container} onMouseEnter={() => handleMouseEnter()} onMouseLeave={() => handleMouseLeave()}>
            <img className={cx(styles.poem_icon_active, styles.poem_icon)} src={bwSrc} alt={alt} id={bwId} />
            <img className={cx(styles.poem_icon_inactive, styles.poem_icon_color, styles.poem_icon)} src={colorSrc} alt={alt} id={colorId} />
        </div>
    )
}

export default PoemIcon;