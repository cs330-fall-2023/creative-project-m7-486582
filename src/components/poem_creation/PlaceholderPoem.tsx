import React, { FC } from 'react'
import styles from '../../styles/PoemsPage.module.css'
import classNames from 'classnames'

const PlaceholderPoem: FC = () => {
    let cx = classNames.bind(styles)

    return (
        <div className={styles.poem_container}>
            <div className={cx(styles.poem_line, styles.poem_title)}>untitled</div>
            <div className={styles.poem_line}>by <span style={{color: 'gray'}}>your name</span></div>
            <div className={cx(styles.poem_line, styles.placeholder_line, styles.first_line)}>click through the icons</div>
            <div className={cx(styles.poem_line, styles.placeholder_line)}>to read the poems</div>
            <div className={cx(styles.poem_line, styles.placeholder_line)}>and click the lines</div>
            <div className={cx(styles.poem_line, styles.placeholder_line)}>you want to include</div>
        </div>
    )
}

export default PlaceholderPoem