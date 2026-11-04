
import Carousel from '../Components/Carousel';

function Reviews() {
  const slides = [
    {
      image: '/jarcandle.jpg',
      badge: '✦ What People Say ✦',
      title: 'Loved by our customers',
      subtitle: 'Real experiences, kind words, and glowing feedback from our community.',
      alt: 'Jar Candle'
    },
    {
      image: '/gypset.jpg',
      badge: '✦ What People Say ✦',
      title: 'Loved by our customers',
      subtitle: 'Real experiences, kind words, and glowing feedback from our community.',
      alt: 'Gypsum Set'
    },
    {
      image: '/candlebook.jpg',
      badge: '✦ What People Say ✦',
      title: 'Loved by our customers',
      subtitle: 'Real experiences, kind words, and glowing feedback from our community.',
      alt: 'Candle Book'
    }
  ];
 
  
  const reviews = [
    {
      id: 1,
      image: '/girl.jpg',
      stars: 5,
      text: '"Absolutely love my Amber & Oud candle! The scent is rich and lasts for hours. The craftsmanship is evident in every detail."',
      author: '— Sarah M.'
    },
    {
      id: 2,
      image: '/girl1.jpg',
      stars: 5,
      text: '"The gypsum pieces are stunning! They add such a unique texture to my living room wall. I get compliments every time someone visits."',
      author: '— Carole L.'
    },
    {
      id: 3,
      image: '/girl3.jpg',
      stars: 5,
      text: '"The candle bouquet is absolutely beautiful! The arrangement is so thoughtful and the scent is divine. It\'s become my favorite gift to give."',
      author: '— Reem R.'
    },
    {
      id: 4,
      image: '/girl3.jpg',
      stars: 5,
      text: '"You can feel the care put into every piece. My candle bouquet was almost too beautiful to light!"',
      author: '— Karen N.'
    },
    {
      id: 5,
      image: '/girl.jpg',
      stars: 5,
      text: '"Absolutely in love with my candle set! The scent fills the room beautifully, and the craftsmanship is stunning."',
      author: '— Reine R.'
    }
  ];
 
  return (
    <>
      
      
 
    
      <Carousel slides={slides} />
 
      
      <section className="reviews-section bg-white mb-5 mt-5">
        <div className="container">
 
          
          <div className="text-center mb-5 mt-5">
            <span className="section-label">Customer Reviews</span>
            <h2 className="section-title">What Our Customers Say</h2>
          </div>
          
         
          <div className="row g-4">
            
           
            {reviews.map((review) => (
              <div key={review.id} className="col-md-6 col-lg-4">
                <div className="card-review h-100">
                  
                 
                  <div 
                    className="rounded-circle" 
                    style={{ width: '60px', height: '60px' }}
                  >
                    <img 
                      src={review.image} 
                      className="review-product-img" 
                      alt={review.author}
                    />
                  </div>
                  
                  
                  <div className="stars">
                    {'★'.repeat(review.stars)}
                  </div>
                  
               
                  <p>{review.text}</p>
                  
                  
                  <p style={{ 
                    fontSize: '14px', 
                    fontWeight: '600', 
                    color: 'var(--amber)' 
                  }}>
                    {review.author}
                  </p>
                  
                </div>
              </div>
            ))}
 
          </div>
 
        </div>
      </section>
 
      
     
    </>
  );
}
 
export default Reviews;