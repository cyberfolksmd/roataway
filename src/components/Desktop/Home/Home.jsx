import React, { useState, useRef } from "react";
import styles from "./Home.module.css";
import SliderPanel from "./SliderPanel";
import MainBannerSlider from '../Slider/MainBannerSlider';
import DesktopHeader from "@/components/Desktop/Header/DesktopHeader";
import DesktopFooter from "@/components/Desktop/Footer/DesktopFooter";
const productsRecomandate = [
  {
    name: "Anvelopa MICHELIN Vii Rubber, 28X11-10 KAWASAKI MULE, VRM-400 6PR, Tubeless",
    price: "584,25",
    oldPrice: "645,00",
    discount: "-85 LEI",
    image: "/wheel.png",
    icon: "/icons/reverse.png",
    currency: "RON",
  },
  {
    name: "Anvelopa ATV Vee Rubber, 23X11-10 KAWASAKI MULE",
    price: "584,25",
    oldPrice: "645,00",
    discount: "-85 LEI",
    image: "/wheel.png",
    icon: "/icons/reverse.png",
    currency: "RON",
  },
  {
    name: "Anvelopa Vee Rubber, 23X11-10 KAWASAKI MULE",
    price: "584,25",
    oldPrice: "645,00",
    discount: "-85 LEI",
    image: "/wheel.png",
    icon: "/icons/reverse.png",
    currency: "RON",
  },
  {
    name: "Anvelopa ATV Rubber, 23X11-10 KAWASAKI MULE",
    price: "584,25",
    oldPrice: "645,00",
    discount: "-85 LEI",
    image: "/wheel.png",
    icon: "/icons/reverse.png",
    currency: "RON",
  },
];

const productsNoi = [
  {
    name: "Anvelopa ATV Vee Rubber, 23X11-10 KAWASAKI MULE, VRM-400 6PR, Tubeless",
    price: "584,25",
    oldPrice: "645,00",
    discount: "-85 LEI",
    image: "/wheel.png",
    icon: "/icons/reverse.png",
    currency: "MDL",
  },
  {
    name: "Anvelopa Vee Rubber, 23X11-10 KAWASAKI MULE",
    price: "584,25",
    oldPrice: "645,00",
    discount: "-85 LEI",
    image: "/wheel.png",
    icon: "/icons/reverse.png",
    currency: "MDL",
  },
  {
    name: "Anvelopa Rubber, 23X11-10 KAWASAKI MULE",
    price: "584,25",
    oldPrice: "645,00",
    discount: "-85 LEI",
    image: "/wheel.png",
    icon: "/icons/reverse.png",
    currency: "MDL",
  },
  {
    name: "Anvelopa ATV Rubber, 23X11-10 KAWASAKI MULE",
    price: "584,25",
    oldPrice: "645,00",
    discount: "-85 LEI",
    image: "/wheel.png",
    icon: "/icons/reverse.png",
    currency: "MDL",
  },
];

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

      {product.currency === "RON" ? (
        <div className={styles.price}>
          <span className={styles.priceFull}>{product.price} RON</span>
        </div>
      ) : (
        <div className={styles.price}>
          <span className={styles.priceMain}>{mainPrice},</span>
          <span className={styles.priceDecimal}>{decimalPart} {product.currency}</span>
        </div>
      )}

      <button className={styles.cartButton} onClick={onAdd}>Adaugă în coș</button>
    </div>
  );
};

const Home = () => {
  const [sliderProducts, setSliderProducts] = useState([]);
  const nextId = useRef(0);

  const handleAddToSlider = () => {
    setSliderProducts((prev) => {
      if (prev.length >= 4) return prev;
      return [...prev, { ...productsRecomandate[0], __id: nextId.current++ }];
    });
  };

  const handleRemoveFromSlider = (__idToRemove) => {
    setSliderProducts((prev) => prev.filter((p) => p.__id !== __idToRemove));
  };

  const groupedSliderProducts = [];
  for (let i = 0; i < sliderProducts.length; i += 2) {
    const group = sliderProducts.slice(i, i + 2).map((item) => ({
      ...item,
      __originalIndex: item.__id,
    }));
    groupedSliderProducts.push(group);
  }

  return (
    <div className={styles.container}>
      <section className={styles.heroWrapper}>
        <div className={styles.mainBannerWrapper}>
  <MainBannerSlider />
</div>

        <div className={styles.contentWithSlider}>
          <div className={styles.contentBelowBanner}>
            {/* === Sidebar слева === */}
            <aside className={styles.sidebar}>
              <div className={styles.sidebarForm}>
              <h3 className={styles.filterSectionTitle}>Cauciucuri bicicleta:</h3>
               <div className={styles.filterGrid}>
  <div className={styles.filterField}>
    <label>Diametru roata</label>
    <select>
      <option value="20">20</option>
      <option value="24">24</option>
      <option value="26">26</option>
      <option value="28">28</option>
    </select>
  </div>

  <div className={styles.filterField}>
    <label>Latime roata</label>
    <select>
      <option value="1.5">1.5</option>
      <option value="1.75">1.75</option>
      <option value="2.0">2.0</option>
      <option value="2.25">2.25</option>
    </select>
  </div>

  <div className={styles.filterField}>
    <label>Tip</label>
    <select>
      <option value="mtb">Mountain Bike</option>
      <option value="city">City</option>
      <option value="road">Road</option>
    </select>
  </div>

  <div className={styles.filterField}>
    <label>Alege Marca</label>
    <select>
      <option value="vee">VeeTire</option>
      <option value="schwalbe">Schwalbe</option>
      <option value="continental">Continental</option>
    </select>
  </div>
</div>

                <button className={styles.searchButton}>Cauta</button>
              </div>
              <div className={styles.sidebarBanner}>
                <img src="/photo/main/ver.png" alt="Vertical Banner" className={styles.verticalBanner} />
              </div>
            </aside>

            {/* === Правая часть: фильтры + товары === */}
            <div>
              <div className={styles.filterBar}>
                <div className={styles.filterGroup}>
                  <label htmlFor="sort">Sortare dupa:</label>
                  <select id="sort" name="sort">
                    <option value="default">Implicit</option>
                    <option value="price-asc">Pret crescator</option>
                    <option value="price-desc">Pret descrescator</option>
                  </select>
                </div>

                <div className={styles.filterGroup}>
                  <label htmlFor="perPage">Produse pe pagina:</label>
                  <select id="perPage" name="perPage">
                    <option value="10">10</option>
                    <option value="20">20</option>
                    <option value="30" selected>30</option>
                    <option value="40">40</option>
                  </select>
                </div>
              </div>

              <section className={styles.productsSection}>
                <h2 className={styles.sectionTitleReco}>Produse recomandate</h2>
                <div className={styles.grid}>
                  {productsRecomandate.map((prod, i) => (
                    <ProductCard key={i} product={prod} showDiscount={false} onAdd={handleAddToSlider} />
                  ))}
                </div>
              </section>

              <section className={styles.productsSection}>
                <h2 className={styles.sectionTitlePro}>Produse noi</h2>
                <div className={styles.grid}>
                  {productsNoi.map((prod, i) => (
                    <ProductCard key={i} product={prod} showDiscount={true} onAdd={handleAddToSlider} />
                  ))}
                </div>
              </section>
            </div>
          </div>

          {/* === Слайдер справа === */}
          <div className={styles.sliderWrapper}>
            <SliderPanel
              groupedProducts={groupedSliderProducts}
              onAdd={handleAddToSlider}
              onRemove={handleRemoveFromSlider}
            />
          </div>
        </div>
      </section>

      <section className={styles.bottomBanner}>
        <img
          src="/photo/main/cosmo.png"
          srcSet="/photo/main/cosmo@2x.png 2x, /photo/main/cosmo@3x.png 3x"
          alt="Cosmo Banner"
        />
      </section>
    </div>
  );
};

export default Home;
