import { BsChevronRight } from "react-icons/bs";

import styles from "./baseApparel.module.css";

export function BaseApparel() {
  return (
    <section className={styles.baseApparel}>
      <header className={styles.baseApparelHeader}>
        <span></span>
        <div>
          <strong>BASE</strong>
          <strong>APPAREL</strong>
        </div>
      </header>

      <div className={styles.baseApparelBody}>
        <img
          src="/ws-onboard-02.jpg"
          alt="Navio WS ON Board"
        />

        <div className={styles.baseApparelContent}>
          <div className={styles.baseApparelTitle}>
            <span>WE'RE</span>
            <strong>COMING</strong>
            <strong>SOON</strong>
          </div>

          <p>
            Hello fellow shoppers! We're currently building our new fashion
            store. Add your email below to stay up-to-date with announcents and
            our lounch deals.
          </p>

          <form className={styles.baseApparelForm}>
            <input type="text" placeholder="Email Address" />
            <button>
              <BsChevronRight />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
