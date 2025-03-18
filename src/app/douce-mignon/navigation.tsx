import Link from "next/link";
import Image from "next/image";
import { Roboto_Slab } from "next/font/google";
import { env } from "@/lib/env";
import styles from "@/styles/douce-mignon/navigation.module.scss";

const robotoSlab = Roboto_Slab({
  weight: ["400", "700"],
  subsets: ["latin"],
});

const naviContent = [
  { href: "#introduction", title: "À propos de Douce Mignon", subTitle: "・Douce Mignonについて・" },
  { href: "#sweets", title: "Nos douceurs", subTitle: "・お菓子一覧・" },
  { href: "#patissier", title: "Le Pâtissier", subTitle: "・パティシエ・" },
  { href: "#shop", title: "Boutique", subTitle: "・店舗・" },
  { href: "#links", title: "Liens", subTitle: "・リンク・" },
];

export default function Navigation() {
  const isOpen = false;

  return (
    <nav className={`${styles.navi} ${isOpen ? styles.open : ""}`}>
      <div>
        <Image
          className={styles.logo}
          src={`${env.basePath}/douce-mignon/logo.png`}
          alt="subItem1"
          width={100}
          height={100}
        />
        <h2 className={`${styles.naviHeading} ${robotoSlab.className}`}>
          Douce Mignon
        </h2>
        <ul className={styles.naviList}>
          {naviContent.map((content, index) =>
            naviList(index, content.href, content.title, content.subTitle)
          )}
        </ul>
      </div>
    </nav>
  );
}

function naviList (index: number, href: string, title: string, subTitle: string) {
  return (
    <li key={index}>
      <Link href={href} className={styles.naviListItem}>
        <h3>{title}</h3>
        <span className={styles.subTitle}>
          {subTitle}
        </span>
      </Link>
    </li>
  );
}
