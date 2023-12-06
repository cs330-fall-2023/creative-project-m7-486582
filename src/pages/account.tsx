import React, { Dispatch, FC, SetStateAction } from 'react'

import AuthModal from '../components/account/AuthModal'
import AccountDisplay from '../components/account/AccountDisplay'
import { UserType } from '../utils/types/UserTypes'

interface Props {
    user: UserType | null
    setUser: Dispatch<SetStateAction<UserType | null>>
}

const AccountPage: FC<Props> = ({
    user,
    setUser
}) => {


    return (
        <div>
            {
                !user ?
                    <AuthModal
                        setUser={setUser}
                    />
                    :
                    <AccountDisplay
                        user={user}
                        setUser={setUser}
                    />
            }
        </div>
    )
}

export default AccountPage
