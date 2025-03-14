import styles from "@/styles/tama-no-kaze/hero.module.scss";
import page from "@/styles/tama-no-kaze/page.module.scss";

const basePath = "https://satonari205.github.io/lp-showcase/";

export default function Hero() {
  return (
    <section id="hero" className={`${styles.hero} ${page.wrapper}`}>
      {/* コピー */}
      <h1 className={styles.title}>自然が育んだ、多摩の旨さを全国へ</h1>

      {/* スライドショー */}
      <div className={styles.slideshow}>
        <div
          className={styles.bgItem}
          style={{ backgroundImage: `url('${basePath}background/2.png')` }}
        />
        <div
          className={styles.bgItem}
          style={{ backgroundImage: `url('${basePath}background/1.png')` }}
        />
        <div
          className={styles.bgItem}
          style={{ backgroundImage: `url('${basePath}background/3.png')` }}
        />
        <div
          className={styles.bgItem}
          style={{ backgroundImage: `url('${basePath}background/4.png')` }}
        />
      </div>
    </section>
  );
}
