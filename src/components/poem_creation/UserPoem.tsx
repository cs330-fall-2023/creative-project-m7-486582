import React, { FC, Dispatch, SetStateAction } from 'react'
import { PoemType } from '../../utils/types/PoemTypes'
import styles from '../../styles/PoemsPage.module.css'
import PlaceholderPoem from './PlaceholderPoem'

interface Props {
    lines: PoemType
    setLines: Dispatch<SetStateAction<PoemType>>
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