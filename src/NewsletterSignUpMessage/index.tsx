import styles from "./newsLetterSingUpMessage.module.css";

export function NewsLetterSingUpMessage() {
  return (
    <>
      <section className={styles.main}>
        <div className={styles.container}>
          <div className={styles.containerLeft}>
            <h1>Stay updated!</h1>

            <p>Join 60.000+ product managers receiving monthly updates on:</p>

            <ul>
              <li>Product discovery and building what matters</li>
              <li>Measuring to ensure updates are a success</li>
              <li>And much more!</li>
            </ul>

            <form>
              <label htmlFor="email">Email Address</label>
              <input
                type="email"
                name="email"
                id="email"
                required
                formNoValidate
                placeholder="email@company.com"
              />

              <button type="submit">Subscribe to monthyly newsletter</button>
            </form>
          </div>
          <div className="containerRigth">
            <h1>imagem de um formulário aqui</h1>
            <img src="" alt="" />
          </div>
        </div>
      </section>
    </>
  );
}
