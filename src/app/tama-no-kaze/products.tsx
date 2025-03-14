import Link from "next/link";
import Image from "next/image";
import { env } from "@/lib/env";
import styles from "@/styles/tama-no-kaze/products.module.scss";
import common from "@/styles/tama-no-kaze/page.module.scss";
import Arrow from "./arrow";

export default function Products() {
  return (
    <>
      <h2 className={common.sectionTitle}>商品のご紹介</h2>
      <section id="products" className={styles.products}>
        <div className={styles.product}>
          <Image
            className={styles.image}
            src={`${env.basePath}/sake.jpg`}
            alt="多摩の風 - 鷹"
            width={250}
            height={250}
          />
          <div className={styles.content}>
            <h2 className={styles.contentTitle}>多摩の風 - 鷹</h2>
            <h3 className={styles.subTitle}>八王子清流 純米吟醸</h3>
            <p className={styles.text}>
              杜氏自らが厳選した原酒を、長い年月をかけてじっくりと熟成。
              多摩の雄大な大地のエネルギーを凝縮した濃厚な旨味と、奥深いコクが特徴です。
              ロックで味わえば、冷えた一滴が広がり、鷹が悠然と舞うかのような高揚感とともに、
              豊かな余韻が口中に広がります。
            </p>
          </div>
          <Link href="/" className={styles.shopLink}>
            <span>購入する</span>
            <Arrow />
          </Link>
        </div>
        <div className={styles.product}>
          <Image
            className={styles.image}
            src={`${env.basePath}/sake.jpg`}
            alt="多摩の風 - 鷹"
            width={250}
            height={250}
          />
          <div className={styles.content}>
            <h2 className={styles.contentTitle}>「多摩の風 - 鷲」</h2>
            <h3 className={styles.subTitle}>八王子清流 純米吟醸</h3>
            <p className={styles.text}>
              杜氏自らが厳選した原酒を、長い年月をかけてじっくりと熟成。
              多摩の雄大な大地のエネルギーを凝縮した濃厚な旨味と、奥深いコクが特徴です。
              ロックで味わえば、冷えた一滴が広がり、鷹が悠然と舞うかのような高揚感とともに、
              豊かな余韻が口中に広がります。
            </p>
          </div>
          <Link href="/" className={styles.shopLink}>
            <span>購入する</span>
            <Arrow />
          </Link>
        </div>

        <div className={styles.product}>
          <Image
            className={styles.image}
            src={`${env.basePath}/sake.jpg`}
            alt="多摩の風 - 鷹"
            width={250}
            height={250}
          />
          <div className={styles.content}>
            <h2 className={styles.contentTitle}>「多摩の風 - 鳶」</h2>
            <h3 className={styles.subTitle}>八王子清流 純米吟醸</h3>
            <p className={styles.text}>
              杜氏自らが厳選した原酒を、長い年月をかけてじっくりと熟成。
              多摩の雄大な大地のエネルギーを凝縮した濃厚な旨味と、奥深いコクが特徴です。
              ロックで味わえば、冷えた一滴が広がり、鷹が悠然と舞うかのような高揚感とともに、
              豊かな余韻が口中に広がります。
            </p>
          </div>
          <Link href="/" className={styles.shopLink}>
            <span>購入する</span>
            <Arrow />
          </Link>
        </div>
      </section>
    </>
  );
}
