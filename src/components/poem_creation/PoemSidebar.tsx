import React, { FC } from 'react'
import styles from '../../styles/PoemSidebar.module.css'
import { Poem, PoemGraphics } from '../../utils/types/Poem';
import classNames from 'classnames';
import defaultBackground from '../../images/backgrounds/cold-leaves-background-noise.png'

interface Props {
    poem: Poem | undefined,
    poemGraphics: PoemGraphics | undefined,
    isSidebarOpen: boolean
}

const PoemSidebar: FC<Props> = ({
    poem,
    poemGraphics,
    isSidebarOpen
}) => {
    const cx = classNames.bind(styles)
    
    const backgroundSrc = poemGraphics ? poemGraphics.backgroundSrc : defaultBackground

    return (
        <div className={cx(styles.sidebar_container, isSidebarOpen && styles.active)} style={{backgroundImage: `url(${backgroundSrc})`}}>
            <div className={styles.poem}>A</div>
        </div>
    )
}

export default PoemSidebar;