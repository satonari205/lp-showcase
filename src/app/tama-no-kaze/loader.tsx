"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import styles from "../../../styles/tama-no-kaze/loader.module.scss";

const Loader = () => {
  const loaderRef = useRef<HTMLDivElement>(null);
  const copyRef   = useRef<HTMLDivElement>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const tl = gsap.timeline({
      onComplete: () => setLoading(false),
    });

    // 1. コピーが下からスライド＆フェードイン
    tl.from(copyRef.current, {
      duration: 2,
      y: 50,
      opacity: 0,
      ease: "power2.out",
    })
    // 2. コピーが中央から左右に縮むように消える（clip-path を利用）
    .to(
      copyRef.current,
      {
        duration: 0.5,
        opacity: 0,
        ease: "power2.inOut",
      },
      "+=0.5"
    )
    // 3. 少し待ってから、Loader全体が緩やかにフェードアウトする
    .to(
      loaderRef.current,
      {
        duration: 2,
        opacity: 0,
        ease: "power2.out",
      },
      "+=0"
    );

  }, []);

  // アニメーション完了後はローダーを非表示に
  if (!loading) return null;

  return (
    <div ref={loaderRef} className={styles.loader}>
      <div ref={copyRef}>
        <h1>多摩の蔵から、心酔の一滴を</h1>
      </div>
    </div>
  );
};

export default Loader;
