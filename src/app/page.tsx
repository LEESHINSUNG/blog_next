import GoToHome from "components/GoToHome";
import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return ( 
    <main className={styles.main}>
      <section className={styles.introduction}>
        <Image src={""} alt="" />
        <h2>title</h2>
        <p>
          description,Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Quisquam iste eos perferendis praesentium consequatur inventore
          repellendus ratione impedit soluta accusantium? At aliquid deserunt
          nihil voluptatem odio, cum voluptatum recusandae asperiores!
        </p>
        <GoToHome />
      </section>
      <section className={styles.featured_posts}>
        <h2>Featured Posts</h2>
      </section>
      <section className={styles.popular_posts}>
        <h2>You may like</h2>
      </section>
    </main>
  );
}
