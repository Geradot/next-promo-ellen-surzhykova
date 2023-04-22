import styles from "./Loader.module.scss";

export default function Loader() {
  return (
    <div className={styles.loader}>
      <div className={styles[`loader-inner`]}></div>
    </div>
  );
}
