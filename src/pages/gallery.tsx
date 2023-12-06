import React, { FC, useEffect, useState } from 'react'
import { GalleryPoemType } from '../utils/types/PoemTypes'
import PoemCard from '../components/gallery/PoemCard'
import styles from '../styles/GalleryPage.module.css'
import { UserType } from '../utils/types/UserTypes'

interface Props {
    user: UserType | null
}

const GalleryPage: FC<Props> = ({
    user
}) => {

    const [allPoems, setAllPoems] = useState<GalleryPoemType[]>([])
    const [shownPoems, setShownPoems] = useState<GalleryPoemType[]>(allPoems)

    const getPoems = async () => {
        let response = await fetch('http://localhost:3001/api/poems', {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            }
        })
        let data = await response.json()
        setAllPoems(data)
    }

    useEffect(() => {
        getPoems()

        return () => {
            setAllPoems([])
        }
    }, [])

    return (
        <div className={styles.page}>
            <h1 className={styles.page_title}>Gallery</h1>
            {allPoems.map(poem => {
                return (
                    <PoemCard
                        key={poem._id.toString()}
                        title={poem.title}
                        author={poem.author}
                        _id={poem._id}
                        poemLevels={poem.poemLevels}
                    />
                )
            })}
        </div>
    )
}

export default GalleryPage