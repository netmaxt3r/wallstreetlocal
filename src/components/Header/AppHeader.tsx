import styles from "./AppHeader.module.css";
import Link from "next/link";
import { font } from "@/fonts";
import { server } from "@/constants";

export default function AppHeader() {
  return <>
    <nav className={styles.nav}>
      <div className={styles.logo}>
        <div className={styles.logoTitle}>
          <Link href="/">
              <span className={styles.logoText + " " + font.className} id={styles.whale}>
                <i>wallstreet</i>
              </span>
            <span className={styles.logoText + " " + font.className} id={styles.market}>
                {" "} local
            </span>
          </Link>
        </div>
        {/*{variant === "home" ? null : <Search />}*/}
      </div>
      <div className={styles.links}>
        <ul className={styles.linksList}>
          <Item link="/recommended/top" text="Top Filers" />
          <Item link="/recommended/searched" text="Popular Filers" />
          <Item link="/about/resources" text="Resources" />
          <Item link={server + "/docs"} text="API" tab={true} />
          <Item link="https://github.com/leftmove" text="Contact" tab={true} />
          <Item link="https://ko-fi.com/wallstreetlocal" text="Donate" tab={true} />
          <Item link="https://github.com/leftmove/wallstreetlocal" text="Source" tab={true} />
        </ul>
      </div>
    </nav>
  </>;
}

function Item({ link, text, tab }: { link: string; text: string, tab?: boolean }) {
  return <li className={styles.item + " " + font.className}>
    <Link href={link} target={tab ? "_blank" : undefined}>
      {text}
    </Link>
  </li>;
}
