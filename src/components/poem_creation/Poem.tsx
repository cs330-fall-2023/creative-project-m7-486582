import React, { Dispatch, FC, SetStateAction } from 'react';
import { PoemType, PoemGraphicsType, UserPoemType, UserLineType } from '../../utils/types/PoemTypes';
import PoemLine from './PoemLine';
import styles from '../../styles/PoemsPage.module.css'
import { RectangleType } from '../../utils/types/CanvasTypes';

interface Props {
    poem: PoemType | undefined;
    poemGraphics: PoemGraphicsType | undefined;
    setLines: Dispatch<SetStateAction<UserPoemType>>
    nextIsNewStanza: boolean
    setNextIsNewStanza: Dispatch<SetStateAction<boolean>>
    addLineToLevels: (line: UserLineType) => void
    setRectangles: Dispatch<SetStateAction<RectangleType[]>>
}

const Poem: FC<Props> = ({
    poem,
    poemGraphics,
    setLines,
    nextIsNewStanza,
    setNextIsNewStanza,
    addLineToLevels,
    setRectangles
}) => {
    let textColor = poemGraphics ? poemGraphics.textColor : 'black';

    return (
        <div className={styles.scroll_container}>
            <div className={styles.poem_container}>
                {poem && poem.map((line, index) => {
                    return (
                        <PoemLine
                            key={line.text + "_" + index}
                            line={{ ...line, isLink: true }}
                            textColor={textColor}
                            setLines={setLines}
                            index={index}
                            nextIsNewStanza={nextIsNewStanza}
                            setNextIsNewStanza={setNextIsNewStanza}
                            addLineToLevels={addLineToLevels}
                            setRectangles={setRectangles}
                            rectKey={line.text + "_" + index}
                        />
                    )
                })}
            </div>
        </div>
    );
}

export default Poem