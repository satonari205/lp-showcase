import { Zen_Maru_Gothic } from 'next/font/google';
import SweetsNav from '@/app/douce-mignon/sweetsNavi';
import Navigation from '@/app/douce-mignon/navigation';
import styles from '@/styles/douce-mignon/layout.module.scss';

const zenMaruGothic = Zen_Maru_Gothic({
  weight: ['400', '700'],
  subsets: ['latin'], // 必須: 使用する文字セットを指定
});

export default function DouceMignonLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className={`${styles.layout} ${zenMaruGothic.className}`}>
      <aside className={`${styles.aside} ${styles.left}`}>
        <SweetsNav />
      </aside>

      <div className={styles.main}>
        {children}
      </div>

      <aside className={`${styles.aside} ${styles.right}`}>
        <Navigation />
      </aside>
    </main>
  );
}