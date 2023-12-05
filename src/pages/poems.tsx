import React, { FC, useEffect, useState } from 'react'
import UserPoem from '../components/poem_creation/UserPoem'
import { PoemType, PoemGraphicsType, UserPoemType, UserLineType, PoemLevels } from '../utils/types/PoemTypes'
import { allPoems, allPoemGraphics } from '../utils/data/poems_wrapper'
import { textColorToPoem } from '../utils/data/text_colors'
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
import { useLocation } from 'react-router-dom'
import Canvas from '../components/poem_creation/Canvas'
import { RectangleType } from '../utils/types/CanvasTypes'

const PoemsPage: FC = () => {
    const [lines, setLines] = useState<UserPoemType>([])
    const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(false)
    const [currentPoem, setCurrentPoem] = useState<PoemType | undefined>(undefined)
    const [currentPoemGraphics, setCurrentPoemGraphics] = useState<PoemGraphicsType | undefined>(undefined)
    const [title, setTitle] = useState<string>("")
    const [author, setAuthor] = useState<string>("")
    const [nextIsNewStanza, setNextIsNewStanza] = useState<boolean>(false)
    const [currentPoemLevels, setCurrentPoemLevels] = useState({
        heartIcon: 0,
        fireflies: 0,
        neverendingSpring: 0,
        summerNights: 0,
        mirrorMirror: 0,
        lotusEater: 0,
        coldLeaves: 0,
        friendship: 0,
        desire: 0,
        total: 0
    })
    const [rectangles, setRectangles] = useState<RectangleType[]>([])
    const [playHeartIcon, heartIconData] = useSound(heartIconSound)
    const [playFireflies, firefliesData] = useSound(firefliesSound)
    const [playNeverendingSpring, neverendingSpringData] = useSound(neverendingSpringSound)
    const [playSummerNights, summerNightsData] = useSound(summerNightsSound)
    const [playMirrorMirror, mirrorMirrorData] = useSound(mirrorMirrorSound)
    const [playLotusEater, lotusEaterData] = useSound(lotusEaterSound)
    const [playColdLeaves, coldLeavesData] = useSound(coldLeavesSound)
    const [playFriendship, friendshipData] = useSound(friendshipSound)
    const [playDesire, desireData] = useSound(desireSound)
    const location = useLocation()
    const [savePressed, setSavePressed] = useState<boolean>(false)
    const [currentPoemId, setCurrentPoemId] = useState<string>("")

    const addStanza = () => {
        setNextIsNewStanza(true)
    }

    const addLineToLevelsAndPlay = (line: UserLineType) => {
        const poemTitle = textColorToPoem[line.textColor]
        console.log(currentPoemLevels)
        // @ts-ignore
        console.log(currentPoemLevels[poemTitle])
        // @ts-ignore
        if (currentPoemLevels[poemTitle] === 0) {
            console.log("Playing sound")
            playSound(poemTitle)
        }
        setCurrentPoemLevels(prev => {
            return {
                ...prev,
                // @ts-ignore
                [poemTitle]: prev[poemTitle] + 1,
                'total': prev['total'] + 1
            }
        })
    }

    const removeLineFromLevels = (line: UserLineType) => {
        const poemTitle = textColorToPoem[line.textColor]
        setCurrentPoemLevels(prev => {
            return {
                ...prev,
                // @ts-ignore
                [poemTitle]: Math.max(prev[poemTitle] - 1, 0),
                'total': Math.max(prev['total'] - 1, 0)
            }
        })
    }

    const deleteLastLine = () => {
        setLines(prevLines => {
            if (prevLines.length > 0) {
                const userLine = prevLines.pop()
                if (userLine) {
                    removeLineFromLevels(userLine)
                }
                return [...prevLines]
            } else {
                return []
            }
        })
    }



    useEffect(() => {
        let searchParams = new URLSearchParams(location.search)
        let _id = searchParams.get('id')
        if (_id) {

            const getPoemData = async (_id: string) => {
                let response = await fetch(`http://localhost:3001/api/poem?id=${_id}`, {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json'
                    }
                })
                if (!response.ok) {
                    console.error("Error getting poem")
                } else {
                    let data = await response.json()
                    let poem = data[0]
                    setTitle(poem.title)
                    setAuthor(poem.author)
                    setLines(poem.lines)
                    setCurrentPoemLevels(() => {
                        restartSounds(poem.poemLevels)
                        return poem.poemLevels
                    })
                    setRectangles(poem.rectangles)
                }
            }

            getPoemData(_id)
                .catch(err => {
                    console.log(err)
                })
        }



        // @ts-ignore
        const keyDownHandler = (e) => {
            if (e.target.tagName === "INPUT") {
                return
            }
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
            setTitle("")
            setAuthor("")
            setLines([])
        }
    }, [])

    useEffect(() => {
        rebalanceSound()

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [currentPoemLevels])

    const restartSounds = (poemLevels: PoemLevels) => {
        for (const poemTitle in poemLevels) {
            // @ts-ignore
            if (poemLevels[poemTitle] !== 0) {
                playSound(poemTitle)
            }
        }
        rebalanceSound()
    }

    const playSound = (poemTitle: string) => {
        console.log("here")
        switch (poemTitle) {
            case 'heartIcon':
                playHeartIcon()
                break
            case 'fireflies':
                playFireflies()
                break
            case 'neverendingSpring':
                playNeverendingSpring()
                break
            case 'summerNights':
                playSummerNights()
                break
            case 'mirrorMirror':
                playMirrorMirror()
                break
            case 'lotusEater':
                playLotusEater()
                break
            case 'coldLeaves':
                playColdLeaves()
                break
            case 'friendship':
                playFriendship()
                break
            case 'desire':
                playDesire()
                break
            default:
                break
        }
    }

    const rebalanceSound = () => {
        if (heartIconData.sound) {
            if (currentPoemLevels['heartIcon'] === 0) {
                heartIconData.stop()
            } else {
                heartIconData.sound.fade(heartIconData.sound._volume, currentPoemLevels['heartIcon'] / currentPoemLevels['total'], 1000)
            }
        }

        if (firefliesData.sound) {
            if (currentPoemLevels['fireflies'] === 0) {
                firefliesData.stop()
            } else {
                firefliesData.sound.fade(firefliesData.sound._volume, currentPoemLevels['fireflies'] / currentPoemLevels['total'], 1000)
            }
        }

        if (neverendingSpringData.sound) {
            if (currentPoemLevels['neverendingSpring'] === 0) {
                neverendingSpringData.stop()
            } else {
                neverendingSpringData.sound.fade(neverendingSpringData.sound._volume, currentPoemLevels['neverendingSpring'] / currentPoemLevels['total'], 1000)
            }
        }

        if (summerNightsData.sound) {
            if (currentPoemLevels['summerNights'] === 0) {
                summerNightsData.stop()
            } else {
                summerNightsData.sound.fade(summerNightsData.sound._volume, currentPoemLevels['summerNights'] / currentPoemLevels['total'], 1000)
            }
        }

        if (mirrorMirrorData.sound) {
            if (currentPoemLevels['mirrorMirror'] === 0) {
                mirrorMirrorData.stop()
            } else {
                mirrorMirrorData.sound.fade(mirrorMirrorData.sound._volume, currentPoemLevels['mirrorMirror'] / currentPoemLevels['total'], 1000)
            }
        }

        if (lotusEaterData.sound) {
            if (currentPoemLevels['lotusEater'] === 0) {
                firefliesData.stop()
            } else {
                lotusEaterData.sound.fade(lotusEaterData.sound._volume, currentPoemLevels['lotusEater'] / currentPoemLevels['total'], 1000)
            }
        }

        if (coldLeavesData.sound) {
            if (currentPoemLevels['coldLeaves'] === 0) {
                coldLeavesData.stop()
            } else {
                coldLeavesData.sound.fade(coldLeavesData.sound._volume, currentPoemLevels['coldLeaves'] / currentPoemLevels['total'], 1000)
            }
        }

        if (friendshipData.sound) {
            if (currentPoemLevels['friendship'] === 0) {
                friendshipData.stop()
            } else {
                friendshipData.sound.fade(friendshipData.sound._volume, currentPoemLevels['friendship'] / currentPoemLevels['total'], 1000)
            }
        }

        if (desireData.sound) {
            if (currentPoemLevels['desire'] === 0) {
                desireData.stop()
            } else {
                desireData.sound.fade(desireData.sound._volume, currentPoemLevels['desire'] / currentPoemLevels['total'], 1000)
            }
        }
    }

    const sharePoem = async () => {
        const url = `http://localhost:3000/view?id=${currentPoemId}`
        navigator.clipboard.writeText(url)
    }

    const savePoem = async () => {
        let response = await fetch('http://localhost:3001/api/save', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                title: title.length === 0 ? "untitled" : title,
                author: author.length === 0 ? "anonymous" : author,
                lines: lines,
                poemLevels: currentPoemLevels,
                rectangles: rectangles
            })
        })
        if (!response.ok) {
            console.error("Error saving poem")
        } else {
            let data = await response.json()
            setCurrentPoemId(data._id.toString())
            setSavePressed(true)
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
                        removeLineFromLevels={removeLineFromLevels}
                        savePoem={savePoem}
                        setRectangles={setRectangles}
                        savePressed={savePressed}
                        sharePoem={sharePoem}
                    />
            }
            <Canvas
                rectangles={rectangles}
            />
            {
                !savePressed &&
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
            }
            {
                !savePressed &&
                <PoemSidebar
                    poem={currentPoem}
                    poemGraphics={currentPoemGraphics}
                    isSidebarOpen={isSidebarOpen}
                    setLines={setLines}
                    nextIsNewStanza={nextIsNewStanza}
                    setNextIsNewStanza={setNextIsNewStanza}
                    addLineToLevels={addLineToLevelsAndPlay}
                    setRectangles={setRectangles}
                />
            }
        </div>
    )
}

export default PoemsPage
