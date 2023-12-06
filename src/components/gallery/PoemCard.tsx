import React, { FC, useEffect, useState } from 'react'
import styles from '../../styles/GalleryPage.module.css'
import { ObjectId } from 'mongodb'
import { Link } from 'react-router-dom'
import { ChartData } from '../../utils/types/PoemTypes'
import { PieChart } from 'react-minimal-pie-chart'
import { PoemLevels } from '../../utils/types/PoemTypes'
import { textColorToPoem, titleToLabel } from '../../utils/data/text_colors'

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
        for (let level in poemLevels) {
            if (level !== "_id" && level !== "total") {
                let percentage = poemLevels[level as keyof PoemLevels] / poemLevels.total
                data.push({
                    title: titleToLabel[level as keyof typeof titleToLabel] + " - " + (percentage * 100).toFixed(2) + "%",
                    value: poemLevels[level as keyof PoemLevels],
                    color: Object.keys(textColorToPoem).find(key => textColorToPoem[key as keyof typeof textColorToPoem] === level) as string
                })
            }
        }
        setChartData(data)

        return () => {
            setChartData([])
        }

    }, [])

    return (
        <div className={styles.link_container}>
            <Link to={`/view?id=${_id}`} style={{ width: '100%' }}>
                <div className={styles.card_container}>
                    <div className={styles.poem_info}>
                        <div className={styles.title}>{title}</div>
                        <div className={styles.author}>by {author}</div>
                    </div>
                    <div className={styles.pie_container}>
                        <PieChart
                            data={chartData}
                            startAngle={-180}
                            lengthAngle={180}
                            paddingAngle={2}
                            animate={true}
                            style={{
                                width: '70%',
                                cursor: 'default'
                            }}
                            viewBoxSize={[100, 50]}
                        />
                        <div>Poem Content (Hover for poem names)</div>
                    </div>
                </div>
            </Link>
        </div>
    )
}

export default PoemCard