import styles from "@/styles/tama-no-kaze/hero.module.scss";

export default function Hero() {
  return (
    <section id="hero" className={styles.hero}>
      {/* スライドショー */}
      <div className={styles.slideshow}>
        <div
          className={styles.bgItem}
          style={{ backgroundImage: "url('/background/2.png')" }}
        />
        <div
          className={styles.bgItem}
          style={{ backgroundImage: "url('/background/1.png')" }}
        />
        <div
          className={styles.bgItem}
          style={{ backgroundImage: "url('/background/3.png')" }}
        />
        <div
          className={styles.bgItem}
          style={{ backgroundImage: "url('/background/4.png')" }}
        />
      </div>
    </section>
  );
}
