import Link from 'next/link';
// import Image from 'next/image';
import styles from '../../../styles/tama-no-kaze/shopLink.module.scss';
import ShopCart from './shopCart';

export default function ShopLink () {
  return (
    <Link
      href="/"
      className={styles.shopLink}
    >
      {/* <Image
        src="/shopLink.jpg"
        alt="ECLink"
        width={32}
        height={32}
      /> */}
      <ShopCart />
    </Link>
  );
}