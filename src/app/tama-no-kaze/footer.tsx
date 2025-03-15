import Link from 'next/link';
import styles from '@/styles/tama-no-kaze/footer.module.scss';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.wrapper}>
        <p>
          <small>20歳未満の飲酒は法律で禁止されています。</small>
        </p>
        <p>
          <small>飲酒運転は絶対にやめましょう。</small>
        </p>
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
        <p className={styles.copyright}>© 2025 合同会社桜花水月</p>
      </div>
    </footer>
  );
}