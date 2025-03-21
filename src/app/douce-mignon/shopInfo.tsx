import Link from "next/link";
import styles from "@/styles/douce-mignon/shopInfo.module.scss";
import page from "@/styles/douce-mignon/page.module.scss";

export default function ShopInfo() {
  return (
    <section id="shopinfo" className={styles.shopInfo}>
      <h2 className={page.sectionTitle}>
        <span>Boutique</span>
        <span className={page.sub}>・店舗・</span>
      </h2>
      <div className={styles.info}>
        <div className={styles.content}>
          <p>
            <strong>屋号</strong>
            <br />
            Douce Mignon
            <br />
            (ドゥース ミニョン)
          </p>
          <p>
            <strong>住所</strong>
            <br />
            〒999-9999
            <br />
            東京都新宿区新宿99-99-99
          </p>
          <p>
            <strong>アクセス</strong>
            <br />
            JR山手線「新宿駅」東口から徒歩99分
          </p>
          <p>
            <strong>営業時間</strong>
            <br />
            10:00～20:00
            <br />
            (土日祝は19:00閉店)
          </p>
          <p>
            <strong>定休日</strong>
            <br />
            火曜日・不定休あり
          </p>
          <p>
            <strong>駐車場</strong>
            <br />
            有り（15台）
          </p>
          <Link
            href="https://maps.app.goo.gl/nL9RNEt2jq2omkrX8"
            className={styles.mapLink}
          >
            Google Mapで開く
          </Link>
          <div id="links" className={styles.links}>
            <Link href="/" className={styles.link}>
              通販サイトへ
            </Link>
            <Link href="/" className={`${styles.link} ${styles.instaLink}`}>
              Instagram
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
