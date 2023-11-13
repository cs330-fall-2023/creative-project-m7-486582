import React, { FC, useEffect, Dispatch, SetStateAction } from 'react'
import FadeText from '../components/welcome/FadeText'
import { Poem } from '../utils/types/Poem'
import styles from '../styles/WelcomePage.module.css'
import FadeIn from 'react-fade-in/lib/FadeIn'

import { welcomePoem } from '../utils/data/welcome_poem'

interface Props {
    setCurrentPage: Dispatch<SetStateAction<number>>
}

const WelcomePage: FC<Props> = ({ setCurrentPage }) => {

    const [visiblePoem, setVisiblePoem] = React.useState<Poem>([])
    const [currentLine, setCurrentLine] = React.useState<number>(0)

    useEffect(() => {
        if (currentLine < welcomePoem.length) {
            setTimeout(() => {
                setVisiblePoem(prevPoem => [...prevPoem, welcomePoem[currentLine]])
                setCurrentLine(prevLine => prevLine + 1)
            }, 1000)
        }
    }, [currentLine, visiblePoem])

    return (
        <FadeIn className={styles.poem_container}>
            {visiblePoem.map((line, index) => {
                if (index === welcomePoem.length - 1) {
                    return (
                        <FadeText 
                            key={line.text}
                            text={line.text}
                            isTitle={line.isTitle}
                            isLink={line.isLink}
                            isNewStanza={line.isNewStanza}
                            isFirstLine={line.isFirstLine}
                            onClick = {() => setCurrentPage(prevPage => prevPage + 1)}
                        />
                    )
                }
                return (
                    <FadeText 
                        key={line.text}
                        text={line.text}
                        isTitle={line.isTitle}
                        isLink={line.isLink}
                        isNewStanza={line.isNewStanza}
                        isFirstLine={line.isFirstLine}
                    />
                )
            })}
        </FadeIn>
    )
}

export default WelcomePage