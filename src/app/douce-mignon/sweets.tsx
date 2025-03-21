'use client';

import { useRef, useEffect, useState } from "react";
import Image from 'next/image';
import { env } from '@/lib/env';
import styles from '@/styles/douce-mignon/sweets.module.scss';
import page from '@/styles/douce-mignon/page.module.scss';

const sweets = [
  {
    name: "ふわふわ苺クリームパンケーキ",
    image: "/douce-mignon/sweets1.jpg",
    caption:
      "ふわふわのパンケーキに甘酸っぱいいちごと、とろけるクリームをたっぷりトッピング。見た目もキュートで、ひと口で幸せ気分に。",
    price: 850,
    color: styles.pink,
  },
  {
    name: "カラフルマカロンセレクション",
    image: "/douce-mignon/sweets2.jpg",
    caption:
      "パステルカラーがかわいい、サクふわ食感のマカロンセット。バニラやピスタチオ、フランボワーズなど人気フレーバーを詰め込みました。",
    price: 600,
    color: styles.blue,
  },
  {
    name: "バニラアイスのとろけるショコラ",
    image: "/douce-mignon/sweets3.jpg",
    caption:
      "濃厚チョコレートケーキの上に、冷たいバニラアイスをトッピング。温と冷のコントラストが楽しめる、ちょっぴり贅沢なスイーツです。",
    price: 780,
    color: styles.orange,
  },
  {
    name: "ベリーのカラフルタルト",
    image: "/douce-mignon/sweets4.jpg",
    caption:
      "サクサクのクッキー生地に、甘酸っぱいミックスベリーをたっぷりトッピング。カラフルで華やかな見た目は写真映え間違いなし！",
    price: 720,
    color: styles.yellow,
  },
];

export default function Sweets() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;

      // セクションの位置とサイズを取得
      const rect = sectionRef.current.getBoundingClientRect();

      // セクションが完全にスクロールし終わるまでの距離
      const totalScroll = rect.height - window.innerHeight;

      // 要素の上端がどれだけスクロールしたか（正の値に変換）
      const scrolled = Math.abs(rect.top);

      // 進行度を 0〜1 の範囲にする
      if (rect.top < 0) {

        const newProgress = Math.min(scrolled / totalScroll, 1);
        
        console.log(
          rect,
          totalScroll,
          scrolled,
          newProgress,
        );

        setProgress(newProgress);
      }

    };

    window.addEventListener("scroll", handleScroll);

    // 初回にも呼んでおく
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section ref={sectionRef} id="sweets" className={styles.sweets}>
      <div className={styles.sweetsSticky}>
        <h2 className={page.sectionTitle}>
          <span>Nos douceurs</span>
          <span className={page.sub}>・お菓子一覧・</span>
        </h2>
        <div className={styles.cardStack}>
          {sweets.map((sweet, index) => (
            <Card
              key={index}
              index={index}
              progress={progress}
              name={sweet.name}
              image={sweet.image}
              caption={sweet.caption}
              price={sweet.price}
              color={sweet.color}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function Card ({
  index,
  progress,
  name,
  image,
  caption,
  price,
  color,
} : Readonly<{
  index:    number;
  progress: number;
  name:     string;
  image:    string;
  caption:  string;
  price:    number;
  color:    string;
}>) {
  // 各カードの表示タイミングを決める
  const effectiveProgress = Math.min(Math.max((progress - index * 0.25) * 4, 0), 1);

  // スライドが始まるタイミング
  const start = 0.8;

  // カードが横方向にどこまで移動するか。進捗率 - 0.8して-150%まで動いてもらう。
  const translateX = effectiveProgress >= start
    ? `${50 + Math.abs(effectiveProgress - start) * 500}%`
    : "-50%";

  const rotate = effectiveProgress >= start
    ? Math.abs(effectiveProgress - start) * 225
    : 0;

  return (
    <div
      className={`${styles.card} ${color}`}
      id={`sweets${index + 1}`}
      style={{
        zIndex: 8 - index,
        transform: `translate(${translateX}, -50%) rotate(${rotate}deg)`,
        marginTop: `${index * 4}px`,
        marginLeft: `${index * 4}px`,
      }}
    >
      <div className={styles.imageWrapper}>
        <Image
          className={styles.image}
          src={`${env.basePath}${image}`}
          alt={name}
          width={180}
          height={180}
        />
      </div>
      <div className={styles.cardContent}>
        <h3 className={styles.name}>{name}</h3>
        <p>{caption}</p>
        <span>¥{price}</span>
      </div>
    </div>
  );
}