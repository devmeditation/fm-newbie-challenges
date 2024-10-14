import { HiOutlineShoppingBag } from 'react-icons/hi'
import styles from './productPreviewCard.module.css'

export function ProductPreviewCard() {
  return (
    <section className={styles.productPreviewCard}>
      <div className={styles.productCard}>
        <div className={styles.productImage}>
          <img
            src="/pexels-mh-a-6945831.jpg"
            alt="Foto do perfume Chanel Coco"
          />
        </div>

        <div className={styles.productDetails}>
          <h4 className={styles.productSubTitle}>PERFUME</h4>
          <h1 className={styles.productTitle}>Coco Mademoiselle</h1>

          <p className={styles.productDescription}>
            COCO MADEMOISELLE. Um perfume feminino ambarado surpreendentemente
            fresco e de personalidade inconfundível. Um nome duplo que evoca uma
            personalidade dupla. Uma mulher caprichosa e provocadora,
            independente e encantadora, que se reinventa livremente. COCO
            MADEMOISELLE está disponível como EAU DE PARFUM INTENSE, EAU DE
            PARFUM, EAU DE TOILETTE, EAU POUR LA NUIT, tratamentos para o corpo
            e sprays portáteis.
          </p>

          <div className={styles.productValue}>
            <strong>R$ 795,00</strong> <span>R$ 895,00</span>
          </div>

          <button type="button" className={styles.productButton}>
            <HiOutlineShoppingBag />
            Adicionar à sacola
          </button>
        </div>
      </div>
    </section>
  )
}
