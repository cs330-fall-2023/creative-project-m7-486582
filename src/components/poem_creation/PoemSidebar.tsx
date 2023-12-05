import React, { Dispatch, FC, SetStateAction } from 'react'
import styles from '../../styles/PoemSidebar.module.css'
import classNames from 'classnames';
import defaultBackground from '../../images/backgrounds/cold-leaves-background-noise.png'
import { PoemType, PoemGraphicsType, UserPoemType, UserLineType } from '../../utils/types/PoemTypes';
import Poem from './Poem';
import { RectangleType } from '../../utils/types/CanvasTypes';


interface Props {
    poem: PoemType | undefined
    poemGraphics: PoemGraphicsType | undefined
    isSidebarOpen: boolean
    setLines: Dispatch<SetStateAction<UserPoemType>>
    nextIsNewStanza: boolean
    setNextIsNewStanza: Dispatch<SetStateAction<boolean>>
    addLineToLevels: (line: UserLineType) => void
    setRectangles: Dispatch<SetStateAction<RectangleType[]>>
}

const PoemSidebar: FC<Props> = ({
    poem,
    poemGraphics,
    isSidebarOpen,
    setLines,
    nextIsNewStanza,
    setNextIsNewStanza,
    addLineToLevels,
    setRectangles
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
                nextIsNewStanza={nextIsNewStanza}
                setNextIsNewStanza={setNextIsNewStanza}
                addLineToLevels={addLineToLevels}
                setRectangles={setRectangles}
            />
        </div>
    )
}

export default PoemSidebar;