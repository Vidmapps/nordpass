import PromoImage from "../../assets/PromoImage.svg";
import styles from "./Promo.module.scss";

const Promo = () => {
  return (
    <div className={styles.promo}>
      <div className={styles.leftSide}>
        <h1 className={styles.promoText}>Get your passwords organized </h1>
        <div className={`${styles.promoBtn} primaryColorBackground pointer`}>
          <a
            href="https://panel.nordpass.com/login"
            rel="noopener noreferrer"
            target="_blank"
          >
            <div>Get started</div>
          </a>
        </div>
      </div>
      <img className={styles.rightSide} src={PromoImage} alt="Promo" />
    </div>
  );
};

export default Promo;
