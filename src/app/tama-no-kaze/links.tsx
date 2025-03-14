import Link from 'next/link';
import Image from 'next/image';
import { env } from '@/lib/env';
import styles from '@/styles/tama-no-kaze/links.module.scss';

export default function Links () {
  return (
    <div className={styles.links}>
      <Link href="/" className={`${styles.link} ${styles.toStore}`}>
        <span className={styles.content}>
          <Image
            className={styles.image}
            src={`${env.basePath}/cart.png`}
            alt="ショッピングカート"
            width={48}
            height={48}
          />
          <span>オンラインストアへ</span>
        </span>
      </Link>
      <Link href="/" className={`${styles.link} ${styles.toContact}`}>
        <span className={styles.content}>
          <Image
            className={styles.image}
            src={`${env.basePath}/contact.png`}
            alt="お問い合わせ"
            width={48}
            height={48}
          />
          <span>お問い合わせ</span>
        </span>
      </Link>
    </div>
  );
}
