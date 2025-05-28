import React from "react";
import styles from "./Home.module.css";

const MAX_ITEMS = 4;

const SliderPanel = ({ groupedProducts = [], onRemove, onAdd }) => {
  // Плоский список товаров
  const items = groupedProducts.flat().slice(0, MAX_ITEMS);

  // Создание массива из 4 слотов: товары + placeholder
  const padded = [];
  for (let i = 0; i < MAX_ITEMS; i++) {
    if (i < items.length) {
      padded.push({ ...items[i], __realIndex: i });
    } else {
      padded.push({ placeholder: true, __realIndex: i });
    }
  }

  // Группировка по парам
  const grouped = [];
  for (let i = 0; i < padded.length; i += 2) {
    grouped.push(padded.slice(i, i + 2));
  }

  return (
    <div className={styles.sliderWrapper}>
      <div className={styles.sliderList}>
        {grouped.map((group, groupGroupIndex) => (
          <div key={groupGroupIndex} className={styles.sliderGroupBox}>
            <div className={styles.sliderGroup}>
              {group.map((product, itemIndexInGroup) => (
                <div key={itemIndexInGroup} className={styles.sliderItem}>
                  
                  {/* Кнопка удаления */}
                  {product.image && typeof product.__originalIndex === "number" && (
                    <button
                      className={styles.closeIcon}
                      onClick={(e) => {
                        e.stopPropagation();
                        onRemove(product.__originalIndex);
                      }}
                    />
                  )}

                  {/* Превью или плюс */}
                  <div
                    className={styles.thumbBox}
                    onClick={product.placeholder ? onAdd : undefined}
                    style={product.placeholder ? { cursor: "pointer" } : undefined}
                  >
                    {product.placeholder ? (
                      <img
                        src="/icons/add.svg"
                        alt="Add"
                        className={styles.sliderThumb}
                      />
                    ) : product.image ? (
                      <img
                        src={product.image}
                        alt="Thumb"
                        className={styles.sliderThumb}
                      />
                    ) : null}
                  </div>
                </div>
              ))}
            </div>

            {/* Кнопка OK под парой */}
            <div className={styles.okIcon}></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SliderPanel;
