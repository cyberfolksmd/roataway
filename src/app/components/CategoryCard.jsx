export default function CategoryCard({ category }) {
  return (
    <div
      style={{ border: "1px solid #ddd", padding: "1rem", margin: "1rem 0" }}
    >
      <h3>{category.name}</h3>
    </div>
  );
}
