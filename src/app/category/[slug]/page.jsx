"use client";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import ProductCard from "../../components/ProductCard";

const categoryMap = {
  "cauciucuri-bicicleta": "Cauciucuri bicicleta",
  "cauciucuri-motocicleta": "Cauciucuri motocicleta",
  "cauciucuri-atv": "Cauciucuri ATV",
  "cauciucuri-pentru-utilaje": "Cauciucuri pentru utilaje",
  "camere-de-aer": "Camere de aer",
};

export default function CategoryPage() {
  const { slug } = useParams();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  const categoryName = categoryMap[slug];

  useEffect(() => {
    if (!categoryName) return;

    const fetchProducts = async () => {
      try {
        const res = await fetch(
          `https://admin.magicprice.ro/api/v1/products/by-category?category=${encodeURIComponent(
            categoryName,
          )}`,
          {
            headers: {
              "x-api-key": "special_secret",
              "Content-Type": "application/json",
            },
            cache: "no-store",
          },
        );
        const data = await res.json();
        setProducts(data.data || []);
      } catch (err) {
        console.error("Error fetching products:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, [categoryName]);

  if (!categoryName) return <p>Invalid category</p>;

  return (
    <main>
      <h1>{categoryName}</h1>
      {loading ? (
        <p>Loading products...</p>
      ) : products.length === 0 ? (
        <p>No products found.</p>
      ) : (
        <div style={{ display: "flex", flexWrap: "wrap", gap: "1rem" }}>
          {products.map((product) => (
            <ProductCard key={product._id} product={product} />
          ))}
        </div>
      )}
    </main>
  );
}
