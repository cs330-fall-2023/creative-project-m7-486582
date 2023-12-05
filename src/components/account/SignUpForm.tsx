import React, { FC, useState } from 'react'
import styles from '../../styles/Account.module.css'

const SignUpForm: FC = () => {

    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")

    const handleSubmit = async () => {
        trimFields()
        if (username === "" || password === "" || confirmPassword === "") {
            alert("Please fill out all fields to sign up")
            return
        }

        if (password !== confirmPassword) {
            alert("Passwords do not match")
            return
        }

        let response = await fetch('http://localhost:3001/api/signup', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ username, password })
        })

        let data = await response.json()

        if (!data.ok) {
            alert("Error signing up: " + data.statusText)
            return
        }

        localStorage.setItem("uid", data.user._id.toString())

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

    const changeConfirm = (e: React.ChangeEvent<HTMLInputElement>) => {
        setConfirmPassword(e.target.value)
    }

    return (
        <div className={styles.form}>
            <div className={styles.form_title}>Sign Up</div>
            <div className={styles.form_fields}>
                <input type="text" placeholder="Username" value={username} onChange={changeUsername} />
                <input type="password" placeholder="Password" value={password} onChange={changePassword} />
                <input type="password" placeholder="Confirm Password" value={confirmPassword} onChange={changeConfirm} />
            </div>
            <button onClick={handleSubmit}>Sign Up</button>
        </div>
    )
}

export default SignUpForm