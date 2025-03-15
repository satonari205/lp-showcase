"use client";

import { useRef, useEffect } from "react";
import styles from "@/styles/tama-no-kaze/introduction.module.scss";

export default function Introduction() {
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const content = contentRef.current;

    if (!content) return;

    // IntersectionObserver の設定
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          // 20%以上表示されたらアニメーションを発動し、observer から解除して再発火を防ぐ
          if (entry.intersectionRatio >= 0.2) {
            entry.target.classList.add(styles.active);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 }
    );

    observer.observe(content);

    return () => {
      observer.disconnect();
    };
  }, []);


  return (
    <section id="introduction" className={styles.introduction}>
      <div ref={contentRef} className={styles.content}>
        <h2 className={styles.sentence}>
          <span>多摩の大地と澄み渡る空、そして清冽な水が織りなす自然美。</span>
          <span>「多摩の風」は、伝統と革新の技が融合した日本酒。</span>
          <span>
            杜氏が多摩の豊かな恵みに向き合い、丹精込めて醸すその一滴は、
          </span>
          <span>都会の喧騒を離れ、ひとときの静謐な時を感じさせます。</span>
          <span>
            風のように自由でありながら、歴史と情熱が息づくこの日本酒は、
          </span>
          <span>あなたの感性に新たな刺激をもたらします。</span>
        </h2>
      </div>
    </section>
  );
}
