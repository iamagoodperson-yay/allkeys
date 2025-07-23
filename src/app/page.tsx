import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      
        <h1 className={styles.title}>Allkeys (Working Title)</h1>
        <p className={styles.description}>
            Rhythm game but you use your entire keyboard
        </p>

    </div>
  );
}
