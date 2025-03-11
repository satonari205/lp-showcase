'use client';

import { useState } from "react";
import Image from "next/image";
import styles from "../../../styles/tama-no-kaze/header.module.scss";
import hamburger from "../../../styles/tama-no-kaze/hamburger.module.scss";
import Navigation from "./navigation";

export default function Header () {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className={styles.header}>
      {/* ロゴ */}
      <div className={styles.logo}>
        <Image src="/logo.jpg" alt="多摩の風" width={50} height={50} />
      </div>

      {/* ハンバーガーメニュー */}
      <div
        className={`${hamburger.hamburger} ${isOpen ? hamburger.open : ""}`}
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className={hamburger.bar}></span>
        <span className={hamburger.bar}></span>
      </div>

      {/* メニュー */}
      <Navigation isOpen={isOpen} />
    </header>
  );
}