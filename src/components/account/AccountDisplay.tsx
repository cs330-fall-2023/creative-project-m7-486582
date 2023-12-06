import React, { Dispatch, FC, SetStateAction, useEffect, useState } from 'react'
import { UserType } from '../../utils/types/UserTypes'
import { GalleryPoemType } from '../../utils/types/PoemTypes'
import PoemCard from '../gallery/PoemCard'
import styles from '../../styles/Account.module.css'
import { useNavigate } from 'react-router-dom'
import logoutIcon from '../../images/bwIcons/logout.png'
import pencilIcon from '../../images/bwIcons/pencil.png'

interface Props {
    user: UserType
    setUser: Dispatch<SetStateAction<UserType | null>>
}

const AccountDisplay: FC<Props> = ({
    user,
    setUser
}) => {

    const [poems, setPoems] = useState<GalleryPoemType[]>([])
    const nav = useNavigate()

    const getPoems = () => {
        fetch('http://localhost:3001/api/poems', {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ poemIds: user.poemIds })
        })
            .then(res => res.json())
            .then(data => setPoems(data))
            .catch(err => console.log(err))
    }

    useEffect(() => {
        getPoems()
    }, [])

    const goToPoemCreation = () => {
        nav("/view")
    }

    const logOut = () => {
        localStorage.removeItem("uid")
        setUser(null)
    }

    return (
        <div className={styles.page}>
            <div className={styles.account_title}>Username: <span className={styles.username}>{user.username}</span></div>
            <div className={styles.action_buttons}>
                <div className={styles.action_container}>
                    <img src={pencilIcon} className={styles.action_button} onClick={goToPoemCreation} />
                    <span className={styles.action_button_text} onClick={goToPoemCreation}>Create</span>
                </div>
                <div className={styles.action_container}>
                    <img src={logoutIcon} className={styles.action_button} onClick={logOut} />
                    <span className={styles.action_button_text} onClick={logOut}>Log Out</span>
                </div>
            </div>
            <div className={styles.poem_list_title}>Your Poems</div>
            {
                poems.length > 0 ?
                    poems.map(poem => {
                        return <PoemCard
                            key={poem._id.toString()}
                            title={poem.title}
                            author={poem.author}
                            _id={poem._id}
                            poemLevels={poem.poemLevels}
                        />
                    })
                    :
                    <div>Oops, you don't have any poems. <span className={styles.create_text} onClick={goToPoemCreation}>Create some now!</span></div>
            }
        </div>
    )
}

export default AccountDisplay