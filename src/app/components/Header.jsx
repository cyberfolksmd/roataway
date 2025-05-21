"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "./Header.module.css";

const categories = [
  {
    name: "Cauciucuri ATV",
    subcategories: [
      "Cauciucuri 1",
      "Cauciucuri 2",
      "Cauciucuri 3",
      "Cauciucuri 4",
    ],
  },
  { name: "Cauciucuri scuter", subcategories: [] },
  { name: "Cauciucuri bicicleta", subcategories: [] },
  { name: "Cauciucuri moto", subcategories: [] },
  { name: "Camere aer auto", subcategories: [] },
  { name: "Camere aer bicicleta", subcategories: [] },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [hiddenSearch, setHiddenSearch] = useState(false);
  const [expandedCategory, setExpandedCategory] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      setHiddenSearch(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={styles.header}>
      <div className={styles.top}>
        <div className={styles.left}>
          <button
            className={styles.menuBtn}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            ☰
          </button>
          <Image src="/logo.svg" alt="Roata Way" width={130} height={40} />
        </div>

        <div
          className={`${styles.searchWrapper} ${hiddenSearch ? styles.hideOnScroll : ""}`}
        >
          <input
            className={styles.searchInput}
            type="text"
            placeholder="anvelope iarna"
          />
        </div>

        <div className={styles.right}>
          <span className={styles.contact}>
            Comenzi En-Gross: 0747 20 90 40
          </span>
          <div className={styles.icons}>
            <Link href="/account">👤</Link>
            <Link href="/favorites">🤍</Link>
            <Link href="/cart">🛒</Link>
          </div>
        </div>
      </div>

      {menuOpen && (
        <div className={styles.menu}>
          {categories.map((cat, i) => (
            <div key={i}>
              <div
                className={styles.category}
                onClick={() =>
                  setExpandedCategory(expandedCategory === i ? null : i)
                }
              >
                {cat.name}
                {cat.subcategories.length > 0 && <span>▾</span>}
              </div>
              {expandedCategory === i &&
                cat.subcategories.map((sub, j) => (
                  <div key={j} className={styles.subcategory}>
                    {sub}
                  </div>
                ))}
            </div>
          ))}
        </div>
      )}
    </header>
  );
}
