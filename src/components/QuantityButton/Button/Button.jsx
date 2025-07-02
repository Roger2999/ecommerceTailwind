import styles from "./Button.module.css";

export const Button = ({ handleClick, label, variant }) => {
  return (
    <button
      className={[
        styles.base,
        variant === "incard" ? styles["btn-card-in"] : "",
        variant === "outcard" ? styles["btn-card-out"] : "",
        variant === "quantity" ? styles["btn-quantity"] : "",
      ].join(" ")}
      type="button"
      onClick={handleClick}
    >
      {label}
    </button>
  );
};
