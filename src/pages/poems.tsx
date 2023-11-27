import React, { FC, useEffect, useState } from 'react'
import UserPoem from '../components/poem_creation/UserPoem'
import { PoemType, PoemGraphicsType, UserPoemType } from '../utils/types/PoemTypes'
import { allPoems, allPoemGraphics } from '../utils/data/poems_wrapper'
import PoemIcon from '../components/poem_creation/PoemIcon'
import styles from '../styles/PoemsPage.module.css'
import PoemSidebar from '../components/poem_creation/PoemSidebar'
import PlaceholderPoem from '../components/poem_creation/PlaceholderPoem'
import useSound from 'use-sound'
import heartIconSound from '../sounds/poem-sounds-hearticon2.mp3'
import firefliesSound from '../sounds/poem-sounds-fireflies.mp3'
import neverendingSpringSound from '../sounds/poem-sounds-spring.mp3'
import summerNightsSound from '../sounds/poem-sounds-summernights.mp3'
import mirrorMirrorSound from '../sounds/poem-sounds-mirrormirror.mp3'
import lotusEaterSound from '../sounds/poem-sounds-lotuseater.mp3'
import coldLeavesSound from '../sounds/poem-sounds-coldleaves.mp3'
import friendshipSound from '../sounds/poem-sounds-friendship.mp3'
import desireSound from '../sounds/poem-sounds-desire.mp3'

const PoemsPage: FC = () => {
    const [lines, setLines] = useState<UserPoemType>([])
    const [numLines, setNumLines] = useState<number>(0)
    const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(false)
    const [currentPoem, setCurrentPoem] = useState<PoemType | undefined>(undefined)
    const [currentPoemGraphics, setCurrentPoemGraphics] = useState<PoemGraphicsType | undefined>(undefined)
    const [title, setTitle] = useState<string>("")
    const [author, setAuthor] = useState<string>("")
    const [nextIsNewStanza, setNextIsNewStanza] = useState<boolean>(false)

    const [playHeartIcon, stopHeartIcon] = useSound(heartIconSound)
    const [playFireflies, stopFireflies] = useSound(firefliesSound)
    const [playNeverendingSpring, stopNeverendingSpring] = useSound(neverendingSpringSound)
    const [playSummerNights, stopSummerNights] = useSound(summerNightsSound)
    const [playMirrorMirror, stopMirrorMirror] = useSound(mirrorMirrorSound)
    const [playLotusEater, stopLotusEater] = useSound(lotusEaterSound)
    const [playColdLeaves, stopColdLeaves] = useSound(coldLeavesSound)
    const [playFriendship, stopFriendship] = useSound(friendshipSound)
    const [playDesire, stopDesire] = useSound(desireSound)

    const addStanza = () => {
        console.log("adding")
        setNextIsNewStanza(true)
    }

    const deleteLastLine = () => {
        setLines(prevLines => {
            if (prevLines.length > 0) {
                prevLines.pop()
                return [...prevLines]
            } else {
                return []
            }
        })
    }

    useEffect(() => {
        // @ts-ignore
        const keyDownHandler = (e) => {
            if (e.key === 'Enter') {
                e.preventDefault()
                addStanza()
            }
            if (e.key === 'Backspace') {
                e.preventDefault()
                deleteLastLine()
            }
        }

        document.addEventListener('keydown', keyDownHandler)


        return () => {
            document.removeEventListener('keydown', keyDownHandler)
        }
    }, [])

    useEffect(() => {
        if (lines.length > numLines) {
            const lastLine = lines[lines.length - 1]
            const lastTextColor = lastLine.textColor
            startPlaying(lastTextColor)
        }
        setNumLines(lines.length)
    }, [lines])

    const startPlaying = (textColor: string) => {
        switch(textColor) {
            case allPoemGraphics[0].textColor:
                playHeartIcon()
                break
            case allPoemGraphics[1].textColor:
                playFireflies()
                break
            case allPoemGraphics[2].textColor:
                playNeverendingSpring()
                break
            case allPoemGraphics[3].textColor:
                playSummerNights()
                break
            case allPoemGraphics[4].textColor:
                playMirrorMirror()
                break
            case allPoemGraphics[5].textColor:
                playLotusEater()
                break
            case allPoemGraphics[6].textColor:
                playColdLeaves()
                break
            case allPoemGraphics[7].textColor:
                playFriendship()
                break
            case allPoemGraphics[8].textColor:
                playDesire()
                break
            default:
                break
        }
    }

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
                        nextIsNewStanza={nextIsNewStanza}
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
                                currentPoem={currentPoem}
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
                nextIsNewStanza={nextIsNewStanza}
                setNextIsNewStanza={setNextIsNewStanza}
            />
        </div>
    )
}

export default PoemsPage
