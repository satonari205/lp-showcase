import Link from 'next/link';
import styles from '@/styles/tama-no-kaze/footer.module.scss';

export default function Footer() {
  return (
    <footer>
      <ul className={styles.list}>
        <li>
          <Link href="#introduction">紹介</Link>
        </li>
        <li>
          <Link href="#products">商品一覧</Link>
        </li>
        <li>
          <Link href="#philosophy">杜氏の思い</Link>
        </li>
        <li>
          <Link href="#media">ブログ</Link>
        </li>
      </ul>
      <p>© 2021 Tama-no-Kaze</p>
    </footer>
  );
}