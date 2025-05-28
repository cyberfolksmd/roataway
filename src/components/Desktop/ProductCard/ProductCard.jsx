import React from "react";
import styles from "./ProductCard.module.css"; // путь адаптируй

const ProductCard = ({ product, showDiscount, onAdd }) => {
  const [mainPrice, decimalPart] = product.price.split(",");

  return (
    <div className={styles.card}>
      <div className={styles.imageWrapper}>
        <img src={product.image} alt="Wheel" className={styles.productImage} />
        <img src={product.icon} alt="icon" className={styles.icon} />
      </div>

      <p className={styles.title}>{product.name}</p>

      {showDiscount && (
        <div className={styles.pricing}>
          <div className={styles.oldPrice}>
            <span className={styles.oldPriceMain}>{product.oldPrice.split(",")[0]},</span>
            <span className={styles.oldPriceDecimal}>
              {product.oldPrice.split(",")[1]} {product.currency}
            </span>
          </div>
          <span className={styles.discount}>{product.discount}</span>
        </div>
      )}

      <div className={styles.price}>
        <span className={styles.priceMain}>{mainPrice},</span>
        <span className={styles.priceDecimal}>{decimalPart} {product.currency}</span>
      </div>

      <button className={styles.cartButton} onClick={onAdd}>Adaugă în coș</button>
    </div>
  );
};

export default ProductCard;
