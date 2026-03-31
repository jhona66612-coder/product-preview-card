export default function ProductCard() {
  return (
    <div style={{ border: '1px solid #ccc', padding: '20px', borderRadius: '8px', maxWidth: '300px', backgroundColor: 'white' }}>
      <h2 style={{ fontSize: '20px', margin: '0 0 10px 0' }}>Perfume de Lujo</h2>
      <p style={{ color: '#555', lineHeight: '1.5' }}>
        Una fragancia floral y elegante, perfecta para cualquier ocasión especial.
      </p>
      <p style={{ fontSize: '24px', fontWeight: 'bold', color: '#1a1a1a' }}>
        $149.99
      </p>
      <button style={{ backgroundColor: '#2d3748', color: 'white', padding: '12px', width: '100%', border: 'none', borderRadius: '5px', cursor: 'pointer', fontWeight: 'bold' }}>
        Añadir al carrito
      </button>
    </div>
  );
}