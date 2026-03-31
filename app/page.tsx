// Importamos el nuevo componente fiel al diseño
import ChanelProductCard from '../app/components/ChanelProductCard';

export default function Home() {
  return (
    // Centramos la tarjeta en la pantalla con un fondo beige claro
    <main style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      minHeight: '100vh',
      backgroundColor: '#f6f1ec', // Un color beige claro para el fondo
      padding: '20px'
    }}>
      <ChanelProductCard />
    </main>
  );
}