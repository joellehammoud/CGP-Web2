import React from 'react';
import { Link } from 'react-router-dom';
import '../style.css';
function Carousel({slides}) {
    return(
    <section className="car-image">
        <div id="carousel" className="carousel slide carousel-fade" data-bs-ride="carousel" data-bs-interval="2000">
              <div className="carousel-indicators">
               {slides.map((slide, index) => (
            <button
              key={index}
              type="button"
              data-bs-target="#carousel"
              data-bs-slide-to={index}
              className={index === 0 ? 'active' : ''}
              aria-label={`Slide ${index + 1}`}
            ></button>
          ))}
              </div>
            <div className="carousel-inner">
          {slides.map((slide, index) => (
            <div 
              key={index} 
              className={`carousel-item ${index === 0 ? 'active' : ''}`}
            >
              
              <img 
                src={slide.image} 
                className="d-block w-100" 
                alt={slide.alt || `Slide ${index + 1}`} 
              />
              
             
              <div className="carousel-overlay"></div>
              
              
              <div className="container carousel-caption-design">
                <span className="carousel-top">{slide.badge}</span>
                
               
                <h1 
                  className="caro-title" 
                  dangerouslySetInnerHTML={{ __html: slide.title }}
                ></h1>
                
                <p className="carousel-subtitle">{slide.subtitle}</p>
                
               
                {slide.buttons && (
                  <div className="caro-buttons">
                    {slide.buttons.map((button, btnIndex) => (
                      <Link 
                        key={btnIndex}
                        to={button.link} 
                        className={button.className}
                      >
                        {button.text}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
 

        <button 
          className="carousel-control-prev" 
          type="button" 
          data-bs-target="#carousel" 
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        
        <button 
          className="carousel-control-next" 
          type="button" 
          data-bs-target="#carousel" 
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
        

        </div>
    </section>
    );
}
export default Carousel;