import Button from "../common/Button";
import styles from "./CardService.module.css";

function CardService({ title, description, icon }) {
  return (
    <div className={styles.card}>
      <img src={icon} alt={title} className={styles.icon} />
      <h3 className={styles.title}>{title}</h3>

      <div className={styles.contentParragraph}>
        <p className={styles.parragraph}>{description}</p>
        <Button primary>Ver más</Button>
      </div>
    </div>
  );
}

export default CardService;
