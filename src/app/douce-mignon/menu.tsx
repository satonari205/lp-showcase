'use client';

import { useState } from 'react';
import Navigation from "@/app/douce-mignon/navigation";
import styles from '@/styles/douce-mignon/menu.module.scss';

export default function Menu() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* メニューボタン。閉: menu, 開: close */}
      <button
        className={styles.menu}
        onClick={() => setIsOpen(!isOpen)}
      >
        { isOpen ? "close" : "menu" }
      </button>

      {/* ナビゲーション スマホ幅で隠す　パソコン幅から右側に常時表示 */}
      <div className={`${styles.mask} ${isOpen ? styles.open : ""}`}>
        <Navigation />
      </div>
    </>
  );
}