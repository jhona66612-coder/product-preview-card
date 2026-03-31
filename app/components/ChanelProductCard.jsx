// app/components/ChanelProductCard.jsx
import Image from 'next/image';

// 1. Importamos el archivo CSS Module que acabamos de crear
import styles from './ChanelProductCard.module.css';

import productImageMobile from '../images/image-product-mobile.jpg';
import cartIcon from '../images/icon-cart.svg';

export default function ChanelProductCard() {
  return (
    // 2. Usamos styles.card en lugar del texto fijo "card"
    <div className={styles.card}>
      
      <div className={styles.imageContainer}>
        <Image 
          src={productImageMobile} 
          alt="Perfume Chanel Gabrielle Essence"
          fill 
          style={{ objectFit: 'cover' }} // Next/Image aún requiere esto en línea a veces por su funcionamiento interno
          priority={true} 
        />
      </div>

      <div className={styles.content}>
        
        <p className={styles.category}>Perfume</p>

        <h1 className={styles.title}>Gabrielle Essence Eau De Parfum</h1>

        <p className={styles.description}>
          A floral, solar and voluptuous interpretation composed by Olivier Polge, Perfumer-Creator for the House of CHANEL.
        </p>

        <div className={styles.priceContainer}>
          <p className={styles.currentPrice}>$149.99</p>
          <p className={styles.originalPrice}>$169.99</p>
        </div>

        <button className={styles.button}>
          <Image 
            src={cartIcon} 
            alt="Icono de carrito" 
            width={16} 
            height={16} 
          />
          Add to Cart
        </button>
      </div>
    </div>
  );
}