// import Link from "next/link";
import Image from "next/image";
import { env } from "@/lib/env";
import styles from "@/styles/tama-no-kaze/products.module.scss";
import common from "@/styles/tama-no-kaze/page.module.scss";

export default function Philosophy() {
  return (
    <>
      <h2 className={common.sectionTitle}>杜氏の思い</h2>
      <section id="philosophy" className={styles.philosophy}>
        <div className={styles.Item}>
          <div className={styles.Image}>
            <Image
              src={`${env.basePath}/philosophy1.jpg`}
              alt="厳選された原酒"
              fill
            >
            </Image>
            <h3 className={styles.title}>厳選された原酒</h3>
          </div>
          <p className={styles.text}>
            杜氏自らが丹念に選び抜いた原酒を使用し、自然の恵みと風土を最大限に活かすことで、独自の深みを実現しました。
          </p>
        </div>
        <div className={styles.item}>
          <h3 className={styles.title}>熟成へのこだわり</h3>
          <p className={styles.text}>
            長い年月をかけた熟成管理により、濃厚な旨味と奥深いコクを引き出す。その一滴に、伝統と情熱が詰まっています。
          </p>
        </div>
        <div className={styles.item}>
          <h3 className={styles.title}>伝統と革新の融合</h3>
          <p className={styles.text}>
            古来の製法を守りつつも、新たな技術と感性を取り入れることで、常に進化し続ける酒造りに挑戦しています。
          </p>
        </div>
      </section>
    </>
  );
}
