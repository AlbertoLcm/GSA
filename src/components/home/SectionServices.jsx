import { services } from "../../data/services";
import Section from "../common/Section";
import CardService from "./CardService";
import styles from "./SectionServices.module.css";
import stylesSection from "../common/Section.module.css";

function SectionServices() {
  return (
    <Section>
      <h2 className={stylesSection.title}>Nuestros Servicios.</h2>
      <p className={stylesSection.parragraph}>
        Ofrecemos una amplia gama de servicios tecnológicos para satisfacer
        todas tus necesidades
      </p>

      <div className={styles.containerServices}>
        {services.map((service) => (
          <CardService key={service.id} {...service} />
        ))}
      </div>
    </Section>
  );
}

export default SectionServices;
