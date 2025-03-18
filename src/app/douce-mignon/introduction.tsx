'use client';

// import { useRef, useEffect } from 'react';
import Imgae from 'next/image';
import { env } from '@/lib/env';
import styles from '@/styles/douce-mignon/introduction.module.scss';

const items = [
  {
    title: "毎日をちょっとだけ特別にしたい——",
    sentence:
      "そんな想いから生まれたのが、このケーキ屋さんです。色とりどりのスイーツをパステルカラーで彩り、ポップでキュートな雰囲気の店内は、気軽に立ち寄れる明るい空間。季節のフルーツをふんだんに使ったケーキや、優しい甘さの焼き菓子を、手に取りやすい価格でお届けしています。",
    image: `${env.basePath}/douce-mignon/introduction1.jpg`,
    odd: true,
    color: "pink",
  },
  {
    title: "ちょっぴり贅沢なスイーツも、日常のおやつとして楽しんでほしい——",
    sentence:
      "そんな願いを込めて、素材選びから味のバランスまで、パティシエが一つひとつ丁寧に仕上げました。学校や仕事の休憩時間、友達とのおしゃべりタイムなど、忙しい日常に小さな幸せをプラスできるよう、幅広いメニューを取りそろえています。",
    image: `${env.basePath}/douce-mignon/introduction2.jpg`,
    odd: false,
    color: "blue",
  },
  {
    title: "かわいい瞬間を、あなたの毎日に。",
    sentence:
      "気分が上がるカラフルなお菓子たちを眺めるだけでもワクワクするはず。あなたの毎日に「かわいい瞬間」を添える特別なお店として、ぜひ気軽に足を運んでみてくださいね。",
    image: `${env.basePath}/douce-mignon/introduction3.jpg`,
    odd: true,
    color: "yellow",
  },
];

export default function Introduction () {
  return (
    <section id="introduction" className={styles.introduction}>
      <div className={styles.items}>
        {items.map((item, index) => (
          <IntroductionItem
            key={index}
            title={item.title}
            sentence={item.sentence}
            image={item.image}
            odd={item.odd}
            color={item.color}
          />
        ))}
      </div>
    </section>
  );
}

function IntroductionItem({
  title,
  sentence,
  image,
  odd,
  color,
}: Readonly<{
  title:    string;
  sentence: string;
  image:    string;
  odd:      boolean;
  color:    string;
}>) {
  return (
    <div className={styles.item}>
      <div className={styles.content}>
        <h2 className={styles.title}>{title}</h2>
        <p className={styles.sentence}>{sentence}</p>
        <div
          className={`
          ${styles.bubble}
          ${!odd ? styles.bubbleLeft : styles.bubbleRight}
          ${
            color === "pink"
              ? styles.pink
              : color === "blue"
              ? styles.blue
              : styles.yellow
          }
        `}
        ></div>
      </div>
      <div className={styles.imageWrapper}>
        <Imgae
          className={`${styles.image} ${odd ? styles.left : styles.right}`}
          src={image}
          alt="introduction"
          width={320}
          height={240}
        />
        <div
          className={`
          ${styles.bubble}
          ${odd ? styles.bubbleLeft : styles.bubbleRight}
          ${
            color === "pink"
              ? styles.pink
              : color === "blue"
              ? styles.blue
              : styles.yellow
          }
        `}
        ></div>
      </div>
    </div>
  );
}