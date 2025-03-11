'use client';

import { useState } from "react";
import styles from "../../../styles/tama-no-kaze/hamburger.module.scss";

export default function Hamburger() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className={`${styles.hamburger} ${isOpen ? styles.open : ""}`}
      onClick={() => setIsOpen(!isOpen)}
    >
      <span className={styles.bar}></span>
      <span className={styles.bar}></span>
    </div>
  );
}
