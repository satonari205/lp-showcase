import type { Metadata } from "next";
import { Shippori_Mincho } from "next/font/google";
import Loader from "./loader";
import Header from "./header";
import Hero from "./hero";
import Introduction from "./introduction";
import Products from "./products";
import Philosophy from "./philosophy";
import Media from "./media";
import Links from './links';
import Footer from './footer';
import styles from "@/styles/tama-no-kaze/page.module.scss";

export const metadata: Metadata = {
  title: "多摩の風",
  description: "多摩の風のLP制作物(見本)です。",
};

const shipporiMincho = Shippori_Mincho({
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "700"],
});

export default function Home() {
  return (
    <main className={`${styles.main} ${shipporiMincho.className}`}>
      <div className={styles.wrapper}>
        {/* ローダー */}
        <Loader />

        {/* ヘッダー */}
        <Header/>

        {/* メインコンテンツ */}
        <Hero />

        {/* コピー */}
        <Introduction />

        {/* 商品紹介 */}
        <Products />

        {/* 杜氏の思い */}
        <Philosophy />

        {/* ブログ */}
        <Media />

        {/* リンク */}
        <Links />

        {/* フッター */}
        <Footer />
      </div>
    </main>
  );
}
