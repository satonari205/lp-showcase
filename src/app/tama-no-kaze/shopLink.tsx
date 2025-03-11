import Link from 'next/link';
// import Image from 'next/image';
import styles from '@/styles/tama-no-kaze/shopLink.module.scss';
import ShopCart from './shopCart';

// const basePath = 'https://satonari205.github.io/lp-showcase/';

export default function ShopLink () {
  return (
    <Link
      href="/"
      className={styles.shopLink}
    >
      {/* <Image
        src={`${basePath}/shopLink.jpg`}
        alt="ECLink"
        width={32}
        height={32}
      /> */}
      <ShopCart />
    </Link>
  );
}