import styles from "./profileCard.module.css";

export function ProfileCard() {
  return (
    <main className={styles.container}>
      <section>
        <header className={styles.header}>
          <img src="/michelle.jpg" alt="Michelle" />
        </header>

        <div>
          <div className={styles.content}>
            <span>
              <strong>Michelle Shanwiont </strong> 31
            </span>
            Lodon
          </div>

          <footer className={styles.footer}>
            <span>
              <strong>80K</strong>
              Followers
            </span>

            <span>
              <strong>803K</strong>
              Likes
            </span>

            <span>
              <strong>1.4K</strong>
              Photos
            </span>
          </footer>
        </div>
      </section>
    </main>
  );
}
