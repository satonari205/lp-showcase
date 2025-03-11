import type { Metadata } from "next";
import { Shippori_Mincho } from "next/font/google";
import Loader from "./loader";
import Header from "./header";
import Hero from "./hero";
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
      {/* ローダー */}
      <Loader />

      {/* ヘッダー */}
      <Header></Header>

      {/* メインコンテンツ */}
      <Hero />

      {/* ECリンク */}
      {/* <ShopLink /> */}
    </main>
  );
}
