import React, { FC } from 'react'
import styles from '../../styles/Account.module.css'
import LogInForm from './LogInForm'
import SignUpForm from './SignUpForm'

const AuthModal: FC = () => {
    return (
        <div className={styles.overlay}>
            <h1 className={styles.modal}>
                <LogInForm />
                <div className={styles.vertical_line}></div>
                <SignUpForm />
            </h1>
        </div>
    )
}

export default AuthModal