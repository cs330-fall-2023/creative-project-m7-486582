import React, { FC } from 'react';
import { PoemType, PoemGraphicsType } from '../../utils/types/PoemTypes';
import PoemLine from './PoemLine';
import styles from '../../styles/PoemsPage.module.css'
import classNames from 'classnames';

interface Props {
    poem: PoemType | undefined;
    poemGraphics: PoemGraphicsType | undefined;
}

const Poem: FC<Props> = ({
    poem,
    poemGraphics
}) => {
    let textColor = poemGraphics ? poemGraphics.textColor : 'black';
    console.log(textColor)

    return (
        <div className={styles.poem_container} style={{ color: textColor }}>
            {poem && poem.map((line, index) => {
                return <PoemLine key={line.text + "_" + index} line={line} textColor={textColor} />
            })}
        </div>
    );
}

export default Poem