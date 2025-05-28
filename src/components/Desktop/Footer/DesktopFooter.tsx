import React from "react";
import styles from "./Footer.module.css";

const DesktopFooter = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.columns}>
        <div className={styles.column}>
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

        <div className={styles.column}>
          <h3>Informatii cont</h3>
          <ul>
            <li>Contul meu</li>
            <li>Istoricul comenzilor</li>
            <li>Newsletter</li>
          </ul>
        </div>

        <div className={styles.column}>
          <h3>Extra</h3>
          <ul>
            <li>Contact</li>
            <li>Returnuri</li>
            <li>Producatori</li>
            <li>Oferte</li>
          </ul>
        </div>

        <div className={styles.newsletter}>
          <h4>Newsletter</h4>
          <form className={styles.newsletterForm}>
            <input
              type="email"
              placeholder="Adresa de email"
              className={styles.emailInput}
            />
            <button type="submit" className={styles.sendButton}>
              <img
                src="/icons/mail.png"
                alt="mail"
                className={styles.sendIcon}
              />
              Trimite
            </button>
          </form>
        </div>
      </div>

      <div className={styles.logoWrapper}>
        <img src="/logo-head.svg" alt="Roata Way" className={styles.logo} />
      </div>

      <div className={styles.copy}>© Roata Way 2025</div>
    </footer>
  );
};

export default DesktopFooter;
