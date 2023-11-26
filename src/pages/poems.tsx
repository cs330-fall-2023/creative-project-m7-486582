import React, { FC, useState } from 'react'
import UserPoem from '../components/poem_creation/UserPoem'
import { PoemType, PoemGraphicsType, UserPoemType } from '../utils/types/PoemTypes'
import { allPoems, allPoemGraphics } from '../utils/data/poems_wrapper'
import PoemIcon from '../components/poem_creation/PoemIcon'
import styles from '../styles/PoemsPage.module.css'
import PoemSidebar from '../components/poem_creation/PoemSidebar'
import PlaceholderPoem from '../components/poem_creation/PlaceholderPoem'

const PoemsPage: FC = () => {
    const [lines, setLines] = useState<UserPoemType>([])
    const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(false)
    const [currentPoem, setCurrentPoem] = useState<PoemType | undefined>(undefined)
    const [currentPoemGraphics, setCurrentPoemGraphics] = useState<PoemGraphicsType | undefined>(undefined)
    const [title, setTitle] = useState<string>("")
    const [author, setAuthor] = useState<string>("")

    return (
        <div style={{ overflow: 'hidden' }}>
            {
                lines.length === 0 ?
                    <PlaceholderPoem
                        title={title}
                        setTitle={setTitle}
                        author={author}
                        setAuthor={setAuthor}
                    /> :
                    <UserPoem
                        lines={lines}
                        setLines={setLines}
                        title={title}
                        setTitle={setTitle}
                        author={author}
                        setAuthor={setAuthor}
                    />
            }
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
                setLines={setLines}
            />
        </div>
    )
}

export default PoemsPage
