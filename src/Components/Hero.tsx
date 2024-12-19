
import React from 'react';

const Hero = () => {
  return (
    <section

      className="hero"
      style={{
        backgroundImage: "url(/backgroundimage.jpg)",
        backgroundSize: "cover",
        position:"relative",
      }}
    >
      <div className='content-center'>      
      <h1>Welcome To SportX</h1>
      <p>Experience Feel Greatest With New Collection</p>
      <button>Shop Now</button>
</div>
    </section>
  );
};

export default Hero;
