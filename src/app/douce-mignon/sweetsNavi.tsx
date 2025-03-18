import Link from 'next/link';
import styles from '@/styles/douce-mignon/sweetsNavi.module.scss';

export default function SweetsNav() {
  return (
    <nav className={styles.sweetsNavi}>
      <ul>
        <li>
          <Link href="#sweets1">スイーツ１</Link>
        </li>
        <li>
          <Link href="#sweets1">スイーツ１</Link>
        </li>
        <li>
          <Link href="#sweets1">スイーツ１</Link>
        </li>
        <li>
          <Link href="#sweets1">スイーツ１</Link>
        </li>
      </ul>
    </nav>
  );
}