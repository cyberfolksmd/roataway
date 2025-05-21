import styles from "./page.module.css";
import Link from "next/link";
import Image from "next/image";

// Hardcoded categories
const categories = [
  {
    name: "Cauciucuri bicicleta",
    slug: "cauciucuri-bicicleta",
  },
  {
    name: "Cauciucuri motocicleta",
    slug: "cauciucuri-motocicleta",
  },
  {
    name: "Cauciucuri ATV",
    slug: "cauciucuri-atv",
  },
  {
    name: "Cauciucuri pentru utilaje",
    slug: "cauciucuri-pentru-utilaje",
  },
  {
    name: "Camere de aer",
    slug: "camere-de-aer",
  },
];

export default function Home() {
  return (
    <main className={styles.main}>
      <h2>Categorii produse</h2>
      <div className={styles.categoryGrid}>
        {categories.map((category) => (
          <Link
            key={category.slug}
            href={`/category/${category.slug}`}
            className={styles.categoryCard}
          >
            <span>{category.name}</span>
          </Link>
        ))}
      </div>
    </main>
  );
}
