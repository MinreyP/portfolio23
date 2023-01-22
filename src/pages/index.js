import Head from "next/head"
import styles from "../styles/Index.module.css"

export default function Home() {
  return (
    <>
      <div className={styles.cover}></div>
      <div className={styles.marquee}>
        <div className={styles.marquee_content}>
          MINIMALIST <span className={styles.decoDot}></span> WEB DEVELOPER <span className={styles.decoDot}></span> VISUAL DESIGNER<span className={styles.decoDot}></span>
        </div>
        <div className={styles.marquee_content}>
          MINIMALIST <span className={styles.decoDot}></span> WEB DEVELOPER <span className={styles.decoDot}></span> VISUAL DESIGNER<span className={styles.decoDot}></span>
        </div>
      </div>
    </>
  )
}
