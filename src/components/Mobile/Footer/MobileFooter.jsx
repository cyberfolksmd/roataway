import React from "react";
import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.firstBlock}>
        {/* Две колонки с вертикальной разделительной линией */}
        <div className={styles.menuColumn}>
          <h3>Informatii</h3>
          <ul>
            <li>Despre noi</li>
            <li>Detalii Livrare</li>
            <li>Politica de Confidențialitate</li>
            <li>Termeni si Conditii</li>
            <li>Metode de Plata</li>
            <li>Politica de utilizare Cookie-uri</li>
            <li>Politica de Retur</li>
          </ul>
        </div>
        <div className={styles.verticalDivider}></div>
        <div className={styles.menuColumn}>
          <h3>Informatii cont</h3>
          <ul>
            <li>Contul meu</li>
            <li>Istoricul comenzilor</li>
            <li>Newsletter</li>
          </ul>
          <h4 className={styles.extraBlock}>Extra</h4>
          <ul>
            <li>Contact</li>
            <li>Returnuri</li>
            <li>Producatori</li>
            <li>Oferte</li>
          </ul>
        </div>
      </div>
      <div className={styles.logoBlock}>
        <img src="/logo-head.svg" alt="ROATA WAY" className={styles.logo} />
      </div>
      <div className={styles.copyBlock}>
        <p>© Roata Way 2025</p>
      </div>
    </footer>
  );
};

export default Footer;