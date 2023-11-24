import React, { Dispatch, FC, SetStateAction } from 'react';
import { PoemType, PoemGraphicsType, UserPoemType } from '../../utils/types/PoemTypes';
import PoemLine from './PoemLine';
import styles from '../../styles/PoemsPage.module.css'

interface Props {
    poem: PoemType | undefined;
    poemGraphics: PoemGraphicsType | undefined;
    setLines: Dispatch<SetStateAction<UserPoemType>>
}

const Poem: FC<Props> = ({
    poem,
    poemGraphics,
    setLines
}) => {
    let textColor = poemGraphics ? poemGraphics.textColor : 'black';

    return (
        <div className={styles.poem_container}>
            {poem && poem.map((line, index) => {
                return (
                    <PoemLine
                        key={line.text + "_" + index}
                        line={line}
                        textColor={textColor}
                        setLines={setLines}
                        index={index}
                    />)
            })}
        </div>
    );
}

export default Poem