import React, { useState, useEffect } from "react";
import styles from "./Header.module.css"; // Стили для десктопной версии
import Image from "next/image";
import Link from "next/link";

export default function Header() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 700); // Определяем, мобильная версия или нет
    };

    handleResize(); // Проверяем ширину экрана при загрузке
    window.addEventListener("resize", handleResize); // Слушаем изменения размера экрана

    return () => window.removeEventListener("resize", handleResize); // Убираем слушатель при размонтировании
  }, []);
   
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const categories = [
  {
    icon: "/icons/camere.png",
    label: "Cauciucuri bicicleta",
    subitems: [
      "MTB & Trail",
      "Urban & Trekking",
      "BMX & Free Style",
      "Fat Bike",
      "E-Bike",
      "Street & Racing",
      "Dirt Jump",
      "Motocross",
    ],
  },
  {
    icon: "/icons/bicicleta.png",
    label: "Cauciucuri motocicleta",
    subitems: [
      "Chopper",
      "Enduro",
      "Touring",
      "Sport",
      "Scooter",
      "Cruiser",
    ],
  },
  {
    icon: "/icons/motocicleta.png",
    label: "Cauciucuri ATV",
    subitems: ["Offroad", "Snow", "Sand", "Utility", "Performance"],
  },
  {
    icon: "/icons/atv.png",
    label: "Cauciucuri pentru utilaje",
    subitems: ["Tractor", "Remorca", "Industrial", "Forestry", "Compactoare"],
  },
  {
    icon: "/icons/utilaje.png",
    label: "Camere de aer",
    subitems: ["Bicicleta", "Motocicleta", "ATV", "Auto", "Utilaj"],
  },
];
  return isMobile ? (
    <HeaderMobile />
  ) : (
    <header className={styles.header}>
      <div className={styles.topBar}>
        <div className={styles.topContainer}>
		{/* Бургер-иконка */}
<div className={styles.burger} onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
  <span />
  <span />
  <span />
</div>

{/* Мобильное меню */}
{mobileMenuOpen && (
  <div className={styles.mobileMenu}>
    <Link href="#">Despre noi</Link>
    <Link href="#">Detalii Livrare</Link>
    <Link href="#">Contact</Link>
    <Link href="#">Oferte si Promotii</Link>
  </div>
)}
          <div className={styles.logo}>
            <Image src="/logo-head.svg" alt="Roata Way" width={160} height={40} priority />
          </div>

          <nav className={styles.menu}>
            <Link href="#">Despre noi</Link>
            <Link href="#">Detalii Livrare</Link>
            <Link href="#">Contact</Link>
            <Link href="#">Oferte si Promotii</Link>
          </nav>

          <div className={styles.searchContainer}>
            <span className={styles.searchIcon} />
            <input type="text" placeholder="anvelope iarna" />
          </div>

          <div className={styles.phone}>
            <span className={styles.phoneIcon} />
            <span className={styles.phoneText}>
              Comenzi En-Gross: 0747 20 90 40
            </span>
          </div>

          <div className={styles.icons}>
            <span className={styles.iconAccount} />
            <span className={styles.iconFavorite} />
            <span className={styles.iconCart} />
          </div>
        </div>
      </div>

      {/* Новая оранжевая сочная полоса с категориями */}
    <div className={styles.categoryBar}>
  {categories.map((category, index) => (
    <div key={index} className={styles.categoryItemWrapper}>
     <a href="#" className={styles.categoryItem}>
  <div className={styles.categoryIconWrapper}>
    <img
      src={category.icon}
      alt={category.label}
      className={styles.categoryIcon}
    />
  </div>
  <span className={styles.categoryLabel}>{category.label}</span>
</a>
      {category.subitems && (
        <div className={styles.dropdown}>
          <ul>
            {category.subitems.map((item, subIndex) => (
              <li key={subIndex}>{item}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  ))}
</div>

    </header>
  );
}

