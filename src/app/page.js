import Image from "next/image";
import styles from "./page.module.css";
import Counter from "@/components/Counter";

export default function Home() {
  return (
    <main>
      <div className={styles.main}>
        <Counter />
      </div>
    </main>
  );
}
