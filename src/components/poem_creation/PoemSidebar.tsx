import React, { FC } from 'react'
import styles from '../../styles/PoemSidebar.module.css'
import classNames from 'classnames';
import defaultBackground from '../../images/backgrounds/cold-leaves-background-noise.png'
import { PoemType, PoemGraphicsType } from '../../utils/types/PoemTypes';
import Poem from './Poem';


interface Props {
    poem: PoemType | undefined,
    poemGraphics: PoemGraphicsType | undefined,
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
            <Poem
                poem={poem}
                poemGraphics={poemGraphics}
            />
        </div>
    )
}

export default PoemSidebar;