import { BsChevronRight } from 'react-icons/bs'

import styles from './shipWSOnBoard.module.css'

export function ShipWSOnBoard() {
  return (
    <section className={styles.shipWSOnBoard}>
      <section className={styles.shipWSOnBoardWS}>
        <header className={styles.shipWSOnBoardHeader}>
          <span />
          <div>
            <strong>WESLEY</strong>
            <strong>SAFADÃO</strong>
          </div>
        </header>

        <div className={styles.shipWSOnBoardBody}>
          <img src="/ws-onboard-02.jpg" alt="Navio WS ON Board" />

          <div className={styles.shipWSOnBoardContent}>
            <div className={styles.shipWSOnBoardTitle}>
              <span>NAVIO WS </span>
              <strong>ON</strong>
              <strong>Board</strong>
            </div>

            <p>
              De 10 a 13 de julho de 2023 navegaremos até a ilha do Safadão nas
              Bahamas, uma ilha paradisíaca no caribe, totalmente exclusiva e
              somente nossa. Esse momento será registrado para sempre com a
              gravação do novo DVD do Safadão. A bordo de um dos mais completos
              e luxuosos navios do mundo, o MSC Seaside. O cantor Wesley Safadão
              e seus convidados esperam por você para essa festa, garanta agora
              mesmo a sua cabine.
            </p>

            <form className={styles.shipWSOnBoardForm}>
              <input type="text" placeholder="Email Address" />
              <button type="button">
                <BsChevronRight />
              </button>
            </form>
          </div>
        </div>
      </section>
    </section>
  )
}
