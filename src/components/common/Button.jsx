import styles from "./Button.module.css";

function Button({ children, primary, outline, ...rest }) {
  return (
    <button
      className={`${styles.button} ${primary ? styles.primary : ""} ${
        outline ? styles.outline : ""
      }`}
      {...rest}
    >
      {children}
    </button>
  );
}

export default Button;