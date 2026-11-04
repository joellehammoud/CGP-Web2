import React from 'react';

import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import Carousel from '../Components/Carousel';

function Home() {

  const slides = [

    {
      image: '/jarcandle.jpg',
      alt: 'Candle',
      badge: '✦ Handcrafted in Lebanon ✦',
      title: 'Candle <em>&amp;</em> Gypsum <br /><em>Artistry</em>',
      subtitle:
        'Where light meets sculpted earth.',
    },

    {
      image: '/gypset.jpg',
      alt: 'Gypsum',
      badge: '✦ Luxury Handmade Pieces ✦',
      title: 'Elegant <em>Gypsum</em> Collection',
      subtitle:
        'Handcrafted artistic gypsum creations.',
    },

  ];

  return (

    <>
    
      
      <Carousel slides={slides} />
      
      
    </>

  );
}

export default Home;