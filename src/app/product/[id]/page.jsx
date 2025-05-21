import Image from "next/image";

export default async function ProductDetailPage({ params }) {
  const { id } = params;

  const res = await fetch(
    `https://admin.magicprice.ro/api/v1/products/public/${id}`,
    {
      headers: {
        "x-api-key": "special_secret",
      },
      cache: "no-store",
    },
  );

  if (!res.ok) {
    return <p>Product not found</p>;
  }

  const data = await res.json();
  const product = data.data;

  return (
    <main style={{ padding: "2rem" }}>
      <h1>{product.name}</h1>
      {product.gallery?.[0] && (
        <Image
          src={`https://admin.magicprice.ro/${product.gallery[0].replace(/^\/+/, "")}`}
          alt={product.name}
          width={400}
          height={400}
          style={{ objectFit: "contain" }}
        />
      )}
      <p style={{ marginTop: "1rem", fontSize: "1.2rem" }}>
        <strong>Price:</strong> {product.price?.silver} RON
      </p>
      <p>
        <strong>Description:</strong> {product.description}
      </p>
      <p>
        <strong>SKU:</strong> {product.sku}
      </p>
      <p>
        <strong>Category:</strong> {product.category_name}
      </p>
    </main>
  );
}
