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

    return (
        <div className={styles.poem_container}>
            {poem && poem.map((line, index) => {
                return <PoemLine key={line.text + "_" + index} line={line} />
            })}
        </div>
    );
}

export default Poem