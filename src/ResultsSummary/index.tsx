import { BiBrain } from 'react-icons/bi'
import { MdBolt, MdOutlineMapsUgc, MdOutlineVisibility } from 'react-icons/md'

import styles from './resultsSummary.module.css'

const DATABASE_CARD = [
  {
    icon: <MdBolt size={20} />,
    backgroundColor: 'rgb(255, 60, 0, 0.1)',
    color: 'rgb(255, 60, 0)',
    title: 'Reaction',
    total: 80,
  },
  {
    icon: <BiBrain size={20} />,
    backgroundColor: 'rgb(253, 153, 2, 0.1)',
    color: 'rgb(253, 153, 2)',
    title: 'Memory',
    total: 92,
  },
  {
    icon: <MdOutlineMapsUgc size={20} />,
    backgroundColor: 'rgb(8, 218, 130, 0.1)',
    color: 'rgb(8, 218, 130)',
    title: 'Verbal',
    total: 61,
  },
  {
    icon: <MdOutlineVisibility size={20} />,
    backgroundColor: 'rgb(0, 0, 255, 0.1)',
    color: 'rgb(0, 0, 255)',
    title: 'Visual',
    total: 72,
  },
]

export function ResultsSummary() {
  return (
    <section className={styles.resultsSummary}>
      <div className={styles.resultContainer}>
        <h1>Your Result</h1>
        <div className={styles.result}>
          <strong>76</strong> of 100
        </div>

        <strong>Great</strong>
        <p>
          You scored higher than 65% od the people who have taken these tests.
        </p>
      </div>

      <div className={styles.cardContainer}>
        <h1>Summary</h1>

        {DATABASE_CARD.map(card => {
          return (
            <div
              key={card.color}
              className={styles.card}
              style={{ background: card.backgroundColor }}
            >
              <div
                className={styles.cardIconAndTitle}
                style={{ color: card.color }}
              >
                {card.icon}
                <strong> {card.title}</strong>
              </div>
              <div>
                <span className={styles.cardResultTotal}>{card.total}</span> /
                100
              </div>
            </div>
          )
        })}

        <button type="button" className={styles.cardButton}>
          Continue
        </button>
      </div>
    </section>
  )
}
