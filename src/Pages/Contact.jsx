
import Carousel from '../Components/Carousel';

function Contact() {
  const slides = [

    {
      image: '/jarcandle.jpg',
      alt: 'Candle',
      badge: '✦ Get in Touch - Wed Love to Hear from You- ✦',
      title: 'Contact Us',
      subtitle: 'Questions, custom orders, or just want to say hello? Drop us a message.',

    },

    {
      image: '/gypset.jpg',
      alt: 'Gypsum',
      badge: '✦ Get in Touch - Wed Love to Hear from You - ✦',
      title: 'Contact Us!',
      subtitle: 'Questions, custom orders, or just want to say hello? Drop us a message.',

    },

  ];

  return (

    <>
     
      <Carousel slides={slides} />
      <section className="section-pad bg-white  mt-5">


        <div className="container">



          <form>

            <input
              type="email"
              placeholder="Email"
              className="form-control mb-3"
            />

            <textarea
              className="form-control mb-3"
              rows="5"
              placeholder="Message"
            ></textarea>

            <button className="btn btn-dark">
              Send
            </button>

          </form>

          <div className="col-lg-5">
            <div className="contact-info-wrapper">
              <h2 className=" mb-4">Our <em>Info</em></h2>

              <div >
                <h4>📧 Email</h4>
                <p><a href="mailto:candleandgypsumartjj@gmail.com">candleandgypsumartjj@gmail.com</a></p>
              </div>

              <div >
                <h4>📱 WhatsApp</h4>
                <p>+961 71 554 070</p>
              </div>

              <div >
                <h4>📍 Location</h4>
                <p>Aley, Mount Lebanon</p>
              </div>

              <div >
                <h4>📷 Instagram</h4>
                <p><a href="https://www.instagram.com/candlesgypsumart?igsh=MW03aGtzbZ4e-Wg0cg%3D%3D&utm_-source=qr" target="_blank">@candlesgypsumart</a></p>
              </div>

              <div >
                <h4>🕐 Studio Hours</h4>
                <p>Mon-Fri: 10am - 6pm</p>

              </div>
            </div>
          </div>
        </div>



      </section>

      
    </>
  );
}

export default Contact;