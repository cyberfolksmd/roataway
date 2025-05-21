import Image from "next/image";
import Link from "next/link";

export default function ProductCard({ product }) {
  return (
    <Link
      href={`/product/${product._id}`}
      style={{ textDecoration: "none", color: "inherit" }}
    >
      <div
        style={{
          border: "1px solid #ccc",
          padding: "1rem",
          borderRadius: "8px",
          width: "250px",
          textAlign: "center",
          cursor: "pointer",
        }}
      >
        {product.gallery?.[0] && (
          <Image
            src={`https://admin.magicprice.ro/${product.gallery[0].replace(/^\/+/, "")}`}
            alt={product.name}
            width={200}
            height={200}
            style={{ objectFit: "contain" }}
          />
        )}
        <h3 style={{ marginTop: "1rem" }}>{product.name}</h3>
        <p style={{ fontWeight: "bold", color: "#444" }}>
          {product.price?.silver} RON
        </p>
      </div>
    </Link>
  );
}
