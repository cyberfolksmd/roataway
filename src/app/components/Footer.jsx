import styles from "./Footer.module.css";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.columns}>
        <div>
          <h4>Informatii</h4>
          <ul>
            <li>
              <Link href="#">Despre noi</Link>
            </li>
            <li>
              <Link href="#">Detalii Livrare</Link>
            </li>
            <li>
              <Link href="#">Politica de Confidentialitate</Link>
            </li>
            <li>
              <Link href="#">Termeni si Conditii</Link>
            </li>
            <li>
              <Link href="#">Metode de Plata</Link>
            </li>
            <li>
              <Link href="#">Politica de utilizare Cookie-uri</Link>
            </li>
            <li>
              <Link href="#">Politica de Retur</Link>
            </li>
          </ul>
        </div>
        <div>
          <h4>Informatii cont</h4>
          <ul>
            <li>
              <Link href="#">Contul meu</Link>
            </li>
            <li>
              <Link href="#">Istoricul comenzilor</Link>
            </li>
            <li>
              <Link href="#">Newsletter</Link>
            </li>
          </ul>
        </div>
        <div>
          <h4>Extra</h4>
          <ul>
            <li>
              <Link href="#">Contact</Link>
            </li>
            <li>
              <Link href="#">Retururi</Link>
            </li>
            <li>
              <Link href="#">Producatori</Link>
            </li>
            <li>
              <Link href="#">Oferte</Link>
            </li>
          </ul>
        </div>
        <div className={styles.newsletter}>
          <h4>Newsletter</h4>
          <div className={styles.subscribe}>
            <input type="email" placeholder="Adresa de email" />
            <button>
              <span>📧</span> Trimite
            </button>
          </div>
        </div>
      </div>

      <div className={styles.bottom}>
        <Image src="/logo.svg" alt="Roata Way" width={160} height={32} />
        <p>© Roata Way 2025</p>
      </div>
    </footer>
  );
}
