import React, { FC, Dispatch, SetStateAction } from 'react'
import styles from '../../styles/PoemsPage.module.css'
import classNames from 'classnames'
import { Poem, PoemGraphics } from '../../utils/types/Poem'

interface Props {
    poem: Poem,
    poemGraphics: PoemGraphics,
    isSidebarOpen: boolean,
    setIsSidebarOpen: Dispatch<SetStateAction<boolean>>,
    setCurrentPoem: Dispatch<SetStateAction<Poem | undefined>>,
    setCurrentPoemGraphics: Dispatch<SetStateAction<PoemGraphics | undefined>>
}

const PoemIcon: FC<Props> = ({
    poem,
    poemGraphics,
    isSidebarOpen,
    setIsSidebarOpen,
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
        }
    }

    const selectPoem = () => {
        if (isSidebarOpen) {
            setIsSidebarOpen(false)
            setCurrentPoem(undefined)
            setCurrentPoemGraphics(undefined)
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
                className={cx(styles.poem_icon_inactive, styles.poem_icon_color, styles.poem_icon)} 
                src={poemGraphics.colorIconSrc} 
                alt={poemGraphics.alt} 
                id={colorId} 
                />
        </div>
    )
}

export default PoemIcon;