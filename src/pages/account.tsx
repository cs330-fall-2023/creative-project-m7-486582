import React, { FC, useEffect, useState } from 'react'


const AccountPage = () => {
    const [isAuthenticated, setIsAuthenticated] = useState(false)

    useEffect(() => {
        let hashedPassword = localStorage.getItem("hashedPassword")
        let uid = localStorage.getItem("uid")
        if (hashedPassword && uid) {
            setIsAuthenticated(true)
        } else {
            setIsAuthenticated(false)
        }
    }, [])

    return (
        <div>
            <h1>Account Page</h1>
        </div>
    )
}

export default AccountPage
