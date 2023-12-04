import React, { FC, useEffect, useState } from 'react'
import styles from '../../styles/GalleryPage.module.css'
import { ObjectId } from 'mongodb'
import { Link } from 'react-router-dom'
import { ChartData } from '../../utils/types/PoemTypes'
import { PieChart } from 'react-minimal-pie-chart'
import { PoemLevels } from '../../utils/types/PoemTypes'
import { textColorToPoem } from '../../utils/data/text_colors'

interface Props {
    title: string
    author: string
    _id: ObjectId
    poemLevels: PoemLevels
}

const PoemCard: FC<Props> = ({
    title,
    author,
    _id,
    poemLevels
}) => {

    const [chartData, setChartData] = useState<ChartData>([])

    useEffect(() => {
        let data = []
        let i = 0
        for (let level in poemLevels) {
            if (level != "_id" && level != "total") {
                data.push({
                    title: level,
                    value: poemLevels[level as keyof PoemLevels],
                    color: Object.keys(textColorToPoem).find(key => textColorToPoem[key as keyof typeof textColorToPoem] === level) as string
                })
            }
            ++i
        }
        setChartData(data)

        return () => {
            setChartData([])
        }
    }, [])

    return (
        <div className={styles.link_container}>
            <Link to={`/view?id=${_id}`}>
                <div className={styles.card_container}>
                    <div className={styles.poem_info}>
                        <div className={styles.title}>{title}</div>
                        <div className={styles.author}>{author}</div>
                    </div>
                    <h3>{_id.toString()}</h3>
                    <PieChart 
                        data={chartData}
                    />
                </div>
            </Link>
        </div>
    )
}

export default PoemCard