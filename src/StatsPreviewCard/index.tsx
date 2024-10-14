import styles from './statsPreviewCard.module.css'

export function StatsPreviewCard() {
  return (
    <section className={styles.statsPreviewCard}>
      <div className={styles.container}>
        <div className={styles.image}>
          <span />
          <img
            src="/statsPreviewCard.jpg"
            alt="Grupo de pessoas em uma mesa de reunião"
          />
        </div>

        <div className={styles.description}>
          <div className={styles.text}>
            <h1>
              Obtenha <span> insights </span> que ajudam sua empresa a crescer.
            </h1>

            <p>
              Descubra os benefícios da análise de dados e tome melhores
              decisões em relação à receita, experiência do cliente e eficiência
              geral.
            </p>
          </div>

          <div className={styles.footer}>
            <div className={styles.numbers}>
              <strong>10K+</strong>
              <span>empresas</span>
            </div>

            <div className={styles.numbers}>
              <strong>314</strong>
              <span> modelos</span>
            </div>

            <div className={styles.numbers}>
              <strong>12M+</strong>
              <span>consultas</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
