import { FaFacebookSquare, FaInstagram, FaTwitter } from 'react-icons/fa'
import { cardTexts } from './api'
import styles from './workitLandingPage.module.css'

export function WorkitLandingPage() {
  return (
    <main>
      <section className={styles.container}>
        <header className={styles.header}>
          <div className={styles.title}>
            <strong>WORK</strong>
            <span>it</span>
          </div>

          <a
            href="http://github.com/devmeditation"
            target="_blank"
            rel="noopener noreferrer"
          >
            Apply for access
          </a>
        </header>

        <div className={styles.intro}>
          <h1>
            Data <span>tailored</span> to your needs.
          </h1>

          <button type="button">Learn More</button>

          <img src="/smartphone.webp" alt="foto de um smartphone" />
        </div>

        <div className={styles.cards}>
          {cardTexts.map(cardText => {
            return (
              <div key={cardText.id} className={styles.card}>
                <span>{cardText.id}</span>
                <div>
                  <h2>{cardText.title}</h2>
                  <p>{cardText.description}</p>
                </div>
              </div>
            )
          })}
        </div>

        <div className={styles.user}>
          <img src="/nikizinha.jpg" alt="foto da Nikizinha" />

          <div className={styles.content}>
            <h2>Be the fist to test</h2>
            <p>
              Hi, I'm Niki Meditation, the founder of the company. Book a demo
              call with me to become a beta tester for your app and kickstart
              your company. Apply for access below and I'll be in touch to
              schedule a call.
            </p>

            <button type="button">Apply fo access</button>
          </div>
        </div>

        <footer>
          <div className={styles.title}>
            <strong>WORK</strong>
            <span>it</span>
          </div>

          <div className={styles.socialMedia}>
            <FaFacebookSquare />
            <FaTwitter />
            <FaInstagram />
          </div>
        </footer>
      </section>
    </main>
  )
}
