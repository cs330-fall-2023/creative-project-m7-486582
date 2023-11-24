import React, { Dispatch, FC, SetStateAction } from 'react'
import styles from '../../styles/PoemSidebar.module.css'
import classNames from 'classnames';
import defaultBackground from '../../images/backgrounds/cold-leaves-background-noise.png'
import { PoemType, PoemGraphicsType, UserPoemType } from '../../utils/types/PoemTypes';
import Poem from './Poem';


interface Props {
    poem: PoemType | undefined,
    poemGraphics: PoemGraphicsType | undefined,
    isSidebarOpen: boolean
    setLines: Dispatch<SetStateAction<UserPoemType>>
}

const PoemSidebar: FC<Props> = ({
    poem,
    poemGraphics,
    isSidebarOpen,
    setLines
}) => {
    const cx = classNames.bind(styles)

    const backgroundSrc = poemGraphics ? poemGraphics.backgroundSrc : defaultBackground

    return (
        <div className={cx(styles.sidebar_container, isSidebarOpen && styles.active)} style={{ backgroundImage: `url(${backgroundSrc})` }}>
            <div style={{ width: '100%', height: '100%', backgroundColor: 'rgba(255, 255, 255, 0.2)' }}></div>
            <Poem
                poem={poem}
                poemGraphics={poemGraphics}
                setLines={setLines}
            />
        </div>
    )
}

export default PoemSidebar;