import { apiFake } from "./apiFake";
import { Button } from "./Button";
import styles from "./SkilledELearning.module.css";

export function SkilledELearning() {
  return (
    <section className={styles.skilledELearning}>
      <header className={styles.header}>
        <span>skilled</span>
        <Button stylesOption={styles.header}>Get Started</Button>
      </header>

      <div className={styles.intro}>
        <div className={styles.introContent}>
          <h1>Maximize skill, minimize budget</h1>

          <p>
            Our modern courses across a range of indemand skills will give you
            the knowledge you need to live the life you want.
          </p>

          <Button stylesOption={styles.introContent}>Get Started</Button>
        </div>

        <div className={styles.introDetails}>
          <div className={styles.introDetailsCard}>
            <p>Members</p>
            <strong>29k</strong>
          </div>

          <img src="/002-project_avatar.jpg" alt="" />

          <div className={styles.introDetailsCard}>
            <p>Course hours</p>
            <strong>1,451</strong>
          </div>
        </div>
      </div>

      <div className={styles.cards}>
        <div className={`${styles.card} ${styles.cardIntro}`}>
          Check out our most popular caurses!
        </div>

        {apiFake.map((item) => {
          return (
            <div key={item.title} className={styles.card}>
              <span>{item.icon}</span>
              <h3>{item.title}</h3>
              <p>
                {item.description}
              </p>

              <Button stylesOption={styles.cardButton}>Get Started</Button>
            </div>
          );
        })}
      </div>

      <footer className={styles.footer}>
        <span>skilled</span>
        <Button stylesOption={styles.footerBbutton}>Get Started</Button>
      </footer>
    </section>
  );
}
