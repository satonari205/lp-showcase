import Link from "next/link";
import styles from "../../../styles/tama-no-kaze/navigation.module.scss";

export default function Navigation({ isOpen }: { isOpen: boolean }) {
    return (
      <nav className={`${styles.navigation} ${isOpen ? styles.open : ""}`}>
        <ul className={styles.list}>
          <li>
            <Link href="/">LP一覧に戻る</Link>
          </li>
          <li>
            <Link href="/">オンラインストアへ</Link>
          </li>
          <li>
            <Link href="https://kyokasuigetsu-lp.vercel.app/">
              運営会社HPへ
            </Link>
          </li>
        </ul>
      </nav>
    );
}