import Button from "../common/Button";
import SvgGsaComplete from "../../assets/gsa_complete.svg";
import styles from "./SectionHero.module.css";
import heroVideo from "../../assets/videos/hero-video.mp4";

function SectionHero() {
  return (
    <section className={styles.hero}>
      <div className={styles.background}>
        <video src={heroVideo} autoPlay muted loop className={styles.backgroundVideo} />
      </div>
      <div className={styles.container}>
        <img src={SvgGsaComplete} alt="Logo GSA" className={styles.logo} />

        <h1 className={styles.title}>
          Soluciones Tecnológicas Innovadoras para empresas, negocios y personas
        </h1>
        <Button primary>Contáctanos Hoy</Button>
      </div>
    </section>
  );
}

export default SectionHero;
