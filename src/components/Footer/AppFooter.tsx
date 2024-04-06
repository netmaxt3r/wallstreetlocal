import styles from "./AppFooter.module.css";
import Link from "next/link";
import { font, fontLight } from "@/fonts";

export default function AppFooter() {
  return (
    <div className={styles.footer}>
      <div className={styles.logo}>
        <Link href="/public">
          <span
            className={styles.logoText + " " + font.className}
            id={styles.whale}
          >
            <i>wallstreet</i>
          </span>
          <span
            className={styles.logoText + " " + font.className}
            id={styles.market}
          >
            {" "}
            local
          </span>
        </Link>
      </div>
      <Link
        href="https://ko-fi.com/wallstreetlocal"
        target="_blank"
        className={[styles.donation, fontLight.className].join(" ")}
      >
        <span>
          wallstreetlocal is free and open-source, please consider donating.
        </span>
      </Link>
    </div>
  );
}
