import React, { FC, useState } from 'react'
import styles from '../../styles/Account.module.css'

const LogInForm: FC = () => {

    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")

    const handleSubmit = async () => {
        trimFields()
        if (username === "" || password === "") {
            alert("Please fill out all fields to log in")
            return
        }

        let response = await fetch('http://localhost:3001/api/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ username, password })
        })

        let data = await response.json()

        if (!data.ok) {
            alert("Error logging in: " + data.statusText)
            return
        }

        let uid = data.user[0]._id
        localStorage.setItem("uid", uid.toString())
    }

    const trimFields = () => {
        setUsername(username.trim())
        setPassword(password.trim())
    }

    const changeUsername = (e: React.ChangeEvent<HTMLInputElement>) => {
        setUsername(e.target.value)
    }

    const changePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(e.target.value)
    }

    return (
        <div className={styles.form}>
            <div className={styles.form_title}>Log In</div>
            <div className={styles.form_fields}>
                <input type="text" placeholder="Username" value={username} onChange={changeUsername} />
                <input type="password" placeholder="Password" value={password} onChange={changePassword} />
            </div>
            <button onClick={handleSubmit}>Log In</button>
        </div>
    )
}

export default LogInForm