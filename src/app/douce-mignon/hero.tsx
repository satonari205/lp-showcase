'use client';

import { Roboto_Slab } from 'next/font/google';
import Image from 'next/image';
import { Splide, SplideSlide } from "@splidejs/react-splide";
import { env } from '@/lib/env';
import "@splidejs/react-splide/css";
import styles from '@/styles/douce-mignon/hero.module.scss';

const robotoSlab = Roboto_Slab({
  weight: ['400', '700'],
  subsets: ['latin'],
});

export default function Hero() {
  return (
    <div className={styles.hero}>
      <Image
        className={styles.logo}
        src={`${env.basePath}/douce-mignon/logo.png`}
        alt="subItem1"
        width={100}
        height={100}
      />
      <h2 className={styles.subTitle}>可愛い瞬間を、あなたの毎日に</h2>
      <h1 className={`${styles.title} ${robotoSlab.className}`}>
        Douce Mignon
      </h1>
      <div className={styles.top}>
        {/* スライダー */}
        <Splide
          aria-label="hero-slider"
          options={{
            type: "loop", // 無限ループさせる
            autoplay: true, // 自動再生を有効にする
            interval: 4000, // スライドを切り替える間隔(ミリ秒)
            pauseOnHover: false, // ホバーしても再生を止めない
            arrows: false, // 矢印を非表示にする
          }}
        >
          <SplideSlide>
            <Image
              className={styles.heroImage}
              src={`${env.basePath}/douce-mignon/hero1.jpg`}
              alt="hero1"
              width={400}
              height={800}
            />
          </SplideSlide>
          <SplideSlide>
            <Image
              className={styles.heroImage}
              src={`${env.basePath}/douce-mignon/hero2.jpg`}
              alt="hero2"
              width={400}
              height={800}
            />
          </SplideSlide>
          <SplideSlide>
            <Image
              className={styles.heroImage}
              src={`${env.basePath}/douce-mignon/hero3.jpg`}
              alt="hero2"
              width={400}
              height={800}
            />
          </SplideSlide>
        </Splide>
      </div>
    </div>
  );
}