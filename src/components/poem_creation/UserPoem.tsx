import React, { FC, Dispatch, SetStateAction } from 'react'
import { Poem } from '../../utils/types/Poem'
import styles from '../../styles/PoemsPage.module.css'
import PlaceholderPoem from './PlaceholderPoem'

interface Props {
    lines: Poem
    setLines: Dispatch<SetStateAction<Poem>>
}

const UserPoem: FC<Props> = ({
    lines,
    setLines
}) => {
    return (

        <div>
            {
                lines.length === 0 ?
                <PlaceholderPoem /> :
                lines.map((line) => {
                    return <div>{line.text}</div>
                })
            }
        </div>
    )
}

export default UserPoem