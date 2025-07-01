import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import img1 from '../Images/img1.jpeg';
import img2 from '../Images/img2.jpeg';
import img3 from '../Images/img3.jpeg';
import img4 from '../Images/img4.jpeg';

function HeroSection() {
  const images = [img1, img2, img3, img4];

  return (
    <div className="relative w-full bg-pink-100">
      <div className="max-w-screen-xl mx-auto overflow-hidden rounded-xl shadow-lg">
        <Carousel
          autoPlay
          infinite
          autoPlaySpeed={3000}
          arrows={false}
          showDots={false}
          responsive={{
            all: { breakpoint: { max: 4000, min: 0 }, items: 1 },
          }}
          containerClass="w-full"
          itemClass="w-full"
        >
          {images.map((img, index) => (
            <div
              key={index}
              className="w-full h-[400px] bg-white flex items-center justify-center"
            >
              <img
                src={img}
                alt={`slide-${index + 1}`}
                className="h-full object-contain transition-all duration-500 p-4"
              />
            </div>
          ))}
        </Carousel>
      </div>

      {/* Center Overlay Text */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white bg-opacity-80 px-6 py-4 rounded-xl shadow-md text-center backdrop-blur-sm z-10">
        <h1 className="text-4xl font-bold text-pink-700 drop-shadow">PCOSEase</h1>
        <p className="text-lg text-gray-700">Your Simple PCOS Wellness Companion 💖</p>
      </div>
    </div>
  );
}

export default HeroSection;
