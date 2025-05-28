import React, { useState } from "react";
import Image from "next/image";
import styles from "./Header.module.css";

const menuData = [
  {
    title: "Cauciucuri ATV",
    subItems: ["Cauciucuri 1", "Cauciucuri 2", "Cauciucuri 3", "Cauciucuri 4"],
  },
  {
    title: "Cauciucuri scuter",
    subItems: ["Scuter 1", "Scuter 2"],
  },
  {
    title: "Cauciucuri bicicleta",
  },
  {
    title: "Cauciucuri moto",
  },
  {
    title: "Camere aer auto",
  },
  {
    title: "Camere aer bicicleta",
  },
];

const MobileHeader = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openSub, setOpenSub] = useState(null);

  const toggleMenu = () => setIsMenuOpen(prev => !prev);
  const toggleSub = (index) => setOpenSub(prev => (prev === index ? null : index));

  return (
    <header className={styles.mobileHeader}>
      {/* Верхняя строка */}
      <div className={styles.topRow}>
<button className={styles.menuButton} onClick={toggleMenu} aria-label="Toggle menu">
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={styles.burgerIcon}
  >
    <line x1="3" y1="6" x2="21" y2="6" stroke="white" strokeWidth="2" />
    <line x1="3" y1="12" x2="21" y2="12" stroke="white" strokeWidth="2" />
    <line x1="3" y1="18" x2="21" y2="18" stroke="white" strokeWidth="2" />
  </svg>
</button>



        <Image
          src="/logo-head.svg"
          alt="Roata Way"
          width={246}
          height={52}
          className={styles.logo}
        />

        <div className={styles.icons}>
          <button className={styles.iconButton}>
            <Image
              src="/icons/material-outline-account-circle.svg"
              alt="Account"
              width={20}
              height={20}
            />
          </button>
          <button className={styles.iconButton}>
            <Image
              src="/icons/material-outline-favorite-border.svg"
              alt="Favorite"
              width={20}
              height={20}
            />
          </button>
          <button className={styles.iconButton}>
            <Image
              src="/icons/ion-cart-outline.svg"
              alt="Cart"
              width={20}
              height={20}
            />
          </button>
        </div>
      </div>

      {/* Строка поиска */}
      <div className={styles.searchRow}>
        <div className={styles.searchIcon}></div>
        <input
          type="text"
          placeholder="anvelope iarna"
          className={styles.searchInput}
        />
      </div>

      {/* Меню */}
      {isMenuOpen && (
        <nav className={styles.dropdownMenu}>
          <ul>
            {menuData.map((item, index) => (
              <li key={index}>
                <div
                  className={styles.menuItemRow}
                  onClick={() => item.subItems && toggleSub(index)}
                >
                  {item.title}
                  {item.subItems && <span className={styles.arrow} />}
                </div>

                {item.subItems && openSub === index && (
                  <ul className={styles.subMenu}>
                    {item.subItems.map((subItem, subIndex) => (
                      <li key={subIndex} className={styles.subItem}>
                        {subItem}
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
};

export default MobileHeader;
