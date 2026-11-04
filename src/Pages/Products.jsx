
import Carousel from '../Components/Carousel';
import ProductCard from '../Components/ProductCard';
function Products() {
  const slides = [

    {
      image: '/jarcandle.jpg',
      alt: 'Candle',
      badge: '✦ Handcrafted in Lebanon ✦',
      title: 'Candle <em>&amp;</em> Gypsum <br /> Products!',
      subtitle:
        'Explore our collection of hand-poured candles and bespoke gypsum creations, crafted to make every space feel special.',

    },

    {
      image: '/gypset.jpg',
      alt: 'Gypsum',
      badge: '✦ Luxury Handmade Pieces ✦',
      title: 'Elegant <em>Gypsum</em> Collection',
      subtitle:
        'Discover our exquisite range of handmade gypsum pieces, each one a testament to artisanal excellence.',
    },

  ];


  const products = [
    {
      id: 1,
      tag: 'Bestseller',
      image: '/Amber.jpg',
      type: 'Hand-Poured Candle',
      name: 'Amber & Oud',
      description:
        'Rich oriental warmth — premium soy wax infused with pure oud resin and warm amber accord. Burns 45+ hours.',
      price: 28
    },
    {
      id: 2,
      tag: 'Popular',
      image: '/gypset.jpg',
      type: 'Gypsum',
      name: 'Gypsum Set',
      description:
        'Handmade gypsum set — 3 unique pieces that add depth and texture to any space. Custom sizes available.',
      price: 27
    },
    {
      id: 3,
      tag: 'Special',
      image: '/jarcandle.jpg',
      type: 'Gypsum and Candle Set',
      name: 'Jar with Flower Candles 🌸',
      description:
        'A little jar filled with blooming beauty. These flower candles are lovingly handcrafted to create a cozy, romantic glow.',
      price: 12
    },
    {
      id: 4,
      tag: 'New Arrival',
      image: '/cactus.jpg',
      type: 'Gypsum',
      name: 'Tray with Candles',
      description:
        'A beautifully arranged candle tray that brings instant coziness to your space. Perfect for coffee tables, bedside corners, or gifting.',
      price: 14
    }
  ];
  return (

    
      
     <>
      <Carousel slides={slides} />

      <section className="section-pad bg-cream gap-5">
        <div className="container">

          <div className="text-center mb-5">
            <span className="section-label">
              Our Products
            </span>

            <h2 className="section-title">
              Crafted with <i>intention</i>
            </h2>

            <p
              style={{
                color: 'var(--text-muted)',
                maxWidth: '480px',
                margin: '12px auto 0',
                fontSize: '15px',
                lineHeight: '1.8'
              }}
            >
              Each piece is made to order — unique,
              personal, and lasting.
            </p>
          </div>

          <div className="row g-4">
            {products.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
              />
            ))}
          </div>

        </div>
      </section>
    </>

   
  );
}

export default Products;