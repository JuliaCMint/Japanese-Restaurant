import styles from "./PromoText.module.css";

const PromoText = () => {
  return (
    <section className={styles["promo-text"]}>
      <h2>Online Japanese Restaurant</h2>
      <p>
        Enjoy delicious Japanese cuisine carefully prepared with fresh
        ingredients and love!
      </p>
    </section>
  );
};

export default PromoText;
