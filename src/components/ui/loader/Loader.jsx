import styles from './Loader.module.scss';

export default function Loader() {
  return (
    <>
    {console.log("Loader is active")}
    <div className={styles.loader}>
      <div className={styles[`loader-inner`]}></div>
    </div>
    </>
  );
}
