import styles from "./Button.module.css";

function Button({ children, primary, outline, circle, ...rest }) {
  return (
    <button
      className={`${styles.button} ${primary ? styles.primary : ""} ${
        outline ? styles.outline : ""} ${circle ? styles.circle : ""}`}
      {...rest}
    >
      {children}
    </button>
  );
}

export default Button;