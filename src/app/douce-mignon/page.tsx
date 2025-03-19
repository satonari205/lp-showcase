import styles from '@/styles/douce-mignon/page.module.scss';
import Hero from './hero';
import Menu from './menu';
import Introduction from './introduction';
import Sweets from './sweets';
import ShopInfo from './shopInfo';

export default function DouceMignon() {
  return (
    <div className={styles.page}>
      {/* メニューボタン */}
      <Menu />

      {/* ヒーロー */}
      <Hero />

      {/* イントロダクション */}
      <Introduction />

      {/* メニュー */}
      <Sweets />

      {/* 店舗情報 */}
      <ShopInfo />
    </div>
  );
}