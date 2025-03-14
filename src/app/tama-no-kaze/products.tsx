import Image from "next/image";
import styles from "@/styles/tama-no-kaze/products.module.scss";

export default function Products() {
  const basePath = process.env.NEXT_PUBLIC_BASE_URL || "";

  console.log(basePath);
  return (
    <section id="products" className={styles.products}>
      <div className={styles.productCard}>
        <Image
          src={`${basePath}/sake.jpg`}
          alt="多摩の風 - 鷹"
          width={400}
          height={400}
        />
        <h2>杜氏厳選 熟成原酒「多摩の風 - 鷹」</h2>
        <p>
          杜氏自らが厳選した原酒を、長い年月をかけてじっくりと熟成。多摩の雄大な大地のエネルギーを凝縮した濃厚な旨味と、奥深いコクが特徴です。ロックで味わえば、冷えた一滴が広がり、鷹が悠然と舞うかのような高揚感とともに、豊かな余韻が口中に広がります。
        </p>
        <h3>おすすめのペアリング</h3>
        <p>濃厚な燻製料理、香ばしい焼き鳥、しっかりとした肉料理</p>
      </div>
      <div className={styles.productCard}>
        <Image
          src={`${basePath}/sake.jpg`}
          alt="多摩の風 - 鷲"
          width={400}
          height={400}
        />
        <h2>八王子清流 純米吟醸「多摩の風 - 鷲」</h2>
        <p>
          高尾山の伏流水が育む、透明感と爽快なキレ。純米吟醸ならではの華やかな香りと、後味に残るすっきりとした切れが上品な和食との調和を生み出します。まるで鷲が高空を舞うかのような気品と力強さを感じる逸品です。
        </p>
        <h3>おすすめのペアリング</h3>
        <p>新鮮な刺身、白身魚、繊細な和食</p>
      </div>
      <div className={styles.productCard}>
        <Image
          src={`${basePath}/sake.jpg`}
          alt="多摩の風 - 鳶"
          width={400}
          height={400}
        />
        <h2>青梅清流 純米吟醸「多摩の風 - 鳶」</h2>
        <p>
          高尾山の伏流水を惜しみなく使用。青梅の瑞々しさが香る、すっきりとしたキレと柔らかな口当たりが魅力。軽やかでありながらも奥行きのある味わいは、まるで鳶が風を切って舞うかのような俊敏な印象を与えます。
        </p>
        <h3>おすすめのペアリング</h3>
        <p>旬の野菜を生かした和食、軽めの前菜、サラダ</p>
      </div>
    </section>
  );
}
