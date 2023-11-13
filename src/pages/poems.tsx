import React, { FC, useState } from 'react'
import UserPoem from '../components/poem_creation/UserPoem'
import { Poem } from '../utils/types/Poem'

const PoemsPage: FC = () => {
    const [lines, setLines] = useState<Poem>([])
    return (
        <UserPoem 
            lines={lines}
            setLines={setLines}
        />
    )
}

export default PoemsPage
