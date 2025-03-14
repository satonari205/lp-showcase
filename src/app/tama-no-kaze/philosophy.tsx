'use client';

import { useRef, useEffect } from "react";
import Image from "next/image";
import { env } from "@/lib/env";
import styles from "@/styles/tama-no-kaze/philosophy.module.scss";
import common from "@/styles/tama-no-kaze/page.module.scss";

export default function Philosophy() {
  const containerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // コンテナ内のすべての .imageWrapper 要素を取得
    const imageWrappers = container.querySelectorAll(`.${styles.imageWrapper}`);

    // IntersectionObserver の設定
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          // 20%以上表示されたらアニメーションを発動し、observer から解除して再発火を防ぐ
          if (entry.intersectionRatio >= 0.2) {
            entry.target.classList.add(styles.active);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 }
    );

    imageWrappers.forEach((el) => observer.observe(el));

    // クリーンアップ
    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <>
      <h2 className={common.sectionTitle}>杜氏の思い</h2>
      <section id="philosophy" className={styles.philosophy} ref={containerRef}>
        {/* 項目1: 厳選された原酒 */}
        <div className={styles.item}>
          <div className={styles.imageWrapper}>
            <div className={styles.curtain} />
            <Image
              className={styles.image}
              src={`${env.basePath}/philosophy1.jpg`}
              alt="厳選された原酒"
              fill
            />
          </div>
          <div className={styles.content}>
            <h3 className={styles.title}>厳選された原酒</h3>
            <p className={styles.text}>
              杜氏自らが丹念に選び抜いた原酒を使用し、自然の恵みと風土を最大限に活かすことで、独自の深みを実現しました。
            </p>
          </div>
        </div>

        {/* 項目2: 熟成へのこだわり */}
        <div className={styles.item}>
          <div className={styles.imageWrapper}>
            <div className={styles.curtain} />
            <Image
              className={styles.image}
              src={`${env.basePath}/philosophy2.jpg`}
              alt="熟成へのこだわり"
              fill
            />
          </div>
          <div className={styles.content}>
            <h3 className={styles.title}>熟成へのこだわり</h3>
            <p className={styles.text}>
              長い年月をかけた熟成管理により、濃厚な旨味と奥深いコクを引き出す。その一滴に、伝統と情熱が詰まっています。
            </p>
          </div>
        </div>

        {/* 項目3: 伝統と革新の融合 */}
        <div className={styles.item}>
          <div className={styles.imageWrapper}>
            <div className={styles.curtain} />
            <Image
              className={styles.image}
              src={`${env.basePath}/philosophy3.jpg`}
              alt="伝統と革新の融合"
              fill
            />
          </div>
          <div className={styles.content}>
            <h3 className={styles.title}>伝統と革新の融合</h3>
            <p className={styles.text}>
              古来の製法を守りつつも、新たな技術と感性を取り入れることで、常に進化し続ける酒造りに挑戦しています。
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
