import React, { FC, useEffect, useState } from 'react'

import AuthModal from '../components/account/AuthModal'

const AccountPage: FC = () => {
    const [isAuthenticated, setIsAuthenticated] = useState(false)

    useEffect(() => {
        let uid = localStorage.getItem("uid")
        if (uid) {
            setIsAuthenticated(true)
        } else {
            setIsAuthenticated(false)
        }

    }, [])

    return (
        <div>
            <AuthModal />
        </div>
    )
}

export default AccountPage
