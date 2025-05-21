export default function CartItem({ item }) {
  return (
    <div style={{ borderBottom: "1px solid #ccc", padding: "0.5rem 0" }}>
      {item.name} x {item.quantity}
    </div>
  );
}
