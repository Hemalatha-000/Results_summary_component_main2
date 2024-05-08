import React from 'react'
import styles from './score.module.scss'
import { data } from '../../data.js'

export default function ScoreCall() {
  return (
    <div className={styles.mainDiv}>
      <div className={styles.resultDiv}>
        <h1>Your Result</h1>
        <div className={styles.circle}>
          <p className={styles.markDiv}>76</p>
          <span>of 100</span>
        </div>

        <h2>Great</h2>
        <p className={styles.paraDiv}>
          You scored higher than 65% of the people who have taken these tests.
        </p>
      </div>
      <div className={styles.summary}>
        <h2 className={styles.heading}>Summary</h2>
        <ul className={styles.rightList}>
          {data.map((item, index) => (
            <li key={index} className={styles.category} style={{ color: item.color, background: item.background }}>
              <img src={item.icon} alt="icon" className={styles.images} />
              {item.category}
              <div className={styles.scores}>
                <p className={styles.score}>{item.score}</p> <span>&nbsp; / 100</span>
              </div>
            </li>
          ))}
        </ul>
        <button>Continue</button>
      </div>
    </div>
  )
}
