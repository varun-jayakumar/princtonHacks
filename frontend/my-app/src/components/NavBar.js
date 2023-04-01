import styles from "./NavBar.module.css";

export default function NavBar() {
  return (
    <body className={styles.body}>
      <ul className={styles.ul}>
        <h1 className={`${styles.mainHeading}`}>
          Dummy Baba - you personalized mentor
        </h1>
      </ul>
    </body>
  );
}
