import React, { FC, useEffect } from 'react'
import FadeText from '../components/welcome/FadeText'
import { PoemType } from '../utils/types/PoemTypes'
import styles from '../styles/WelcomePage.module.css'
import FadeIn from 'react-fade-in/lib/FadeIn'

import { welcomePoem } from '../utils/data/welcome_poem'
import { useNavigate } from 'react-router-dom'

const WelcomePage: FC = () => {

    const navigate = useNavigate()

    const [visiblePoem, setVisiblePoem] = React.useState<PoemType>([])
    const [currentLine, setCurrentLine] = React.useState<number>(0)

    const goToPoemView = () => {
        navigate("/view")
    }

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
                            onClick={goToPoemView}
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