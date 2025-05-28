import React from "react";
import styles from "./Product.module.css";
import DesktopHeader from "@/components/Desktop/Header/DesktopHeader";
import DesktopFooter from "@/components/Desktop/Footer/DesktopFooter";

const ProductPage = () => {
  return (
    <>
      <DesktopHeader />
      <div className={styles.container}>
        <div className={styles.mainSection}>
          <div className={styles.imageSection}>
            <img src="/wheel.png" alt="Anvelopa ATV Vee Rubber" className={styles.productImage} />
          </div>
          <div className={styles.detailsSection}>
            <h1 className={styles.productTitle}>Anvelopa ATV Vee Rubber, 23X11-10 KAWASAKI MULE, VRM-400 6PR, Tubeless</h1>
            <p className={styles.stock}><span>•</span> in stoc</p>
            <p className={styles.delivery}>• Livrare estimata in BUCURESTI pe <strong>22 februarie</strong></p>
            <p className={styles.freeDelivery}>• Livrare Gratuita de la 700 lei</p>
            <p className={styles.price}>584,25 RON</p>
            <div className={styles.codeBrand}>
              <span>Cod produs: MICH4160</span>
              <span>Marca: Vee Rubber</span>
            </div>
            <div className={styles.actions}>
              <select className={styles.quantity}>
                <option value="1">1</option>
              </select>
              <button className={styles.addToCart}>Adauga in cos</button>
            </div>
            <p className={styles.phone}>📞 Comenzi En-Gross: 0747 20 90 40</p>
            <div className={styles.deliveryOptions}>
              <div>
                <h4>MODALITATI DE LIVRARE</h4>
                <p>🚚 Livrare prin curier</p>
                <p>🏪 Ridicare din magazin</p>
              </div>
              <div>
                <h4>MODALITATI DE PLATA</h4>
                <p>💵 Plata la livrare</p>
                <p>💳 Plata cu cardul</p>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.accordions}>
          <details><summary>Descriere</summary><p>Descriere produs...</p></details>
          <details><summary>Specificatii tehnice</summary><p>Detalii tehnice...</p></details>
          <details><summary>Livrare si plata</summary><p>Info despre livrare si plata...</p></details>
        </div>

        <div className={styles.tags}>
          <span>TAG:</span>
          <button>CAUCIUC ATV</button>
          <button>ALL ROAD</button>
          <button>SNOW</button>
        </div>

        <section className={styles.relatedProductsSection}>
          <h2>Produse de aceeasi dimensiune</h2>
          <div className={styles.grid}>
            {[...Array(5)].map((_, i) => (
              <div className={styles.card} key={i}>
                <img src="/wheel.png" alt="Wheel" className={styles.productImage} />
                <p className={styles.title}>Anvelopa ATV Vee Rubber, 23X11-10 KAWASAKI MULE, VRM-400 6PR, Tubeless</p>
                <p className={styles.priceFull}>584,25 RON</p>
                <button className={styles.cartButton}>Adaugă în coș</button>
              </div>
            ))}
          </div>
        </section>

        <section className={styles.relatedProductsSection}>
          <h2>Din aceeasi categorie</h2>
          <div className={styles.grid}>
            {[...Array(5)].map((_, i) => (
              <div className={styles.card} key={i}>
                <img src="/wheel.png" alt="Wheel" className={styles.productImage} />
                <p className={styles.title}>Anvelopa ATV Vee Rubber, 23X11-10 KAWASAKI MULE, VRM-400 6PR, Tubeless</p>
                <p className={styles.priceFull}>584,25 RON</p>
                <button className={styles.cartButton}>Adaugă în coș</button>
              </div>
            ))}
          </div>
        </section>
      </div>
      <DesktopFooter />
    </>
  );
};

export default ProductPage;

