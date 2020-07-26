import React from 'react';

const Hero = ({ src, message }) => {
  return (
    <div className="relative">
      <img src={src} />
      <div className="absolute bottom-0 right-0 bg-orange-500 p-3 text-orange-100 font-bold uppercase">
        {message}
      </div>
    </div>
  );
};

export default Hero;
