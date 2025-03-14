import Image from "next/image";
import { env } from "@/lib/env";
import styles from "@/styles/tama-no-kaze/media.module.scss";
import common from "@/styles/tama-no-kaze/page.module.scss";

export default function Media() {
  return (
    <>
      <h2 className={common.sectionTitle}>ブログ</h2>
      <section id="faq" className={styles.media}>
        <div className={styles.blogs}>
          <div className={styles.blog}>
            <Image
              className={styles.image}
              src={`${env.basePath}/blog1.jpg`}
              alt="ブログ"
              fill
            />
            <span className={styles.title}>
              <span>2099.01.01</span>
              <span>酒造紹介動画</span>
            </span>
          </div>
          <div className={styles.blog}>
            <Image
              className={styles.image}
              src={`${env.basePath}/blog2.jpg`}
              alt="ブログ"
              fill
            />
            <span className={styles.title}>
              <span>2099.01.01</span>
              <span>新商品発売</span>
            </span>
          </div>
          <div className={styles.blog}>
            <Image
              className={styles.image}
              src={`${env.basePath}/blog3.jpg`}
              alt="ブログ"
              fill
            />
            <span className={styles.title}>
              <span>2099.01.01</span>
              <span>酒米について</span>
            </span>
          </div>
        </div>
      </section>
    </>
  );
}
