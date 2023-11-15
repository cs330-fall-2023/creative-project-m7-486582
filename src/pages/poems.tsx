import React, { FC, useState } from 'react'
import UserPoem from '../components/poem_creation/UserPoem'
import { Poem } from '../utils/types/Poem'
import { allPoems, allPoemGraphics } from '../utils/data/poems_wrapper'
import PoemIcon from '../components/poem_creation/PoemIcon'
import styles from '../styles/PoemsPage.module.css'

const PoemsPage: FC = () => {
    const [lines, setLines] = useState<Poem>([])
    return (
        <>
            <UserPoem 
                lines={lines}
                setLines={setLines}
            />
            <div className={styles.poem_icons}>
                {
                    allPoemGraphics.map((poemGraphics) => {
                        return (
                            <PoemIcon 
                                key={poemGraphics.alt}
                                bwSrc={poemGraphics.bwIconSrc}
                                colorSrc={poemGraphics.colorIconSrc}
                                alt={poemGraphics.alt}
                            />
                        )
                    })
                }
            </div>
        </>
    )
}

export default PoemsPage
