import React, { FC, useEffect } from "react";
import styles from '../../styles/Canvas.module.css'
import Rectangle from "./Rectangle";
import { RectangleType } from "../../utils/types/CanvasTypes";

interface Props {
    rectangles: RectangleType[]
}

const Canvas: FC<Props> = ({
    rectangles
}) => {
    return (
        <div className={styles.canvas}>
            {rectangles.map((rect) => {
                return (
                    <Rectangle
                        key={rect.key}
                        top={rect.top}
                        left={rect.left}
                        width={rect.width}
                        height={rect.height}
                        backgroundUrl={rect.backgroundUrl}
                    />
                )
            })}
        </div>
    )
}

export default Canvas