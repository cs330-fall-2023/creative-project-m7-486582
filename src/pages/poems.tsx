import React, { FC, useState } from 'react'
import UserPoem from '../components/poem_creation/UserPoem'
import { PoemType, PoemGraphicsType } from '../utils/types/PoemTypes'
import { allPoems, allPoemGraphics } from '../utils/data/poems_wrapper'
import PoemIcon from '../components/poem_creation/PoemIcon'
import styles from '../styles/PoemsPage.module.css'
import PoemSidebar from '../components/poem_creation/PoemSidebar'

const PoemsPage: FC = () => {
    const [lines, setLines] = useState<PoemType>([])
    const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(false)
    const [currentPoem, setCurrentPoem] = useState<PoemType | undefined>(undefined)
    const [currentPoemGraphics, setCurrentPoemGraphics] = useState<PoemGraphicsType | undefined>(undefined)
    return (
        <div style={{overflow: 'hidden'}}>
            <UserPoem 
                lines={lines}
                setLines={setLines}
            />
            <div className={styles.poem_icons}>
                {
                    allPoemGraphics.map((poemGraphics, index) => {
                        return (
                            <PoemIcon 
                                key={poemGraphics.alt}
                                poem={allPoems[index]}
                                poemGraphics={poemGraphics}
                                isSidebarOpen={isSidebarOpen}
                                setIsSidebarOpen={setIsSidebarOpen}
                                setCurrentPoem={setCurrentPoem}
                                setCurrentPoemGraphics={setCurrentPoemGraphics}
                            />
                        )
                    })
                }
            </div>
            <PoemSidebar 
                poem={currentPoem}
                poemGraphics={currentPoemGraphics}
                isSidebarOpen={isSidebarOpen}
            />
        </div>
    )
}

export default PoemsPage
