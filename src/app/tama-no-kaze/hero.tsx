import styles from "@/styles/tama-no-kaze/hero.module.scss";

const basePath = "https://satonari205.github.io/lp-showcase/";

export default function Hero() {
  return (
    <section id="hero" className={styles.hero}>
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
