import Link from "next/link";
import Image from "next/image";
import { Noto_Sans } from "next/font/google";
import { env } from "@/lib/env";
import styles from "@/styles/page.module.scss";

const notoSans = Noto_Sans({
  subsets: ["latin"],
  display: "swap",
});

const basePath = env.basePath;

export default function Home() {
  return (
    <main className={`${styles.main} ${notoSans.className}`}>
      <h1 className={styles.title}>LP制作物(見本)</h1>
      <div className={styles.links}>
        <Link className={styles.link} href="/tama-no-kaze">
          <Image
            src={`${basePath}lp-1.png`}
            alt="tama-no-kaze"
            width={300}
            height={300}
          />
          <h2>多摩の風</h2>
        </Link>
        <Link className={styles.link} href="/douce-mignon">
          <Image
            src={`${basePath}lp-2.png`}
            alt="tama-no-kaze"
            width={300}
            height={300}
          />
          <h2>Douce Mignon</h2>
        </Link>
        {/* <Link className={styles.link} href="/tama-no-kaze">
          <Image
            src={`${basePath}lp-1.jpg`}
            alt="tama-no-kaze"
            width={300}
            height={300}
          />
          <h2>作成中</h2>
        </Link> */}
      </div>
    </main>
  );
}
