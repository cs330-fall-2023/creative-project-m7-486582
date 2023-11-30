import React, { FC } from 'react'
import styles from '../../styles/GalleryPage.module.css'
import { ObjectId } from 'mongodb'
import { Link } from 'react-router-dom'

interface Props {
    title: string
    author: string
    _id: ObjectId
}

const PoemCard: FC<Props> = ({
    title,
    author,
    _id
}) => {

    return (
        <div className={styles.link_container}>
            <Link to="/view" state={{_id: _id}}>
                <div className={styles.card_container}>
                    <div className={styles.poem_info}>
                        <div className={styles.title}>{title}</div>
                        <div className={styles.author}>{author}</div>
                    </div>
                    <h3>{_id.toString()}</h3>
                </div>
            </Link>
        </div>
    )
}

export default PoemCard