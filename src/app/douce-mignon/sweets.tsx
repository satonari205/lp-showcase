'use client';

import { useRef, useEffect, useState } from "react";
import Image from 'next/image';
import styles from '@/styles/douce-mignon/sweets.module.scss';

const sweets = [
  {
    name: "ふわふわ苺クリームパンケーキ",
    image: "/douce-mignon/sweets1.jpg",
    caption:
      "ふわふわのパンケーキに甘酸っぱいいちごと、とろけるクリームをたっぷりトッピング。見た目もキュートで、ひと口で幸せ気分に。",
    price: 850,
  },
  {
    name: "カラフルマカロンセレクション",
    image: "/douce-mignon/sweets2.jpg",
    caption:
      "パステルカラーがかわいい、サクふわ食感のマカロンセット。バニラやピスタチオ、フランボワーズなど人気フレーバーを詰め込みました。",
    price: 600,
  },
  {
    name: "バニラアイスのとろけるショコラ",
    image: "/douce-mignon/sweets3.jpg",
    caption:
      "濃厚チョコレートケーキの上に、冷たいバニラアイスをトッピング。温と冷のコントラストが楽しめる、ちょっぴり贅沢なスイーツです。",
    price: 780,
  },
  {
    name: "ベリーのカラフルタルト",
    image: "/douce-mignon/sweets4.jpg",
    caption:
      "サクサクのクッキー生地に、甘酸っぱいミックスベリーをたっぷりトッピング。カラフルで華やかな見た目は写真映え間違いなし！",
    price: 720,
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
      const windowHeight = window.innerHeight;
      
      // セクションが完全にスクロールし終わるまでの距離
      const totalScroll = rect.height - windowHeight;
      // 要素の上端がどれだけスクロールしたか（正の値に変換）
      const scrolled = Math.abs(rect.top);
      
      // 進行度を 0〜1 の範囲にする
      const newProgress = Math.min(scrolled / totalScroll, 1);
      setProgress(newProgress);
    }

    window.addEventListener("scroll", handleScroll);

    // 初回にも呼んでおく
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section ref={sectionRef} id="sweets" className={styles.sweets}>
      <div className={styles.sweetsSticky}>
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
  price
} : Readonly<{
  index:    number;
  progress: number;
  name:     string;
  image:    string;
  caption:  string;
  price:    number;
}>) {
  // 各カードの表示タイミングを決める
  const cardProgress = (progress - index * 0.25) * 4; // 0〜1 を目安に
  const clampedProgress = Math.min(Math.max(cardProgress, 0), 1);

  // const translate = clampedProgress * -100; // vh/vw
  const rotate = clampedProgress * 15; // deg

  return (
    <div
      className={styles.card}
      style={{
        transform: `translate(-50%, -50%) rotate(${rotate}deg)`,
      }}
    >
      <div className={styles.imageWrapper}>
        <Image
          className={styles.image}
          src={image}
          alt={name}
          width={180}
          height={180}
        />
      </div>
      <div className={styles.cardContent}>
        <h3 className={styles.name}>{name}</h3>
        <p>{caption}</p>
        <span>¥{price}</span>
        <span>¥{progress}</span>
      </div>
    </div>
  );
}