import {
  LightbulbFilament,
  Medal,
  SealCheck,
  UserCheck,
} from "@phosphor-icons/react";
import Section from "../common/Section";
import stylesSection from "../common/Section.module.css";
import styles from "./SectionWhy.module.css";

function SectionWhy() {
  return (
    <Section>
      <h2 className={stylesSection.title}>¿Por qué elegirnos?</h2>

      <div className={styles.containerItems}>
        <div className={`${styles.item} ${styles.itemLeft}`}>
          <div>
            <h3>Calidad <br /> Garantizada</h3>
            <p>
              Nos comprometemos a entregar productos calidad que superen
              tus expectativas. Cada proyecto es sometido a rigurosos controles
              de calidad para asegurar su funcionalidad.
            </p>
          </div>
          <div className={styles.icon}>
            <Medal size={50} weight="fill" />
          </div>
        </div>

        <div className={styles.item}>
          <div>
            <h3>Innovación <br /> Constante</h3>
            <p>
              Nos mantenemos a la vanguardia de las últimas tendencias y
              tecnologías para proporcionar soluciones modernas y efectivas que
              impulsen tu negocio hacia el futuro.
            </p>
          </div>
          <div className={styles.icon}>
            <LightbulbFilament size={50} weight="fill" />
          </div>
        </div>

        <div className={`${styles.item} ${styles.itemLeft}`}>
          <div>
            <h3>Atención <br /> Personalizada</h3>
            <p>
              Valoramos la relación con nuestros clientes y proporcionamos un
              servicio personalizado, asegurándonos de entender y cumplir tus
              objetivos y requerimientos.
            </p>
          </div>
          <div className={styles.icon}>
            <UserCheck size={50} weight="fill" />
          </div>
        </div>

        <div className={styles.item}>
          <div>
            <h3>Resultados <br /> Comprobados</h3>
            <p>
              Nuestros clientes nos respaldan. Hemos ayudado a empresas y
              negocios a transformar su presencia digital y alcanzar nuevas
              alturas de éxito.
            </p>
          </div>
          <div className={styles.icon}>
            <SealCheck size={50} weight="fill" />
          </div>
        </div>
      </div>
    </Section>
  );
}

export default SectionWhy;
