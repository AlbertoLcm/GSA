import { CaretLeft, CaretRight } from "@phosphor-icons/react";
import Button from "../common/Button";
import Section from "../common/Section";
import stylesSection from "../common/Section.module.css";
import styles from "./SectionComments.module.css";
import CardComment from "./CardComment";
import { comments } from "../../data/comments";

function SectionComments() {
  return (
    <Section>
      <div className={styles.container}>
        <div className={styles.containerTitle}>
          <h2 className={stylesSection.title}>Lo Que Dicen Nuestros Clientes.</h2>
          <div className={styles.containerButtons}>
            <Button circle><CaretLeft size={30} /></Button>
            <Button circle><CaretRight size={30} /></Button>
          </div>
        </div>
        <CardComment comment={comments[0]} />
      </div>
    </Section>
  );
}

export default SectionComments;