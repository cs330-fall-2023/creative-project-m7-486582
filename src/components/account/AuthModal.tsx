import React, { Dispatch, FC, SetStateAction } from 'react'
import styles from '../../styles/Account.module.css'
import LogInForm from './LogInForm'
import SignUpForm from './SignUpForm'
import { UserType } from '../../utils/types/UserTypes'

interface Props {
    setUser: Dispatch<SetStateAction<UserType | null>>
}

const AuthModal: FC<Props> = ({
    setUser
}) => {
    return (
        <div className={styles.overlay}>
            <h1 className={styles.modal}>
                <LogInForm
                    setUser={setUser}
                />
                <div className={styles.vertical_line}></div>
                <SignUpForm
                    setUser={setUser}
                />
            </h1>
        </div>
    )
}

export default AuthModal