import React, { FC, Dispatch, SetStateAction } from 'react'
import styles from '../../styles/PoemsPage.module.css'
import classNames from 'classnames'
import { PoemType, PoemGraphicsType } from '../../utils/types/PoemTypes'

interface Props {
    poem: PoemType,
    poemGraphics: PoemGraphicsType,
    isSidebarOpen: boolean,
    setIsSidebarOpen: Dispatch<SetStateAction<boolean>>,
    currentPoem: PoemType | undefined,
    setCurrentPoem: Dispatch<SetStateAction<PoemType | undefined>>,
    setCurrentPoemGraphics: Dispatch<SetStateAction<PoemGraphicsType | undefined>>
}

const PoemIcon: FC<Props> = ({
    poem,
    poemGraphics,
    isSidebarOpen,
    setIsSidebarOpen,
    currentPoem,
    setCurrentPoem,
    setCurrentPoemGraphics
}) => {

    const cx = classNames.bind(styles)

    const bwId = poemGraphics.alt + "_bw"
    const colorId = poemGraphics.alt + "_color"
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
            
            if (currentPoem === poem) {
                colorImg.classList.add(styles.poem_icon_active)
                colorImg.classList.remove(styles.poem_icon_inactive)
            }
        }
        
    }

    const selectPoem = () => {
        if (isSidebarOpen) {
            setCurrentPoem(prevPoem => {
                if (prevPoem === poem) {
                    setIsSidebarOpen(false)
                    return undefined
                } else {
                    return poem
                }
            })
            setCurrentPoemGraphics(prevPoemGraphics => {
                if (prevPoemGraphics === poemGraphics) {
                    setIsSidebarOpen(false)
                    return undefined
                } else {
                    return poemGraphics
                }

            })
        } else {
            setIsSidebarOpen(true)
            setCurrentPoem(poem)
            setCurrentPoemGraphics(poemGraphics)
        }
    }

    return (
        <div
            className={styles.poem_icon_container}
            onMouseEnter={() => handleMouseEnter()}
            onMouseLeave={() => handleMouseLeave()}
            onClick={() => selectPoem()}
        >
            <img
                className={cx(styles.poem_icon_active, styles.poem_icon)}
                src={poemGraphics.bwIconSrc}
                alt={poemGraphics.alt}
                id={bwId}
            />
            <img
                className={cx(styles.poem_icon_color, styles.poem_icon, currentPoem === poem ? styles.poem_icon_active : styles.poem_icon_inactive)}
                src={poemGraphics.colorIconSrc}
                alt={poemGraphics.alt}
                id={colorId}
            />
        </div>
    )
}

export default PoemIcon;