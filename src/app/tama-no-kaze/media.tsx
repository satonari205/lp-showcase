import Image from "next/image";
import Link from "next/link";
import { env } from "@/lib/env";
import styles from "@/styles/tama-no-kaze/media.module.scss";
import common from "@/styles/tama-no-kaze/page.module.scss";
import Arrow from "./arrow";

export default function Media() {
  return (
    <>
      <h2 className={common.sectionTitle}>ブログ</h2>
      <section id="media" className={styles.media}>
        <div className={styles.blogs}>
          <Link href="/" className={styles.blog}>
            <Image
              className={styles.image}
              src={`${env.basePath}/blog1.jpg`}
              alt="ブログ"
              width={1}
              height={1}
            />
            <span className={styles.title}>
              <span className={styles.titleTop}>
                <span>2099.01.01</span>
                <span className={styles.genre}>動画</span>
              </span>
              <span>酒造紹介動画</span>
            </span>
          </Link>
          <Link href="/" className={styles.blog}>
            <div className={styles.imageWrapper}>
              <Image
                className={styles.image}
                src={`${env.basePath}/blog2.jpg`}
                alt="ブログ"
                width={1}
                height={1}
              />
            </div>
            <span className={styles.title}>
              <span className={styles.titleTop}>
                <span>2099.01.01</span>
                <span className={styles.genre}>動画</span>
              </span>
              <span>新商品発売</span>
            </span>
          </Link>
          <Link href="/" className={styles.blog}>
            <Image
              className={styles.image}
              src={`${env.basePath}/blog3.jpg`}
              alt="ブログ"
              width={1}
              height={1}
            />
            <span className={styles.title}>
              <span className={styles.titleTop}>
                <span>2099.01.01</span>
                <span className={`${styles.genre} ${styles.article}`}>記事</span>
              </span>
              <span>酒米について</span>
            </span>
          </Link>
        </div>
        <Link href="/" className={styles.shopLink}>
          <span>記事一覧へ</span>
          <Arrow />
        </Link>
      </section>
    </>
  );
}
