import React, { FC, useState } from 'react'
import UserPoem from '../components/poem_creation/UserPoem'
import { Poem } from '../utils/types/Poem'
import { allPoems, allPoemGraphics } from '../utils/data/poems_wrapper'
import PoemIcon from '../components/poem_creation/PoemIcon'

const PoemsPage: FC = () => {
    const [lines, setLines] = useState<Poem>([])
    return (
        <>
            <UserPoem 
                lines={lines}
                setLines={setLines}
            />
            <div style={{position: 'absolute', top: '16px', right: '16px', width: '50px', height: '50px'}}>
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
