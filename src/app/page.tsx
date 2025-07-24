import styles from "./page.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <div className={styles.page}>
        <Link href="/game">Game ahh game</Link>
    </div>
  );
}
