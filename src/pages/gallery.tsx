import React, { FC, useEffect, useState } from 'react'
import { GalleryPoemType } from '../utils/types/PoemTypes'
import PoemCard from '../components/gallery/PoemCard'
import styles from '../styles/GalleryPage.module.css'

const GalleryPage: FC = () => {

    const [allPoems, setAllPoems] = useState<GalleryPoemType[]>([]) 

    const getPoems = async () => {
        let response = await fetch('http://localhost:3001/api/poems')
        let data = await response.json()
        setAllPoems(data)
    }

    useEffect(() => {
        getPoems()
    }, [])

    return (
        <div className={styles.page}>
            <h1 className={styles.page_title}>Gallery</h1>
            {allPoems.map(poem => {
                return (
                    <PoemCard 
                        title={poem.title}
                        author={poem.author}
                        _id={poem._id}
                        key={poem._id.toString()}
                    />
                )
            })}
        </div>
    )
}

export default GalleryPage