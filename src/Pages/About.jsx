
import Carousel from '../Components/Carousel';
function About() {



     const slides = [

    {
      image: '/jarcandle.jpg',
      alt: 'Candle',
      badge: '✦ HANDCRAFTED WITH LOVE ✦ ',
      title: 'Our Story, Our Passion',
      subtitle: 'Every creation begins with a passion for art, creativity, and the beauty of handmade details.',

    },

    {
      image: '/gypset.jpg',
      alt: 'Gypsum',
      badge: '✦  MADE WITH CARE IN LEBANON ✦',
      title: 'Crafting Beauty, Creating Memories',
      subtitle: 'From elegant candles to unique gypsum pieces',

    },

  ];

  return (

    <>
      

      <Carousel slides={slides} />

      <section className="section-pad bg-white">
        <div className="container">
          <div className="row g-5 align-items-center">


            <div className="col-lg-6">
              <span className="section-label">The Beginning</span>
              <h2 className="section-title mb-4">Craft Born from <em>Passion</em></h2>

              <p style={{ color: 'var(--text-muted)', fontSize: '1rem', lineHeight: '1.9', marginBottom: '1.5rem' }}>
                J&amp;J was founded by Jana and Joelle — two sisters who grew up watching
                their grandmother mold gypsum with her hands and fill the house with
                handmade candles every winter.
              </p>

              <p style={{ color: 'var(--text-muted)', fontSize: '1rem', lineHeight: '1.9', marginBottom: '1.5rem' }}>
                What started as a lockdown hobby in 2021 grew into Lebanon's most loved
                boutique candle and gypsum art brand. Every piece leaves our hands with
                the same care and attention as the very first one we ever made.
              </p>

              <p style={{ color: 'var(--text-muted)', fontSize: '1rem', lineHeight: '1.9' }}>
                We source only natural soy wax, premium fragrance oils, and professional-grade
                gypsum — because quality is something our customers deserve, not something
                we ever compromise on.
              </p>
            </div>


            <div className="col-lg-6">
              <div className=" about-quote-card">
                <p style={{ fontFamily: "'Playfair Display', serif", fontStyle: 'italic', fontSize: '15px', lineHeight: '1.6' }}>
                  "We don't just make things — we craft moments that linger long
                  after the candle burns down and the art fades into the wall."
                </p>
                <p className=" mb-0">— Jana &amp; Joelle, Founders</p>
              </div>
            </div>

          </div>
        </div>
      </section>

      
    </>

  );
}

export default About;
